import mongoose from "mongoose";
const Schema = mongoose.Schema;

const currencySchema = new Schema({
  country_id: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  symbol: {
    type: String,
    required: true,
  },
});

const Currency = mongoose.model("Currency", currencySchema);

export default Currency;
