const express = require( "express" );
const upload = require( "../middleware/fileupload" );
const {
  signIn,
  signup,
  Signout,
  deleteUser,
  updateUserInfo,
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
router.get( "/users", requireLogin, fetchUsers );
router.get( "/user/:userId", requireLogin, fetchUser );
router.get( "/profile/photo/:userId", photo );
router.put( "/profile/upload/:userId", upload.single("photo"), uploadPhoto );
router.delete( "/user/:userId", requireLogin, deleteUser );

module.exports = router;