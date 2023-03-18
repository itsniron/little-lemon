import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const ConfirmedBooking = () => {
  return (
    <>
      <Header />
      <div className="confirmedbooking">
        <div className="container">
          <h1>Reservation Confirmed!</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmedBooking;
