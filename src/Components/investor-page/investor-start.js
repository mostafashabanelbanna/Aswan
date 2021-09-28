import React, { useEffect } from "react";
import Slider from "react-slick";
import {
  investorNewsSlider,
  clearInvestorNewsSlider,
} from "../../store/actions/investor-actions/slider";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import OnePieaceSkeleton from "../loading-skeleton/one-pieace";
import { paths } from "../../paths/paths";
import { Link } from "react-router-dom";

const InvestorStart = (props) => {
  useEffect(() => {
    props.investorNewsSlider();

    return () => {
      props.clearInvestorNewsSlider();
    };
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
  if (props?.sliderNews?.result) {
    return (
      <div>
        <div className="text-center d-flex align-content-center align-items-center justify-content-center my-5">
          <div className="mx-3">
            <img src="/images/investor-photos/اخبار استثمارية-01.png" />
          </div>
          <div className="d-flex align-items-end fw-bold underline">
            <h2 className="mb-3">اخبار إستثمارية</h2>
          </div>
        </div>
        {props.sliderNews.result.length > 3 ? (
          <div className=" me-3 ms-3">
            <div className="container p-0">
              <Slider {...settings}>
                {props.sliderNews.result.map((item, index) => {
                  return (
                    <Link
                      id="link"
                      to={`/newsdetails/${item.id}`}
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
                            src={paths.NewsPhotos + item.id + "/" + item.photo}
                            alt={item.caption}
                          />
                          <div className="mt-4  container p-2">
                            {item.title}
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
          <div className=" me-3 ms-3">
            <div className="container p-0 d-flex flex-wrap">
              {props.sliderNews.result.map((item, index) => {
                return (
                  <Link
                    id="link"
                    to={`/newsdetails/${item.id}`}
                    className="col-md-6 col-lg-3 text-decoration-none  col-12 mt-4 text-center px-3 "
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
                          src={paths.NewsPhotos + item.id + "/" + item.photo}
                          alt={item.caption}
                        />
                        <div className="mt-4  container p-2">{item.title}</div>
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
      sliderNews: state.investorHome.sliderNews,
    };
  },
  (dispatch) => {
    return bindActionCreators(
      { investorNewsSlider, clearInvestorNewsSlider },
      dispatch
    );
  }
)(InvestorStart);
