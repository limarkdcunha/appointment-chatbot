import React, { useState, useEffect } from "react";
import axios from "axios";
import Successful from "./Successful";
import Unsuccessfull from "./Unsuccessfull";

const BookAppointment = (props) => {
  const { steps } = props;
  const { appointment, doctor, firstname, lastname } = steps;
  const [timeSlots, setTimeSlots] = useState({});

  const baseURL = "http://localhost:5000/doctor";
  // updateappoinment/

  useEffect(() => {
    axios
      .get(`${baseURL}/getbyname/${doctor.value}`)
      .then((res) => {
        setTimeSlots(res.data[0].timeslot);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [doctor.value]);

  return (
    <div>
      {timeSlots[appointment.value] === "Available" ? (
        <Successful timeSlots={timeSlots} doctor={doctor} appointment={appointment} firstname={firstname} lastname={lastname} />
      ) : (
        <Unsuccessfull />
      )}
    </div>
  );
};

export default BookAppointment;
