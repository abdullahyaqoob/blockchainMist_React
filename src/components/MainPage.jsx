// react States
// import { useEffect, useState } from 'react'
import React, { useEffect } from "react";
import AOS from 'aos';
import { useNavigate } from "react-router-dom";

// Images
import fbIcon from "../Images/facebook-icon.png";
import istanIcon from "../Images/istagram-icon.png";
import twitterIcon from "../Images/twitter-icon.png";
import whatsappIcon from "../Images/icon-awesome-whatsapp@1x.png";
import youtubeIcon from "../Images/youtube-icon.png";
import heroImg from "../Images/hero-0-01@1x.png";
import nftImg from "../Images/NFT-img.png";
import decFinance from "../Images/decentralized-finance-img.png";
import blockchainAgnos from "../Images/blockchain-agnostic-img.png";
import backEngeering from "../Images/backend-engineering-img.png";
import dappsDev from "../Images/dapps-development-img.png";
import whyTxt from "../Images/why.png";
import purpleLine from "../Images/purple-line.png";
import devHeading from "../Images/development-heading.png";
import redLineImg from "../Images/red-line.png";
import headWithPhone from "../Images/hand-with-smartphone.png";
import dappArchi from "../Images/dapp-architecture.png";
import dappArchiImg from "../Images/dapp-architecture-img.png";
import cmsImg from "../Images/cms-img.png";
import whyUs1 from "../Images/whyUs1.png";
import whyUs2 from "../Images/whyUs2.png";
import whyUs3 from "../Images/whyUs3.png";
// import clientsPortfoliImg from "../Images/clients-image.png";
import cristile2 from "../Images/cristile2.png";
import danaille2 from "../Images/danaille2.png";
import nathan from "../Images/nathan.jpg";

// Toast
import { ToastContainer } from "react-toastify";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Portfolio from "./Portfolio";


function App() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])


  return (
    <div>
      <div className="mainPage">
        <div className="heroPage">
          <div className="socialMediaIcons">
            <ul>
              <li><a target={"_blank"} href="https://twitter.com/Blockchain_MIST"><img src={twitterIcon} alt="twitterIcon" /></a></li>
              <li><a target={"_blank"} href="https://www.instagram.com/blockchain.MIST/"><img src={istanIcon} style={{ width: '16px' }} alt="istanIcon" /></a></li>
              <li><a target={"_blank"} href="https://www.youtube.com/@blockchain-MIST"><img src={youtubeIcon} style={{ width: '19px' }} alt="youtubeIcon" /></a></li>
              <li><a target={"_blank"} href="https://www.facebook.com/BlockchainDevelopment.MIST/"><img className="fbiconClass" src={fbIcon} alt="fbIcon" style={{ width: '9px' }} /></a></li>
              <li><a target={"_blank"} href="https://api.whatsapp.com/send/?phone=16477078311&text&type=phone_number&app_absent=0"><img src={whatsappIcon} alt="whatsappIcon" /></a></li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6 heroPageContext" data-aos="slide-left">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              {/* <h1>Blockchain Development <br />for Trusted Digital World</h1> */}
              {/* <h1>We Building the trust in<br />Digital World</h1> */}
              <h1>Blockchain Development <br /> & Consultancy</h1>
              <br />
              <br />
              <p>On-demand Blockchain solutions to empower organizations to interact digitally, transparently and securely.</p>
              <br />
              <br />
              <button onClick={() => navigate("/ContactUs")} className="heroPageBtn">Consult Us
                <div className="hero-btn"></div>
              </button>
            </div>

            <div className="col-6" data-aos="slide-right">
              {/* <img src={honeycomb} alt="honeycomb" /> */}
              <img className="heroImg" src={heroImg} alt="heroImg" />
            </div>

          </div>
        </div>
      </div>
      <div className="heroPageFirstBackground">.</div>

      {/* <!-- ////////Professional Teams///////// --> */}
      <section className="services" style={{ marginTop: '-65px' }}>
        <div className="services-heading" data-aos="zoom-in-up">
          {/* <img className="service-img-1" src={services} alt="" />
            <img className="service-img-2" src={thinPurpleLine} alt="" /> */}
          <h1 className="servicesHeadingProviding">Top-Rated Blockchain <span>Development</span></h1>
          <img className="servicesHeadingPrplLne" src={purpleLine} alt="" />
          {/* <h1 className="servicesHeadingProviding">Consultancy <span> North America!</span></h1> */}
          <h1 className="servicesHeadingProviding">Consultancy <span> Offers!</span></h1>
        </div>
        <div className="service-para" data-aos="zoom-in-down">
          <p>Our Expert blockchain developers transform the business idea into a functional <br /> business solution (App/dApp) across industries globally.</p>
          {/* <p>We provide you expert blockchain developers who have passed through a rigorous selection <br /> and training program and have experience working on different blockchain products.</p> */}
        </div>
        <div className="services-container" data-aos="slide-left">
          <div className="services-box">
            <div className="services-image-place">
            <img src={backEngeering} alt="" />
            </div>
            {/* <h1>Defi Development</h1> */}
            <h1>Decentralized Finance(DeFi)</h1>
            {/* <p>We help transforms traditional centralized/controlled financial/banking system into DeFi solution to lower high processing fee, improve security and transparicy in each transaction,  and build the solution based on future proof blocks.</p> */}
            <p>We transforms traditional centralized/controlled financial systems into lower fee, improve security, transparicy, and peer-to-peer P2P transactions.</p>
            {/* <p>We Improve finance of your business by taking our DeFi development services as it will ensure a safe business environment improving business operations.</p> */}
          </div>
          <div className="services-box">
            <div className="services-image-place">
              <img src={decFinance} alt="" />
            </div>
            {/* <h1>dApps Development</h1> */}
            <h1>Decentralized Apps (Dapps)</h1>
            <p>Get Our Decentralized Applications, that we develop are based on protocols.</p>
          </div>
          <div className="services-box">
            <div className="services-image-place">
              <img src={blockchainAgnos} alt="" />
            </div>
            <h1>Crypto Exchange Development</h1>
            {/* <p style={{ lineHeight: '15px' }}>Our crypto exchange, you get the power to establish the right trading norms and we make it happen.</p> */}
            <p>Our crypto exchange, you get the power to establish the right trading norms and we make it happen.</p>
          </div>
          <div className="services-box">
            <div className="services-image-place">
              <img src={nftImg} alt="" />
            </div>
            <h1>NFTs Development</h1>
            {/* <p style={{ lineHeight: '15px' }}>Crypto users will be getting chance to create, purchase, sell and store non-fungible tokens. */}
            <p>Crypto users will be getting chance to create, purchase, sell and store non-fungible tokens.
            </p>
          </div>
          <div className="services-box">
            <div style={{ marginTop: "-12px" }} className="services-image-place">
              <img src={dappsDev} alt="" />
            </div>
            <h1>Smart Contract Development
            </h1>
            {/* <p style={{ lineHeight: '15px' }}>While we developing a smart contracts, we are focus on empowering the business with dynamic features.</p> */}
            <p>While we developing a smart contracts, we are focus on empowering the business with dynamic features.</p>
          </div>
          {/* <div className="services-box">
              <div style={{ marginTop: "-20px !important" }} className="services-image-place">
                <img src={dappsDev2} alt="" />
              </div>
              <h1>Dapps development
              </h1>
              <p style={{ lineHeight: '15px' }}>Launch an ICO or build your  own NFT marketplace</p>
            </div> */}
        </div>
      </section>

      {/* <!-- ----------Why us------------ --> */}
      <section className="why-us">
        <div className="why-heading">
          <div className="services-heading whyUsHeadingDiv" data-aos="zoom-in-up">
            <h1 className="servicesHeadingProviding whyUsHeading"><img src={whyTxt} alt="" style={{ width: '80px' }} /> <span style={{ color: 'rgb(128, 128, 128, 1)' }}>Choose Us</span></h1>
            <img className="servicesHeadingPrplLne whyUsPurpleLine" style={{ width: '150px', height: '25px', marginLeft: '120px' }} src={purpleLine} alt="" />
          </div>
          {/* <img src={whyTxt} alt="" />
              <img className="why-img-2" src={purpleLine} alt="" />
              <h1>Choose Us</h1> */}

        </div>
        <div className="why-para" data-aos="zoom-in-down">
          <p>We provide you expert blockchain developers who have passed through a rigorous selection <br />
            and training program and have experience working on different blockchain products.</p>
        </div>
        <div className="why-container" data-aos="slide-left">
          <div className="why-box">
            <div className="why-image-place">
              {/* <img/ style={{ width: "100px" }} src={whyUs1} alt="whyUs1" /> */}
              <img src={whyUs1} alt="whyUs1" />
            </div>
            <h1>Experienced Team</h1>
            {/* <p>Experienced in Golang, Solidity,
                Node JS and JavaScript
                Experienced in Golang, Solidity,
                Node JS and JavaScript
              </p> */}
            <br />
          </div>
          <div className="why-box">
            <div className="why-image-place">
              {/* <img style={{ marginTop: "20px" }} src={whyUs2} alt="whyUs2" /> */}
              <img src={whyUs2} alt="whyUs2" />
            </div>
            <h1 style={{ paddingTop: "15px" }}>On Time Delivery</h1>
            {/* <p>Experienced in Golang, Solidity,
                Node JS and JavaScript
                Experienced in Golang, Solidity,
                Node JS and JavaScript
              </p> */}
            <br />
          </div>
          <div className="why-box">
            <div className="why-image-place">
              {/* <img style={{ marginTop: "20px", width: "180px" }} src={whyUs3} alt="whyUs3" /> */}
              <img src={whyUs3} alt="whyUs3" />
            </div>
            <br />
            <h1>24 X 7 Support</h1>
            <br />
            {/* <p>Experienced in Golang, Solidity,
                Node JS and JavaScript
                Experienced in Golang, Solidity,
                Node JS and JavaScript</p> */}
          </div>
        </div>
      </section>

      {/* <!-- ---------dapps development services------------ --> */}
      <section className="dapps-development-services">
        <div className="dapps-development-services-container">
          <div className="left-dapps-services">
            <div className="dapps-services-content" data-aos="zoom-out">
              <div className="dapps-services-heading">
                <h1>dApps</h1>
                <div className="development-heading-img">
                  <img src={devHeading} alt="devHeading" className="development-img-1" />
                  <img src={redLineImg} alt="redLineImg" className="development-img-2" />
                </div>
                <h1 style={{position: 'relative', top: '-35px'}}><span> Services</span></h1>
              </div>
              <p className="dappsPara">We design, build and manage a decentralized peer-to-peer portfolio for a wide array of industries
                including healthcare, supply chain and logistics, utilities, communications, financial etc. Our
                expert team knows to convert ideas into live product that can bring growth</p>
            </div>
            <div className="dapps-services-table" data-aos="zoom-in">
              <div className="dapps-services-box">
                <div className="img-portion">
                  <div className="img-1">
                    <div className="img-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-check-circle" viewBox="0 0 16 16">
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                          d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </div>
                  </div>

                </div>
                <h1>Ethereum App Development</h1>
              </div>
              <div className="dapps-services-box">
                <div className="img-portion">
                  <div className="img-1">
                    <div className="img-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-check-circle" viewBox="0 0 16 16">
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                          d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </div>
                  </div>

                </div>
                <h1>dApp Design & Integration</h1>
              </div>
              <div className="dapps-services-box">
                <div className="img-portion">
                  <div className="img-1">
                    <div className="img-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-check-circle" viewBox="0 0 16 16">
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                          d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </div>
                  </div>

                </div>
                <h1>Smart Contract Development</h1>
              </div>
              <div className="dapps-services-box">
                <div className="img-portion">
                  <div className="img-1">
                    <div className="img-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-check-circle" viewBox="0 0 16 16">
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                          d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </div>
                  </div>

                </div>
                <h1>dApp Testing</h1>
              </div>
              <div className="dapps-services-box">
                <div className="img-portion">
                  <div className="img-1">
                    <div className="img-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-check-circle" viewBox="0 0 16 16">
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                          d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </div>
                  </div>

                </div>
                <h1>Decentralized Storage</h1>
              </div>
              <div className="dapps-services-box">
                <div className="img-portion">
                  <div className="img-1">
                    <div className="img-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-check-circle" viewBox="0 0 16 16">
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                          d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </div>
                  </div>

                </div>
                <h1 style={{ marginTop: "-10px" }}>dApp Upgrade Service</h1>
              </div>
            </div>
          </div>
          <div className="right-dapps-services" data-aos="slide-right">
            <img src={headWithPhone} alt="headWithPhone" className="holdingSmartPhoneImg" />
          </div>
        </div>
      </section>
      {/* <!-- dapp architecture --> */}
      <section className="dapp-architecture" data-aos="zoom-in">
        <div className="dapp-architecture-heading">
          <img src={dappArchi} alt="dappArchi" />
        </div>
        <div className="dapp-architecture-image">
          <img src={dappArchiImg} alt="dappArchiImg" />
        </div>
      </section>



      {/* <!-- ---------Web and mobile apps development------------ --> */}
      <section className="dapps-development-services">
        <div className="webMobDevSection" data-aos="zoom-out">
          <h5>Are You Looking For </h5><h1>Web & Mobile Apps <span style={{ color: '#8B76D9' }}> <img className="webDevPurpleLine" src={purpleLine} alt="" />Development?</span></h1>
          <br />
          <br />
          <p>We have an expert team to develop the Web and Mobile Application We will builds creative websites and mobile applications that help companies increase their revenues, brand awareness and customer attraction.</p>
        </div>
        <div className="dapps-development-services-container webApps-development-services-container">
          <div className="left-webAndMob-services" style={{ paddingTop: '80px' }} data-aos="slide-left">
            <img src={cmsImg} alt="cmsImg" />

          </div>
          <div className="right-dapps-services" style={{ width: '51%' }}>
            {/* <div className="dapps-services-content">
                <div className="dapps-services-heading">
                  <h1>Dapps</h1>
                  <div className="development-heading-img">
                    <img src={devHeading} alt="devHeading" className="development-img-1" />
                    <img src={redLineImg} alt="redLineImg" className="development-img-2" />
                  </div>
                  <h1><span> Services</span></h1>
                </div>
                <p>We design, build and manage a decentralized peer-to-peer portfolio for a wide array of industries
                  including healthcare, supply chain and logistics, utilities, communications, financial etc. Our
                  expert team knows to convert ideas into live product that can bring growth</p>
              </div> */}
            <div className="dapps-services-table webAppsTable" style={{ marginTop: '180px' }} data-aos="zoom-in">
              <div className="dapps-services-box">
                <div className="img-portion">
                  <div className="img-1">
                    <div className="img-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-check-circle" viewBox="0 0 16 16">
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                          d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </div>
                  </div>

                </div>
                <h1>Blockchain Game Development</h1>
              </div>
              <div className="dapps-services-box">
                <div className="img-portion">
                  <div className="img-1">
                    <div className="img-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-check-circle" viewBox="0 0 16 16">
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                          d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </div>
                  </div>

                </div>
                <h1>Cryptocurrency Development</h1>
              </div>
              <div className="dapps-services-box">
                <div className="img-portion">
                  <div className="img-1">
                    <div className="img-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-check-circle" viewBox="0 0 16 16">
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                          d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </div>
                  </div>

                </div>
                <h1>Mobile App Development</h1>
              </div>
              <div className="dapps-services-box">
                <div className="img-portion">
                  <div className="img-1">
                    <div className="img-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-check-circle" viewBox="0 0 16 16">
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                          d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </div>
                  </div>

                </div>
                <h1>Ecommerce Development</h1>
              </div>
              <div className="dapps-services-box">
                <div className="img-portion">
                  <div className="img-1">
                    <div className="img-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-check-circle" viewBox="0 0 16 16">
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                          d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </div>
                  </div>

                </div>
                <h1>Web Design</h1>
              </div>
              <div className="dapps-services-box">
                <div className="img-portion">
                  <div className="img-1">
                    <div className="img-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-check-circle" viewBox="0 0 16 16">
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                          d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </div>
                  </div>

                </div>
                <h1 style={{ marginTop: "-10px" }}>Web Development</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- portfolio --> */}
      {/* <section className="portfolio">
          <div className="portfolio-heading" data-aos="zoom-in">
            <h1>Our <span>Work</span></h1>
            <img src={purpleLine} alt="" />
          </div>
          <div className="portfolio-para" data-aos="zoom-in">
            <p>Whether it's a decentralised exchange, digital wallet or a new blockchain network, we are a one-stop shop
              for blockchain development.</p>
          </div>
          <div className="portfolio-table">
            <div className="portfolio-box">
              <div className="portfolio-left-side firstPortfolioImg">
                <div className="portfolio-left-side-img" data-aos="slide-left">
                  <img src={veeroTestimonials} alt="veeroTestimonials" />
                </div>
              </div>
            </div>
            <div className="portfolio-box" style={{ marginLeft: '70px' }} data-aos="slide-right">
              <div className="portfolio-right-side">
                <div className="feature-box">
                  <h1>Features</h1>
                </div>
                <div className="feature-heading firstPortfolioDiv">
                  <h1>Crypto and Fiat <span> Currency
                    Exchange </span></h1>
                  <p>GSU Exchange is a secure, scalable and ultra low latency
                    cryptocurrency trading platform to match with high
                    volatility of the crypto industry. It offers easy to use flows;
                    deposits and withdrawals of currencies and cryptos,
                    trading and transactions . . . .
                  </p>
                  <span>November 1 , 2022
                  </span>

                  <div className="feature-btn">
                    <button className="feature-btn-btn">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-box" data-aos="slide-right">
              <div className="portfolio-right-side">
                <div style={{ marginLeft: "10px" }} className="feature-box">
                  <h1>Features</h1>
                </div>
                <div className="feature-heading secondPortfolioDiv">
                  <h1 style={{ marginLeft: "10px" }}>Crypto and Fiat <span> Currency
                    Exchange </span></h1>
                  <p style={{ marginLeft: "10px", width: '106%' }}>GSU Exchange is a secure, scalable and ultra low latency
                    cryptocurrency trading platform to match with high
                    volatility of the crypto industry. It offers easy to use flows;
                    deposits and withdrawals of currencies and cryptos,
                    trading and transactions . . . .
                  </p>
                  <span style={{ marginLeft: "10px" }}>November 1 , 2022
                  </span>
                  <div style={{ marginLeft: "10px" }} className="feature-btn">
                    <button className="feature-btn-btn">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-box">
              <div className="portfolio-left-side" data-aos="slide-left">
                <img src={generateNFTPortfolio} alt="" />
              </div>
            </div>
          </div>
        </section> */}

      <Portfolio />


      {/* <!-- ---------clients----------- --> */}
      <section className="clients">
        {/* <center>
            <div className="ellipse">
              <div className="ellipseCircle"></div>
              <div className="ellipseCircle ellipseCircle2"></div>
              <div className="ellipseCircle ellipseCircle2"></div>
            </div>
          </center> */}

        <div className="clients-heading-content">
          <div className="clients-heading" data-aos="zoom-in">
            <h1>Our <span> Clients </span>Testimonial</h1>
            <img src={purpleLine} alt="purpleLine" className="clients-heading-img-2" />
          </div>
        </div>
        <div className="clients-para" data-aos="zoom-in">
          <p>
            What our Client’s says about MIST services?
            {/* Whether it’s a decentralised exchange, digital wallet or a new blockchain network, we are a
              one-stop shop for blockchain development. */}
          </p>
        </div>
        <section className="clients" style={{marginTop: '40px'}}>
          <div className="client">
            <div className="client-column" data-aos="slide-right">
              <div className="client-image">
                <img src={cristile2} alt="cristile2" />
              </div>
              <p><svg className="u-svg-content" viewBox="0 0 95.333 95.332" x="0px" y="0px" style={{ width: "1em" }}>
                <g>
                  <g>
                    <path
                      d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793    c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045    s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076    c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002    c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z">
                    </path>
                    <path
                      d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019    c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23    c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16    c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312    c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z">
                    </path>
                  </g>
                </g>
              </svg>&nbsp;&nbsp; Blockchain-MIST was always on time, always extremely communicative, and always friendly with a "I
                can do it" attitude. Team worked with my schedule and was always extremely professional and trustworthy. They
                have the knowledge to complete a very complex project within a reasonable budget.&nbsp;&nbsp;<svg
                  className="u-svg-content" viewBox="0 0 98.829 98.829" x="0px" y="0px" style={{ width: "1em" }}>
                  <g>
                    <g>
                      <path
                        d="M96.76,41.603C91.511,22.831,78.562,9.204,65.975,9.204c-1.011,0-2.021,0.088-3.005,0.262    c-0.558,0.098-1.046,0.426-1.348,0.902c-0.301,0.479-0.386,1.061-0.233,1.605l2.591,9.268c0.25,0.895,1.113,1.5,2.01,1.459    l0.206-0.004c4.668,0,13.199,6.996,17.548,22.545c0.172,0.617,0.335,1.248,0.492,1.906c-4.882-2.416-10.706-2.975-15.98-1.506    C56.358,48.97,49.388,61.356,52.714,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.046-0.834    c7.846-2.193,13.745-8.707,16.611-18.338C99.521,61.764,99.456,51.249,96.76,41.603z">
                      </path>
                      <path
                        d="M14.088,9.206c-1.009,0-2.02,0.086-3.003,0.26c-0.557,0.096-1.046,0.426-1.347,0.902    c-0.301,0.479-0.386,1.061-0.234,1.605l2.592,9.268c0.25,0.895,1.097,1.5,2.01,1.459l0.204-0.004    c4.668,0,13.2,6.996,17.549,22.545c0.173,0.621,0.336,1.252,0.492,1.906c-4.884-2.416-10.706-2.975-15.98-1.506    C4.475,48.97-2.497,61.356,0.831,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.047-0.834    c7.845-2.193,13.744-8.707,16.611-18.338c2.586-8.689,2.522-19.205-0.175-28.852C39.625,22.831,26.678,9.206,14.088,9.206z">
                      </path>
                    </g>
                  </g>
                </svg>
              </p>
              <h2>Christie Ross</h2>
              <h3>CEO of you've gotmail again</h3>
            </div>
            <div className="client-column">
              <div className="client-image">
                <img src={danaille2} alt="danaille2" />
              </div>
              <p style={{ padding: "30px 48px" }}><svg className="u-svg-content" viewBox="0 0 95.333 95.332" x="0px" y="0px"
                style={{ width: "1em" }}>
                <g>
                  <g>
                    <path
                      d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793    c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045    s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076    c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002    c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z">
                    </path>
                    <path
                      d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019    c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23    c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16    c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312    c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z">
                    </path>
                  </g>
                </g>
              </svg>&nbsp;&nbsp; Blockchain-MIST continues to deliver high-quality blockchain development services that have allowed
                the company to generate interest from potential users and investors. Their team is timely and relatively
                responsive. They're also competitively priced.&nbsp;&nbsp;
                <svg className="u-svg-content" viewBox="0 0 98.829 98.829" x="0px" y="0px" style={{ width: "1em" }}>
                  <g>
                    <g>
                      <path
                        d="M96.76,41.603C91.511,22.831,78.562,9.204,65.975,9.204c-1.011,0-2.021,0.088-3.005,0.262    c-0.558,0.098-1.046,0.426-1.348,0.902c-0.301,0.479-0.386,1.061-0.233,1.605l2.591,9.268c0.25,0.895,1.113,1.5,2.01,1.459    l0.206-0.004c4.668,0,13.199,6.996,17.548,22.545c0.172,0.617,0.335,1.248,0.492,1.906c-4.882-2.416-10.706-2.975-15.98-1.506    C56.358,48.97,49.388,61.356,52.714,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.046-0.834    c7.846-2.193,13.745-8.707,16.611-18.338C99.521,61.764,99.456,51.249,96.76,41.603z">
                      </path>
                      <path
                        d="M14.088,9.206c-1.009,0-2.02,0.086-3.003,0.26c-0.557,0.096-1.046,0.426-1.347,0.902    c-0.301,0.479-0.386,1.061-0.234,1.605l2.592,9.268c0.25,0.895,1.097,1.5,2.01,1.459l0.204-0.004    c4.668,0,13.2,6.996,17.549,22.545c0.173,0.621,0.336,1.252,0.492,1.906c-4.884-2.416-10.706-2.975-15.98-1.506    C4.475,48.97-2.497,61.356,0.831,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.047-0.834    c7.845-2.193,13.744-8.707,16.611-18.338c2.586-8.689,2.522-19.205-0.175-28.852C39.625,22.831,26.678,9.206,14.088,9.206z">
                      </path>
                    </g>
                  </g>
                </svg>
              </p>
              <h2>Daniella Mercer</h2>
              <h3>CEO of Youga Buddy</h3>
            </div>
            <div className="client-column" data-aos="slide-left">
              <div className="client-image">
                <img src={nathan} alt="" />
              </div>
              <p style={{ padding: "30px 20px" }}><svg className="u-svg-content" viewBox="0 0 95.333 95.332" x="0px" y="0px"
                style={{ width: "1em" }}>
                <g>
                  <g>
                    <path
                      d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793    c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045    s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076    c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002    c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z">
                    </path>
                    <path
                      d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019    c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23    c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16    c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312    c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z">
                    </path>
                  </g>
                </g>
              </svg>&nbsp; &nbsp; Blockchain-MIST provides ongoing high-quality development support at an affordable price point. In
                addition to successfully fixing a lot of issues created by previous developers, their team has been extremely
                communicative, proactive, and good about listening to client needs throughout the process.&nbsp;&nbsp;<svg
                  className="u-svg-content" viewBox="0 0 98.829 98.829" x="0px" y="0px" style={{ width: "1em" }}>
                  <g>
                    <g>
                      <path
                        d="M96.76,41.603C91.511,22.831,78.562,9.204,65.975,9.204c-1.011,0-2.021,0.088-3.005,0.262    c-0.558,0.098-1.046,0.426-1.348,0.902c-0.301,0.479-0.386,1.061-0.233,1.605l2.591,9.268c0.25,0.895,1.113,1.5,2.01,1.459    l0.206-0.004c4.668,0,13.199,6.996,17.548,22.545c0.172,0.617,0.335,1.248,0.492,1.906c-4.882-2.416-10.706-2.975-15.98-1.506    C56.358,48.97,49.388,61.356,52.714,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.046-0.834    c7.846-2.193,13.745-8.707,16.611-18.338C99.521,61.764,99.456,51.249,96.76,41.603z">
                      </path>
                      <path
                        d="M14.088,9.206c-1.009,0-2.02,0.086-3.003,0.26c-0.557,0.096-1.046,0.426-1.347,0.902    c-0.301,0.479-0.386,1.061-0.234,1.605l2.592,9.268c0.25,0.895,1.097,1.5,2.01,1.459l0.204-0.004    c4.668,0,13.2,6.996,17.549,22.545c0.173,0.621,0.336,1.252,0.492,1.906c-4.884-2.416-10.706-2.975-15.98-1.506    C4.475,48.97-2.497,61.356,0.831,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.047-0.834    c7.845-2.193,13.744-8.707,16.611-18.338c2.586-8.689,2.522-19.205-0.175-28.852C39.625,22.831,26.678,9.206,14.088,9.206z">
                      </path>
                    </g>
                  </g>
                </svg></p>
              <h2>Mark Dressel</h2>
              <h3>CFO of Nexus Hospitality</h3>
            </div>
          </div>
        </section>
        {/* <div className="clients-img">
            <img src={clientsPortfoliImg} alt="" />
          </div> */}
      </section>


      <ToastContainer />
    </div>
  );
}

export default App;
