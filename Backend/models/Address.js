import mongoose from "mongoose";
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customers",
    required: true,
  },
  address: {
    type: String,
    required: true,
  },

  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postal_code: String,
  phone: Number,
  mobile_phone: {
    type: Number,
    required: true,
  },
  comment: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
});

const Address = mongoose.model("Address", addressSchema);

export default Address;
