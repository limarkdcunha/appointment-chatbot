const mongoose = require("mongoose");

const appointment = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  timing: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Appointment", appointment);
