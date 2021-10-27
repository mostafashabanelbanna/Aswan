import React, { useEffect } from "react";
import Slider from "react-slick";
import {
  touristSlider,
  clearTouristSlider,
} from "../../store/actions/tourist-action/slider";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import OnePieaceSkeleton from "../loading-skeleton/one-pieace";
import { paths } from "../../paths/paths";
import { Link } from "react-router-dom";

const TourStart = (props) => {
  useEffect(() => {
    props.touristSlider();

    return () => {
      props.clearTouristSlider();
    };
  }, []);

  var settings = {
    rtl: true,
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,

    infinite: true,
    speed: 1000,
    pauseOnFocus: true,
    pauseOnHover: true,
    swipe: true,
    swipeToSlide: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (props?.slider?.result) {
    return (
      <div className="bg-light">
        <div className="text-center d-flex justify-content-center py-3">
          <div className="mx-3">
            <img
              className="brightness"
              src="/images/tourist-photos/رحلتك-01.png"
            />
          </div>
          <div className="d-flex flex-column-reverse underline">
            <h2 className="text_blue">رحلتك تبدء من هنا</h2>{" "}
          </div>
        </div>
        {props.slider.result.length > 2 ? (
          <div className=" me-3 ms-3 mb-5">
            <div className="container p-0">
              <Slider {...settings}>
                {props.slider.result.map((item, index) => {
                  return (
                    <Link
                      id="link"
                      to={`/tourist-attraction-details/${item.id}`}
                      className="col-sm-3 text-decoration-none  col-12 mt-4 text-center px-3 "
                    >
                      <div className="hoverTitle">
                        <div
                          key={item.id}
                          className="holder shadow-none"
                          style={{ borderRadius: "0px", height: "280px" }}
                        >
                          <img
                            className="rounded-3 "
                            width="100%"
                            height="205px"
                            src={paths.MainSlider + item.id + "/" + item.photo}
                            alt={item.name}
                          />
                          <div className="mt-4  container p-2">{item.name}</div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </Slider>
            </div>
          </div>
        ) : (
          <div
            style={{ backgroundColor: "#eeecec" }}
            className=" me-3 ms-3 mb-5"
          >
            <div className="container p-0 d-flex flex-lg-row flex-column">
              {props.slider.result.map((item, index) => {
                return (
                  <Link
                    id="link"
                    to={`/tourist-attraction-details/${item.id}`}
                    className="col-lg-3 text-decoration-none  col-12 mt-4 text-center px-3 "
                  >
                    <div className="hoverTitle">
                      <div
                        key={item.id}
                        className="holder shadow-none"
                        style={{ borderRadius: "0px", height: "280px" }}
                      >
                        <img
                          className="rounded-3 "
                          width="100%"
                          height="205px"
                          src={paths.MainSlider + item.id + "/" + item.photo}
                          alt={item.name}
                        />
                        <div className="mt-4  container p-2">{item.name}</div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        <div className="line mx-auto"></div>
      </div>
    );
  } else {
    return <OnePieaceSkeleton />;
  }
};

export default connect(
  (state) => {
    return {
      slider: state.touristHome.slider,
    };
  },
  (dispatch) => {
    return bindActionCreators({ touristSlider, clearTouristSlider }, dispatch);
  }
)(TourStart);
