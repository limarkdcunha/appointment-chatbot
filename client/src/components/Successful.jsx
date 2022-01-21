import React, { useEffect } from "react";
import axios from "axios";
const baseURL = "http://localhost:5000";

const Successful = ({ timeSlots, appointment, doctor, firstname, lastname }) => {
  useEffect(() => {
    timeSlots[appointment.value] = "Unavailable";

    axios
      .patch(`${baseURL}/doctor/updateappointment/${doctor.value}`, { timeslot: timeSlots })
      .then((res) => {
        console.log(res);
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .post(`${baseURL}/appointment/`, { patientName: `${firstname.value} ${lastname.value}`, doctorName: doctor.value, timing: appointment.value })
      .then((res) => {
        console.log(res);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      Appointment Booking Successful
      <br />
      Name:{`${firstname.value} ${lastname.value}`}
      <br />
      Doctor:{doctor.value}
      <br />
      Timing:{appointment.value}
    </div>
  );
};

export default Successful;
