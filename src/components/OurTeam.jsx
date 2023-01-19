// react States
// import { useEffect, useState } from 'react'
import React, { Component } from "react";
import AOS from 'aos';

// Images
import purpleLine from "../Images/purple-line.png";
import cmsImg from "../Images/cms-img.png";
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
import { ToastContainer} from "react-toastify";
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
            <div className="row ourTeamHeroSEction" style={{ marginBottom: '150px' }}>
              <div className="col-6" data-aos="slide-left">
                <h5>Our Team</h5>
                <h1>Meet Our
                  <span>
                    <img className="ourTeamPurpleLine" src={purpleLine} alt="" />
                    Team</span>
                </h1>
                <p>Whether it’s a decentralised exchange, digital wallet or a new blockchain network, we are a one-stop shop for blockchain development.</p>
              </div>
              <div className="col-6" data-aos="slide-right">
                <img className="ourTeamHeroImg" src={cmsImg} alt="cmsImg" />
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
              <div className="services-box" data-aos="slide-left">
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
