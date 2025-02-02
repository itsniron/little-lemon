import React from "react";
import GreekSalad from "../assets/greek_salad.jpg";
import Bruchetta from "../assets/bruchetta.jpg";
import LemonDessert from "../assets/lemon_dessert.jpg";
import Dish from "./Dish";

const Specials = () => {
  return (
    <div className="menu">
      <Dish
        image={GreekSalad}
        itemname="Greek Salad"
        price="$12.99"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum aspernatur corporis, accusantium velit iusto et quam maiores facere cumque?"
      />
      <Dish
        image={Bruchetta}
        itemname="Bruchetta"
        price="$5.99"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum aspernatur corporis, accusantium velit iusto et quam maiores facere cumque?"
      />
      <Dish
        image={LemonDessert}
        itemname="Lemon Dessert"
        price="$2.99"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum aspernatur corporis, accusantium velit iusto et quam maiores facere cumque?"
      />
    </div>
  );
};

export default Specials;
