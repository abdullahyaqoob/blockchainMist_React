// react States
// import React, { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

// Images
import fbIcon from "../Images/facebook-icon.png";
import istanIcon from "../Images/istagram-icon.png";
import twitterIcon from "../Images/twitter-icon.png";
import youtubeIcon from "../Images/youtube-icon.png";
import whiteMistLogo from "../Images/whiteMistLogo.png";

// css
import "../App.css";
import "../css/style.css";


function App() {
  const navigate = useNavigate();
  return (
    <div id="app">
      {/* <!-- -----------footer--------------- --> */}
      <section className="footer">
        <div className="footer-container">
          <div className="footer-heading">
            {/* <h1>
              Blockchain | <span>Mist</span>
            </h1> */}
          </div>
          <div className="footer-content">
            <div className="footer-left-side">
              <h1>Head Office</h1>
              <h3>Address:</h3>
              <p>103 - 868 Markham Rd, Toronto, ON M1H 2Y2, Canada</p>
              <h3>+1&nbsp;647 707&nbsp;8311</h3>
              <p>headoffice@blockchain-mist.com</p>
            </div>
            <div className="footer-right-side">
              <h1>Development Studio</h1>
              <h3>Address:</h3>
              <p>
                Blockchain-MIST / Mahmoodah Memorial Hospital, Godhpur Road,
                Sialkot, Pakistan
              </p>
              <h3>+92&nbsp;310&nbsp;510&nbsp;8311</h3>
              <p>dstudio@blockchain-mist.com</p>
            </div>
          </div>
          <div className="footer-nav-bar">
            <ul>
              <li
                onClick={() => {
                  navigate("/");
                  window.scrollTo(0, 0)
                }}
              >
                Home
              </li>

              <li
                onClick={() => {
                  navigate("/Services");
                  window.scrollTo(0, 0)
                }}
              >
                <span> | </span>Services
              </li>
              <li
                onClick={() => {
                  navigate("/OurPortfolio");
                  window.scrollTo(0, 0)
                }}
              >
                <span> | </span>Portfolio
              </li>
              <li
                onClick={() => {
                  navigate("/ourTeam");
                  window.scrollTo(0, 0)
                }}
              >
                <span> | </span>Our Team
              </li>
              <li
                onClick={() => {
                  navigate("/ContactUs");
                  window.scrollTo(0, 0)
                }}
              >
                <span> | </span>Contact
              </li>
            </ul>
          </div>
          <div className="footer-social-icons-header">
            <a target={"_blank"} href="https://www.facebook.com/BlockchainDevelopment.MIST/"><img style={{ width: "13px" }} src={fbIcon} alt="fbIcon" /></a>
            <a target={"_blank"} href="https://www.youtube.com/@blockchain-mist"><img style={{ width: "22px" }} src={youtubeIcon} alt="youtubeIcon" /></a>
            <a target={"_blank"} href="https://www.instagram.com/blockchain.mist/"><img src={istanIcon} alt="instaIcon" /></a>
            <a target={"_blank"} href="https://twitter.com/Blockchain_MIST"><img src={twitterIcon} alt="twitterIcon" /></a>
          </div>
          {/* <div className="footer-logo">
            <div className="footerr-logo">
              <div className="footer-logo-container">
                <img src={mistLogo} alt="mistLogo" />
              </div>
            </div>
          </div> */}
          <center>
            <img
              src={whiteMistLogo}
              alt="whiteMistLogo"
              style={{ width: "250px" }}
            />
          </center>
        </div>
      </section>
    </div>
  );
}

export default App;
