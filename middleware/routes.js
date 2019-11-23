const userRoutes = require( "../router/user" );
const error = require( "../config/error" );
const productRoutes = require( "../router/product" );

module.exports = ( app ) => {
  app.use( "/api/v1", userRoutes );
  app.use( "/api/v1", productRoutes );
  app.use( error );
}