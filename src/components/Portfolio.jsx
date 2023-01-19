// react States
// import React, { useState } from "react";
import React from "react";

// Images
import gsuExchange1 from "../Images/Portfolio/gsuExchange/1.jpg";
import gsuExchange2 from "../Images/Portfolio/gsuExchange/2.jpg";
import gsuExchange3 from "../Images/Portfolio/gsuExchange/3.jpg";
import gsuExchange4 from "../Images/Portfolio/gsuExchange/4.jpg";
import gsuExchange5 from "../Images/Portfolio/gsuExchange/5.jpg";
import OTA_landingPage from "../Images/Portfolio/OTA/OTA_landingPage.png";
import OTAHomescreen from "../Images/Portfolio/OTA/OTA_Home-screen.png";
import OTA_ClickPlace from "../Images/Portfolio/OTA/OTA_ClickPlace.png";
import OTA_Exclusive from "../Images/Portfolio/OTA/OTA_Exclusive.png";
import deposit from "../Images/Portfolio/Payment Gateway/deposit.png";
import WithdrowPage from "../Images/Portfolio/Payment Gateway/Withdrow Page.png";
import GenerateApi from "../Images/Portfolio/Payment Gateway/Generate Api.png";
import Transactions from "../Images/Portfolio/Payment Gateway/Transactions.png";
import ResetPass from "../Images/Portfolio/Payment Gateway/Reset Pass.png";
import veeroAdminDashboard from "../Images/Portfolio/VEERO/veeroAdminDashboard.jpeg";
import veeroAdminAddNewProduct from "../Images/Portfolio/VEERO/veeroAdminAddNewProduct.jpeg";
import veeroMoreProducts from "../Images/Portfolio/VEERO/veeroMoreProducts.jpeg";
import veeroProductImages from "../Images/Portfolio/VEERO/veeroProductImages.jpeg";
import veeroAdminAddBannerC from "../Images/Portfolio/VEERO/veeroAdminAddBannerC.jpeg";
import veeroAdminAddBanners from "../Images/Portfolio/VEERO/veeroAdminAddBanners.jpeg";
import veeroAdminOrders from "../Images/Portfolio/VEERO/veeroAdminOrders.jpeg";
import veeroSignInSignUp from "../Images/Portfolio/VEERO/veeroSignInSignUp.jpeg";
import samIndexLandingPage from "../Images/Portfolio/SamIndexWebsite/landing Page.png";
import samIndexLandingPageLightTheme from "../Images/Portfolio/SamIndexWebsite/landing page light theme.png";
import samIndexLandingPageDappLightTheme from "../Images/Portfolio/SamIndexWebsite/dapp light theme.png";
import samIndexLandingPageDarkTheme from "../Images/Portfolio/SamIndexWebsite/dapp dark theme.png";
import samIndexDappSwap from "../Images/Portfolio/SamIndexWebsite/dapp swap.png";
import zoomAssistantHomePage from "../Images/Portfolio/zoomAssistant/home page.jpg";
import zoomAssistantSettings from "../Images/Portfolio/zoomAssistant/setting.jpg";
import zoomAssistantLogin from "../Images/Portfolio/zoomAssistant/login.jpg";
import garudaLandingPage from "../Images/Portfolio/Garuda Global/landing page.png";
import garudaAboutUs from "../Images/Portfolio/Garuda Global/About us.png";
import garudaServices from "../Images/Portfolio/Garuda Global/our services.png";
import garudaFooter from "../Images/Portfolio/Garuda Global/footer.png";
import youGotmailLandingPage from "../Images/Portfolio/youGotmail chrestie/landingPage";
import youGotmailSignUp from "../Images/Portfolio/youGotmail chrestie/signUp";
import youGotmailHomePageDiscover from "../Images/Portfolio/youGotmail chrestie/HomePageDiscover";
import youGotmailFiltersearch from "../Images/Portfolio/youGotmail chrestie/Filter search";
import youGotmailChatRoom from "../Images/Portfolio/youGotmail chrestie/ChatRoom";
import youGotmailConversationStarters from "../Images/Portfolio/youGotmail chrestie/ConversationStarters";
import youGotmailProfile from "../Images/Portfolio/youGotmail chrestie/Profile";
import youGotmailUpdateProfile from "../Images/Portfolio/youGotmail chrestie/UpdateProfile";
import youGotmailindivisualsProfile from "../Images/Portfolio/youGotmail chrestie/indivisualsProfile";
import flexlab1 from "../Images/Portfolio/flexlab/1.jpg";
import flexlab2 from "../Images/Portfolio/flexlab/2.jpg";
import flexlab3 from "../Images/Portfolio/flexlab/3.jpg";
import flexlab4 from "../Images/Portfolio/flexlab/4.jpg";
import flexlab5 from "../Images/Portfolio/flexlab/5.jpg";
import flexlab6 from "../Images/Portfolio/flexlab/6.jpg";
import flexlab7 from "../Images/Portfolio/flexlab/7.jpg";
import flexlab8 from "../Images/Portfolio/flexlab/8.jpg";
import flexlab9 from "../Images/Portfolio/flexlab/9.jpg";
import flexlab10 from "../Images/Portfolio/flexlab/10.jpg";
import foodpanda2 from "../Images/Portfolio/foodpanda/foodpanda2.png";
import foodpanda from "../Images/Portfolio/foodpanda/foodpanda.png";
import foodpandaVideo from "../Images/Portfolio/foodpanda/video.mp4";
import foodpandaCheckout from "../Images/Portfolio/foodpanda/checkout.png";
import foodpandaDetail from "../Images/Portfolio/foodpanda/detail.JPEG";
import nftMintNew from "../Images/Portfolio/nftMarketPlace/mint new nft.jpeg";
import nftDigitalAssets from "../Images/Portfolio/nftMarketPlace/digital assets.jpeg";
import nftItemsCreated from "../Images/Portfolio/nftMarketPlace/items Created.jpeg";
import garagesLandingPage from "../Images/Portfolio/garages compare/landing page.png";
import garagesSearch from "../Images/Portfolio/garages compare/search.png";
import garagesAddImg from "../Images/Portfolio/garages compare/add img.png";
import garagesViewAdd from "../Images/Portfolio/garages compare/view add.png";
import garagesAdPublis from "../Images/Portfolio/garages compare/add publish.png";


import DepositPage from "../Images/Portfolio/Payment Gateway/Deposit page.png";
import NFTlandingPage from "../Images/Portfolio/nftMarketPlace/landingPage.jpeg";
import veeroLandingPage from "../Images/Portfolio/VEERO/veeroLandingPage.jpeg";
import purpleLine from "../Images/purple-line.png";

// css
import "../css/Portfolio.css";
import 'bootstrap/dist/js/bootstrap'

function App() {
    return (

        <div className="webDev-container" style={{ marginBottom: '-300px' }}>
            <div className="section" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ml-auto mr-auto portfolioDIv" data-aos="fade-down">
                            <div className="portfolio-heading" data-aos="zoom-in">
                                <h1 style={{marginTop: '-80px'}}>Our <span>Work</span></h1>
                                <img style={{position: 'relative', top:'-10px'}} src={purpleLine} alt="" />
                            </div>                            <p className="portfolioSubHeading">Whether it’s a decentralised exchange, digital wallet or a new blockchain
                                network, we are a one-stop shop for blockchain development.</p>
                            <div className="nav-align-center">
                                {/* <ul className="nav nav-pills nav-pills-primary" role="tablist">
                    <li className="nav-item"><a className="nav-link active" data-toggle="tab"
                            href="#web-development" role="tablist"><i className="fa fa-laptop"
                                aria-hidden="true"></i></a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#graphic-design"
                            role="tablist"><i className="fa fa-picture-o" aria-hidden="true"></i></a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Photography"
                            role="tablist"><i className="fa fa-camera" aria-hidden="true"></i></a></li>
                </ul> */}
                                <ul className="nav nav-pills nav-pills-primary" role="tablist">
                                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#web-development"
                                        role="tablist"><span className="prillsTxt">1</span></a></li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#graphic-design"
                                        role="tablist"><span className="prillsTxt">2</span></a></li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Photography" role="tablist"><span
                                        className="prillsTxt">3</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="exchangeModel" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Crypto and Fiat Currency Exchange</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <hr style={{ width: "93%" }} />
                                <div className="modal-body">
                                    <img src={gsuExchange1} />
                                    <span>Landing Page</span>
                                    <img src={gsuExchange2} />
                                    <span>Home Page</span>
                                    <img src={gsuExchange3} />
                                    <span>Deposits and Withdraw</span>
                                    <img src={gsuExchange4} />
                                    <span>Authentication</span>
                                    <img src={gsuExchange5} />
                                    <span>Admin</span>
                                    <br />
                                    <h6 className="tagsHeading">Project description</h6>
                                    <p className="discriptionText">GSU Exchange is a secure, scalable and ultra low latency cryptocurrency
                                        trading platform to match with high volatility of the crypto industry. It offers easy to use
                                        flows; deposits and withdrawals of currencies and cryptos, trading and transactions – all
                                        accompanied by a full account and transaction overview. Exchange is developed by using distributed
                                        and fault tolerant technologies making it highly flexible and reliable. It’s Matching engine can
                                        work with any type of assets. Enterprise grade protocols are used for identity and access
                                        management which provides easy integration across the organisation. Provides risk management with
                                        real-time error checking and alerts. Builtin KYC portal supports integration for financial
                                        institutes which makes it compliant with digital security laws. Zendesk support system is used for
                                        higher customer satisfaction.</p>
                                    <a className="descriptionLink" href="https://www.gsuexchange.com/" target="_blank">gsuexchange.com/</a>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="OTAmodel" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Online Travel Agency</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <hr style={{ width: "93%" }} />
                                <div className="modal-body">
                                    <img src={OTA_landingPage} />
                                    <span>Landing Page</span>
                                    <img src={OTAHomescreen} />
                                    <span>Home Page</span>
                                    <img src={OTA_ClickPlace} />
                                    <span>On Click Place</span>
                                    <img src={OTA_Exclusive} />
                                    <br />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="gatewayModel" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Crypto Payment Gateway</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <hr style={{ width: "93%" }} />
                                <div className="modal-body">
                                    <img src={deposit} />
                                    <span>Deposit Page which allow users of eCommerce store to pay in Crypto.</span>
                                    <img src={WithdrowPage} />
                                    <span>Page allow merchants to Withdrow Crypto funds anytime.</span><br /><br />
                                    <img src={GenerateApi} />
                                    <span>New merchants can easily create new api key corresponding to eCommerce store from the admin
                                        side of the gateway.</span><br /><br />
                                    <img src={Transactions} />
                                    <span>Merchants can see all the crypto transactions corresponding to each store.</span>
                                    <img src={ResetPass} />
                                    <span>Gateway allows to recover funds if they forget account credentials.</span>
                                    <br />
                                    <h6 className="tagsHeading">Project description</h6>
                                    <p className="discriptionText">The user-friendly crypto gateway allows users of the eCommerce stores to
                                        pay the merchant in crypto. The platform provides a very easy journey to merchants for integration
                                        and withdrawal. Moreover, Platforms allow merchants to recover funds.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="veeromodel" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">eCommerce Platform</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <hr style={{ width: "93%" }} />
                                <div className="modal-body">
                                    <img src={veeroLandingPage} />
                                    <span>Landing Page</span>
                                    <img src={veeroAdminDashboard} />
                                    <span>Admin Dashboard</span>
                                    <img src={veeroAdminAddNewProduct} />
                                    <span>New products added from admin side</span>
                                    <img src={veeroMoreProducts} />
                                    <span>Products</span>
                                    <img src={veeroProductImages} />
                                    <span>Product Detail</span>
                                    <img src={veeroAdminAddBannerC} />
                                    <span>New Banners added from admin side</span>
                                    <img src={veeroAdminAddBanners} />
                                    <span>Banners</span>
                                    <img src={veeroAdminOrders} />
                                    <span>Admin Orders</span>
                                    <img src={veeroSignInSignUp} />
                                    <span>Sign In Sign Up</span>
                                    <br />
                                    <h6 className="tagsHeading">Full Stack Development Deliverables</h6>
                                    <div className="tags">
                                        <p className="tagsText">Database Design</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Web Design</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Database Architecture</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Website Development</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">API</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Web Application</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Project Analysis</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Website Optimization</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">UX/UI</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Responsive Design</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">eCommerce Website</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Database Development</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">API Integration</p>
                                    </div>
                                    <h6 className="tagsHeading">Full Stack Development Skills</h6>
                                    <div className="tags">
                                        <p className="tagsText">Vue.js</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">jquery</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">HTTP</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Git</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Bootstrap</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Amazon Web services</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Saas</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Node.js</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">eCommerce</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Website Security</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">webpack</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Vuetify</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">RESTful</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Requests</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Microservices</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Facebook JavaScript (FBJS)</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Express</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Docker</p>
                                    </div>
                                    <h6 className="tagsHeading">Full Stack Development Languages</h6>
                                    <div className="tags">
                                        <p className="tagsText">JavaScript</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Sass</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">HTML5</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">HTML</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">CSS3</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">CSS</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">C++</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Visual Basic</p>
                                    </div>
                                    <h6 className="tagsHeading">Databases</h6>
                                    <div className="tags">
                                        <p className="tagsText">MongoDB</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">PostgreSQL</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">MariaDB</p>
                                    </div>
                                    <h6 className="tagsHeading">Web Servers</h6>
                                    <div className="tags">
                                        <p className="tagsText">NGINX</p>
                                    </div>
                                    <h6 className="tagsHeading">Business Size Experience</h6>
                                    <div className="tags">
                                        <p className="tagsText">Very small (1-9 employees)</p>
                                    </div>
                                    <br />
                                    <h6 className="tagsHeading">Project description</h6>
                                    <p className="discriptionText">It was a real-time eCommerce platform, Where first of all admin
                                        upload products, MVP, most popular products and brands from admin side, then buyers and
                                        sellers place real-time asks and bids. We incorporated web sockets for real-time order
                                        placement and execution. Actually, it creates sense of online bargaining, because buyers
                                        and sellers can update their bids and asks according to situation.
                                        <br /><br /> In matching engine, we incorporated 2 types of order execution. One exact bid
                                        && ask match execution and second way for best price market order execution for user who
                                        don't wanna place bids and asks. Moreover, at the time of placing bid buyer's bid amount
                                        get hold by our integrated payment gateway. Eventually, once the product reached to
                                        admin staff and quality assurance done from admin side. Then payment released to seller
                                        and product shipped to buyer after deduction of decided margin.
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="samindexwebsitemodel" tabIndex="-1" role="dialog"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Listing and Trading of crypto currency
                                        platform</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <hr style={{ width: "93%" }} />
                                <div className="modal-body">
                                    <img src={samIndexLandingPage} />
                                    <span>Landing Page with dark theme</span>
                                    <img src={samIndexLandingPageLightTheme} />
                                    <span>Landing Page with light theme</span>
                                    <img src={samIndexLandingPageDappLightTheme} />
                                    <span>Decentralized application with light theme</span>
                                    <img src={samIndexLandingPageDarkTheme} />
                                    <span>Decentralized application with dark theme</span>
                                    <img src={samIndexDappSwap} />
                                    <span>Swap functionality</span>
                                    <br />
                                    <h6 className="tagsHeading">Full Stack Development Deliverables</h6>
                                    <div className="tags">
                                        <p className="tagsText">Database Design</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Web Design</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Website Redesign</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Website Development</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">API</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Web Application</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Project Analysis</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Website Optimization</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">UX/UI</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Responsive Design</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Database Architecture</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Database Development</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">API Integration</p>
                                    </div>
                                    <h6 className="tagsHeading">Full Stack Development Skills</h6>
                                    <div className="tags">
                                        <p className="tagsText">Vue.js</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">jquery</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">HTTP</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Git</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Bootstrap</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Underscore.js</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Saas</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Node.js</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Website Security</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">webpack</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Vuetify</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">RESTful</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Requests</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Microservices</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">CMS</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Express</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Docker</p>
                                    </div>
                                    <h6 className="tagsHeading">Full Stack Development Languages</h6>
                                    <div className="tags">
                                        <p className="tagsText">JavaScript</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Sass</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">HTML5</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">HTML</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">CSS3</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">CSS</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">C++</p>
                                    </div>
                                    <h6 className="tagsHeading">Databases</h6>
                                    <div className="tags">
                                        <p className="tagsText">MongoDB</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">SQLite</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">MySQL</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Oracle Database</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Firebase Realtime Database</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">MariaDB</p>
                                    </div>
                                    <h6 className="tagsHeading">Web Servers</h6>
                                    <div className="tags">
                                        <p className="tagsText">NGINX</p>
                                    </div>
                                    <h6 className="tagsHeading">Business Size Experience</h6>
                                    <div className="tags">
                                        <p className="tagsText">Very small (1-9 employees)</p>
                                    </div>
                                    <br />
                                    <h6 className="tagsHeading">Project description</h6>
                                    <p className="discriptionText">It was a dynamic index website to list different crypto
                                        currencies with functionality to swap tokens. We transformed the client's business idea
                                        into a robust web application. The client was 100% satisfied. <br /><br />
                                        Moreover in this project we developed ERC-20 and ERC-721 tokens along with liquidity providing and
                                        listing on decentralised exchange Uniswap.
                                        in addition we also incorporated yeild farming feature.
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="zoomAssistantModel" tabIndex="-1" role="dialog"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Zoom Assistant</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <hr style={{ width: "93%" }} />
                                <div className="modal-body">
                                    <img src={zoomAssistantHomePage} />
                                    <span>Zoom Assistant</span>
                                    <img src={zoomAssistantSettings} />
                                    <span>Settings</span>
                                    <img src={zoomAssistantLogin} />
                                    <br />
                                    <h6 className="tagsHeading">Full Stack Development Deliverables</h6>
                                    <div className="tags">
                                        <p className="tagsText">Database Design</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Web Design</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">API Integration</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Website Development</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">API</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Web Application</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Project Analysis</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Website Optimization</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Database Architecture</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Database Development</p>
                                    </div>
                                    <h6 className="tagsHeading">Full Stack Development Skills</h6>
                                    <div className="tags">
                                        <p className="tagsText">Amazon web services</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Node.js</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">HTTP</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Git</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">npm</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Underscore.js</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">JSON</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Node.js</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Facebook JavaScript (FBJS)</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Website Security</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">webpack</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">AJAX</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">RESTful</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Requests</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Microservices</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Express</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Docker</p>
                                    </div>
                                    <h6 className="tagsHeading">Full Stack Development Languages</h6>
                                    <div className="tags">
                                        <p className="tagsText">JavaScript</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">SQL</p>
                                    </div>
                                    <h6 className="tagsHeading">Databases</h6>
                                    <div className="tags">
                                        <p className="tagsText">MongoDB</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">MySQL</p>
                                    </div>
                                    <h6 className="tagsHeading">Web Servers</h6>
                                    <div className="tags">
                                        <p className="tagsText">NGINX</p>
                                    </div>
                                    <h6 className="tagsHeading">Business Size Experience</h6>
                                    <div className="tags">
                                        <p className="tagsText">small (10-99 employees)</p>
                                    </div>
                                    <br />
                                    <h6 className="tagsHeading">Project goal</h6>
                                    <p className="discriptionText">Develop zoom assistant which sends emails, that this user will be
                                        late, to participants of the zoom meeting, only if the user will be on another call and
                                        only certain mins left in starting the scheduled group meeting, with authorizations.</p>
                                    <h6 className="tagsHeading">Solution</h6>
                                    <p className="discriptionText">Well, I developed and integrated webhooks and cron jobs to get
                                        meetings data from google calendar and then participants data from the zoom server using
                                        javascript regular expressions and then sending emails to other participants of zoom
                                        meeting by calculating time difference according to each time zone, only if the user
                                        will be on another call and only particular time left in starting the scheduled group
                                        meeting with authorizations. Such as Google, Facebook, zoom login then Authentications.
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="garudaGlobalModel" tabIndex="-1" role="dialog"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Logistics Website</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <hr style={{ width: "93%" }} />
                                <div className="modal-body">
                                    <img src={garudaLandingPage} />
                                    <span>Landing Page</span>
                                    <img src={garudaAboutUs} />
                                    <span>About Us</span>
                                    <img src={garudaServices} />
                                    <span>Our Services</span>
                                    <img src={garudaFooter} />
                                    <span>Footer</span>
                                    <br />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="socialAppModel" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Social app like Facebook or match.com</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <hr style={{ width: "93%" }} />
                                <div className="modal-body">
                                    <img src={youGotmailLandingPage} />
                                    <span>Landing Page</span>
                                    <img src={youGotmailSignUp} />
                                    <span>Sign up page</span>
                                    <img src={youGotmailHomePageDiscover} />
                                    <span>Home Page where people can find connections</span>
                                    <img src={youGotmailFiltersearch} />
                                    <span>Filter individuals from home page</span>
                                    <img src={youGotmailChatRoom} />
                                    <span>Real time Chat room with connections</span>
                                    <img src={youGotmailConversationStarters} />
                                    <span>Conversation Starters</span>
                                    <img src={youGotmailProfile} />
                                    <span>Profile of each indivisual</span>
                                    <img src={youGotmailUpdateProfile} />
                                    <span>Update or make profile</span>
                                    <img src={youGotmailindivisualsProfile} />
                                    <span>When click on any profile from find connections</span>
                                    <br />
                                    <h6 className="tagsHeading">Full Stack Development Deliverables</h6>
                                    <div className="tags">
                                        <p className="tagsText">Database Design</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Web Design</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Website Redesign</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Website Development</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">API</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Web Application</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Project Analysis</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Website Optimization</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">UX/UI</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Responsive Design</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Desktop Applications</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Database Development</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">API Integration</p>
                                    </div>
                                    <h6 className="tagsHeading">Full Stack Development Skills</h6>
                                    <div className="tags">
                                        <p className="tagsText">Vue.js</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Adobe Photoshop</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">jquery</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">HTTP</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Git</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Bootstrap</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">npm</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Saas</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Node.js</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">AJAX</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Website Security</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">webpack</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Vuetify</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">RESTful</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Requests</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Microservices</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">JSON</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Express</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Docker</p>
                                    </div>
                                    <h6 className="tagsHeading">Full Stack Development Languages</h6>
                                    <div className="tags">
                                        <p className="tagsText">JavaScript</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">HTML5</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">HTML</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">CSS</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">SQL</p>
                                    </div>
                                    <h6 className="tagsHeading">Databases</h6>
                                    <div className="tags">
                                        <p className="tagsText">MariaDB</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">SQLBase</p>
                                    </div>
                                    <h6 className="tagsHeading">Web Servers</h6>
                                    <div className="tags">
                                        <p className="tagsText">NGINX</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Apache HTTP Server</p>
                                    </div>
                                    <h6 className="tagsHeading">Business Size Experience</h6>
                                    <div className="tags">
                                        <p className="tagsText">Very small (1-9 employees)</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Startup</p>
                                    </div>
                                    <br />
                                    <h6 className="tagsHeading">Project description</h6>
                                    <p className="discriptionText">It was an awesome project like match.com or Facebook, for making
                                        connections. Here any one with age restrictions can become part of this platform, then
                                        that person is supposed to make profile. You can see your profile, and other individuals
                                        part of platform can see your profile who are not blocked by you to make connection.
                                        From home page, person can find connections.
                                        <br /><br /> Moreover, Individual can filter people by search. First you can see his/her
                                        name, relationship status, work-experience, hobbies and bio from their profile, if you
                                        will be interested, then you can make connection with that particular guy by sending
                                        messages. Moreover, there are features to update profile, add multiple images. In
                                        addition, any one can block someone according to desire.
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="flexlabModel" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Professional business website</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <hr style={{ width: "93%" }} />
                                <div className="modal-body">
                                    <img src={flexlab1} /><br /><br />
                                    <img src={flexlab2} /><br /><br />
                                    <img src={flexlab3} /><br /><br />
                                    <img src={flexlab4} /><br /><br />
                                    <img src={flexlab5} /><br /><br />
                                    <img src={flexlab6} /><br /><br />
                                    <img src={flexlab7} /><br /><br />
                                    <img src={flexlab8} /><br /><br />
                                    <img src={flexlab9} /><br /><br />
                                    <img src={flexlab10} />
                                    <br />
                                    <h6 className="tagsHeading">Front-End Development Deliverables</h6>
                                    <div className="tags">
                                        <p className="tagsText">Prototype</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Web Design</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Animation</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Website Development</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Website</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Web Application</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Landing Page</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Visualization</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Responsive Design</p>
                                    </div>
                                    <h6 className="tagsHeading">Front-End Development Languages</h6>
                                    <div className="tags">
                                        <p className="tagsText">JavaScript</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Sass</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">CSS3</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">HTML5</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">HTML</p>
                                    </div>
                                    <h6 className="tagsHeading">Front-End Development Skills</h6>
                                    <div className="tags">
                                        <p className="tagsText">Git</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Bootstrap</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Vue.js</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Jquey</p>
                                    </div>
                                    <div className="tags">
                                        <p className="tagsText">Node.js</p>
                                    </div>
                                    <h6 className="tagsHeading">Business Size Experience</h6>
                                    <div className="tags">
                                        <p className="tagsText">Small (10-99 employees)</p>
                                    </div>
                                    <br />
                                    <h6 className="tagsHeading">Project description</h6>
                                    <p className="discriptionText">It was the business website of an IT company located in Canada to
                                        showcase its services. Eventually, I developed an eye-catchy website for them which
                                        literally enhanced their sales.</p>
                                    <a className="descriptionLink" href="https://flexlab.io/" target="_blank">flexlab.io/</a>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="foodpandaModel" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">ORDER FOOD AND GROCERY ONLINE</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <hr style={{ width: "93%" }} />
                                <div className="modal-body">
                                    <img src={foodpanda2} />
                                    <span>Landing Page</span>
                                    <br /><br />
                                    <video src={foodpandaVideo} controls width="100%" height="500px"></video>
                                    <br />
                                    <img src={foodpandaCheckout} style={{ display: "flex", margin: "0 auto" }} />
                                    <br />
                                    <img src={foodpandaDetail} width="33%" height="700px"
                                        style={{ display: "flex", margin: "0 auto" }} />
                                    <br />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="travelAgencyModel" tabIndex="-1" role="dialog"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">GENERATIVE NFT MARKETPLACE AND STAKING PLATFORM</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <hr style={{ width: "93%" }} />
                                <div className="modal-body">
                                    <img src={NFTlandingPage} />
                                    <span>Landing Page</span>
                                    <img src={nftMintNew} />
                                    <span>Users can mint new NFTs</span>
                                    <img src={nftDigitalAssets} />
                                    <span>My digital assets page shows all the NFTs of a particular user from the wallet.</span>
                                    <img src={nftItemsCreated} />
                                    <span>Minted and sold NFTs of each user</span>
                                    <br />
                                    <h6 className="tagsHeading">Project description</h6>
                                    <p className="discriptionText">Users can mint and sell new NFTs via the generative art feature of the
                                        platform or by just uploading the file from the computer. Marketplace allows buyers to buy NFT.
                                        <br /><br />
                                        It also has a stacking feature. Which allow users to deposit ETH and user can withdraw anytime or
                                        at
                                        a specific time + incentives in the form of Platform tokens according to the time span of holding,
                                        which they can hold as crypto and can use to buy NFT from the platform. Moreover, it also provides
                                        a borrowed feature. Overall, we can say this feature a decentralized bank.
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="garagesCompareModel" tabIndex="-1" role="dialog"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Buy and Sell business</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <hr style={{ width: "93%" }} />
                                <div className="modal-body">
                                    <img src={garagesLandingPage} />
                                    <span>Landing Page</span>
                                    <img src={garagesSearch} />
                                    <span>Advance Search</span>
                                    <img src={garagesAddImg} />
                                    <span>Add image</span>
                                    <img src={garagesViewAdd} />
                                    <span>View Add</span>
                                    <img src={garagesAdPublis} />
                                    <span>Add Publish</span>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content gallery mt-5">
                        <div className="tab-pane active" id="web-development">
                            <div className="ml-auto mr-auto">
                                {/* <p className="furtherDetailTxt" title="Click for detail">Click any image for detail</p> */}
                                <br /><br /><br /><br /><br />
                                <div className="row" style={{marginTop: '-20px'}}>
                                    <div className="col-md-6">
                                        <div className="cc-porfolio-image img-raised" data-aos="fade-up"
                                            data-aos-anchor-placement="top-bottom" data-toggle="modal" data-target="#exchangeModel"
                                            style={{ opacity: "1 !important" }}>
                                            <figure className="cc-effect">
                                                <img src={gsuExchange1}
                                                    style={{ height: "350px", width: "540px" }} />
                                                <figcaption>
                                                    <div className="h4">Crypto and Fiat Currency Exchange</div>
                                                    <p>Blockcahin Development</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div>
                                            <h6 className="text-center portImgName">Crypto and Fiat Currency Exchange</h6>
                                        </div><br />
                                        <div className="cc-porfolio-image img-raised" data-aos="fade-up"
                                            data-aos-anchor-placement="top-bottom" data-toggle="modal" data-target="#gatewayModel">
                                            <a href="#web-development">
                                                <figure className="cc-effect">
                                                    <img src={DepositPage}
                                                        style={{ height: "275px" }} />
                                                    <figcaption>
                                                        <div className="h4">Crypto Payment Gateway</div>
                                                        <p>Blockcahin Development</p>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>
                                        <div>
                                            <h6 className="text-center portImgName">Crypto Payment Gateway</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="cc-porfolio-image img-raised" data-aos="fade-up"
                                            data-aos-anchor-placement="top-bottom" data-toggle="modal" data-target="#travelAgencyModel">
                                            <a href="#Photography">
                                                <figure className="cc-effect">
                                                    <img src={NFTlandingPage}
                                                        style={{ height: "300px" }} />
                                                    <figcaption>
                                                        <div className="h4">NFT MarketPlace and staking Platform</div>
                                                        <p>Ethereum Development</p>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>
                                        <div>
                                            <h6 className="text-center portImgName">Generative NFT MarketPlace and staking Plateform</h6>
                                        </div><br />
                                        <div className="cc-porfolio-image img-raised" data-aos="fade-up"
                                            data-aos-anchor-placement="top-bottom" data-toggle="modal" data-target="#veeromodel">
                                            <a href="#web-development">
                                                <figure className="cc-effect eCommercePlateform">
                                                    <img src={veeroLandingPage}
                                                        style={{ height: "325px" }} />
                                                    <figcaption>
                                                        <div className="h4">eCommerce Platform</div>
                                                        <p>full-stack Development</p>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>
                                        <div>
                                            <h6 className="text-center portImgName">eCommerce Platform</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="graphic-design" role="tabpanel">
                            <div className="ml-auto mr-auto">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="cc-porfolio-image img-raised" data-aos="fade-up"
                                            data-aos-anchor-placement="top-bottom" data-toggle="modal" data-target="#samindexwebsitemodel">
                                            <a href="#graphic-design">
                                                <figure className="cc-effect">
                                                    <img src={samIndexLandingPageDappLightTheme}
                                                        alt="Image" />
                                                    <figcaption>
                                                        <div className="h4">Listing and Trading of crypto currency platform
                                                        </div>
                                                        <p>Crypto Development</p>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>
                                        <div>
                                            <h6 className="text-center portImgName">Listing and Trading of crypto currency platform</h6>
                                        </div><br />
                                        <div className="cc-porfolio-image img-raised" data-aos="fade-up"
                                            data-aos-anchor-placement="top-bottom" data-toggle="modal" data-target="#garudaGlobalModel">
                                            <a href="#">
                                                <figure className="cc-effect"><img src={garudaLandingPage} alt="Image" />
                                                    <figcaption>
                                                        <div className="h4">logistics Website</div>
                                                        <p>Front End Development</p>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>
                                        <div>
                                            <h6 className="text-center portImgName">logistics Website</h6>
                                        </div><br />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="cc-porfolio-image img-raised" data-aos="fade-up"
                                            data-aos-anchor-placement="top-bottom" data-toggle="modal" data-target="#zoomAssistantModel">
                                            <a href="#">
                                                <figure className="cc-effect"><img src={zoomAssistantSettings}
                                                    style={{ height: "348px" }} />
                                                    <figcaption>
                                                        <div className="h4">Zoom Assistant</div>
                                                        <p>Back end Development</p>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>
                                        <div>
                                            <h6 className="text-center portImgName">Zoom Assistant</h6>
                                        </div><br />
                                        <div className="cc-porfolio-image img-raised" data-aos="fade-up"
                                            data-aos-anchor-placement="top-bottom" data-toggle="modal" data-target="#socialAppModel">
                                            <a href="#graphic-design">
                                                <figure className="cc-effect"><img src={youGotmailHomePageDiscover}
                                                    alt="Image" />
                                                    <figcaption>
                                                        <div className="h4">Social app like Facebook or match.com</div>
                                                        <p>Full Stack Development</p>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>
                                        <div>
                                            <h6 className="text-center portImgName">Social app like Facebook or match.com</h6>
                                        </div><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="Photography" role="tabpanel">
                            <div className="ml-auto mr-auto">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="cc-porfolio-image img-raised" data-aos="fade-up"
                                            data-aos-anchor-placement="top-bottom" data-toggle="modal" data-target="#flexlabModel">
                                            <figure className="cc-effect"><img src={flexlab1} />
                                                <figcaption>
                                                    <div className="h4">Professional business website</div>
                                                    <p>Front-End Development</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div>
                                            <h6 className="text-center portImgName">Professional business website</h6>
                                        </div><br />
                                        <div className="cc-porfolio-image img-raised" data-aos="fade-up"
                                            data-aos-anchor-placement="top-bottom" data-toggle="modal" data-target="#OTAmodel">
                                            <figure className="cc-effect"><img src={OTAHomescreen} style={{ height: "310px" }} />
                                                <figcaption>
                                                    <div className="h4">Online Travel Agency</div>
                                                    <p>Full Stack Development</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div>
                                            <h6 className="text-center portImgName">Travel Agency website</h6>
                                        </div><br />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="cc-porfolio-image img-raised" data-aos="fade-up"
                                            data-aos-anchor-placement="top-bottom" data-toggle="modal" data-target="#foodpandaModel">
                                            <a href="#Photography">
                                                <figure className="cc-effect"><img src={foodpanda} />
                                                    <figcaption>
                                                        <div className="h4">Order food and grocery online</div>
                                                        <p>Full Stack Development</p>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>
                                        <div>
                                            <h6 className="text-center portImgName">Order food and grocery online</h6>
                                        </div><br />
                                        <div className="cc-porfolio-image img-raised" data-aos="fade-up"
                                            data-aos-anchor-placement="top-bottom" data-toggle="modal" data-target="#garagesCompareModel">
                                            <a href="#Photography">
                                                <figure className="cc-effect"><img src={garagesLandingPage}
                                                    style={{ height: "283px" }} />
                                                    <figcaption>
                                                        <div className="h4">Buy and Sell business</div>
                                                        <p>Full stack Development</p>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>
                                        <div>
                                            <h6 className="text-center portImgName">Buy and Sell business</h6>
                                        </div><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
