// react States
// import React, { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// components
import MainPage from "./components/MainPage.jsx";
import OurTeam from "./components/OurTeam.jsx";
import Testimonials from "./components/Testimonials.jsx";
import WhyUs from "./components/WhyUs.jsx";
import OurPortfolio from "./components/OurPortfolio.jsx";
import Services from "./components/Services.jsx";
import ContactUs from "./components/ContactUs.jsx";
import IndustriesServe from "./components/IndustriesServe.jsx";
import Blogs from "./components/Blogs.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import AboutUs from "./components/AboutUs.jsx";
import whatsappIcon from "./Images/icon-awesome-whatsapp@1x.png";

// css
import "./App.css";
import "./css/style.css";

// Toast
// import { ToastContainer, toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const navigate = useNavigate();
  return (
    <div id="app">
      {/* Header */}
      <Header />
      {/* close  Header */}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/WhyUs" element={<WhyUs />} />
        <Route path="/OurPortfolio" element={<OurPortfolio />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/IndustriesServe" element={<IndustriesServe />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>

      <button className="floatingWhatSapp">
        <a target={"_blank"} href="https://api.whatsapp.com/send/?phone=16477078311&text&type=phone_number&app_absent=0">
          <img src={whatsappIcon} alt="whatsappIcon" title="Need Help" />
        </a>
      </button>
      {/* <!-- -----------footer--------------- --> */}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
