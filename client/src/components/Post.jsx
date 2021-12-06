import React, { useEffect } from "react";
import axios from "axios";

const baseURL = "http://localhost:5000/patient/";

const Post = (props) => {
  const { steps } = props;
  const { firstname, lastname, gender, phonenumber, dept, doctor } = steps;

  useEffect(() => {
    const userObject = {
      firstName: firstname.value,
      lastName: lastname.value,
      gender: gender.value,
      phoneNumber: phonenumber.value,
      dept: dept.value,
      doctor: doctor.value,
    };

    axios
      .post(`${baseURL}`, userObject)
      .then((res) => {
        console.log(res.status);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return <div>Thank you! Your data was submitted successfully!</div>;
};

export default Post;
