import mongoose from "mongoose";
import User from "./User.js";
import Order from "./Order.js";

const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentDate: {
    type: Date,
    default: Date.now,
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Order,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  cardholderName: {
    type: String,
    required: true,
  },
  billingAddress: {
    type: String,
    required: true,
  },
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
