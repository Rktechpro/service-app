import React from "react";

import Layout from "./components/Layout/Layout";

import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import About from "./components/About/About";

import Service from "./components/Service/Service";
import NotFound from "./page/404/NotFound";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
