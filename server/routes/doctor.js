const router = require("express").Router();
const Doctor = require("../models/doctor");

router.get("/", (req, res) => {
  res.send("Hello Admin");
});

router.post("/register", async (req, res) => {
  try {
    const newDoctor = new Doctor({
      firstName: req.body.firstName,
      department: req.body.department,
      timeslot: req.body.timeslot,
    });

    const doctor = await newDoctor.save();
    res.status(200).json(doctor);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/getbydept/:department", async (req, res) => {
  try {
    const doctor = await Doctor.find({ department: req.params.department });
    res.status(200).json(doctor);
  } catch (err) {
    res.status(20).json(err);
  }
});

router.get("/getbyname/:firstname", async (req, res) => {
  try {
    const doctor = await Doctor.find({ firstName: req.params.firstname });
    res.status(200).json(doctor);
  } catch (err) {
    res.status(20).json(err);
  }
});

router.patch("/updateappointment/:firstName", async (req, res) => {
  try {
    const updatedBook = await Doctor.updateOne({ firstName: req.params.firstName }, req.body, { new: true });
    res.json(updatedBook);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
