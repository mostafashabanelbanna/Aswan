import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.png';
import aswanLogo from '../assets/img/aswan.jpeg';
const Footer = () => {
  return (
    <div className="footer"
     
    >
      <div className="footer-overlay"></div>
      <div className="container ">
        <div className="row p-0 m-0  pt-4 pb-4 ">
          <div className="text-light col-lg-2 col-md-2 container-xxl m-md-0 container-md col-6   ms-md-5   d-flex flex-column">
            <img className="mb-2 p-3 logo-img" src={logo} />
            <h5 className="footer-logo-title text-center mb-2">البوابة الإلكترونية</h5>
             <h6 className="footer-logo-sub-title text-center mb-4">محافظة أسوان</h6>
         
          </div>

          <div className="col-md-9  col-12">
            <div className=" d-flex text-light flex-md-nowrap flex-wrap">
              <div className=" col-md-3 col-6 p-2">
                <div className="searcher_title">
                  <div className="d-inline-flex flex-column position-relative">
                    <p>عن المحافظة</p>
                  </div>
                </div>

                <div className="lh-lg d-flex flex-column">
                  <Link id="link" to="/exconservatives" className=" text-white footer-link">
                    المحافظون السابقون
                  </Link>
                  <Link id="link" to="/leaders" className="text-white footer-link">
                    قيادات المحافظة
                  </Link>
                  {/* <a>الديوان العام</a> */}
                  <Link id="link" to="/projectslist" className="text-white footer-link">
                    مشروعات المحافظة
                  </Link>
                  <Link id="link" to="/appointment" className="text-white footer-link">
                    لقاءات و قرارات السيد المحافظ
                  </Link>
                </div>
              </div>
              <div className="col-md-3 col-6 p-2">
                <div className="searcher_title">
                  <div className="d-inline-flex flex-column position-relative">
                    <p>الركن الاعلامي</p>
                  </div>
                </div>
                <div className="lh-lg d-flex flex-column">
                  <Link id="link" to="/newslist" className="text-white footer-link ">
                    الاخبار
                  </Link>
                  <Link id="link" to="/photoslist" className="text-white footer-link ">
                    ألبوم الصور
                  </Link>
                  <Link id="link" to="/videoslist" className="text-white footer-link">
                    مكتبة الفيديو
                  </Link>
                  <Link id="link" to="/eventlist" className="text-white footer-link">
                    الاحداث
                  </Link>
                </div>
              </div>
              <div className="col-md-3 col-6 p-2">
                <div className="searcher_title">
                  <div className="d-inline-flex flex-column position-relative">
                    <p> الخدمات</p>
                  </div>
                </div>
                <div className=" lh-lg d-flex flex-column">
                  <Link id="link" to="/eservices" className="text-white footer-link">
                    ادلة المحافظة
                  </Link>
                  <Link id="link" to="/directorates" className="text-white footer-link">
                    المديريات
                  </Link>
                  <Link id="link" to="/ads/0" className="text-white footer-link">
                    إعلانات و مناقصات
                  </Link>
                </div>
              </div>
              <div className="col-md-3 col-6 p-2">
                <div className="searcher_title">
                  <div className="d-inline-flex flex-column position-relative">
                    <p>المجالس </p>
                  </div>
                </div>
                <div className="lh-lg d-flex flex-column">
                  <Link id="link" to="/society" className="text-white footer-link">
                    الجمعيات الأهلية
                  </Link>
                  <Link id="link" to="/nationalcouncil" className=" text-white footer-link ">
                    المجالس القومية
                  </Link>
                </div>
             

              </div>
             
            </div>
            
            
          </div>
          
        </div>
       
      </div>
      

            <div className="container ">
             <div className="row">
               <div className=" col-lg-3 col-md-4 col-12 footer-icons">
               <FontAwesomeIcon className=" mx-3 footer-icon"  icon={faFacebookF}></FontAwesomeIcon>
               <FontAwesomeIcon className=" footer-icon mx-3" icon={faInstagram}></FontAwesomeIcon>
               <FontAwesomeIcon className="footer-icon  mx-3" icon={faTwitter}></FontAwesomeIcon>
               <FontAwesomeIcon className=" footer-icon mx-3" icon={faYoutube}></FontAwesomeIcon>
               </div>
               <div className=" col-lg-6 col-md-4 col-12">
               <div className="text-light text-center  copy-right">
              حقوق النشر © اصدارة 1.0 - 2021 محافظة أسوان - جميع الحقوق محفوظة
            </div>
            
                 
               </div>
               <div className="col-lg-3 col-md-4 col-12">
               <div className="aswan-logo">
              <img src={aswanLogo}/>
            </div>
                 
               </div>
             </div>
              
            </div>
      
    </div>
  );
};

export default Footer;
