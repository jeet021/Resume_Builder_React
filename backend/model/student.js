const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
name: String,
email:String,
password:String
});

const StudentModel = mongoose.model("students",RegisterSchema)

module.exports = StudentModel;