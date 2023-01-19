// react States
// import { useEffect, useState } from 'react'
import React, { Component } from "react";

// Images
import purpleLine from "../Images/purple-line.png";
import blogsHeroImg from "../Images/blogs/blogsHeroImg.png";
import blog1Img from "../Images/blogs/blog1Img.png";
import blog2Img from "../Images/blogs/blog2Img.png";
import blog3Img from "../Images/blogs/blog3Img.png";

// Toast
// import { ToastContainer, toast } from "react-toastify";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// css
import '../css/blogs.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // aboutUsPopup: false,
    };
  }

  async componentDidMount() {

  }

  render() {

    return (
      <div>
        <div className="ourTeamRoot">
          <div className="heroSecOurTeam">
            <div className="row blogsHEroDiv" style={{ marginBottom: '150px' }}>
              <div className="col-6">
                <h5>Blogs</h5>
                <h1>MIST Blogs
                  <span>
                    <img className="ourTeamPurpleLine blogsPurpleLine" src={purpleLine} alt="" />
                    Team</span>
                </h1>
                <p>You can find&nbsp;&nbsp;articles for founders and entrepreneurs on the different topics such as NFT, Blockchain, Technology, web design.</p>
              </div>
              <div className="col-6">
                <img className="heroBlogsImg" src={blogsHeroImg} alt="blogsHeroImg" />
              </div>
            </div>
            <div className="services-container ourTeamUsers blogsContainers">
            <div className="services-box">
                <img src={blog1Img} alt="blog1Img" />
                <h1>Web & Mobile<span style={{ color: '#8671DB' }}>Apps</span></h1>
                <p>Rapid, responsive, cross-platform web and mobile app development with react, vue, flutter, swift, java, kotlin, or no-code technologies such as webflow and bubble. Our apps are secure by design and simple to maintain.</p>
              </div>
              <div className="services-box">
                <img src={blog2Img} alt="blog2Img" />
                <h1>Web & Mobile<span style={{ color: '#8671DB' }}>Apps</span></h1>
                <p>Rapid, responsive, cross-platform web and mobile app development with react, vue, flutter, swift, java, kotlin, or no-code technologies such as webflow and bubble. Our apps are secure by design and simple to maintain.</p>
              </div>
              <div className="services-box">
                <img src={blog3Img} alt="blog3Img" />
                <h1>Web & Mobile<span style={{ color: '#8671DB' }}>Apps</span></h1>
                <p>Rapid, responsive, cross-platform web and mobile app development with react, vue, flutter, swift, java, kotlin, or no-code technologies such as webflow and bubble. Our apps are secure by design and simple to maintain.</p>
              </div>
              <div className="services-box">
                <img src={blog1Img} alt="blog1Img" />
                <h1>Web & Mobile<span style={{ color: '#8671DB' }}>Apps</span></h1>
                <p>Rapid, responsive, cross-platform web and mobile app development with react, vue, flutter, swift, java, kotlin, or no-code technologies such as webflow and bubble. Our apps are secure by design and simple to maintain.</p>
              </div>
              <div className="services-box">
                <img src={blog2Img} alt="blog2Img" />
                <h1>Web & Mobile<span style={{ color: '#8671DB' }}>Apps</span></h1>
                <p>Rapid, responsive, cross-platform web and mobile app development with react, vue, flutter, swift, java, kotlin, or no-code technologies such as webflow and bubble. Our apps are secure by design and simple to maintain.</p>
              </div>
              <div className="services-box">
                <img src={blog3Img} alt="blog3Img" />
                <h1>Web & Mobile<span style={{ color: '#8671DB' }}>Apps</span></h1>
                <p>Rapid, responsive, cross-platform web and mobile app development with react, vue, flutter, swift, java, kotlin, or no-code technologies such as webflow and bubble. Our apps are secure by design and simple to maintain.</p>
              </div>
              <div className="services-box">
                <img src={blog1Img} alt="blog1Img" />
                <h1>Web & Mobile<span style={{ color: '#8671DB' }}>Apps</span></h1>
                <p>Rapid, responsive, cross-platform web and mobile app development with react, vue, flutter, swift, java, kotlin, or no-code technologies such as webflow and bubble. Our apps are secure by design and simple to maintain.</p>
              </div>
              <div className="services-box">
                <img src={blog2Img} alt="blog2Img" />
                <h1>Web & Mobile<span style={{ color: '#8671DB' }}>Apps</span></h1>
                <p>Rapid, responsive, cross-platform web and mobile app development with react, vue, flutter, swift, java, kotlin, or no-code technologies such as webflow and bubble. Our apps are secure by design and simple to maintain.</p>
              </div>
              <div className="services-box">
                <img src={blog3Img} alt="blog3Img" />
                <h1>Web & Mobile<span style={{ color: '#8671DB' }}>Apps</span></h1>
                <p>Rapid, responsive, cross-platform web and mobile app development with react, vue, flutter, swift, java, kotlin, or no-code technologies such as webflow and bubble. Our apps are secure by design and simple to maintain.</p>
              </div>
              <div className="services-box">
                <img src={blog1Img} alt="blog1Img" />
                <h1>Web & Mobile<span style={{ color: '#8671DB' }}>Apps</span></h1>
                <p>Rapid, responsive, cross-platform web and mobile app development with react, vue, flutter, swift, java, kotlin, or no-code technologies such as webflow and bubble. Our apps are secure by design and simple to maintain.</p>
              </div>
              <div className="services-box">
                <img src={blog2Img} alt="blog2Img" />
                <h1>Web & Mobile<span style={{ color: '#8671DB' }}>Apps</span></h1>
                <p>Rapid, responsive, cross-platform web and mobile app development with react, vue, flutter, swift, java, kotlin, or no-code technologies such as webflow and bubble. Our apps are secure by design and simple to maintain.</p>
              </div>
              <div className="services-box">
                <img src={blog3Img} alt="blog3Img" />
                <h1>Web & Mobile<span style={{ color: '#8671DB' }}>Apps</span></h1>
                <p>Rapid, responsive, cross-platform web and mobile app development with react, vue, flutter, swift, java, kotlin, or no-code technologies such as webflow and bubble. Our apps are secure by design and simple to maintain.</p>
              </div>
            </div>
            <center>
              <div className="ellipse ourTeamEllipse">
                <div className="ellipseCircle"></div>
                <div className="ellipseCircle ellipseCircle2"></div>
                <div className="ellipseCircle ellipseCircle2"></div>
              </div>
            </center>
          </div>
        </div>

        <ToastContainer />
      </div >
    );
  }
}

export default App;
