import React, { useState } from "react";
import "./Productnav.css";

const ProductNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="product-navbar" style={{paddingTop:"40px"}}>
      <div className="product-navbar-container">
        <a href="#kitchen" className="product-nav-logo">
          Products
        </a>
        <div className="product-menu-icon" onClick={toggleNavbar}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={isOpen ? "product-nav-menu active" : "product-nav-menu"}>
          <li className="product-nav-item">
            <a href="#kitchen" className="product-nav-links">
              Kitchen
            </a>
          </li>
          <li className="product-nav-item">
            <a href="#office" className="product-nav-links">
              Office
            </a>
          </li>
          <li className="product-nav-item">
            <a href="#living-room" className="product-nav-links">
              Living Room
            </a>
          </li>
          <li className="product-nav-item">
            <a href="#gift-ideas" className="product-nav-links">
              Gift Ideas
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ProductNavbar;
