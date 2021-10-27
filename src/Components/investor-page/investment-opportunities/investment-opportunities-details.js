import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactHtmlParser from "react-html-parser";
import {
  getOpportunitiesDetails,
  clearOpportunitiesDetails,
} from "../../../store/actions/investor-actions/investment-opportunities";
import { paths } from "../../../paths/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import DetailsSkeleton from "../../loading-skeleton/Details";
import moment from "moment";
import "moment/locale/ar";
import Slider from "react-slick";
import SliderDetailsModalComponent from "../../slider-details-modal-component";

const OpportunitiesDetails = (props) => {
  const id = props.match.params.id;
  useEffect(() => {
    props.getOpportunitiesDetails(id);

    return () => {
      props.clearOpportunitiesDetails();
    };
  }, []);

  const [show, setShow] = useState(false);
  const [content, setContent] = useState({});

  const onShow = () => {
    setShow(true);
  };

  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
    swipe: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
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
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
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
        pathName={paths.ProjectPhotos}
      />
    );
  };

  if (props?.investmentOpportunitiesDetails) {
    let details = props.investmentOpportunitiesDetails.result;
    return (
      <div>
        <div className="underline container mt-5">
          <h3>{details.title}</h3>
        </div>

        <hr className="container mt-5"></hr>

        <div className="container mb-3">
          <div className="row">
            <div className="col-12 text-justify">
              <p className="text-justify">
                <img
                  className="img-fluid holder detailsPhoto col-12 col-lg-6 float-lg-start me-lg-5 mb-4 me-0 mt-3"
                  src={
                    paths.InvestmentPhotos + details.id + "/" + details.photo
                  }
                  alt={details.photo}
                />
              </p>
              <div
                className="ps-lg-3 ps-0"
                style={{
                  lineHeight: "30px",
                  fontSize: "1rem",
                  textAlign: "justify",
                }}
              >
                {details.description ? (
                  <p>الوصف:&nbsp;{details.description}</p>
                ) : null}
                {details.partNumber ? (
                  <p>رقم القطعة:&nbsp;{details.partNumber}</p>
                ) : null}
                {details.area ? (
                  <p>المساحة:&nbsp;{details.area}&nbsp;متر مربع</p>
                ) : null}
                {details.activityName ? (
                  <p>نوع النشاط:&nbsp;{details.activityName}</p>
                ) : null}
                {details.industryZoneName ? (
                  <p>إسم المنطقة الصناعية:&nbsp;{details.industryZoneName}</p>
                ) : null}
                {details.investmentSpecialtyTypeName ? (
                  <p>نوع التخصيص:&nbsp;{details.investmentSpecialtyTypeName}</p>
                ) : null}
                {details.investmentPaymentSystemName ? (
                  <p>
                    نظام سداد قيمة المرافق:&nbsp;
                    {details.investmentPaymentSystemName}
                  </p>
                ) : null}
                {details.meterPrice ? (
                  <p>
                    قيمة حق الإنتفاع للمتر المربع:&nbsp;{details.meterPrice}
                  </p>
                ) : null}
                {details.attachmentPrice ? (
                  <p>
                    قيمة المرافق للمتر المربع:&nbsp;{details.attachmentPrice}
                  </p>
                ) : null}
                {details.period ? (
                  <p>مدة حق الإنتفاع:&nbsp;{details.period}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {details.photos.length > 3 ? (
          <div className="my-3">
            <Slider {...settings} style={{ width: "100%" }}>
              {details.photos.map((photo, index) => {
                let pName;
                let newPath;
                if (photo.photo != null) {
                  pName = photo.photo;
                  newPath = pName.replaceAll(" ", "%20");
                }
                let title = photo.title;
                if (photo.title === null) {
                  title = photo.caption;
                }
                return (
                  <div
                    className="mx-auto p-3 hoverTitle"
                    key={photo.id}
                    onClick={() => {
                      onShow();
                      setContent(photo);
                    }}
                  >
                    <div className="holder">
                      <div
                        style={{
                          position: "relative",
                          backgroundImage: `url(${paths.ProjectPhotos}${photo.id}/${newPath})`,
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
        ) : (
          <div className="d-flex flex-wrap my-3">
            {details.photos.map((photo, index) => {
              let pName;
              let newPath;
              if (photo.photo != null) {
                pName = photo.photo;
                newPath = pName.replaceAll(" ", "%20");
              }
              return (
                <div
                  className="mx-auto p-3 hoverTitle"
                  key={photo.id}
                  onClick={() => {
                    onShow();
                    setContent(photo);
                  }}
                >
                  <div className="holder">
                    <div
                      style={{
                        position: "relative",
                        backgroundImage: `url(${paths.InvestmentPhotos}${photo.id}/${newPath})`,
                      }}
                      className="imageAlbum"
                    ></div>
                  </div>
                  <p className="text-center my-2">{photo.title}</p>
                </div>
              );
            })}
          </div>
        )}

        <Link
          id="link"
          to={"/opportunitieslist"}
          className="justify-content-center text-decoration-none align-items-center d-flex my-5"
        >
          <button className="btn_blue">
            <span>عرض المزيد</span>
          </button>
        </Link>
      </div>
    );
  } else {
    return <DetailsSkeleton />;
  }
};

const mapStateToProps = (state) => {
  return {
    investmentOpportunitiesDetails:
      state.investorHome.investmentOpportunitiesDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getOpportunitiesDetails, clearOpportunitiesDetails },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpportunitiesDetails);
