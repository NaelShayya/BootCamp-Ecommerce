import mongoose from "mongoose";
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  country_name: {
    type: String,
    required: true,
  },
  currency: {
    type: {
      name: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      symbol: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
    },
    required: true,
  },
});

const Country = mongoose.model("Country", countrySchema);

export default Country;
