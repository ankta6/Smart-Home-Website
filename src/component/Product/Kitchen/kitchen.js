import React from "react";

const data = [
  {
    img: "https://www.lifewire.com/thmb/Ib9NmsHdQ4q236zqBVxnsNYTIHA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/samsung-ha-ref-rf56k9540sr-family-hub-overview-5aa18f0e18ba010037c023a5.jpg",
    title: "Smart Refrigerator",
    description:
      "A refrigerator that can track your groceries, suggest recipes, and manage your shopping list",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebl_iGXr4YWlHICuU8j197jkRWWNSJJa7tw&s",
    title: "Intelligent Oven",
    description:
      "An oven with preset cooking modes, voice control, and Wi-Fi connectivity for remote operation",
  },
  {
    img: "https://m.media-amazon.com/images/I/61UaIPr0l-L._AC_UF894,1000_QL80_.jpg",
    title: "Automated Coffee Maker",
    description:
      "Brew your perfect cup of coffee with customizable settings and smartphone control",
  },
  {
    img: "https://images-cdn.ubuy.co.in/665d75606d98c52e32449d9d-blitzhome-portable-dishwasher.jpg",
    title: "Smart Dishwasher",
    description:
      "A dishwasher that optimizes water usage, has a self-cleaning mode, and can be controlled remotely",
  },
];

const Kitchen = () => {
  return (
    <div id="kitchen" className="product-container">
      <h1>Smart Kitchen</h1>
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

export default Kitchen;
