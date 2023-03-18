import "./App.css";
import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Booking from "./components/Booking";
import { fetchAPI, submitAPI } from "./server/api";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Menu from "./components/Menu";
import Order from "./components/Order";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";

function App() {
  const navigate = useNavigate();
  function initializeTimes() {
    const times = {
      times: [...fetchAPI(new Date())],
    };
    return times;
  }

  function reducer(state, action) {
    const newBookingDate = action.setBookingDate;
    debugger;
    const newTimes = fetchAPI(newBookingDate);
    return { times: [...newTimes] };
  }

  function submitFormData(formData) {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmedbooking", { state: { name: formData.firstName } });
    }
  }

  const initialState = initializeTimes();
  const [availableTimes, setAvailableTimes] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/booking"
          element={<Booking availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitFormData={submitFormData} />}
        />
        <Route path="/confirmedbooking" element={<ConfirmedBooking />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
