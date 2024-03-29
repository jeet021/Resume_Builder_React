const mongoose = require("mongoose");

const contactUs = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const contactUsModel = mongoose.model("contactUs", contactUs);

module.exports = contactUsModel;
