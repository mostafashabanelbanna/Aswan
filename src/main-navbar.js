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

const Main_navbar = () => {
  return (
    <div>
      <div className="row p-0 m-0 mt-2 sticky-top bg-light">
        <div className="col-2 d-none d-lg-block p-0">
          <div className="position-relative">
            <img className="main_logo" src="/images/icons/logo_banner-0١.png" />
          </div>
        </div>
        <div
          style={{ color: "#7f807f" }}
          className="col-lg-7 py-3 col-12 text-center d-flex justify-content-around align-items-center p-0"
        >
            <div
              style={{ cursor: "pointer" }}
              className="col-3 col-sm-2 hvr-float-shadow d-flex justify-content-center align-items-center"
            >
            <Link to="/" className="text-decoration-none text-muted">
              <img className="mx-2 imgsz" src="/images/icons/home-0١.png" />
              <span className="spansz">الرئيسية</span>
            </Link>
            </div>
          <div className=" d-none d-md-block">|</div>

          <div
            style={{ cursor: "pointer" }}
            className="col-3 col-sm-2 hvr-float-shadow d-flex justify-content-center align-items-center"
          >
            <img className="mx-2 imgsz" src="/images/icons/citizen-0١.png" />{" "}
            <span className="spansz">المواطن</span>
          </div>

          <div className=" d-none d-md-block">|</div>

          <div
            style={{ cursor: "pointer" }}
            className="col-3 col-sm-2 hvr-float-shadow d-flex justify-content-center align-items-center"
          >
            <img className="mx-2 imgsz" src="/images/icons/Investor-0١.png" />
            <span className="spansz">المستثمر</span>
          </div>

          <div className=" d-none d-md-block">|</div>

          <div
            style={{ cursor: "pointer" }}
            className="col-3  col-sm-2 hvr-float-shadow  d-flex justify-content-center align-items-center"
          >
            <img className="mx-2 imgsz" src="/images/icons/Tourist-0٢.png" />
            <span className="spansz">السائح</span>
          </div>
        </div>
        <div
          style={{ color: "#7f807f" }}
          className="col-3  d-none d-lg-flex justify-content-center align-items-center p-0 py-3"
        >
          <div className="col-5 fsiz">خريطة الموقع</div>
          <div className="col-2">|</div>
          <div className="col-5 fsiz">تواصل معانا</div>
        </div>

        <Navbar
          className="py-0 bg-secondary"
          collapseOnSelect
          expand="lg"
          variant="dark"
        >
          <Container className="py-1">
            <div className="navbar-brand d-lg-block d-none text-secondary">
              <img
                style={{ width: 20, marginLeft: 10, visibility: "hidden" }}
                src="/images/icons/footer_logo-0١.png"
              />
            </div>
            <div className="navbar-brand d-lg-none d-block" href="#">
              <img
                style={{ width: 40, marginLeft: 10 }}
                src="/images/icons/footer_logo-0١.png"
              />
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-center"
              id="responsive-navbar-nav"
            >
              <Nav className="align-items-center">
                <ul
                  className="navbar-nav mr-auto"
                  style={{ cursor: "pointer" }}
                >
                  <li className={`nav-item `}>
                    <a className="nav-link text-light"> عن المحافظة</a>
                  </li>
                  <li
                    className={`nav-item 
                      `}
                  >
                    <a className="nav-link text-light">قيادات المحافظة</a>
                  </li>
                  <li className={`nav-item`}>
                    <a className="nav-link text-light">المحافظون السابقون</a>
                  </li>
                  <li
                    className={`nav-item 
                      `}
                  >
                    <a className="nav-link text-light">
                      لقاءات و قرارات السيد المحافظ{" "}
                    </a>
                  </li>
                  <li className={`nav-item`}>
                    <a className="nav-link text-light">الديوان العام</a>
                  </li>
                  <li
                    className={`nav-item 
                      `}
                  >
                    <a className="nav-link text-light">مدن المحافظة</a>
                  </li>
                  <li className={`nav-item`}>
                    <a className="nav-link text-light">مجلس النواب</a>
                  </li>
                  <li
                    className={`nav-item 
                      `}
                  >
                    <a className="nav-link text-light">مجلس الشيوخ</a>
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
          <a href="#">
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
        <Pulse>
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
        </Pulse>
        <Pulse>
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
        </Pulse>
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
    </div>
  );
};
export default Main_navbar;
