const mongoose = require("mongoose");

const doctor = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  timeslot: {
    type: Map,
    required: true,
  },
});

module.exports = mongoose.model("Doctor", doctor);
