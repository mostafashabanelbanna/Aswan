import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { paths } from "../../paths/paths";
import ReactHtmlParser from "react-html-parser";
import {
  investorMapSlider,
  clearInvestorMapSlider,
} from "../../store/actions/investor-actions/slider";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import OnePieaceSkeleton from "../loading-skeleton/one-pieace";
import SliderDetailsModalComponent from "../slider-details-modal-component";

const InvestorMap = (props) => {
  useEffect(() => {
    props.investorMapSlider();

    return () => {
      props.clearInvestorMapSlider();
    };
  }, []);

  const [show, setShow] = useState(false);
  const [content, setContent] = useState({});

  const onShow = () => {
    setShow(true);
  };

  var settings = {
    dots: true,
    arrows: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    swipe: true,
    swipeToSlide: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          centerMode: false,
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderModal = (content) => {
    return (
      <SliderDetailsModalComponent
        content={content}
        show={show}
        onHide={() => setShow(false)}
        pathName={paths.DocumentLibraryPhotos}
      />
    );
  };

  if (props?.sliderMap?.result) {
    return (
      <div className="bg-light">
        <div className="container">
          {renderModal(content)}
          <div className="d-flex py-5">
            <div className="mx-3">
              <img
                className="brightness"
                height="50"
                src="/images/investor-photos/خريطة استثمارية-01.png"
              />
            </div>
            <div className="d-flex align-items-center underline">
              <h3 className="mb-5 text_blue">الخريطة الإستثمارية</h3>{" "}
            </div>
          </div>
          <Slider {...settings}>
            {props.sliderMap.result.map((item, index) => {
              let pName;
              let newPath;
              if (item.photo != null) {
                pName = item.photo;
                newPath = pName.replaceAll(" ", "%20");
              }
              let title = item.title;
              let imgPath = `url("${paths.DocumentLibraryPhotos}${item.id}/${newPath}")`;
              return (
                <div
                  className="mx-auto p-3"
                  key={item.id}
                  onClick={() => {
                    onShow();
                    setContent(item);
                  }}
                >
                  <div className="holder">
                    <div
                      style={{
                        backgroundImage: imgPath,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="imageAlbum"
                    ></div>
                  </div>
                  <p className="text-center my-2">{title}</p>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="line mt-5"></div>
      </div>
    );
  } else {
    return <OnePieaceSkeleton />;
  }
};

export default connect(
  (state) => {
    return {
      sliderMap: state.investorHome.sliderMap,
    };
  },
  (dispatch) => {
    return bindActionCreators(
      { investorMapSlider, clearInvestorMapSlider },
      dispatch
    );
  }
)(InvestorMap);
