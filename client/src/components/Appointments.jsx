import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:5000/doctor/getbyname";

const Appointments = (props) => {
  const { steps } = props;
  const { doctor } = steps;
  const [timeSlots, setTimeSlots] = useState({});

  useEffect(() => {
    axios
      .get(`${baseURL}/${doctor.value}`)
      .then((res) => {
        setTimeSlots(res.data[0].timeslot);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [doctor.value]);

  return (
    <div>
      <h2>Time slots of The Doctor</h2>
      <ul>
        <li>9:00 - 9:30 : {timeSlots["9:00 - 9:30"]}</li>
        <li>9:30 - 10:00 : {timeSlots["9:30 - 10:00"]}</li>
        <li>10:00 - 10:30 :{timeSlots["10:00 - 10:30"]}</li>
        <li>10:30 - 11:00 :{timeSlots["10:30 - 11:00"]}</li>
      </ul>
    </div>
  );
};

export default Appointments;
