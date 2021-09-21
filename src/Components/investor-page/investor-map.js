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
    dots: false,
    arrows: false,
    centerMode: true,
    // infinite: true,
    // autoplay: true,
    // autoplaySpeed: 1000,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          centerMode: true,
          centerPadding: "40px",
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

  if (props.sliderMap) {
    console.log(props.sliderMap);

    return (
      <div className="container">
        {renderModal(content)}
        <div className="d-flex my-4">
          <div className="mx-3">
            <img height="50" width="60" src="/images/icons/Tourist-0٢.png" />
          </div>
          <div className="d-flex align-items-center underline">
            <h3 className='mb-5'>الخريطة الإستثمارية</h3>{" "}
          </div>
        </div>
        <Slider {...settings}>
          {props.sliderMap.result.map((item, index) => {
            let pName = item.photo;
            let newPath = pName.replaceAll(" ", "%20");
            let title = item.title;
            let imgPath = `url(${paths.DocumentLibraryPhotos}${item.id}/${newPath})`;
            return (
              <div
                className="mx-auto p-3 width-48"
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
                      backgroundSize:'contain',
                      backgroundRepeat:'no-repeat'
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
