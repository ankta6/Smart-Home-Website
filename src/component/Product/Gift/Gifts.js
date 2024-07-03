import React from "react";

const data = [
  {
    img: "https://www.jiomart.com/images/product/original/rvvls8gkcx/punnkfunnk-unique-digital-smart-watch-d18-smart-watches-full-hd-bluetooth-calling-watch-product-images-orvvls8gkcx-p593561438-0-202312221915.jpg?im=Resize=(1000,1000)",
    title: "Smart Watch",
    description:
      "A watch that tracks fitness, notifications, and has customizable watch faces",
  },
  {
    img: "https://images-cdn.ubuy.co.in/65df50ab036c27104f377fc8-vr-headset-new-version-3d-glasses.jpg",
    title: "Virtual Reality Headset",
    description:
      "A headset for immersive virtual reality experiences, compatible with various devices",
  },
  {
    img: "https://i.rtings.com/assets/pages/swLQ6KZD/best-iphone-earbuds-20230427-medium.jpg?format=auto",
    title: "Wireless Earbuds",
    description:
      "Compact earbuds with high-quality sound, noise cancellation, and long battery life",
  },
  {
    img: "https://i.ytimg.com/vi/5_nwNWQxWsc/maxresdefault.jpg",
    title: "Smart Plant Pot",
    description:
      "A plant pot that monitors soil moisture, light, and can remind you when to water your plant",
  },
];

const Gift = () => {
  return (
    <div id="gift-ideas" className="product-container">
      <h1>Gift Ideas</h1>
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

export default Gift;
