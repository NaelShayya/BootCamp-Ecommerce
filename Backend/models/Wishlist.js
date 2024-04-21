import mongoose from "mongoose";
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
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

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;
