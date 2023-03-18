import React from "react";
import Specials from "./Specials";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="content">
          <h2>Specials</h2>
          <button>Online Menu</button>
        </div>
        <Specials />
      </div>
    </section>
  );
};

export default Highlights;
