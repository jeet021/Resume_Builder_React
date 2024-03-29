const mongoose = require("mongoose");

const feedback = new mongoose.Schema({
  name: String,
  phone: String,
  appusage: String,
  appfeatures: String,
  appimprovement: String,
});

const feedbackModel = mongoose.model("feedback", feedback);

module.exports = feedbackModel;
