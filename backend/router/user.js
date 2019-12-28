const express = require( "express" );
const upload = require( "../middleware/fileupload" );
const {
  signIn,
  signup,
  signout,
  deleteUser,
  fetchUser,
  fetchUsers,
  uploadPhoto,
  photo
} = require( "../controller/user" );
const requireLogin = require( "../config/auth" );

const router = express.Router();

router.post( "/signup", signup );
router.post( "/login", signIn );
router.get( "/signout", signout );
router.get( "/users", fetchUsers );
router.get( "/user/:userId", fetchUser );
router.get( "/profile/photo/:userId", photo );
router.put( "/profile/upload/:userId", upload.single("photo"), uploadPhoto );
router.delete( "/user/:userId", deleteUser );

module.exports = router;