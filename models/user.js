const mongoose = require( "mongoose" );
const jwt = require( "jsonwebtoken" );
const { Schema, ObjectId } = mongoose;

/**
 * We create the user schema
 */
const userSchema = new Schema( {
  email: { type: String, unique: [ true, "Email address already in use by another user"] },
  name: { type: String },
  password: { type: String },
  photo: { data: Buffer, ContentType: String },
  role: { type: String, enum: [ "user", "admin", "support" ], default: "user" },
  cart: {
    items: [ { 
      productId: { type: ObjectId, required: true, ref: "Product" },
      quantity: { type: Number, required: true }
    }]
  },
  createdAt: { type: Date, default: Date().now }
},{
  timestamps: true,
});

/**
 * Expires the otp after 5 minutes
 */
userSchema.index( { otp: 1 }, { expireAfterSeconds: 300 } );

userSchema.methods.addToCart = function ( product ) {
  const cartProductIndx = this.cart.items.findIndex( cp => {
    return cp.productId.toString() === product._id.toString();
  } );
  const newQuantity = 1;
  const updatedCartItems = [ ...this.cart.items ];
  if ( cartProductIndx >= 0 ) {
    newQuantity = this.cart.items[ cartProductIndx ].quantity + 1;
    updatedCartItems[ cartProductIndx ].quantity = newQuantity;
  } else {
    updatedCartItems.push( {
      productId: product._id,
      quantity: newQuantity
    })
  }
  const updatedCart = {
    items: updatedCartItems
  }
  this.cart = updatedCart;
  return this.save();
}

userSchema.methods.removeFromCart = function (productId) {
  const updatedCartItems = this.cart.items.filter( item => {
    return item.productId.toString() !== productId.toString();
  } );
  this.cart.items = updatedCartItems;
  return this.save();
}

userSchema.methods.clearCart = function () {
  this.cart = { items: [] };
  return this.save();
}

/**
 * We generate a token for the user
 */
userSchema.methods.generateToken = function() {
  const token = jwt.sign( { _id: this._id, email: this.email, role: this.role }, process.env.JWT_SECRET_KEY );
  return token;
}

const User = mongoose.model( "User", userSchema );

exports.User = User;