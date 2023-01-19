// react States
// import { useEffect, useState } from 'react'
import React, { Component } from "react";
import AOS from 'aos';

// Images
import purpleLine from "../Images/purple-line.png";
import cmsImg from "../Images/cms-img.png";
import cmsImg3 from "../Images/cms-img3.png";
import ourTeamUser1 from "../Images/ourTeamUser1.png";
import ourTeamUser2 from "../Images/ourTeamUser2.png";
import ourTeamUser3 from "../Images/ourTeamUser3.png";
import ourTeamUser4 from "../Images/ourTeamUser4.png";
import purpleFbIcon from "../Images/purpleFbIcon.png";
import purpleYoutubeIcon from "../Images/purpleYoutubeIcon.png";
import purpleInstaIcon from "../Images/purpleInstaIcon.png";
import purpleTwitterIcon from "../Images/purpleTwitterIcon.png";

// Toast
// import { ToastContainer, toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// css
import '../css/ourTeam.css'

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
        <div className="ourTeamRoot">
          <div className="heroSecOurTeam">
            {/* <div className="aboutUsHeroSec">
              <h1>ABOUT <span style={{ color: '#8671DB' }}>US</span></h1>
              <p>Meliorist Information Services and Technology is a global software solutions provider which has engulfed every technology used to strengthen and expand your business. Our services start with web & mobile app going all the way to blockchain. We have more knowledge about experience of deliver the best of blockchain as per the requirement of industry. The services that we provide are cost-effective, efficient and result-oriented to every business. We have our professional and hardworking developers who work dedicatedly to create something better every time with every new project.</p>
              <p>We provide technology solutions to organizations and industries across the world. Our blockchain and other software solutions has been proved for all the domains and it is being implemented to every industry. Our solutions have helped many businesses to establish to expand themselves. We are masters who have acquired knowledge, skill and experience. We ensure that you get what you want regardless of the nature of your business. We do not just deliver the blockchain solution, we engineer them to perfection.</p>
           </div> */}
            <div className="row ourTeamHeroSEction" style={{ marginBottom: '150px' }}>
              <div className="col-8" data-aos="slide-left">
                {/* <h5>About Us</h5> */}
                <h1>ABOUT
                  <span>
                    <img className="ourTeamPurpleLine" src={purpleLine} alt="" />
                    US</span>
                </h1>
                <p style={{ marginTop: '-40px', lineHeight: '20px' }}>Meliorist Information Services and Technology is a global software solutions provider which has engulfed every technology used to strengthen and expand your business. Our services start with web & mobile app going all the way to blockchain. We have more knowledge about experience of deliver the best of blockchain as per the requirement of industry. The services that we provide are cost-effective, efficient and result-oriented to every business. We have our professional and hardworking developers who work dedicatedly to create something better every time with every new project.</p>
                <p style={{ lineHeight: '20px' }}>We provide technology solutions to organizations and industries across the world. Our blockchain and other software solutions has been proved for all the domains and it is being implemented to every industry. Our solutions have helped many businesses to establish to expand themselves. We are masters who have acquired knowledge, skill and experience. We ensure that you get what you want regardless of the nature of your business. We do not just deliver the blockchain solution, we engineer them to perfection.</p>
              </div>
              <div className="col-4" data-aos="slide-right">
                {/* <img className="ourTeamHeroImg" src={cmsImg} alt="cmsImg" style={{marginTop: '-20px'}} /> */}
                <img className="ourTeamHeroImg" src={cmsImg3} alt="cmsImg" style={{marginTop: '-20px'}} />
              </div>
            </div>
            <div className="services-container ourTeamUsers ourTeamMainCont">
              <div className="services-box" data-aos="slide-left">
                <img src={ourTeamUser1} alt="" />
                <h1>Daniella <span style={{ color: '#8671DB' }}>Mercer</span></h1>
                <h1>CEO</h1>
                <p>I’m a Content Writer at Bluleadz. I’m a big fan of books, movies, music, video games, and the ocean. It sounds impossible to do all of those at the same time, but you’d be surprised by the things I can accomplish.</p>
                <span className="ourTeamUserSocialIcons">
                  <span><img src={purpleFbIcon} alt="twitterIcon" /></span>
                  <span><img src={purpleYoutubeIcon} alt="istanIcon" /></span>
                  <span><img src={purpleInstaIcon} alt="youtubeIcon" /></span>
                  <span><img src={purpleTwitterIcon} alt="fbIcon" /></span>
                </span>
                <br />
                <br />
              </div>
              <div className="services-box">
                <img className="ourTeamSecUserImg" src={ourTeamUser2} alt="" />
                <h1>Daniella <span style={{ color: '#8671DB' }}>Mercer</span></h1>
                <h1>CEO</h1>
                <p>I’m a Content Writer at Bluleadz. I’m a big fan of books, movies, music, video games, and the ocean. It sounds impossible to do all of those at the same time, but you’d be surprised by the things I can accomplish.</p>
                <span className="ourTeamUserSocialIcons">
                  <span><img src={purpleFbIcon} alt="twitterIcon" /></span>
                  <span><img src={purpleYoutubeIcon} alt="istanIcon" /></span>
                  <span><img src={purpleInstaIcon} alt="youtubeIcon" /></span>
                  <span><img src={purpleTwitterIcon} alt="fbIcon" /></span>
                </span>
                <br />
                <br />
              </div>
              <div className="services-box" data-aos="slide-right">
                <img src={ourTeamUser3} alt="" />
                <h1>Daniella <span style={{ color: '#8671DB' }}>Mercer</span></h1>
                <h1>CEO</h1>
                <p>I’m a Content Writer at Bluleadz. I’m a big fan of books, movies, music, video games, and the ocean. It sounds impossible to do all of those at the same time, but you’d be surprised by the things I can accomplish.</p>
                <span className="ourTeamUserSocialIcons">
                  <span><img src={purpleFbIcon} alt="twitterIcon" /></span>
                  <span><img src={purpleYoutubeIcon} alt="istanIcon" /></span>
                  <span><img src={purpleInstaIcon} alt="youtubeIcon" /></span>
                  <span><img src={purpleTwitterIcon} alt="fbIcon" /></span>
                </span>
                <br />
                <br />
              </div>
              {/* <div className="services-box" data-aos="slide-left">
                <img className="ourTeamSecUserImg" src={ourTeamUser4} alt="" />
                <h1>Daniella <span style={{ color: '#8671DB' }}>Mercer</span></h1>
                <h1>CEO</h1>
                <p>I’m a Content Writer at Bluleadz. I’m a big fan of books, movies, music, video games, and the ocean. It sounds impossible to do all of those at the same time, but you’d be surprised by the things I can accomplish.</p>
                <span className="ourTeamUserSocialIcons">
                  <span><img src={purpleFbIcon} alt="twitterIcon" /></span>
                  <span><img src={purpleYoutubeIcon} alt="istanIcon" /></span>
                  <span><img src={purpleInstaIcon} alt="youtubeIcon" /></span>
                  <span><img src={purpleTwitterIcon} alt="fbIcon" /></span>
                </span>
                <br />
                <br />
              </div>
              <div className="services-box">
                <img src={ourTeamUser1} alt="" />
                <h1>Daniella <span style={{ color: '#8671DB' }}>Mercer</span></h1>
                <h1>CEO</h1>
                <p>I’m a Content Writer at Bluleadz. I’m a big fan of books, movies, music, video games, and the ocean. It sounds impossible to do all of those at the same time, but you’d be surprised by the things I can accomplish.</p>
                <span className="ourTeamUserSocialIcons">
                  <span><img src={purpleFbIcon} alt="twitterIcon" /></span>
                  <span><img src={purpleYoutubeIcon} alt="istanIcon" /></span>
                  <span><img src={purpleInstaIcon} alt="youtubeIcon" /></span>
                  <span><img src={purpleTwitterIcon} alt="fbIcon" /></span>
                </span>
                <br />
                <br />
              </div>
              <div className="services-box" data-aos="slide-right">
                <img src={ourTeamUser1} alt="" />
                <h1>Daniella <span style={{ color: '#8671DB' }}>Mercer</span></h1>
                <h1>CEO</h1>
                <p>I’m a Content Writer at Bluleadz. I’m a big fan of books, movies, music, video games, and the ocean. It sounds impossible to do all of those at the same time, but you’d be surprised by the things I can accomplish.</p>
                <span className="ourTeamUserSocialIcons">
                  <span><img src={purpleFbIcon} alt="twitterIcon" /></span>
                  <span><img src={purpleYoutubeIcon} alt="istanIcon" /></span>
                  <span><img src={purpleInstaIcon} alt="youtubeIcon" /></span>
                  <span><img src={purpleTwitterIcon} alt="fbIcon" /></span>
                </span>
                <br />
                <br />
              </div> */}

            </div>
            {/* <center>
              <div className="ellipse ourTeamEllipse">
                <div className="ellipseCircle"></div>
                <div className="ellipseCircle ellipseCircle2"></div>
                <div className="ellipseCircle ellipseCircle2"></div>
              </div>
            </center> */}
          </div>
        </div>

        <ToastContainer />
      </div >
    );
  }
}

export default App;
