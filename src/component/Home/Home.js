import React from 'react'
import Slide from "./slider/slide";
import Getideas from "./getideas/getideas";
import Product from "./product/product";
import AboutUs from "./about/about";

import ContactUs from "./contact/contact";

const Home = () => {
  return (
    <div>
          <Slide/>
          <Getideas />
          <Product />
          <AboutUs />
          <ContactUs />
    </div>
  )
}

export default Home
