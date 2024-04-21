import mongoose from "mongoose";
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  country_name: {
    type: String,
    required: true,
  },

  currency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Currency",
    required: true,
  },
});

const Country = mongoose.model("Country", countrySchema);

export default Country;
