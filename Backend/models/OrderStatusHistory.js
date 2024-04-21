import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderStatusHistorySchema = new Schema({
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Orders",
    required: true,
  },
  status_id: {
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

const OrderStatusHistory = mongoose.model(
  "OrderStatus",
  orderStatusHistorySchema
);

export default OrderStatusHistory;
