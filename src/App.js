import Navbar from "./component/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer/footer";
import Home from "./component/Home/Home";
import Contact from "./component/contact/Contactus";
import About from "./component/about/AboutUs";
import Product from "./component/Product/Product";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
