let mongoose = require("mongoose");

let userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    skills: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
