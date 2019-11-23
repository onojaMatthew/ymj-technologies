const { User } = require( "../models/user" );
const bcrypt = require( "bcrypt" );
const winston = require( "winston" );
const fs = require( "fs" );
const fetch = require( "node-fetch" );
require( "dotenv" ).config();

/**
 * User account signup
 */
exports.signup = ( req, res ) => {
  const {
    email,
    password,
    name,
  } = req.body;
  if ( !email ) return res.status( 400 ).json( { error: "Enter your email address" } );
  if ( !password ) return res.status( 400 ).json( { error: "Enter your password to continue" } );
  if ( !name ) return res.status( 400 ).json( { error: "Name is required" } );

  User.findOne( { email: email } )
    .then( user => {
      if ( user ) return res.status( 400 ).json( { error: `User with the email ${ email } already exists` } );
      return bcrypt.hash( password, 12 )
        .then( hashedPassword => {
          if ( !hashedPassword ) return res.status( 400 ).json( { error: "Request failed. Try again" } );
          let newUser = new User( req.body )

          newUser.save();
          const token = newUser.generateToken();
          const { _id, email, name, password } = newUser;
          res.cookie( "token", token, { expire: new Date() + 9999 } );
          res.header( "x-auth-token", token ).json( {
            token,
            user: { _id, email, name, role }
          } );
        } );
    })  
    .catch( err => {
      res.status( 400 ).json( { error: err.message } );
    } );
}

/**
 * User account login 
 */
exports.signIn = ( req, res ) => {
  const { email, password } = req.body;

  if ( !email ) return res.status( 400 ).json( { error: "Enter your email" } );
  if ( !password ) return res.status( 400 ).json( { error: "Password is required" } );
  User.findOne( { email } )
    .then( user => {
      if ( !user ) return res.status( 400 ).json( { error: `User does not exist` } );
      return bcrypt.compare( password, user.password )
        .then( passwordMatched => {
          if ( !passwordMatched ) return res.status( 400 ).json( { error: "Invalid email or password" } );
          const token = user.generateToken();
          const { _id, email, name, cardBought, phone, parentId, refererPhone, role, profileUpdated } = user;
          const refererLink = `${ process.env.API_URL }/ojirehprime/agent/${ _id }`;
          res.cookie( "token", token, { expire: new Date() + 9999 } );
          res.json( {
            token,
            user: { _id, email, role, name }
          } );
      })
    } )
    .catch( err => {
      res.status( 400 ).json( { error: err.message } );
    } );
}


/**
 * User account signout
 */
exports.signout = ( req, res ) => {
  res.clearCookie( "token" );
  res.json( "You have successfully been logged out" );
}

/**
 * gets all users
 */
exports.fetchUsers = ( req, res ) => {
  User.find( {} )
    .then( users => {
      if ( !users ) return res.status( 400 ).json( { error: "User record is empty" } );
      res.json( users )
    } )
    .catch( err => {
      res.status( 400 ).json( { error: err.message } );
    } );
}

/**
 * gets single user with @param {userId} userId of the user
 */
exports.fetchUser = ( req, res ) => {
  const { userId } = req.params;
  if ( !userId ) return res.status( 400 ).json( { error: "The user ID is required for you to get this user" } );
  User.findById( { _id: userId } )
    .then( user => {
      if ( !user ) return res.status( 400 ).json( { error: `User does not exist` } );
      return res.json( user );
    } )
    .catch( err => {
      res.status( 400 ).json( { error: err.message } );
    } );
}


/**
 * Gets the profile photo of an agent
 */
exports.photo = ( req, res, next ) => {
  const { userId } = req.params;

  User.findById( { _id: userId } )
    .then( user => {
      if ( !user ) return res.status( 400 ).json( { error: "User not found" } );
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
  const { userId } = req.params;
  // Assigned the path to a new constant @photo
  const photo = req.file.path;
  User.findByIdAndUpdate( { _id: userId } )
    .then( user => {
      if ( !user ) return res.status( 400 ).json( { error: "User does not exist" } );
      user.photo.data = fs.readFileSync( req.file.path );
      user.photo.contentType = "image/jpg";
      user.save();
      res.json( user );
    } )
    .catch( err => {
      res.json( { error: err.message } );
    } );
}


/**
 * Deletes user account
 */
exports.deleteUser = ( req, res ) => {
  const { userId } = req.params;
  if ( !userId ) return res.status( 400 ).json( { error: "You must provide the user ID" } );

  User.findByIdAndDelete( { _id: userId } )
    .then( user => {
      if ( !user ) return res.status( 400 ).json( { error: "Operation failed. Please try again" } );
      res.json( user );
    } )
    .catch( err => {
      res.status( 400 ).json( { error: err.message } );
    } );
}