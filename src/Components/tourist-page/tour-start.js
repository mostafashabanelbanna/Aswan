import React, { useEffect } from "react";
import Slider from "react-slick";
import { touristSlider, clearTouristSlider } from "../../store/actions/tourist-action/slider";
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
    }
  }, []);

  var settings = {
    dots: false,
    arrows: false,
    centerMode: true,
    infinite: true,
    centerPadding: "80px",

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
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

  if (props?.slider?.result) {
    return (
      <div className="">
        <div className="text-center d-flex justify-content-center my-5">
          <div className="mx-3">
            <img src="/images/tourist-photos/رحلتك-01.png" />
          </div>
          <div className="d-flex flex-column-reverse underline">
            <h2>رحلتك تبدء من هنا</h2>{" "}
          </div>
        </div>
        {props.slider.result.length > 3 ? (
          <div style={{ backgroundColor: "#eeecec" }} className=" me-3 ms-3">
            <div className="container p-0">
              <Slider {...settings}>
                {props.slider.result.map((item, index) => {
                  return (
                    <Link id='link'
                      to={`/tourist-attraction-details/${item.id}`}
                      className="col-sm-3 text-decoration-none  col-12 mt-4 text-center px-3 "
                    >
                      <div className="hoverTitle">
                        <div
                          key={item.id}
                          className="holder shadow-none"
                          style={{ borderRadius: "0px" }}
                        >
                          <img
                            className="rounded-3 "
                            width="100%"
                            height="205px"
                            src={paths.MainSlider + item.id + "/" + item.photo}
                            alt={item.name}
                          />
                          <div className="mt-4  container p-2">
                            {item.name}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </Slider>
            </div>
          </div>
        ) : (
          <div style={{ backgroundColor: "#eeecec" }} className=" me-3 ms-3">
            <div className="container p-0 d-flex flex-lg-row flex-column">
                {props.slider.result.map((item, index) => {
                  return (
                    <Link id='link'
                    to={`/tourist-attraction-details/${item.id}`}
                      className="col-lg-3 text-decoration-none  col-12 mt-4 text-center px-3 "
                    >
                      <div className="hoverTitle">
                        <div
                          key={item.id}
                          className="holder shadow-none"
                          style={{ borderRadius: "0px" }}
                        >
                          <img
                            className="rounded-3 "
                            width="100%"
                            height="205px"
                            src={paths.MainSlider + item.id + "/" + item.photo}
                            alt={item.name}
                          />
                          <div className="mt-4  container p-2">
                            {item.name}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        )}
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
