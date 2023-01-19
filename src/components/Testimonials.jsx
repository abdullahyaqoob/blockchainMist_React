// react States
// import { useEffect, useState } from 'react'
import React, { Component } from "react";
import AOS from 'aos';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
// Images
import testimonialsHeroImg from "../Images/testimonialsHeroImg.png";
import purpleLine from "../Images/purple-line.png";
import testiStar from "../Images/testiStar.png";
import testiSlider1stImg from "../Images/testiSlider1stImg.png";
import testiLeftArrow from "../Images/testiLeftArrow.png";
import testiRightArrow from "../Images/testiRightArrow.png";

// Toast
// import { ToastContainer, toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// css
import '../css/ourTeam.css'
import '../css/testimonials.css'

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
    let testimonialsContent = <div className="testimonialsTesti" data-aos="zoom-in">
      <p className="captionHeading sliderHeadingCaption">
        Whether it’s a decentralised exchange, digital wallet or a new blockchain network, we are a one-stop shop for blockchain development.
      </p>
      <div className="flexContainer">
        {/* <span><img src={testiLeftArrow} alt="testiLeftArrow" /></span> */}
        <span style={{ color: 'white' }}>.</span>
        <img style={{ width: '150px' }} src={testiSlider1stImg} alt="testiSlider1stImg" />
        <span style={{ color: 'white' }}>.</span>
        {/* <span><img src={testiRightArrow} alt="testiRightArrow" /></span> */}
      </div>

      <p className="testiDescription">Blockchain-Mist provides ongoing high-quality development support at an affordable price point. In addition to successfully fixing a lot of issues created by previous developers, their team has been extremely communicative, proactive, and good about listening to client needs throughout the process.</p>
      <h1><span style={{ color: 'black' }}>Daniella</span> Mercer</h1>
      <h1>United States</h1>
      <p className="startsDiv">
        <img src={testiStar} alt="testiStar" />
        <img src={testiStar} alt="testiStar" />
        <img src={testiStar} alt="testiStar" />
        <img src={testiStar} alt="testiStar" />
        <img src={testiStar} alt="testiStar" />
      </p>
    </div>

    return (
      <div>
        <div className="ourTeamRoot">
          <div className="heroSecOurTeam">
            <div className="row testiHeroRow" style={{ marginBottom: '150px' }}>
              <div className="col-6" data-aos="slide-left">
                <h5>Testimonials</h5>
                <h1>What Our
                  <span>
                    <img className="testiPurpleLine" src={purpleLine} alt="" />
                    Cusomers</span> Say <br /> About Us
                </h1>
                <p>Whether it’s a decentralised exchange, digital wallet or a new blockchain network, we are a one-stop shop for blockchain development.</p>
              </div>
              <div className="col-6 testiHeroImgDiv" data-aos="slide-right">
                <img className="testiHeroImg" src={testimonialsHeroImg} alt="testimonialsHeroImg" />
              </div>
            </div>
            {/* <div className="testimonialsTesti" data-aos="zoom-in">
              <p className="captionHeading">
                Whether it’s a decentralised exchange, digital wallet or a new blockchain network, we are a one-stop shop for blockchain development.
              </p>
              <div className="flexContainer">
                <span><img src={testiLeftArrow} alt="testiLeftArrow" /></span>
                <img src={testiSlider1stImg} alt="testiSlider1stImg" />
                <span><img src={testiRightArrow} alt="testiRightArrow" /></span>
              </div>

              <p className="testiDescription">Blockchain-Mist provides ongoing high-quality development support at an affordable price point. In addition to successfully fixing a lot of issues created by previous developers, their team has been extremely communicative, proactive, and good about listening to client needs throughout the process.</p>
              <h1><span style={{ color: 'black' }}>Daniella</span> Mercer</h1>
              <h1>United States</h1>
              <p className="startsDiv">
                <img src={testiStar} alt="testiStar" />
                <img src={testiStar} alt="testiStar" />
                <img src={testiStar} alt="testiStar" />
                <img src={testiStar} alt="testiStar" />
                <img src={testiStar} alt="testiStar" />
              </p>
            </div>

            <center>
              <div className="ellipse ourTeamEllipse">
                <div className="ellipseCircle"></div>
                <div className="ellipseCircle ellipseCircle2"></div>
                <div className="ellipseCircle ellipseCircle2"></div>
              </div>
            </center> */}

            {/* SSSSSSSSSLLLLLLLLLLLLLIIIIIIIIIIIIIIDDDDDDDDDDDDDDEEEEEEEEEEEERRRRRRRRRRR */}
            <div className="sliderRootContainer">
              <Carousel>
                <div>
                  {testimonialsContent}
                </div>
                <div>
                  {testimonialsContent}
                </div>
                <div>
                  {testimonialsContent}
                </div>
              </Carousel>
            </div>
            {/* end SSSSSSSSSLLLLLLLLLLLLLIIIIIIIIIIIIIIDDDDDDDDDDDDDDEEEEEEEEEEEERRRRRRRRRRR */}

          </div>
        </div>
        <ToastContainer />
      </div >
    );
  }
}

export default App;
