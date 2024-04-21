import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customers",
    required: true,
  },
  order_status_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OrderStatus",
    required: true,
  },
  shipping_address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
    required: true,
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  comment: String,
  invoice_no: {
    type: String,
    unique: true,
  },
  invoice_date: {
    type: Date,
    required: true,
  },
  total_discount: {
    type: Number,
    required: true,
  },
  total_shipping: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
});
const Orders = mongoose.model("Orders", orderSchema);

export default Orders;
