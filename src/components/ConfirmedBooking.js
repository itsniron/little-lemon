import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const ConfirmedBooking = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className="confirmedbooking">
        <div className="container">
          <h1>Thank you {location.state.name}! Your Table is confirmed!</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmedBooking;
