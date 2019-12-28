const { Product } = require( "../models/product" );
const { Order } = require( "../models/order" );

exports.addProduct = ( req, res ) => {
  const { role, userId } = req.params;
  const { _id } = req.user;
  const { title, description, price } = req.body;
  if ( !role ) return res.status( 400 ).json( { error: "User role is not known" } );
  if ( !userId ) return res.status( 400 ).json( { error: "Unknown user" } );
  if ( userId !== _id ) return res.status( 400 ).json( { error: "You are a malicious user. Please login properly" } );
  if ( !title || !description || !price ) return res.status( 400 ).json( { error: "Incomplete product data" } );
  let product = new Product( {
    title,
    price,
    description,
    userId: _id
  } );
  product.save()
    .then( prod => {
      if ( !prod ) return res.status( 400 ).json( { error: "Could not create product. Try again" } );
      res.json( prod );
    } )
    .catch( err => {
      res.status( 400 ).json( { error: err.message } );
    } );
}

exports.getProducts = ( req, res ) => {
  Product.find( {} )
    .populate("userId", "name email")
    .then( product => {
      if ( !product ) return res.status( 400 ).json( { error: "Product list empty" } );
      res.json( product );
    } )
    .catch( err => {
      res.status( 400 ).json( { error: err.message } );
    } );
}

exports.getProduct = ( req, res ) => {
  const { productId } = req.params;
  if ( !productId ) return res.status( 400 ).json( { error: "Invalid parameter" } );
  Product.findById( { _id: productId } )
    .then( product => {
      if ( !product ) return res.status( 400 ).json( { error: "Product not found" } );
      res.json( product );
    } )
    .catch( err => {
      res.status( 400 ).json( { error: err.message } );
    } );
}

/**
 * Gets the profile photo of an agent
 */
exports.photo = ( req, res, next ) => {
  const { product } = req.params;

  Product.findById( { _id: prodcutId } )
    .then( product => {
      if ( !product ) return res.status( 400 ).json( { error: "Product not found" } );
      res.set( "Content-Type", user.photo.ContentType );
      return res.send( user.photo.data );
    } )
    .catch( err => {
      res.json( { error: err.message } );
    } )
}

/**
 * Uploads profile photos
 */
exports.uploadPhoto = ( req, res ) => {
  const { productId } = req.params;
  // Assigned the path to a new constant @photo
  const photo = req.file.path;
  Product.findByIdAndUpdate( { _id: productId } )
    .then( product => {
      if ( !product ) return res.status( 400 ).json( { error: "Can not find product" } );
      product.imageUrl.data = fs.readFileSync( req.file.path );
      product.imageUrl.contentType = "image/jpg";
      product.save();
      res.json( product );
    } )
    .catch( err => {
      res.json( { error: err.message } );
    } );
}

exports.postToCart = ( req, res ) => {
  const { productId } = req.params;
  if ( !productId ) return res.status( 400 ).json( { error: "Product must have an ID" } );
  Product.findById( { _id: productId } )
    .then( product => {
      if ( !product ) return res.status( 400 ).json( { error: "Product not found" } );
      return req.user.addToCart( product );
    } )
    .catch( err => {
      res.status( 400 ).json( { error: err.message } );
    } );
}

exports.getCart = ( req, res ) => {
  req.user
    .populate( "cart.items.productId" )
    .execPopulate()
    .then( user => {
      if ( !user ) return res.status( 400 ).json( { error: "Cart is empty" } );
      const products = user.cart.items
      res.json( products );
    } )
    .catch( err => {
      res.status( 400 ).json( { error: err.message } );
    } );
}

exports.deleteFromCart = ( req, res ) => {
  const { productId } = req.body;
  if ( !productId ) return res.status( 400 ).json( { error: "Can not delete cart item" } );
  req.user
    .removeFromCart( productId )
    .then( item => {
      if ( !item ) return res.status( 400 ).json( { error: "Request failed. Please try again" } );
      res.json( item );
    } )
    .catch( err => {
      res.status( 400 ).json( { error: err.message } );
    } );
}

exports.postOrder = ( req, res ) => {
  req.user
    .populate( "cart.items.productId" )
    .execPopulate()
    .then( user => {
      const products = user.cart.items.map( item => {
        return { quantity: item.quantity, product: {...item.productId._doc} }
      } );
      const order = new Order( {
        user: {
          name: req.user.name,
          userId: req.user._id
        },
        products
      } )
      return order.save();
    } )
    .then( () => {
      return req.user.clearCart();
    })
    .catch( err => {
      res.status( 400 ).json( { err: err.message } );
    } );
}

exports.getOrders = ( req, res ) => {
  Order.find( { _id: req.user._id } )
    .then( orders => {
      if ( !orders ) return res.status( 400 ).json( { error: "Order list is emptyp" } );
      res.json( orders );
    } )
    .catch( err => {
      res.status( 400 ).json( { error: err.message } );
    } );
}
/**
 * Deletes user account
 */
exports.deleteProduct = ( req, res ) => {
  const { productId } = req.params;
  if ( !productId ) return res.status( 400 ).json( { error: "You must provide the product ID" } );

  Product.findByIdAndDelete( { _id: productId } )
    .then( product => {
      if ( !product ) return res.status( 400 ).json( { error: "Operation failed. Please try again" } );
      res.json( product );
    } )
    .catch( err => {
      res.status( 400 ).json( { error: err.message } );
    } );
}