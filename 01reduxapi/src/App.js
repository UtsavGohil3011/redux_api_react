import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/headercomponent/Home";
import Blogs from "./components/headercomponent/Blogs";
import Contact from "./components/headercomponent/Contact";
import ProductListing from "./components/Product/Productlisting";
import ProductDetail from "./components/Product/Productdetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="productlisting" element={<ProductListing />} />
          <Route path="productdetail/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
