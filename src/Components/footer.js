import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(37,38,38,255)",
      }}
    >
      <div className="container ">
        <div className="row p-0 m-0  pt-4 pb-4 ">
          <div className="text-light col-lg-2 col-md-2 container-xxl m-md-0 container-md col-6   ms-md-5   d-flex flex-column">
            <img className="mb-2 p-3 " src={"/images/logoooo.jfif"} />
            <div className=" d-flex col-9  mb-3 container-xxl p-0 text-center">
              <div className="col-3">
                {" "}
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
              </div>
              <div className="col-3">
                {" "}
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </div>
              <div className="col-3">
                {" "}
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </div>
              <div className="col-3">
                {" "}
                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
              </div>
            </div>
          </div>

          <div className="col-md-9  col-12">
            <div className=" d-flex text-light flex-md-nowrap flex-wrap">
              <div className=" col-md-3 col-6 p-2">
                <div class="searcher_title">
                  <div class="d-inline-flex flex-column position-relative">
                    <p>عن المحافظة</p>
                  </div>
                </div>

                <div className="lh-lg d-flex flex-column">
                  <Link id="link" to="/exconservatives" className="text-white">
                    المحافظون السابقون
                  </Link>
                  <Link id="link" to="/leaders" className="text-white">
                    قيادات المحافظة
                  </Link>
                  {/* <a>الديوان العام</a> */}
                  <Link id="link" to="/projectslist" className="text-white">
                    مشروعات المحافظة
                  </Link>
                  <Link id="link" to="/appointment" className="text-white">
                    لقاءات و قرارات السيد المحافظ
                  </Link>
                </div>
              </div>
              <div className="col-md-3 col-6 p-2">
                <div class="searcher_title">
                  <div class="d-inline-flex flex-column position-relative">
                    <p>الركن الاعلامي</p>
                  </div>
                </div>
                <div className="lh-lg d-flex flex-column">
                  <Link id="link" to="/newslist" className="text-white">
                    الاخبار
                  </Link>
                  <Link id="link" to="/photoslist" className="text-white">
                    ألبوم الصور
                  </Link>
                  <Link id="link" to="/videoslist" className="text-white">
                    مكتبة الفيديو
                  </Link>
                  <Link id="link" to="/eventlist" className="text-white">
                    الاحداث
                  </Link>
                </div>
              </div>
              <div className="col-md-3 col-6 p-2">
                <div class="searcher_title">
                  <div class="d-inline-flex flex-column position-relative">
                    <p> الخدمات</p>
                  </div>
                </div>
                <div className=" lh-lg d-flex flex-column">
                  <Link id="link" to="/eservices" className="text-white">
                    ادلة المحافظة
                  </Link>
                  <Link id="link" to="/directorates" className="text-white">
                    المديريات
                  </Link>
                  <Link id="link" to="/ads/0" className="text-white">
                    إعلانات و مناقصات
                  </Link>
                </div>
              </div>
              <div className="col-md-3 col-6 p-2">
                <div class="searcher_title">
                  <div class="d-inline-flex flex-column position-relative">
                    <p>المجالس </p>
                  </div>
                </div>
                <div className="lh-lg d-flex flex-column">
                  <Link id="link" to="/society" className="text-white">
                    الجمعيات الأهلية
                  </Link>
                  <Link id="link" to="/nationalcouncil" className="text-white">
                    المجالس القومية
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-light text-center mt-4 mt-md-5 ">
              حقوق النشر © اصدارة 1.0 - 2021 محافظة أسوان - جميع الحقوق محفوظة
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
