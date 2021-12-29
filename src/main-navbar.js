import React, { useState, useEffect } from "react";
import "./Styles/navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pulse from "react-reveal/Pulse";
import { Link } from "react-router-dom";
import IdeaForm from "./components/forms/idea-form";
import Ads from "./components/ads/ads";
import Fade from "react-reveal/Fade";
import AudioPlayerProv from "./components/ui/react-audio-player";

const Main_navbar = () => {
  const [show, setShow] = useState(false);
  const [mybutton, setMybutton] = useState(null);

  useEffect(() => {
    setMybutton(document.getElementById("myBtn"));
  }, []);

  const onShow = () => {
    setShow(true);
  };

  const renderModal = () => {
    return (
      <IdeaForm showIdeaModal={show} onHideIdeaModal={() => setShow(false)} />
    );
  };

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div>
      <div
        className="row p-0 m-0 sticky-top text-white"
        style={{ backgroundColor: "rgb(66 176 211)" }}
      >
        {/* <AudioPlayerProv /> */}
        <div className="col-2 d-none d-lg-block p-0 ">
          <div className="position-relative">
            <Link id="link" to="/home">
              <img className="main_logo rounded-3" src="/images/logoooo.jfif" />
            </Link>
          </div>
        </div>
        <div
          style={{ color: "#7f807f" }}
          className="col-lg-7 py-3 col-12 text-center d-flex justify-content-between align-items-center p-0 text-white"
        >
          <Link
            id="link"
            to="/home"
            className="hvr-float-shadow  d-flex justify-content-center align-items-center"
            style={{ color: "#f3f3f3" }}
          >
            <div>
              <img
                className="mx-2 imgsz"
                src="/images/icons_black/citiezen.png"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <span className="spansz">الرئيسية</span>
            </div>
          </Link>
          <div className=" d-none d-md-block">|</div>

          <Link
            id="link"
            to="/investor"
            className="hvr-float-shadow  d-flex justify-content-center align-items-center"
            style={{ color: "#f3f3f3" }}
          >
            <div>
              <img
                className="mx-2 imgsz"
                src="/images/icons_black/Investor-0١.png"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <span className="spansz">المستثمر</span>
            </div>
          </Link>
          <div className=" d-none d-md-block">|</div>

          <Link
            id="link"
            to="/tourist"
            className="hvr-float-shadow  d-flex justify-content-center align-items-center"
            style={{ color: "#f3f3f3" }}
          >
            <img
              className="mx-2 imgsz"
              src="/images/icons_black/Tourist-0٢.png"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span className="spansz">السائح</span>
          </Link>
          <div className="d-block d-lg-none text-white bg-danger p-2 text-center">
            بث تجريبي
          </div>
        </div>
        <div className="col-3  d-none d-lg-flex justify-content-end align-items-center px-0">
          <Link
            to="/contactus/1"
            className="text-dark text-decoration-none fsiz"
          >
            خريطة الموقع
          </Link>
          <div className="col-2 d-flex justify-content-center">|</div>
          <Link
            to="/contactus/2"
            className="text-dark text-decoration-none col-3 fsiz"
          >
            اتصل بنا
          </Link>
          <div className="d-lg-block d-none text-white bg-danger p-2 text-center">
            بث تجريبي
          </div>
        </div>

        <Navbar
          className="py-0"
          collapseOnSelect
          expand="lg"
          variant="dark"
          style={{
            backgroundColor: "#06496a",
          }}
        >
          <Container className="py-1">
            <Link
              id="link"
              className="navbar-brand d-lg-block d-none text-dark"
              to="/home"
            >
              <img
                style={{ width: 20, marginLeft: 10, visibility: "hidden" }}
                src="/images/icons/footer_logo-0١.png"
              />
            </Link>
            <Link
              className="navbar-brand d-lg-none d-block"
              id="link"
              to="/home"
            >
              <img
                style={{ width: 40, marginLeft: 10 }}
                src="/images/icons/footer_logo-0١.png"
              />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-center navMainTabs"
              id="responsive-navbar-nav"
            >
              <Nav className="align-items-center">
                <ul
                  className="navbar-nav mr-auto"
                  style={{ cursor: "pointer" }}
                >
                  <li className={`nav-item `}>
                    <Link
                      id="link"
                      to="/statichome/2001/aboutgovernment/2001/aboutgovernment"
                      className="nav-link text-light"
                    >
                      {" "}
                      عن المحافظة
                    </Link>
                  </li>
                  <li
                    className={`nav-item 
                      `}
                  >
                    <Link
                      id="link"
                      to={"/leaders"}
                      className="nav-link text-light"
                    >
                      قيادات المحافظة
                    </Link>
                  </li>
                  <li className={`nav-item`}>
                    <Link
                      id="link"
                      className="nav-link text-light"
                      to={"/exconservatives"}
                    >
                      المحافظون السابقون
                    </Link>
                  </li>
                  <li
                    className={`nav-item 
                      `}
                  >
                    <Link
                      id="link"
                      to={"/appointment"}
                      className="nav-link text-light"
                    >
                      لقاءات و قرارات السيد المحافظ{" "}
                    </Link>
                  </li>
                  {/* <li className={`nav-item`}>
                    <Link
                      id="link"
                      to={"/org-chart"}
                      className="nav-link text-light"
                    >
                      الديوان العام{" "}
                    </Link>
                  </li> */}
                  <li
                    className={`nav-item 
                      `}
                  >
                    <Link
                      id="link"
                      to="/cities"
                      className="nav-link text-light"
                    >
                      مدن المحافظة
                    </Link>
                  </li>
                  <li className={`nav-item`}>
                    <Link to="/directorates" className="nav-link text-light">
                      المديريات
                    </Link>
                  </li>
                  <li className={`nav-item`}>
                    <div
                      id="link"
                      className="nav-link text-light"
                      onClick={() => {
                        onShow();
                      }}
                    >
                      بنك الأفكار
                    </div>
                  </li>

                  <li
                    className={`nav-item 
                      `}
                  >
                    <Link
                      to="/contactus/1"
                      className=" d-lg-none d-block  nav-link text-light"
                    >
                      {" "}
                      خريطة الموفع
                    </Link>
                  </li>

                  <li
                    className={`nav-item 
                      `}
                  >
                    <Link
                      to="/contactus/2"
                      className="d-lg-none d-block nav-link text-light"
                    >
                      {" "}
                      اتصل بنا
                    </Link>
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div
        className="d-flex flex-column position-fixed"
        style={{ left: "2px", top: "30%", zIndex: 100 }}
      >
        {/* <Pulse>
          <a href="https://www.facebook.com/aswan.gov.eg" target="_blank">
            <div
              className="side_social_icons text-center p-1 py-2 rounded-3 mb-3 "
              style={{ backgroundColor: "" }}
            >
              {" "}
              <FontAwesomeIcon
                color={"#3b51a3"}
                size="2x"
                icon={faFacebookF}
              ></FontAwesomeIcon>
            </div>
          </a>
        </Pulse> */}

        {/* paid ads */}

        <Fade left>
          {/* <div
              className="side_social_icons text-center p-1 py-2 rounded-3 mb-3 "
              style={{
                backgroundColor: "",
                height: "260px",
                width: "200px",
              }}
            >
              <div className="w-100 d-flex px-1">
                <FontAwesomeIcon
                  onClick={() => {
                    setDisplay(false);
                  }}
                  color={"#3b51a3"}
                  size="1x"
                  icon={faTimes}
                  cursor={"pointer"}
                ></FontAwesomeIcon>
              </div> */}
          <Ads />
          {/* </div> */}
        </Fade>

        {/* <Pulse>
          <a href="#">
            <div className=" side_social_icons  text-center p-1 py-2 rounded-3 mb-3 ">
              {" "}
              <FontAwesomeIcon
                color={"#5da9dd"}
                size="2x"
                icon={faTwitter}
              ></FontAwesomeIcon>
            </div>
          </a>
        </Pulse> */}
        {/* <Pulse>
          {" "}
          <a href="#">
            <div className="side_social_icons  text-center p-1 py-2 rounded-3 mb-3 ">
              {" "}
              <FontAwesomeIcon
                color={"#ca5080"}
                size="2x"
                icon={faInstagram}
              ></FontAwesomeIcon>
            </div>
          </a>{" "}
        </Pulse> */}
        {/* <Pulse>
          {" "}
          <a href="#">
            {" "}
            <div className=" side_social_icons  text-center p-1 py-2  rounded-3 mb-3 ">
              {" "}
              <FontAwesomeIcon
                color={"#e61e24"}
                size="2x"
                icon={faYoutube}
              ></FontAwesomeIcon>
            </div>
          </a>
        </Pulse> */}

        {/* <img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/>
<img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/>
<img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/>
<img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/> */}
      </div>
      <div
        onClick={topFunction}
        id="myBtn"
        className="text-danger position-fixed"
        title="Go to top"
        // style={{ bottom: 45, right: 30, zIndex: 100000 }}
      >
        <div className="mt-2 d-flex justify-content-center h-100">
          <FontAwesomeIcon
            color={"#ffe990"}
            size="2x"
            icon={faChevronUp}
          ></FontAwesomeIcon>
        </div>
      </div>
      {renderModal()}
    </div>
  );
};
export default Main_navbar;
