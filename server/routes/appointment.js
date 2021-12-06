const router = require("express").Router();
const Appointment = require("../models/appointment");

router.get("/", (req, res) => {
  res.send("Hello Admin");
});

router.post("/", async (req, res) => {
  try {
    const newAppointment = new Appointment({
      patientName: req.body.patientName,
      doctorName: req.body.doctorName,
      timing: req.body.timing,
    });

    const appointment = await newAppointment.save();
    res.status(200).json(appointment);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
