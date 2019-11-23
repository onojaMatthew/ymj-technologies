const express = require( "express" );
const requireLogin = require( "../config/auth" );
const { 
  addProduct,
  getProduct,
  getProducts,
  photo,
  uploadPhoto,
  deleteProduct
} = require( "../controller/product" );

const router = express.Router();

router.post( "/product", addProduct );
router.get( "/products", getProducts );
router.get( "/product/:productId", getProduct );
router.put( "/product/photo/:productId", requireLogin, uploadPhoto );
router.get( "/product/photo/:productId", photo );
router.delete( "/product/:productId", deleteProduct );
module.exports = router;