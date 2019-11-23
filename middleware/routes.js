const userRoutes = require( "../router/user" );
const error = require( "../config/error" );

module.exports = ( app ) => {
  app.use( "/api/v1", userRoutes );
  app.use( error );
}