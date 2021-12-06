import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:5000/doctor/getbydept";

const Doctors = (props) => {
  const { steps } = props;
  const { dept } = steps;

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/${dept.value}`)
      .then((res) => {
        setDoctors(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h4>Doctors of {dept.value} department</h4>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor._id}>{doctor.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Doctors;
