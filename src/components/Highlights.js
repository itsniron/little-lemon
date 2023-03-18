import React from "react";
import Menu from "./Menu";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="content">
          <h2>Specials</h2>
          <button>Online Menu</button>
        </div>
        <Menu />
      </div>
    </section>
  );
};

export default Highlights;
