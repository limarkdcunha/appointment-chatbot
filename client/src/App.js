import SimpleForm from "./components/SimpleForm";

const myStyle = {
  backgroundImage: `url("https://www.citizenshospitals.com/wp-content/uploads/layerslider/Homepage-Slider-1/Backround1.jpg")`,
};

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to Appointment Booking Chatbot</h1>
      <SimpleForm />
    </div>
  );
};

export default App;
