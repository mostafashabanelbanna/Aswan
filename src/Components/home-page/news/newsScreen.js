import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../Styles/news.css";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { mainNews, sliderNews } from "../../../store/actions/News_Action";
import ReactHtmlParser from "react-html-parser";
import { paths } from "../../../paths/paths";
import { Link } from "react-router-dom";
import NewsSkeleton from "../../loading-skeleton/news-skeleton";
import TitleSkeleton from "../../loading-skeleton/title-skeleton";

const News = (props) => {
  useEffect(() => {
    props.sliderNews();
    props.mainNews();
  }, []);

  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  if (props?.mainews?.result && props?.news?.result) {
    return (
      <div className="custom_bg_light">
        <div className="container fluid px-0">
          <div className="container">
            <div className="py-3 mb-4 d-flex align-items-end">
              <img
                className="brightness"
                src="/images/icons_black/news_titel-0١.png"
                height="50"
              />
              <div className="underline">
                <h3 className="mt-4 me-2 text_blue"> أخبار المحافظة </h3>
              </div>
            </div>
            <Link
              id="link"
              to={`/newsdetails/${props.mainews.result.id}`}
              className=""
            >
              <div className="d-block d-lg-none">
                <div>
                  <h4 className="mb-3">{props.mainews.result.title}</h4>
                </div>
                <div className="d-flex flex-lg-row flex-column-reverse">
                  <div className="col-lg-6 col-12">
                    <div
                      id="newscontent"
                      className="ps-lg-5 ps-0 py-lg-0 mt-lg-0 mt-4"
                      style={{ textAlign: "justify" }}
                    >
                      {" "}
                      {ReactHtmlParser(props.mainews.result.introTitle)}
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="holder">
                      <img
                        style={{ borderRadius: "10px", maxWidth: "100%" }}
                        className="img-fluid h-100 w-100"
                        src={
                          paths.NewsPhotos +
                          props.mainews.result.id +
                          "/" +
                          props.mainews.result.photo
                        }
                        alt={props.mainews.result.title}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-none d-lg-block">
                <div className="d-flex flex-lg-row flex-column-reverse">
                  <div className="col-lg-6 col-12">
                    <div>
                      <h4 className="mb-3">{props.mainews.result.title}</h4>
                    </div>
                    <div>
                      <div
                        id="newscontent"
                        className="ps-lg-5 ps-0 py-lg-0 mt-lg-0 mt-4"
                        style={{ textAlign: "justify" }}
                      >
                        {" "}
                        {ReactHtmlParser(props.mainews.result.introTitle)}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="holder">
                      <img
                        style={{ borderRadius: "10px", maxWidth: "100%" }}
                        className="img-fluid h-100 w-100"
                        src={
                          paths.NewsPhotos +
                          props.mainews.result.id +
                          "/" +
                          props.mainews.result.photo
                        }
                        alt={props.mainews.result.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <div className="container custom_bg_light newsSlider">
              <Slider {...settings}>
                {props.news.result.map((item, index) => {
                  return (
                    <Link
                      key={item.id}
                      id="link"
                      to={`/newsdetails/${item.id}`}
                      className="col-sm-3 text-decoration-none  col-12 mt-5 text-center px-3"
                    >
                      <div
                        className="hoverTitle rounded text-white"
                        style={{ backgroundColor: "rgb(32 176 202 )" }}
                      >
                        <div className="p-2" style={{ borderRadius: "0px" }}>
                          <img
                            className="rounded-3"
                            width="100%"
                            height="205px"
                            src={paths.NewsPhotos + +item.id + "/" + item.photo}
                            alt={item.caption}
                          />
                          <div
                            style={{ height: 75, direction: "rtl" }}
                            className="mt-4  container p-2 "
                          >
                            {item.title.substr(0, 60)} ...
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </Slider>
            </div>
          </div>
          <div className="container d-flex justify-content-end py-3 mt-5">
            <Link id="link" to="/newslist" className="">
              <button
                className="btn_blue mx-1"
                style={{ verticalAlign: "middle" }}
              >
                <span>عرض الكل</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <TitleSkeleton />
      <NewsSkeleton />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.homeComponents.slidernews,
    mainews: state.homeComponents.mainews,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ sliderNews, mainNews }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
