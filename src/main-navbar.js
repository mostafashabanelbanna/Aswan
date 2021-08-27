import React, { useState } from 'react'
import './Styles/navbar.css'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { faFacebookF, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Main_navbar = () => {


  return (
    <div className='row p-0 m-0 mt-2 sticky-top bg-light'>
      <div className="col-2 p-0">
        <div className='position-relative'>
          <img className='main_logo' src='/images/icons/logo_banner-0١.png' />
        </div>
      </div>
      <div style={{ color: '#7f807f' }} className='col-7 text-center d-flex justify-content-center align-items-center p-0'>
        <div className='col-3 col-sm-2 hvr-float-shadow'>
          <img style={{ width: 35, cursor: 'pointer' }} src='/images/icons/home-0١.png' />
        </div>

        <div className=' d-none d-sm-block'>|</div>

        <div className='col-3 col-sm-2 hvr-float-shadow'>
          <img style={{ width: 45, cursor: 'pointer' }} src='/images/icons/citizen-0١.png' />
        </div>

        <div className=' d-none d-sm-block'>|</div>

        <div className='col-3 col-sm-2 hvr-float-shadow'>
          <img style={{ width: 35, cursor: 'pointer' }} src='/images/icons/Investor-0١.png' />

        </div>

        <div className=' d-none d-sm-block'>|</div>

        <div className='col-3 col-sm-2 hvr-float-shadow'>
          <img style={{ width: 35, cursor: 'pointer' }} src='/images/icons/Tourist-0٢.png' />

        </div>

      </div>
      <div style={{ color: '#7f807f' }} className="col-3 d-flex justify-content-center align-items-center p-0 py-3">
        <div className='col-5 fsiz'>
          خريطة الموقع
        </div>
        <div className='col-2'>|</div>
        <div className='col-5 fsiz'>
          تواصل معانا
        </div>
      </div>

      <Navbar className="py-0 bg-secondary" style={{ direction: 'ltr' }} collapseOnSelect expand="lg" variant="dark">
        <Container className='py-1'>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-center"
            id="responsive-navbar-nav"
          >
            <Nav className="align-items-center">
              <ul className="navbar-nav mr-auto" style={{ cursor: 'pointer', direction: 'rtl' }}>

                <li
                  className={`nav-item `}
                >
                  <a className="nav-link text-light">
                    عن المركز
                  </a>
                </li>
                <li
                  className={`nav-item 
                      `}
                >
                  <a className="nav-link text-light">
                    المنصة البحثية
                  </a>
                </li>
                <li
                  className={`nav-item`}
                >
                  <a className="nav-link text-light">
                    عن المركز
                  </a>
                </li>
                <li
                  className={`nav-item 
                      `}
                >
                  <a className="nav-link text-light">
                    المنصة البحثية
                  </a>
                </li>
                <li
                  className={`nav-item`}
                >
                  <a className="nav-link text-light">
                    عن المركز
                  </a>
                </li>
                <li
                  className={`nav-item 
                      `}
                >
                  <a className="nav-link text-light">
                    المنصة البحثية
                  </a>
                </li>
                <li
                  className={`nav-item`}
                >
                  <a className="nav-link text-light">
                    عن المركز
                  </a>
                </li>
                <li
                  className={`nav-item 
                      `}
                >
                  <a className="nav-link text-light" >
                    المنصة البحثية
                  </a>
                </li>

              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='col-md-1 col-2 d-flex flex-column position-fixed' style={{ left: '0%', top: '30%' }}>

        <div className=' text-center p-1 py-2 rounded-3 mb-3 '> <FontAwesomeIcon color={'#3b51a3'} size='2x' icon={faFacebookF}></FontAwesomeIcon></div>
        <div className='  text-center p-1 py-2 rounded-3 mb-3 '> <FontAwesomeIcon color={'#5da9dd'} size='2x' icon={faTwitter}></FontAwesomeIcon></div>
        <div className=' text-center p-1 py-2 rounded-3 mb-3 '> <FontAwesomeIcon color={'#ca5080'} size='2x' icon={faInstagram}></FontAwesomeIcon></div>
        <div className='  text-center p-1 py-2  rounded-3 mb-3 '> <FontAwesomeIcon color={'#e61e24'} size='2x' icon={faYoutube}></FontAwesomeIcon></div>

        {/* <img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/>
<img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/>
<img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/>
<img className='mb-3' height='50' width='50' src={'./images/shrimp-zone-seafood_menu_2.jpg'}/> */}

      </div>
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
    </div>);
}
export default Main_navbar;