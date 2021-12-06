const router = require("express").Router();
const Patient = require("../models/patient");

router.get("/", (req, res) => {
  res.send("Hello Admin");
});

router.post("/", async (req, res) => {
  try {
    const newPatient = new Patient({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      phoneNumber: req.body.phoneNumber,
      dept: req.body.dept,
      doctor: req.body.doctor,
    });

    const patient = await newPatient.save();
    res.status(200).json(patient);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
