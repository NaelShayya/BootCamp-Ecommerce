import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    enum: ["Mr.", "Mrs.", "Ms."],
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
  country: {
    type: Schema.Types.Mixed,
    ref: "Country",
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["blocked", "unblocked"],
    default: "unblocked",
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

const User = mongoose.model("User", userSchema);
export default User;
