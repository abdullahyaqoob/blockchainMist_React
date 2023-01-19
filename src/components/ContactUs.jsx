// react States
// import { useEffect, useState } from 'react'
import React, { Component } from "react";
import AOS from 'aos';

// Images
import headphoneContactUs from "../Images/contactus/headphoneContactUs.png";
import contactUsPhoneIcon from "../Images/contactus/contactUsPhoneIcon.png";
import mapImg from "../Images/contactus/mapImg.png";

// Toast
import { ToastContainer } from "react-toastify";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// css
import '../css/contactus.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // aboutUsPopup: false,
    };
  }

  async componentDidMount() {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }

  render() {

    return (
      <div>
        <div className="servicesMainContainer contactUsHeroBackground">
          <div className="heroContainerServices contactUsHeading" data-aos="flip-left" style={{position: 'relative', top: '185px'}}>
            <h1 style={{ marginTop: '40px' }}>Contact Us</h1>
            <p>Want to get InTouch? We would love to hear it from you here is how you can <br /> reach us out.</p>
          </div>
        </div>
        <div className="contausBoxes">
          <div className="services-container mainServices contactUsMainBlocks">
            <div className="services-box" data-aos="slide-left">
              <img src={contactUsPhoneIcon} alt="contactUsPhoneIcon" />
              <h1>Business Inquires</h1>
              <p>Need a Blockchain Development Services for Business? Contact Us</p>
              {/* <a target={"_blank"} href="tel:+1 647 7078311"><img src={whatsappIcon} alt="whatsappIcon" /></a> */}

              <a target={"_blank"} href="tel:+1 647 7078311"><h6 className="contactPhone"><b>+1 647 707 8311</b></h6></a>
              <br />
              <a target={"_blank"} href="mailto:headoffice@blockchain-mist.com"><h6 className="contactLocation"><b>headoffice@blockchain-mist.com</b> </h6></a>

            </div>
            <div className="services-box" data-aos="slide-right">
              <img src={headphoneContactUs} alt="" />
              <h1>Technical Support</h1>
              <p>Questions, Bug reports, feedback or any request we're here to help.</p>
              <a target={"_blank"} href="tel:+1 647 7078311"><h6 className="contactPhone"><b>+92 310 510 8311</b> </h6></a>
              <br />
              <a target={"_blank"} href="mailto:headoffice@blockchain-mist.com"><h6 className="contactLocation"><b>dstudio@blockchain-mist.com</b> </h6></a>

              {/* <a target={"_blank"} href="mailto:headoffice@blockchain-mist.com">
                <button className="heroPageBtn">Contact Support
                  <div className="hero-btn contactUsBtn"></div>
                </button></a> */}
            </div>
          </div>

          <div className="contactUsForm" data-aos="flip-right">
            <form action="https://formspree.io/f/mvonpngz" method="POST" id="contactForm" name="contactForm">
              <div className="contactInsideForm">
                <h6>Your Email Address</h6>
                <input className="contactusFields" type="email" name="email" id="email"
                  placeholder="Email" />

                <h6>Subject</h6>
                <input className="contactusFields" type="text" name="subject" id="subject"
                  placeholder="Subject" />

                <h6>How can we help?</h6>
                <input className="contactusFields" type="text" style={{ height: '100px' }} id="message" placeholder="Message" /><br />

                <button className="heroPageBtn">Submit
                  <div className="hero-btn contactUsBtn"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="contactusMap">
          <img src={mapImg} alt="mapImg" />
        </div> */}

        <ToastContainer />
      </div >
    );
  }
}

export default App;
