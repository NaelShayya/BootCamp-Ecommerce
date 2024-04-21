import mongoose from "mongoose";
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    enum: ["Mr.", "Mrs.", "Ms."],
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  profile_picture: {
    data: Buffer,
    contentType: String,
  },
  default_address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
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
  currency_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Currency",
    required: true,
  },
  country_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
    required: true,
  },
});

const Customers = mongoose.model("Customers", customerSchema);
export default Customers;
