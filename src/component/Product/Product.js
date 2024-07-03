import React from "react";
import Nav from "./nav/Productnav";
import Gift from "./Gift/Gifts";
import Kitchen from "./Kitchen/kitchen";
import Office from "./Office/Office";
import Room from "./Room/Bedrooms";

const Product = () => {
  return (
    <div>
      {/* <Nav /> */}
      <Gift />
      <Kitchen />
      <Office />
      <Room />
    </div>
  );
};

export default Product;
