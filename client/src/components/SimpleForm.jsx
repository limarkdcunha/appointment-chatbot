import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import Post from "./Post";
import Doctors from "./Doctors";
import Appointments from "./Appointments";
import BookAppointment from "./BookAppointment";

const theme = {
  backgroundImage: "https://www.citizenshospitals.com/wp-content/uploads/layerslider/Homepage-Slider-1/Backround1.jpg",
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#0055ff",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#0055ff",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const config = {
  width: "400px",
  height: "500px",
  floating: true,
};

const steps = [
  {
    id: "welcome-message",
    message: "Welcome! I, Molali chatbot will assist you with booking your appointment!",
    trigger: "q-firstname",
  },
  {
    id: "q-firstname",

    message: "Enter your First name",
    trigger: "firstname",
  },
  {
    id: "firstname",
    user: true,
    trigger: "q-lastname",
  },

  {
    id: "q-lastname",
    message: "Enter your Last name",
    trigger: "lastname",
  },
  {
    id: "lastname",
    user: true,
    trigger: "q-gender",
  },

  {
    id: "q-gender",
    message: "Select your Gender",
    trigger: "gender",
  },
  {
    id: "gender",
    options: [
      { value: "Male", label: "Male", trigger: "q-phonenumber" },
      { value: "Female", label: "Female", trigger: "q-phonenumber" },
    ],
  },

  {
    id: "q-phonenumber",
    message: "Enter your Phone Number",
    trigger: "phonenumber",
  },
  {
    id: "phonenumber",
    user: true,
    trigger: "q-dept",
  },

  {
    id: "q-dept",
    message: "Choose a department",
    trigger: "dept",
  },
  {
    id: "dept",
    options: [
      { value: "ENT", label: "ENT", trigger: "q-doctor" },
      { value: "Dental", label: "Dental", trigger: "q-doctor" },
      { value: "Dermatology", label: "Dermatology", trigger: "q-doctor" },
    ],
  },

  {
    id: "q-doctor",
    message: "Choose a Doctor",
    trigger: "dept-doctors",
  },
  {
    id: "dept-doctors",
    component: <Doctors />,
    asMessage: true,
    trigger: "doctor",
  },
  {
    id: "doctor",
    user: true,
    trigger: "q-submit",
  },

  {
    id: "q-submit",
    message: "Do you wish to submit?",
    trigger: "submit",
  },
  {
    id: "submit",
    options: [
      { value: "y", label: "Yes", trigger: "post-message" },
      { value: "n", label: "No", trigger: "no-submit" },
    ],
  },
  {
    id: "no-submit",
    message: "Your information was not submitted.",
    end: true,
  },
  {
    id: "post-message",
    component: <Post />,
    asMessage: true,
    trigger: "q-appointment",
  },

  {
    id: "q-appointment",
    message: "Choose an Appointment Timing",
    trigger: "doctor-appointments",
  },
  {
    id: "doctor-appointments",
    component: <Appointments />,
    asMessage: true,
    trigger: "appointment",
  },
  {
    id: "appointment",
    options: [
      { value: "9:00 - 9:30", label: "9:00 - 9:30", trigger: "display-appointment" },
      { value: "9:30 - 10:00", label: "9:30 - 10:00", trigger: "display-appointment" },
      { value: "10:00 - 10:30", label: "10:00 - 10:30", trigger: "display-appointment" },
      { value: "10:30 - 11:00", label: "10:30 - 11:00", trigger: "display-appointment" },
    ],
  },
  {
    id: "display-appointment",
    message: "We are processing your request",
    trigger: "book-appointment",
  },
  {
    id: "book-appointment",
    component: <BookAppointment />,
    asMessage: true,
    trigger: "last-message",
  },
  {
    id: "last-message",
    message: "Session closed",
    trigger: "end-message",
  },
  {
    id: "end-message",
    message: "Thank you",
    end: true,
  },
];

const SimpleForm = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} {...config} />
      </ThemeProvider>
    </div>
  );
};

export default SimpleForm;
