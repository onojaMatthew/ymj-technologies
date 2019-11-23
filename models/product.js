const mongoose = require( "mongoose" );
const { Schema, ObjectId } = mongoose;

const productSchema = new Schema( {
  title: { type: String, required: [ true, "Product title is required" ] },
  price: { type: Number, required: [ true, "Product price is required" ] },
  imageUrl: { data: Buffer, ContentType: String },
  description: { type: String, required: [ true, "Product description is required" ] },
  userId: { type: ObjectId, required: true, ref: "User"},
  createdAt: { type: Date, default: Date().now},
} )

const Product = mongoose.model( "Product", productSchema );

exports.Product = Product;