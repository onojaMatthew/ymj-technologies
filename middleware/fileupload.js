const multer = require( "multer" );
const path = require( "path" );

/**
 * Multer configuration for file upload
 */
const storage = multer.diskStorage( {
  destination: function ( req, file, cb ) {
    cb( null, path.resolve( __dirname, "../uploads" ) );
  },

  filename: function ( req, file, cb ) {
    cb( null, file.originalname );
  }
} );

const upload = multer( { storage: storage } );

module.exports = upload;
