const mongoose = require( "mongoose" );
const jwt = require( "jsonwebtoken" );
const { Schema } = mongoose;

/**
 * We create the user schema
 */
const userSchema = new Schema( {
  email: { type: String, unique: [ true, "Email address already in use by another user"] },
  name: { type: String },
  password: { type: String },
  photo: { data: Buffer, ContentType: String },
  role: { type: String, enum: [ "user", "admin", "support" ], default: "user" },
  createdAt: { type: Date, default: Date().now }
},{
  timestamps: true,
});

/**
 * Expires the otp after 5 minutes
 */
userSchema.index( { otp: 1 }, { expireAfterSeconds: 300 } );

/**
 * We generate a token for the user
 */
userSchema.methods.generateToken = function() {
  const token = jwt.sign( { _id: this._id, email: this.email, role: this.role }, process.env.JWT_SECRET_KEY );
  return token;
}

const User = mongoose.model( "User", userSchema );

exports.User = User;