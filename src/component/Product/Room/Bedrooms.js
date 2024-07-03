import React from "react";

const data = [
  {
    img: "https://images-cdn.ubuy.co.in/65fc6f9df75ae8166e72108e-2-pack-smart-light-bulb-wifi-light.jpg",
    title: "Smart Light Bulbs",
    description:
      "Light bulbs that can change color, dim, and be controlled via an app or voice commands",
  },
  {
    img: "https://i.gadgets360cdn.com/large/apple_homepod_mini_image_1609227640134.jpg",
    title: "Smart Speaker",
    description:
      "A speaker with voice assistant integration, high-quality sound, and smart home control",
  },
  {
    img: "https://5.imimg.com/data5/PS/KA/AG/SELLER-41707658/motorized-curtains-track.jpg",
    title: "Automated Curtains",
    description:
      "Curtains that can be scheduled to open and close or controlled remotely",
  },
  {
    img: "https://images.prismic.io//intuzwebsite/d4e832e8-c1ca-408a-a43c-28406f69af36_Banner.png?w=1200&q=75&auto=format,compress&fm=png8",
    title: "Intelligent Air Purifier",
    description:
      "An air purifier that monitors air quality and adjusts its settings automatically",
  },
];

const Room = () => {
  return (
    <div id="living-room" className="product-container">
      <h1>Living Rooms</h1>
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

export default Room;
