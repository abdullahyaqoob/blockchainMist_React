// react States
// import { useEffect, useState } from 'react'
import React, { Component } from "react";
import AOS from 'aos';

// Images
import purpleLine from "../Images/purple-line.png";

// Toast
// import { ToastContainer, toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// css
import '../css/ourTeam.css'
import '../css/testimonials.css'
import '../css/whyUs.css'

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
        <div className="whyUsRoot">
          <h2><span><img src={purpleLine} alt="purpleLine" /> Why</span> Us</h2>
          <p>10 reasons why you should work with us</p>

          <div className="reasonsSection">
            <div className="row whyUsRow">
              <div className="col-6" data-aos="slide-left">
                <div className="handledWidthWhyUs">
                  <div className="row whyUsSecRow">
                    <div className="col-2">
                      <div className="whyUsIndexCircle">
                        <h1>1</h1>
                      </div>
                    </div>
                    <div className="col-10">
                      <h5>We have years of experience</h5>
                      <p>With our years of experience in web design and online marketing, we can optimally adapt your web design to your marketing activities through our network understanding.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6" data-aos="slide-right">
                <div className="handledWidthWhyUs">
                  <div className="row whyUsSecRow">
                    <div className="col-2">
                      <div className="whyUsIndexCircle">
                        <h1>2</h1>
                      </div>
                    </div>
                    <div className="col-10">
                      <h5>Long-term care</h5>
                      <p>We don't just create your site, we look after it for the long term. This includes maintenance, change requests and ongoing technical support to achieve higher sales in the long term.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row whyUsRow">
              <div className="col-6" data-aos="slide-left">
                <div className="handledWidthWhyUs">
                  <div className="row whyUsSecRow">
                    <div className="col-2">
                      <div className="whyUsIndexCircle">
                        <h1>3</h1>
                      </div>
                    </div>
                    <div className="col-10">
                      <h5>We have years of experience</h5>
                      <p>With our years of experience in web design and online marketing, we can optimally adapt your web design to your marketing activities through our network understanding.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6" data-aos="slide-right">
                <div className="handledWidthWhyUs">
                  <div className="row whyUsSecRow">
                    <div className="col-2">
                      <div className="whyUsIndexCircle">
                        <h1>4</h1>
                      </div>
                    </div>
                    <div className="col-10">
                      <h5>We have years of experience</h5>
                      <p>We don't just create your site, we look after it for the long term. This includes maintenance, change requests and ongoing technical support to achieve higher sales in the long term.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row whyUsRow">
              <div className="col-6" data-aos="slide-left">
                <div className="handledWidthWhyUs">
                  <div className="row whyUsSecRow">
                    <div className="col-2">
                      <div className="whyUsIndexCircle">
                        <h1>5</h1>
                      </div>
                    </div>
                    <div className="col-10">
                      <h5>We have years of experience</h5>
                      <p>With our years of experience in web design and online marketing, we can optimally adapt your web design to your marketing activities through our network understanding.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6" data-aos="slide-right">
                <div className="handledWidthWhyUs">
                  <div className="row whyUsSecRow">
                    <div className="col-2">
                      <div className="whyUsIndexCircle">
                        <h1>6</h1>
                      </div>
                    </div>
                    <div className="col-10">
                      <h5>We have years of experience</h5>
                      <p>We don't just create your site, we look after it for the long term. This includes maintenance, change requests and ongoing technical support to achieve higher sales in the long term.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row whyUsRow">
              <div className="col-6" data-aos="slide-left">
                <div className="handledWidthWhyUs">
                  <div className="row whyUsSecRow">
                    <div className="col-2">
                      <div className="whyUsIndexCircle">
                        <h1>7</h1>
                      </div>
                    </div>
                    <div className="col-10">
                      <h5>We have years of experience</h5>
                      <p>With our years of experience in web design and online marketing, we can optimally adapt your web design to your marketing activities through our network understanding.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6" data-aos="slide-right">
                <div className="handledWidthWhyUs">
                  <div className="row whyUsSecRow">
                    <div className="col-2">
                      <div className="whyUsIndexCircle">
                        <h1>8</h1>
                      </div>
                    </div>
                    <div className="col-10">
                      <h5>We have years of experience</h5>
                      <p>We don't just create your site, we look after it for the long term. This includes maintenance, change requests and ongoing technical support to achieve higher sales in the long term.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row whyUsRow">
              <div className="col-6" data-aos="slide-left">
                <div className="handledWidthWhyUs">
                  <div className="row whyUsSecRow">
                    <div className="col-2">
                      <div className="whyUsIndexCircle">
                        <h1>9</h1>
                      </div>
                    </div>
                    <div className="col-10">
                      <h5>We have years of experience</h5>
                      <p>With our years of experience in web design and online marketing, we can optimally adapt your web design to your marketing activities through our network understanding.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6" data-aos="slide-right">
                <div className="handledWidthWhyUs">
                  <div className="row whyUsSecRow">
                    <div className="col-2">
                      <div className="whyUsIndexCircle">
                        <h1>10</h1>
                      </div>
                    </div>
                    <div className="col-10">
                      <h5>We have years of experience</h5>
                      <p>We don't just create your site, we look after it for the long term. This includes maintenance, change requests and ongoing technical support to achieve higher sales in the long term.</p>
                    </div>
                  </div>
                </div>
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
