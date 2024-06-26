import mongoose from "mongoose";
import Category from "./Category.js";
import User from "./User.js";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  long_description: String,
  certification: String,
  lessons: String,
  product_image: {
    data: Buffer,
    contentType: String,
  },
  category: {
    type: mongoose.Schema.Types.Mixed,
    ref: Category,
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

const Product = mongoose.model("Product", productSchema);

export default Product;
