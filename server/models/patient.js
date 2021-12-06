const mongoose = require("mongoose");

const patient = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Patient", patient);
