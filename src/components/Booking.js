import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import BookTable from "./BookTable";

const Booking = ({ availableTimes, setAvailableTimes, submitFormData }) => {
  return (
    <div>
      <Header />
      <BookTable availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitFormData={submitFormData} />
      <Footer />
    </div>
  );
};

export default Booking;
