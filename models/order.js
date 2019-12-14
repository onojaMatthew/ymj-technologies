const mongoose = require( "mongoose" );
const { Schema, ObjectId } = mongoose;

const orderSchema = new Schema( {
  products: [ {
    product: { type: ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true }
  } ],
  user: { 
    name: { type: String, required: true },
    userId: { type: ObjectId, ref: "User", required: true }
  },
  createdAt: { type: Date, default: Date().now }
} );

const Order = mongoose.model( "Order", orderSchema );

exports.Order = Order;