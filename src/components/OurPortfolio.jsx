// react States
// import { useEffect, useState } from 'react'
import React, { Component } from "react";
import AOS from 'aos';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

// Images
import purpleLine from "../Images/purple-line.png";
import veeroTestimonials from "../Images/veeroTestimonials.png";
import generateNFTPortfolio from "../Images/generateNFTPortfolio.png";
import ourPortfolioPortImg from "../Images/ourPortfolioPortImg.png";
import portfolioHeroImg from "../Images/portfolioHeroImg.png";
import testiLeftArrow from "../Images/testiLeftArrow.png";
import testiRightArrow from "../Images/testiRightArrow.png";

// Toast
// import { ToastContainer, toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// css
import '../css/ourTeam.css'
import '../css/ourPortfolio.css'

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
    let testimonialsContent =
      <div className="testimonialsTesti ourPortSection" style={{ marginTop: '60px' }}>
        <h2>Web design that <span style={{ color: '#8d6ed8' }}>Customers</span><br />enthusiastic</h2>
        <div className="flexContainer ourPortSectionFlex">
          <span><img src={testiLeftArrow} alt="testiLeftArrow" /></span>
          <img src={ourPortfolioPortImg} alt="ourPortfolioPortImg" />
          <span><img src={testiRightArrow} alt="testiRightArrow" /></span>
        </div>
        <h1><span style={{ color: 'black' }}>GARUDA GLOBAL CARRIERS</span></h1>
        <h1>CANADA</h1>

        <p className="testiDescription">Well, I developed and integrated webhooks and cron jobs to get meetings data from google calendar and then participants data from the zoom server using javascript regular expressions and then sending emails to other participants of zoom meeting by calculating time difference according to each time zone, only if the user will be on another call and only particular time left in starting the scheduled group meeting with authorizations. Such as Google, Facebook, zoom login then Authentications.</p>
      </div>

    return (
      <div>
        <div className="heroPage ourPortfolioRoot">
          <div className="row portFirstRow">
            <div className="col-6 heroPageContext ourPortfolioContext" data-aos="slide-left">
              <h5>Our Team</h5>
              <h1>Individual <span style={{ color: '#8d6ed8' }}>Websites Designs</span> <br />Which Our <span><img className="ourPortfolioPurpleLIn" src={purpleLine} alt="" /> Customers Would</span> <br /> Love</h1>
              <p>Whether it’s a decentralised exchange, digital wallet or a new blockchain network, we are a one-stop shop for blockchain development.</p>
              <button className="heroPageBtn portBtn">Request Website Creation
                <div className="hero-btn portBtn"></div>
              </button>
            </div>

            <div className="col-6" data-aos="slide-right">
              {/* <img src={honeycomb} alt="honeycomb" /> */}
              <img className="heroImg portHeroImg" src={portfolioHeroImg} alt="portfolioHeroImg" />
            </div>

          </div>
        </div>
        <div className="portPorfolioSection" data-aos="zoom-out">
          {/* <div className="testimonialsTesti ourPortSection">
            <h2>Web design that <span style={{ color: '#8d6ed8' }}>Customers</span><br />enthusiastic</h2>
            <div className="flexContainer ourPortSectionFlex">
              <span><img src={testiLeftArrow} alt="testiLeftArrow" /></span>
              <img src={ourPortfolioPortImg} alt="ourPortfolioPortImg" />
              <span><img src={testiRightArrow} alt="testiRightArrow" /></span>
            </div>
            <h1><span style={{ color: 'black' }}>GARUDA GLOBAL CARRIERS</span></h1>
            <h1>CANADA</h1>

            <p className="testiDescription">Well, I developed and integrated webhooks and cron jobs to get meetings data from google calendar and then participants data from the zoom server using javascript regular expressions and then sending emails to other participants of zoom meeting by calculating time difference according to each time zone, only if the user will be on another call and only particular time left in starting the scheduled group meeting with authorizations. Such as Google, Facebook, zoom login then Authentications.</p>
          </div> */}


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




          {/* <div class="portfolio-table">
            <div class="portfolio-box">
              <div class="portfolio-left-side">
                <div class="portfolio-left-side-img">
                  <img src={veeroTestimonials} alt="veeroTestimonials" />
                </div>
              </div>
            </div>
            <div class="portfolio-box" style={{ marginLeft: '70px' }}>
              <div class="portfolio-right-side">
                <div class="feature-box">
                  <h1>Features</h1>
                </div>
                <div class="feature-heading">
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
                  <div class="feature-btn">
                    <button class="feature-btn-btn">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-box">
              <div class="portfolio-right-side">
                <div style={{ marginLeft: "10px" }} class="feature-box">
                  <h1>Features</h1>
                </div>
                <div class="feature-heading">
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
                  <div style={{ marginLeft: "10px" }} class="feature-btn">
                    <button class="feature-btn-btn">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-box">
              <div class="portfolio-left-side">
                <img src={generateNFTPortfolio} alt="" />
              </div>
            </div>
          </div> */}
          <div className="portfolio">
            <div className="portfolio-table">
              <div className="portfolio-box">
                <div className="portfolio-left-side firstPortfolioImg">
                  <div className="portfolio-left-side-img" data-aos="slide-left">
                    <img src={veeroTestimonials} alt="veeroTestimonials" />
                  </div>
                </div>
              </div>
              <div className="portfolio-box" style={{ marginLeft: '70px' }}>
                <div className="portfolio-right-side" data-aos="slide-right">
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
              <div className="portfolio-box">
                <div className="portfolio-right-side" data-aos="slide-left">
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

                <div className="portfolio-left-side" data-aos="slide-right">
                  <img src={generateNFTPortfolio} alt="" />
                </div>
              </div>

            </div>

            <div className="portfolio-table">
              <div className="portfolio-box">
                <div className="portfolio-left-side firstPortfolioImg">
                  <div className="portfolio-left-side-img" data-aos="slide-left">
                    <img src={veeroTestimonials} alt="veeroTestimonials" />
                  </div>
                </div>
              </div>
              <div className="portfolio-box" style={{ marginLeft: '70px' }}>
                <div className="portfolio-right-side" data-aos="slide-right">
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
              <div className="portfolio-box">
                <div className="portfolio-right-side" data-aos="slide-left">
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

                <div className="portfolio-left-side" data-aos="slide-right">
                  <img src={generateNFTPortfolio} alt="" />
                </div>
              </div>

            </div>
          </div>




        </div>

        <center>
          <div className="ellipse ourPortfolioEllipse">
            <div className="ellipseCircle"></div>
            <div className="ellipseCircle ellipseCircle2"></div>
            <div className="ellipseCircle ellipseCircle2"></div>
          </div>
        </center>
        <ToastContainer />
      </div >
    );
  }
}

export default App;
