import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/news.css";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { mainNews, sliderNews } from "../store/actions/News_Action";
import ReactHtmlParser from "react-html-parser";
import { paths } from "../paths/paths";

const News = (props) => {
  useEffect(() => {
    props.sliderNews();
    props.mainNews();
  }, []);

<<<<<<< HEAD
    useEffect(() => {
        props.sliderNews();
        props.mainNews();
    }, [])

    var settings = {
        dots: false,
        // autoplay:true,
        // autoplaySpeed:1000,
        infinite: false,
        speed: 500,
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
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    if (props.mainews && props.news)
        return (
            <div>
                <div className="container p-0">
                    <div className="m-3 d-flex">
                        <img src="/images/icons/news_titel-0١.png" width='50px' />
                    <div className='underline'>   <h3 className="mt-4 me-2 text-secondary"> اخبار المحافظة </h3></div>
                    </div>
                    <div className="row p-0 mt-3">
                        <div className=" text-secondary">
                            <h2 className="mb-lg-5 mb-2">
                                {props.mainews.result.title}
                            </h2>
                        </div>
                        <div className=" col-12 col-sm-12 d-flex d-lg-block align-items-center align-content-center  p-2 lh-lg text-secondary order-sm-2 order-lg-1 order-2">
                            <div>
                                <div className=" float-lg-start  col-lg-6 me-sm-0 me-md-0  me-lg-5   col-sm-12 col-12 d-flex d-lg-block justify-content-center align-items-center align-content-center order-lg-2  order-sm-1 order-1">
                                    <img
                                        className="  mt-3 mb-3 rounded-3 w-100"
                                        src={'images/Upload/News/Photo/' + props.mainews.result.id + '/' + props.mainews.result.photo}
                                        alt={props.mainews.result.title}
                                    />
                                </div>
                               <div id='newscontent'> {ReactHtmlParser(props.mainews.result.content)}</div>
                            </div>

                        </div>

                    </div>
=======
  var settings = {
    dots: false,
    // autoplay:true,
    // autoplaySpeed:1000,
    infinite: false,
    speed: 500,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (props.mainews && props.news)
    return (
      <div>
        <div className="container p-0">
          <div className="my-3 d-flex">
            <img src="/images/icons/news_titel-0١.png" width="80px" />
            <h3 className="mt-4 me-2 text-secondary"> اخبار المحافظة </h3>
          </div>
          {/*  */}
          <div className="row">
            <div className="col-lg-6">
              <div className="h-100">
                <h4 className="mb-3">{props.mainews.result.title}</h4>
                <div className="d-lg-none d-block">
                  <img
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    src={
                      paths.NewsPhotos +
                      props.mainews.result.id +
                      "/" +
                      props.mainews.result.photo
                    }
                    alt={props.mainews.result.title}
                  />
                  <div id="newscontent">
                    {" "}
                    {ReactHtmlParser(props.mainews.result.content)}
                  </div>
>>>>>>> c2795cfb95d11378ae05112dcacd7f62fb424d53
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-none d-lg-block h-100 p-3">
                <img
                  className="img-fluid"
                  style={{ borderRadius: "10px" }}
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
        <div>
          <div className="container p-0">
            <Slider {...settings}>
              {props.news.result.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="col-sm-3 col-12 mt-4 text-center px-3"
                  >
                    <img
                      className="rounded-3 "
                      width="100%"
                      height="205px"
                      src={paths.NewsPhotos + +item.id + "/" + item.photo}
                      alt={item.caption}
                    />
                    <div className="mt-4  container p-2">{item.title}</div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="line my-5 mx-auto"></div>
      </div>
    );
  return <div>Loading</div>;
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
