import React from "react";

const data = [
  {
    img: "https://images-cdn.ubuy.co.in/633bfcec5aa71a0d294e12f3-wireless-charging-pad-je-qi-certified.jpg",
    title: "Wireless Charging Pad",
    description:
      " A sleek charging pad for your devices, featuring fast charging and a minimalist design",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPA7yV2QG_oGxjTTMwy7yxztqaH0C-e-smAQ&s",
    title: "Smart Desk Lamp",
    description:
      "A lamp with adjustable brightness, color temperature settings, and voice control",
  },
  {
    img: "https://m.media-amazon.com/images/I/51Ltm3tbH2L._AC_UF1000,1000_QL80_.jpg",
    title: "Noise-Cancelling Headphones",
    description:
      "Headphones that block out office noise, with Bluetooth connectivity and long battery life",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLKszqOqlP6efpdJlgeYLy5xAcTfuRFl1XSA&s",
    title: "Smart Thermostat",
    description:
      "A thermostat that learns your schedule and preferences to optimize heating and cooling",
  },
];

const Office = () => {
  return (
    <div id="office" className="product-container">
      <h1>Office</h1>
      {data.map((item, index) => (
        <div className="product-item" key={index}>
          <img src={item.img} alt="product" />
          <div className="product-info">
            <h2 className="product-heading">{item.title}</h2>
            <p className="product-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Office;
