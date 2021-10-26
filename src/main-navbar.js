import React, { useState } from "react";
import "./Styles/navbar.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pulse from "react-reveal/Pulse";
import { Link } from "react-router-dom";
import IdeaForm from "./components/forms/idea-form";

const Main_navbar = () => {
  const [show, setShow] = useState(false);

  const onShow = () => {
    setShow(true);
  };

  const renderModal = () => {
    return (
      <IdeaForm showIdeaModal={show} onHideIdeaModal={() => setShow(false)} />
    );
  };

  return (
    <div>
      <div
        className="row p-0 m-0 sticky-top"
        style={{ backgroundColor: "#ffe990" }}
      >
        <div className="col-2 d-none d-lg-block p-0">
          <div className="position-relative">
            <Link id="link" to="/home">
              <img
                className="main_logo rounded-3"
                // src="/images/icons/logo_banner-0١.png"
                // src='/images/logoo.jfif'
                src="/images/logoooo.jfif"
                // style={{height:'150px'}}
              />
            </Link>
          </div>
        </div>
        <div
          style={{ color: "#7f807f" }}
          className="col-lg-7 py-3 col-12 text-center d-flex justify-content-around align-items-center p-0"
        >
          <Link
            id="link"
            to="/home"
            className="hvr-float-shadow  d-flex justify-content-center align-items-center"
          >
            <div>
              <img
                className="mx-2 imgsz"
                src="/images/icons_black/citiezen.png"
              />
              <span className="spansz">الرئيسية</span>
            </div>
          </Link>
          <div className=" d-none d-md-block">|</div>

          <Link
            id="link"
            to="/investor"
            className="hvr-float-shadow  d-flex justify-content-center align-items-center"
          >
            <div>
              <img
                className="mx-2 imgsz"
                src="/images/icons_black/Investor-0١.png"
              />
              <span className="spansz">المستثمر</span>
            </div>
          </Link>
          <div className=" d-none d-md-block">|</div>

          <Link
            id="link"
            to="/tourist"
            className="hvr-float-shadow  d-flex justify-content-center align-items-center"
          >
            <img
              className="mx-2 imgsz"
              src="/images/icons_black/Tourist-0٢.png"
            />
            <span className="spansz">السائح</span>
          </Link>
        </div>
        <div className="col-3  d-none d-lg-flex justify-content-end align-items-center px-1 py-3">
          <Link to="/contactus" className="text-dark text-decoration-none fsiz">
            خريطة الموقع
          </Link>
          <div className="col-2 d-flex justify-content-center">|</div>
          <Link
            to="/contactus"
            className="text-dark text-decoration-none col-3 fsiz"
          >
            اتصل بنا
          </Link>
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
                //src='/images/logoo.jfif'
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
                // src='/images/logoo.jfif'
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
                    <a className=" d-lg-none d-block  nav-link text-light">
                      {" "}
                      خريطة الموفع
                    </a>
                  </li>

                  <li
                    className={`nav-item 
                      `}
                  >
                    <a className="d-lg-none d-block nav-link text-light">
                      {" "}
                      تواصل معانا
                    </a>
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <nav className="navbar navbar-expand-lg navbar-dark justify-content-around" style={{ backgroundColor: '#7f807f', color: 'white' }} >
 <div className="container-fluid">
  <button className="navbar-toggler mx-auto"  type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-around" id="main_nav">
        <ul className='navbar-nav'>
            <li className="nav-item active">
                <a className='nav-link'>عن المحافظة</a>
            </li>

            <li className="nav-item active">
                <a className='nav-link'>عن المحافظة</a>
            </li>

            <li className="nav-item active">
                <a className='nav-link'>عن المحافظة</a>
            </li>

            <li className="nav-item active">
                <a className='nav-link'>عن المحافظة</a>
            </li>

            <li className="nav-item active">
                <a className='nav-link'>عن المحافظة</a>
            </li>

            <li className="nav-item active">
                <a className='nav-link'>عن المحافظة</a>
            </li>

            <li className="nav-item active">
                <a className='nav-link'>عن المحافظة</a>
            </li>

            <li className="nav-item active">
                <a className='nav-link'>عن المحافظة</a>
            </li>
        </ul>
    </div>
    </div>
    </nav> */}
        {/* <div className=' d-flex justify-content-center align-items-center p-0 py-2' style={{ backgroundColor: '#7f807f', color: 'white' }} >
            <div className='fsiz'>عن المحافظة</div>
            <div className='mx-1'>|</div>

            <div className='fsiz'>قيادات المحافظة</div>
            <div className='mx-1'>|</div>

            <div className='fsiz'>المحافظون السابقون</div>
            <div className='mx-1'>|</div>

            <div className='fsiz'>لقاءات و قرارات السيد المحافظ</div>
            <div className='mx-1'>|</div>

            <div className='fsiz'>الديوان العام</div>
            <div className='mx-1'>|</div>

            <div className='fsiz'>مدن المحافظة</div>
            <div className='mx-1'>|</div>

            <div className='fsiz'>مجلس النواب</div>
            <div className='mx-1'>|</div>

            <div className='fsiz'>مجلس الشيوخ</div>
        </div> */}
      </div>{" "}
      <div
        className="d-flex flex-column position-fixed"
        style={{ left: "10px", top: "30%", zIndex: 10 }}
      >
        <Pulse>
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
        </Pulse>
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
        <Pulse>
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
        </Pulse>

        {/* <img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/>
<img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/>
<img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/>
<img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/> */}
      </div>
      {renderModal()}
    </div>
  );
};
export default Main_navbar;
