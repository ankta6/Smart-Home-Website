// AboutUs.jsx

import React from "react";
import "./AboutUs.css";
import teamImage from "./images/img1.jpg"; // Assuming the image is in the src/images folder
import missionImage from "./images/img2.jpeg"; // Another image
import Image3 from "./images/img3.jpg"; // Another image
import Image4 from "./images/img4.jpg"; // Another image
import Image5 from "./images/img5.jpg"; // Another image

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="hero-section">
        <div className="hero-image-container">
          <img src={teamImage} alt="Our Team" className="hero-image" />
          <div className="hero-text">
            <h1>About Us</h1>
            <p>Welcome to Smart Home, where innovation meets comfort.</p>
          </div>
        </div>
      </section>

      <section className="content-section center-section">
        <div className="text-content">
          <h1 className="section-title">Welcome to Smart Home</h1>
          <p className="section-text">
            We believe in the power of innovation to transform everyday living
            into extraordinary experiences. As pioneers in the smart home
            industry, we are dedicated to creating cutting-edge solutions that
            seamlessly integrate into your lifestyle, making your home safer,
            more efficient, and ultimately more enjoyable.
          </p>
        </div>
      </section>

      <section className="content-section">
        <img src={missionImage} alt="Our Vision" className="content-image" />
        <div className="text-content box">
          <h1>Our Vision</h1>
          <p>
            We envision a world where every home is equipped with smart devices
            that enhance the quality of life. Our vision is to lead the smart
            home industry with products that offer unparalleled convenience,
            security, and efficiency.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="text-content box">
          <h1>Our Mission</h1>
          <p>
            At Smart Home, our mission is to make your life easier and more
            convenient with cutting-edge smart home technology. We strive to
            provide innovative solutions that integrate seamlessly into your
            home, giving you control at your fingertips.
          </p>
        </div>
        <img src={Image5} alt="Our Mission" className="content-image" />
      </section>

      <section className="content-section">
        <img src={Image4} alt="Our Values" className="content-image" />
        <div className="text-content box">
          <h1>Our Values</h1>
          <p>
            We believe in innovation, quality, and customer satisfaction. Our
            values drive us to constantly improve our products and services,
            ensuring that we meet the highest standards in the industry. We are
            committed to making smart home technology accessible and beneficial
            for everyone.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="text-content box">
          <h1>Contact Us</h1>
          <p>
            If you have any questions or need assistance with our products, feel
            free to reach out to our customer support team. We are here to help
            you make the most of your smart home experience.
          </p>
        </div>
        <img src={Image3} alt="Contact Us" className="content-image" />
      </section>
    </div>
  );
};

export default AboutUs;
