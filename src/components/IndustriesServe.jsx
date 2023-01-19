// react States
// import { useEffect, useState } from 'react'
import React, { Component } from "react";
import AOS from 'aos';

// Images
import services_Blockchain from "../Images/services/services_Blockchain.png";
import services_UxUI from "../Images/services/services_UxUI.png";
import services_Apps from "../Images/services/services_Apps.png";
import services1 from "../Images/services/services-01.png";

// Toast
// import { ToastContainer, toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// css
import '../css/industriesServe.css'

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
      <div className="industriesServeRoot">

        <h3 className="industriesServeHeading">Our <span style={{ color: '#8671DB' }}>Services</span></h3>
        <p className="industriesServeSubHeading">We assist companies and enterprises in building, testing, and deploying apps while using the power of blockchain and cryptocurrencies across industries.</p>
        <center>
          <img className="servicesWeServeImg" src={services1} alt="services1" data-aos="flip-left" />
        </center>

        <div className="services-container ourTeamUsers mainServicesservices industriesServeFirstBoxes">
          <div className="services-box" style={{ marginTop: '400px' }} data-aos="slide-left">
            <img src={services_Blockchain} alt="" />
            <h1>Blockchain & <span style={{ color: '#8671DB' }}><br /> Web3</span></h1>
            <p>Our services include Defi, protocol engineering, L2 research, node infrastructure managment, trading systems, bridge and smart contract security audits. We will assist you with the research, design, and development of your Web3 project..</p>
          </div>
          <div className="services-box" style={{ marginTop: '200px' }}>
            <img src={services_UxUI} alt="" />
            <h1>UX UI <span style={{ color: '#8671DB' }}> Design</span></h1>
            <p>Our services include Defi, protocol engineering, L2 research, node infrastructure managment, trading systems, bridge and smart contract security audits. We will assist you with the research, design, and development of your Web3 project..</p>
          </div>
          <div className="services-box" data-aos="slide-right">
            <img src={services_Apps} alt="" />
            <h1>Web & Mobile <span style={{ color: '#8671DB' }}><br /> Apps</span></h1>
            <p>Our services include Defi, protocol engineering, L2 research, node infrastructure managment, trading systems, bridge and smart contract security audits. We will assist you with the research, design, and development of your Web3 project..</p>
          </div>
        </div>

        <div className="industriesServeCOntainer">
          <div className="industriesServeWorkingCOntainer">
            <h2 className="servicesHeadingCaption industriesServeHeadingg">Industries We <br />Serve</h2>
            <div className="services-container ourTeamUsers mainServicesservices subServicesContainer mainServices industriesServeContainer" data-aos="flip-left">
              <div className="services-box" style={{ marginTop: '400px' }}>
                <img src={services_Blockchain} alt="" />
                <h1>Blockchain & <span style={{ color: '#8671DB' }}><br /> Web3</span></h1>
                <p>The healthcare industry is an aggregation and integration of sectors within an economic system that provides goods and services for the treatment of patients with curative, preventive, rehabilitative and palliative care.</p>
              </div>
              <div className="services-box" style={{ marginTop: '200px' }}>
                <img src={services_UxUI} alt="" />
                <h1>UX UI <span style={{ color: '#8671DB' }}> Design</span></h1>
                <p>Fintech is a portmanteau for “financial technology.” It’s a catch-all term for technology used to augment, streamline, digitize or disrupt traditional financial services.</p>
              </div>
              <div className="services-box">
                <img src={services_Apps} alt="" />
                <h1>Web & Mobile <span style={{ color: '#8671DB' }}><br /> Apps</span></h1>
                <p>Practically every product that reaches an end-user represents the cumulative effort of many organizations and stakeholders. These are referred to collectively as the supply chain.</p>
              </div>

              <div className="services-box" style={{ marginTop: '400px', position: 'relative', top: '-380px' }}>
                <img src={services_Blockchain} alt="" />
                <h1>Healthcare</h1>
                <p>The healthcare industry is an aggregation and integration of sectors within an economic system that provides goods and services for the treatment of patients with curative, preventive, rehabilitative and palliative care.</p>
              </div>
              <div className="services-box" style={{ marginTop: '200px', position: 'relative', top: '-380px' }}>
                <img src={services_UxUI} alt="" />
                <h1><span style={{ color: '#8671DB' }}>Fintech </span> & banking</h1>
                <p>Fintech is a portmanteau for “financial technology.” It’s a catch-all term for technology used to augment, streamline, digitize or disrupt traditional financial services.</p>
              </div>
              <div className="services-box" style={{ position: 'relative', top: '-380px' }}>
                <img src={services_Apps} alt="" />
                <h1>Supply <span style={{ color: '#8671DB' }}>Chain</span></h1>
                <p>Practically every product that reaches an end-user represents the cumulative effort of many organizations and stakeholders. These are referred to collectively as the supply chain.</p>
              </div>
            </div>

          </div>
        </div>

        <ToastContainer />
      </div >
    );
  }
}

export default App;
