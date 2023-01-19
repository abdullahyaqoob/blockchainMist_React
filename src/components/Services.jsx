// react States
// import { useEffect, useState } from 'react'
import React, { Component } from "react";
import AOS from 'aos';

// Images
import services_Blockchain from "../Images/services/services_Blockchain.png";
import services_UxUI from "../Images/services/services_UxUI.png";
import services_Apps from "../Images/services/services_Apps.png";
import blueLine from "../Images/services/blueLine.png";
import services1 from "../Images/services/services-01.png";
import purpleLine from "../Images/purple-line.png";

// Toast
import { ToastContainer } from "react-toastify";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// css
import '../css/ourTeam.css'
import '../css/ourPortfolio.css'
import '../css/services.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whichSection: "mainPage",
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

  changeSectionFunc = (e) => {
    this.setState({ whichSection: e })
    window.scrollTo(0, 0)
  }

  render() {

    return (
      <div>
        {this.state.whichSection === 'mainPage' ?
          <div>
            <div className="servicesMainContainer">
              <div className="fadeOverlay">
                <div className="heroContainerServices" data-aos="flip-left" style={{position: 'relative', top:'20px'}}>
                  <h1>Our <span><img className="servicesBlueLineHero" src={blueLine} alt="blueLine" /></span> Services</h1>
                  <p>We assist companies and enterprises in building, testing, and deploying apps while using the power of blockchain and cryptocurrencies across industries.</p>
                </div>
                <div className="services-container ourTeamUsers mainServices servicesTopCont" style={{ position: 'relative', left: '-18px', top: '-120px' }}>
                  <div className="services-box servicesBox" data-aos="slide-left">
                    <img src={services_Blockchain} alt="" />
                    <h1>Blockchain <span style={{ color: '#8671DB' }}>Development</span></h1>
                    <p>Our blockchain development company is leading the industry as our developers create quality websites based on blockchain and digital history of transactions. <span style={{ color: 'blue', display: 'block', marginTop: '20px' }} onClick={() => this.changeSectionFunc('blockchianDev')}>Read More</span></p>
                  </div>
                  <div className="services-box servicesBox">
                    <img src={services_UxUI} alt="" />
                    <h1>UX UI <span style={{ color: '#8671DB' }}>Design</span></h1>
                    <p>We have an experience in design for user experience, and we're dedicated to creating applications that are both beautiful and easy to use. <span style={{ color: 'blue', display: 'block', marginTop: '20px' }} onClick={() => this.changeSectionFunc('uxUiDesign')}>Read More</span></p>
                  </div>
                  <div className="services-box servicesBox" data-aos="slide-right">
                    <img src={services_Apps} alt="" />
                    <h1>Web & Mobile <span style={{ color: '#8671DB' }}>Apps</span></h1>
                    <p>We have specialized team to develop the Web and Mobile Application. We ensure that our clients will satisfy from our work.</p>
                  </div>
                  <div className="services-box servicesBox" data-aos="slide-left">
                    <img src={services_Blockchain} alt="" />
                    <h1>Initial Coin Offering<span style={{ color: '#8671DB' }}> (ICO)</span></h1>
                    <p>The crypto currency market's version of a stock market IPO is an initial coin offering (ICO) (IPO). <span style={{ color: 'blue', display: 'block', marginTop: '20px' }} onClick={() => this.changeSectionFunc('ico')}>Read More</span></p>
                  </div>
                  <div className="services-box servicesBox">
                    <img src={services_UxUI} alt="" />
                    <h1>Decentralized Finance<span style={{ color: '#8671DB' }}> (DEFI)?</span></h1>
                    <p>Decentralized finance (DEFI) is an emerging financial technology based on secure distributed ledgers similar to those used by crypto currencies. <span style={{ color: 'blue', display: 'block', marginTop: '20px' }} onClick={() => this.changeSectionFunc('defi')}>Read More</span></p>
                  </div>
                  <div className="services-box servicesBox" data-aos="slide-right">
                    <img src={services_Apps} alt="" />
                    <h1>Blockchain<span style={{ color: '#8671DB' }}> Agnosticism</span></h1>
                    <p>Block chain-agnostic solutions can be used with several block chain networks, including layer 2 block chains. <span style={{ color: 'blue', display: 'block', marginTop: '20px' }} onClick={() => this.changeSectionFunc('blockchainAgnosticism')}>Read More</span></p>
                  </div>
                  <div className="services-box servicesBox" data-aos="slide-left">
                    <img src={services_Blockchain} alt="" />
                    <h1>Backend<span style={{ color: '#8671DB' }}> Engineer</span></h1>
                    <p>A backend engineer is someone who works on the server side of websites. To put it another way, a backend engineer's main job is to provide the framework for a software program. <span style={{ color: 'blue', display: 'block', marginTop: '20px' }} onClick={() => this.changeSectionFunc('backendEng')}>Read More</span></p>
                  </div>
                  <div className="services-box servicesBox">
                    <img src={services_UxUI} alt="" />
                    <h1>DAPP<span style={{ color: '#8671DB' }}> Development</span></h1>
                    <p>One definition of a DAPP is an application that combines a smart contract and a frontend user experience with the benefits of a decentralized network. <span style={{ color: 'blue', display: 'block', marginTop: '20px' }} onClick={() => this.changeSectionFunc('dappDev')}>Read More</span></p>
                  </div>
                  <div className="services-box servicesBox" data-aos="slide-right">
                    <img src={services_Apps} alt="" />
                    <h1>App<span style={{ color: '#8671DB' }}> development</span></h1>
                    <p>Application development refers to developing an application to meet a business's specific needs. <span style={{ color: 'blue', display: 'block', marginTop: '20px' }} onClick={() => this.changeSectionFunc('appDev')}>Read More</span></p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="servicesWeServeHeading" style={{ color: '#fff' }}>.</h3>
            {/* <h3 className="servicesWeServeHeading"><span style={{ color: '#8671DB' }}>Industries</span> We Serve</h3>
              <center>
                <img className="servicesWeServeImg" src={services1} alt="services1" data-aos="flip-left" />
              </center> */}

            {/* <div className="industriesServeCOntainer">
                <div className="industriesServeWorkingCOntainer">
                  <h2 className="servicesHeadingCaption industriesServeHeadingg">Industries We <br />Serve</h2>
                  <div className="services-container ourTeamUsers mainServicesservices subServicesContainer mainServices" data-aos="flip-right">
                    <div className="services-box" style={{ marginTop: '400px' }}>
                      <img src={services_Blockchain} alt="" />
                      <h1>Healthcare</h1>
                      <p>The healthcare industry is an aggregation and integration of sectors within an economic system that provides goods and services for the treatment of patients with curative, preventive, rehabilitative and palliative care.</p>
                    </div>
                    <div className="services-box" style={{ marginTop: '200px' }}>
                      <img src={services_UxUI} alt="" />
                      <h1><span style={{ color: '#8671DB' }}>Fintech </span> & banking</h1>
                      <p>Fintech is a portmanteau for “financial technology.” It’s a catch-all term for technology used to augment, streamline, digitize or disrupt traditional financial services.</p>
                    </div>
                    <div className="services-box">
                      <img src={services_Apps} alt="" />
                      <h1>Supply <span style={{ color: '#8671DB' }}>Chain</span></h1>
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
              </div> */}

          </ div>
          : this.state.whichSection === "blockchianDev" ?
            <div>
              <div className="whyUsRoot" style={{ marginTop: '-50px' }}>
                <h2><span><img src={purpleLine} alt="purpleLine" />Blockchain</span> Development</h2>
                <p className="servicesReadMorePara">The blockchain technology is emerging at a fast pace as the software development technologies in form of blockchain development and it is a future of the website/mobile application development company. Blockchain applications are totally decentralized Fnance and each of the transactions is time stamped so we can say that the information stored in blockchain is secure Whether it is based on selling, purchasing, etc that involve value.</p>
                <div className="servicesReadMoreSubPara">
                  {/* <h3>How an Initial Coin Offering (ICO) Works</h3> */}
                  <p className="servicesReadMorePara">A blockchain development company is leading the wide industry as our developers create quality websites based on blockchain and digital record of transactions. According to an improvement of crypto blockchain trading, it is the future of digital currency blockchain network which depends on anywhere.  <span style={{ color: 'blue', display: 'block', marginTop: '20px' }} onClick={() => this.setState({ whichSection: "mainPage" })}>Go Back</span></p>
                </div>
              </div>
            </div>
            : this.state.whichSection === "uxUiDesign" ?
              <div>
                <div className="whyUsRoot" style={{ marginTop: '-50px' }}>
                  <h2><span><img src={purpleLine} alt="purpleLine" />UX UI</span> Design</h2>
                  <p className="servicesReadMorePara">At Meliorist Information Services & Technology Inc. We merge with creativity, and innovation to build attractive user interfaces and provide outstanding digital experiences. Using the most recent technology, we plan, design, and develop one-of-a-kind digital solutions while selecting colours, fonts, and typography most suited for your app. For startups, small businesses, and large corporations a like, our mobile app design company is the ideal option. We adhere to a clearly defined UX approach that enables us to develop applications with excellent user interfaces and outstanding user experiences. <span style={{ color: 'blue', display: 'block', marginTop: '20px' }} onClick={() => this.setState({ whichSection: "mainPage" })}>Go Back</span></p>
                  <div className="servicesReadMoreSubPara">
                    <p className="servicesReadMorePara">.</p>
                  </div>
                </div>
              </div>
              : this.state.whichSection === "ico" ?
                <div>
                  <div className="whyUsRoot" style={{ marginTop: '-50px' }}>
                    <h2><span><img src={purpleLine} alt="purpleLine" />Initial Coin Offering</span> (ICO)</h2>
                    <p className="servicesReadMorePara">The crypto currency market's version of a stock market IPO is an initial coin offering (ICO) (IPO). To fund the development of a brand-new crypto currency, program, or service, a business may choose to host an initial coin offering (ICO). Interested investors can buy into an initial coin offering to receive a new crypto currency token issued by the company. Either this token represents a stake in the firm or project, or it has some usefulness associated with the company's product or service.</p>
                    <div className="servicesReadMoreSubPara">
                      <h3>How an Initial Coin Offering (ICO) Works</h3>
                      <p className="servicesReadMorePara">The first step is to plan the layout of the coin. ICOs can be structured in a few different ways, including when a crypto currency project wants to raise money through an ICO, the project organizers. A company can set a specific funding goal or limit, which means that each token sold in the ICO has a preset price, and the total token supply is fixed; an ICO can have a static supply of tokens and a dynamic funding goal—this means that the amount of funds received in the ICO determines the overall price per token, some ICOs have a dynamic token supply but a fixed price, meaning that the amount of funding received determines the supply. <span style={{ color: 'blue', display: 'block', marginTop: '20px' }} onClick={() => this.setState({ whichSection: "mainPage" })}>Go Back</span></p>
                    </div>
                  </div>
                </div>
                : this.state.whichSection === "defi" ?
                  <div>
                    <div className="whyUsRoot" style={{ marginTop: '-50px' }}>
                      <h2><span><img src={purpleLine} alt="purpleLine" />Decentralized Finance</span> (DEFI)?</h2>
                      <p className="servicesReadMorePara">Decentralized finance (DEFI) is an emerging financial technology based on secure distributed ledgers similar to those used by crypto currencies. In the U.S., the Federal Reserve and Securities and Exchange Commission (SEC) define the rules for centralized financial institutions like banks and brokerages, which consumers rely on to access capital and financial services directly. DEFI challenges this centralized financial system by empowering individuals with peer-to-peer digital exchanges. DEFI eliminates the fees banks, and other financial companies charge for using their services. Individuals hold money in a secure digital wallet, can transfer funds in minutes, and anyone with an internet connection can use DEFI.</p>
                      <div className="servicesReadMoreSubPara">
                        <h3>How Does DEFI Work?</h3>
                        <p className="servicesReadMorePara">The block chain technology that crypto currencies rely on is used in decentralized finance. A block chain is a decentralized and encrypted ledger or database. Distributed applications are used to process transactions and operate the block chain. The transactions on the block chain are recorded in blocks and are validated by other users. If all of the verifiers approve of a transaction, the block is sealed and encrypted, and the data from that block is included in the next block.
                          For this reason, the term "block chain" refers to the interconnected series of blocks linked by the data contained in their predecessors. One cannot modify a block chain since doing so would invalidate subsequent blocks based on altered information in prior blocks. This idea, along with other security measures, gives a block chain its security. <span style={{ color: 'blue', display: 'block', marginTop: '20px' }} onClick={() => this.setState({ whichSection: "mainPage" })}>Go Back</span></p>
                      </div>
                    </div>
                  </div>
                  : this.state.whichSection === "blockchainAgnosticism" ?
                    <div>
                      <div className="whyUsRoot" style={{ marginTop: '-50px' }}>
                        <h2><span><img src={purpleLine} alt="purpleLine" />Blockchain</span> Agnosticism</h2>
                        <p className="servicesReadMorePara">Block chain-agnostic solutions can be used with several block chain networks, including layer 2 block chains. They may connect to several block chain networks with only one message format, architecture, or interface for smooth transactions, data retrieval, and status updates.</p>
                        <div className="servicesReadMoreSubPara">
                          <h3>How does block chain agnosticism work?</h3>
                          <p className="servicesReadMorePara">The term "block chain" refers to a distributed database that adds new blocks (ordered entries) to an existing list in real-time. These blocks are cryptographically connected. A cryptographic hash of the previous block, a timestamp, and transaction data are all included in each block. <span style={{ color: 'blue', display: 'block', marginTop: '20px' }} onClick={() => this.setState({ whichSection: "mainPage" })}>Go Back</span></p>
                        </div>
                      </div>
                    </div>
                    : this.state.whichSection === "backendEng" ?
                      <div>
                        <div className="whyUsRoot" style={{ marginTop: '-50px' }}>
                          <h2><span><img src={purpleLine} alt="purpleLine" />Backend</span> Engineer</h2>
                          <p className="servicesReadMorePara">A backend engineer is someone who works on the server side of websites. To put it another way, a backend engineer's main job is to provide the framework for a software program. They lay the groundwork for the software team's primary objectives. Thus, a backend engineer's major role on a software development team is to provide APIs, server scripts, and business logic that other programmers will utilize.</p>
                          <div className="servicesReadMoreSubPara">
                            <h3>How does a Backend Engineer Work?</h3>
                            <p className="servicesReadMorePara">Backend developers require a certain set of abilities to do their tasks effectively. As mentioned, they determine the course of action for the software development team. They are in charge of managing the development of the application's framework. Backend developers create server scripts and application programming interfaces (APIs) for usage by frontend developers and user experience designers. The primary focus of backend engineers is on the server side of multi-tiered online applications, including web services and data storage. They may also be engaged in the thinking behind putting in place company rules. <span style={{ color: 'blue', display: 'block', marginTop: '20px' }} onClick={() => this.setState({ whichSection: "mainPage" })}>Go Back</span></p>
                          </div>
                        </div>
                      </div>
                      : this.state.whichSection === "dappDev" ?
                        <div>
                          <div className="whyUsRoot" style={{ marginTop: '-50px' }}>
                            <h2><span><img src={purpleLine} alt="purpleLine" />Decentralized applications</span> DAPP Development</h2>
                            <p className="servicesReadMorePara">One definition of a DAPP is an application that combines a smart contract and a frontend user experience with the benefits of a decentralized network. A decentralized application is functionally equivalent to any other software program; it may run on desktop computers or mobile devices and have a graphical user interface (GUI) like any other application. The uniqueness of a DAPP lies in its inner workings; the software is driven by transactions happening on a decentralized network. The majority, if not all, of the code execution, occurs on a distributed network, such as Ethereum, in the backend.</p>
                            <div className="servicesReadMoreSubPara">
                              <h3>How does DAPP work?</h3>
                              <p className="servicesReadMorePara">To summarize, decentralized applications (DAPP) operate on P2P Block chain networks rather than centralized servers. Distributed applications (DAPP) are built, deployed, and run on a block chain platform, most frequently Ethereum. Digital tokens are used for authentication within the app. <span style={{ color: 'blue', display: 'block', marginTop: '20px' }} onClick={() => this.setState({ whichSection: "mainPage" })}>Go Back</span></p>
                            </div>
                          </div>
                        </div>
                        : <div>
                          <div className="whyUsRoot" style={{ marginTop: '-50px' }}>
                            <h2><span><img src={purpleLine} alt="purpleLine" />App</span> development</h2>
                            <p className="servicesReadMorePara">Application development refers to developing an application to meet a business's specific needs. Applications assist in automating and improving the productivity of various corporate procedures, from calculating monthly budgets to arranging sales reports. All app development processes include the same phases: requirements gathering, prototype design, testing, implementation, and integration.</p>
                            <div className="servicesReadMoreSubPara">
                              <h3>How does App Development work?</h3>
                              <p className="servicesReadMorePara">Several steps are involved in developing an android app, and they all occur in order. Several processes and actions begin in the background when developers are finished creating their code and click the Run button in Android studio. Every asynchronous process is essential and dependent on others. The IDE compiles all of the application's files to be successfully deployed to the device and executed without error. This article provides a high-level overview of the process from initial IDE files to a functional app on a device. <span style={{ color: 'blue', display: 'block', marginTop: '20px' }} onClick={() => this.setState({ whichSection: "mainPage" })}>Go Back</span></p>
                            </div>
                          </div>
                        </div>
        }
        <ToastContainer />
      </div >
    );
  }
}

export default App;
