// react States
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';

// Images
// import mistLogo from "../Images/latest21-04-1@1x.png";
import mistLogo from "../Images/mistLogoBlue.png";
import backEngeering2 from "../Images/backend-engineering-img-2.png";
import navBarToggler from "../Images/navBarToggler.png";
import navBarTogglerCross from "../Images/navBarTogglerCross.png";

// css
import "../App.css";
import "../css/style.css";

// Toast
function App() {
    const navigate = useNavigate();
    const [aboutUsPopup, setaboutUsPopup] = useState(false);

    function navigationMobile(e) {
        navigate(e);
        document.getElementById("collapseBox").style.display = "none";
        document.getElementById("navBarToggler").style.display = "initial";
        document.getElementById("navBarTogglerCross").style.display = "none";
    }
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])

    return (
        <div id="app">
            {/* Header */}
            <header>
                <div className="navbar">
                    <div className="nav">
                        <div>
                            <img data-aos="flip-left"
                                src={mistLogo}
                                alt="mistLogo"
                                onClick={() => navigate("/")}
                            />
                        </div>
                        <div className="desktopNavBar">
                            <ul data-aos="flip-right">
                                <li
                                    onClick={() => {
                                        navigate("/")
                                    }}>Home</li>
                                <li>|</li>
                                <li
                                    // onMouseEnter={() => {
                                    //     if (aboutUsPopup === true) {
                                    //         setaboutUsPopup(false);
                                    //     } else {
                                    //         setaboutUsPopup(true);
                                    //     }
                                    // }}
                                    onClick={() => {
                                        navigate("/AboutUs")
                                        // navigate("/ourTeam")
                                        // if (aboutUsPopup === true) {
                                        //     setaboutUsPopup(false);
                                        // } else {
                                        //     setaboutUsPopup(true);
                                        // }
                                    }}>About Us</li>
                                <li>|</li>
                                <li
                                    onClick={() => {
                                        navigate("/Services");
                                        window.scrollTo(0, 0)
                                        setTimeout(() => {
                                            setaboutUsPopup(false);
                                        }, 1);
                                    }}
                                >
                                    Services
                                </li>
                                <li>|</li>
                                <li
                                    onClick={() => {
                                        navigate("/ContactUs");
                                        window.scrollTo(0, 0)
                                        setTimeout(() => {
                                            setaboutUsPopup(false);
                                        }, 1);
                                    }}
                                >
                                    Contact
                                </li>
                                {/* <li>|</li>
                                <li
                                    onClick={() => {
                                        navigate("/IndustriesServe");
                                        window.scrollTo(0, 0)
                                        setTimeout(() => {
                                            setaboutUsPopup(false);
                                        }, 1);
                                    }}
                                >
                                    Industries we serve
                                </li> */}
                                {/* <li>|</li>
                                <li
                                    onClick={() => {
                                        navigate("/Blogs");
                  window.scrollTo(0, 0)
                                        setTimeout(() => {
                                            setaboutUsPopup(false);
                                        }, 1);
                                    }}
                                >
                                    Blogs
                                </li> */}
                            </ul>
                        </div>
                        <div
                            className="mobileNavBar"
                            style={{ display: "none", paddingTop: "38px" }}
                        >
                            <img
                                src={navBarToggler}
                                alt="navBarToggler"
                                id="navBarToggler"
                                onClick={() => {
                                    document.getElementById("navBarToggler").style.display =
                                        "none";
                                    document.getElementById("navBarTogglerCross").style.display =
                                        "initial";
                                    document.getElementById("collapseBox").style.display =
                                        "initial";
                                }}
                            />
                            <img
                                style={{ display: "none" }}
                                src={navBarTogglerCross}
                                alt="navBarTogglerCross"
                                id="navBarTogglerCross"
                                onClick={() => {
                                    document.getElementById("navBarToggler").style.display =
                                        "initial";
                                    document.getElementById("navBarTogglerCross").style.display =
                                        "none";
                                    document.getElementById("collapseBox").style.display = "none";
                                }}
                            />
                        </div>
                        <div id="collapseBox" style={{ display: "none" }}>
                            <ul> <li
                                onClick={() => {
                                    navigate("/")
                                }}>Home</li>
                                <li>|</li>
                                {/* <li onClick={() => navigationMobile("/")}>About Us</li> */}
                                <li onClick={() => navigationMobile("/AboutUs")}>About Us</li>
                                {/* <li
                                    onClick={() => navigationMobile("/ourTeam")}
                                    style={{
                                        marginLeft: "40px",
                                        marginTop: "-10px",
                                    }}
                                >
                                    Our Team
                                </li> */}
                                {/* <li
                                    onClick={() => navigationMobile("/Testimonials")}
                                    style={{ marginLeft: "40px" }}
                                >
                                    Testimonials
                                </li> */}
                                {/* <li
                                    onClick={() => navigationMobile("/WhyUs")}
                                    style={{ marginLeft: "40px" }}
                                >
                                    Why Us
                                </li>
                                <li
                                    onClick={() => navigationMobile("/OurPortfolio")}
                                    style={{ marginLeft: "40px" }}
                                >
                                    Our Portfolio
                                </li> */}
                                <li onClick={() => navigationMobile("/Services")}>Services</li>
                                <li onClick={() => navigationMobile("/ContactUs")}>Contact</li>
                                {/* <li onClick={() => navigationMobile("/IndustriesServe")}>
                                    Industries we serve
                                </li> */}
                                {/* <li onClick={() => navigationMobile("/Blogs")}>Blogs</li> */}
                            </ul>
                        </div>
                        <span className="nabarFlexDot" style={{ color: "white" }}>
                            .
                        </span>
                    </div>
                </div>
            </header>
            {aboutUsPopup === true ? (
                <div className="aboutUsPopup">
                    <span style={{ color: "white" }}>.</span>
                    <div className="aboutUsContainer">
                        <div className="row aboutUsPopupFirstRow">
                            <div className="col-6">
                                <div
                                    className="row"
                                    onClick={() => {
                                        setaboutUsPopup(false);
                                        navigate("/ourTeam");
                                        window.scrollTo(0, 0)
                                    }}
                                >
                                    <div className="col-3">
                                        <img src={backEngeering2} alt="" />
                                    </div>
                                    <div className="col-9">
                                        <h6>Our Team</h6>
                                        <p className="aboutUsContainerPara">
                                            On-demand blockchain development service.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-6">
                                <div
                                    className="row"
                                    onClick={() => {
                                        setaboutUsPopup(false);
                                        navigate("/Testimonials");
                  window.scrollTo(0, 0)
                                    }}
                                >
                                    <div className="col-3">
                                        <img src={backEngeering2} alt="" />
                                    </div>
                                    <div className="col-9">
                                        <h6>Testimonials</h6>
                                        <p className="aboutUsContainerPara">
                                            On-demand blockchain development service.
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-6">
                                <div
                                    className="row"
                                    onClick={() => {
                                        setaboutUsPopup(false);
                                        navigate("/WhyUs");
                                        window.scrollTo(0, 0)
                                    }}
                                >
                                    <div className="col-3">
                                        <img src={backEngeering2} alt="" />
                                    </div>
                                    <div className="col-9">
                                        <h6>Why Us</h6>
                                        <p className="aboutUsContainerPara">
                                            On-demand blockchain development service.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row aboutUsPopupSecRow">

                            <div className="col-6">
                                <div
                                    className="row"
                                    onClick={() => {
                                        setaboutUsPopup(false);
                                        navigate("/OurPortfolio");
                                        window.scrollTo(0, 0)
                                    }}
                                >
                                    <div className="col-3">
                                        <img src={backEngeering2} alt="" />
                                    </div>
                                    <div className="col-9">
                                        <h6>Our Portfolio</h6>
                                        <p className="aboutUsContainerPara">
                                            On-demand blockchain development service.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span style={{ color: "white" }}>.</span>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default App;
