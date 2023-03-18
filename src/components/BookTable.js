import React from "react";
import BookingForm from "./BookingForm";

const BookTable = ({ availableTimes, setAvailableTimes, submitFormData }) => {
  return (
    <section id="booktable">
      <div className="container">
        <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitFormData={submitFormData} />
      </div>
    </section>
  );
};

export default BookTable;
