import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactHtmlParser from "react-html-parser";
import {
  getNationalCouncilDetails,
  clearNationalCouncilDetails,
} from "../../../../../store/actions/local-leaders-actions";
import Details from "../../../../loading-skeleton/Details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
// import Slider from "react-slick";
// import SliderDetailsModalComponent from "../../../../slider-details-modal-component";
// import { Link } from "react-router-dom";
import { paths } from "../../../../../paths/paths";

const NationalCouncilDetails = (props) => {
  const id = props.match.params.id;
  useEffect(() => {
    props.getNationalCouncilDetails(id);
    return () => {
      props.clearNationalCouncilDetails();
    };
  }, []);

  //   var settings = {
  //     dots: true,
  //     arrows: false,
  //     autoplay: true,
  //     autoplaySpeed: 1000,
  //     infinite: true,
  //     speed: 2000,
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     initialSlide: 1,
  //     pauseOnFocus: true,
  //     pauseOnHover: true,
  //     swipe: true,
  //     swipeToSlide: true,
  //     responsive: [
  //       {
  //         breakpoint: 1300,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 1,
  //           infinite: true,
  //           dots: true,
  //         },
  //       },
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //           infinite: true,
  //           dots: true,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           arrows: false,
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //           initialSlide: 2,
  //           dots: false,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           dots: false,
  //         },
  //       },
  //     ],
  //   };

  //   const [show, setShow] = useState(false);
  //   const [content, setContent] = useState({});

  //   const onShow = () => {
  //     setShow(true);
  //   };

  //   const renderModal = (content) => {
  //     return (
  //       <SliderDetailsModalComponent
  //         content={content}
  //         show={show}
  //         onHide={() => setShow(false)}
  //         pathName={paths.ProjectPhotos}
  //       />
  //     );
  //   };

  if (props?.NationalCouncilDetails?.result) {
    return (
      <div>
        <div className="underline container mt-5">
          <h3>{props.NationalCouncilDetails.result.name}</h3>
        </div>
        <div className="container d-flex justify-content-between mt-4">
          <div className="col-7 align-items-end fa-1x">
            {props.NationalCouncilDetails.result.homePage ? (
              <div className="d-flex mt-2">
                <div className="mx-3">
                  <FontAwesomeIcon icon={faGlobe} size={26}></FontAwesomeIcon>
                </div>
                <div> {props.NationalCouncilDetails.result.homePage}</div>
              </div>
            ) : null}
            {props.NationalCouncilDetails.result.address ? (
              <div className="d-flex mt-2">
                <div className="mx-3">
                  <FontAwesomeIcon
                    icon={faMapMarkedAlt}
                    size={26}
                  ></FontAwesomeIcon>
                </div>
                <div> {props.NationalCouncilDetails.result.address}</div>
              </div>
            ) : null}
          </div>
        </div>
        <hr className="container my-2"></hr>

        <div class="container mb-3">
          <div class="row">
            <div class="col-12 text-justify">
              <p class="text-justify">
                <img
                  class="img-fluid holder detailsPhoto col-12 col-lg-6 float-lg-start me-lg-5 mb-4 me-0 mt-3"
                  src={`${paths.NationalCouncil}${props.NationalCouncilDetails.result.id}/${props.NationalCouncilDetails.result.photo}`}
                  alt=""
                />
              </p>
              {props.NationalCouncilDetails.result.description ? (
                <div
                  className=" text-justify ps-lg-3 ps-0"
                  style={{
                    lineHeight: "30px",
                    fontSize: "1.2rem",
                    textAlign: "justify",
                  }}
                >
                  {`الوصف: ${ReactHtmlParser(
                    props.NationalCouncilDetails.result.description
                  )}`}
                </div>
              ) : null}

              {props.NationalCouncilDetails.result.mainGoal ? (
                <div
                  className=" text-justify ps-lg-3 ps-0"
                  style={{
                    lineHeight: "30px",
                    fontSize: "1.2rem",
                    textAlign: "justify",
                  }}
                >
                  {`الهدف الرئيسي: ${ReactHtmlParser(
                    props.NationalCouncilDetails.result.mainGoal
                  )}`}
                </div>
              ) : null}

              {props.NationalCouncilDetails.result.vision ? (
                <div
                  className=" text-justify ps-lg-3 ps-0"
                  style={{
                    lineHeight: "30px",
                    fontSize: "1.2rem",
                    textAlign: "justify",
                  }}
                >
                  {`الرؤية: ${ReactHtmlParser(
                    props.NationalCouncilDetails.result.vision
                  )}`}
                </div>
              ) : null}

              {props.NationalCouncilDetails.result.message ? (
                <div
                  className=" text-justify ps-lg-3 ps-0"
                  style={{
                    lineHeight: "30px",
                    fontSize: "1.2rem",
                    textAlign: "justify",
                  }}
                >
                  {`الرسالة: ${ReactHtmlParser(
                    props.NationalCouncilDetails.result.message
                  )}`}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* {props.NationalCouncilDetails.result.photos.length > 3 ? (
          <div className="my-3">
            <Slider {...settings} style={{ width: "100%" }}>
              {props.NationalCouncilDetails.result.photos.map(
                (photo, index) => {
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
                }
              )}
            </Slider>
          </div>
        ) : (
          <div className="d-flex flex-wrap my-3">
            {props.NationalCouncilDetails.result.photos.map((photo, index) => {
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
          </div>
        )} */}

        {/* {props.NationalCouncilDetails.result.description ? (
          <div className=" container p-0">
            <div className="d-flex flex-column flex-md-row justify-content-center ">
              <div className="p-3 col-12" style={{ fontSize: "20px" }}>
                {`الوصف: ${ReactHtmlParser(
                  props.NationalCouncilDetails.result.description
                )}`}
              </div>
            </div>
          </div>
        ) : null}
        {props.NationalCouncilDetails.result.mainGoal ? (
          <div className=" container p-0">
            <div className="d-flex flex-column flex-md-row justify-content-center ">
              <div className="p-3 col-12" style={{ fontSize: "20px" }}>
                {`الهدف الرئيسي: ${ReactHtmlParser(
                  props.NationalCouncilDetails.result.mainGoal
                )}`}
              </div>
            </div>
          </div>
        ) : null}
        {props.NationalCouncilDetails.result.vision ? (
          <div className=" container p-0">
            <div className="d-flex flex-column flex-md-row justify-content-center ">
              <div className="p-3 col-12" style={{ fontSize: "20px" }}>
                {`الرؤية: ${ReactHtmlParser(
                  props.NationalCouncilDetails.result.vision
                )}`}
              </div>
            </div>
          </div>
        ) : null}
        {props.NationalCouncilDetails.result.message ? (
          <div className=" container p-0">
            <div className="d-flex flex-column flex-md-row justify-content-center ">
              <div className="p-3 col-12" style={{ fontSize: "20px" }}>
                {`الرسالة: ${ReactHtmlParser(
                  props.NationalCouncilDetails.result.message
                )}`}
              </div>
            </div>
          </div>
        ) : null} */}
      </div>
    );
  }
  return <Details />;
};
const mapStateToProps = (state) => {
  return {
    NationalCouncilDetails: state.LocalLeadersComponents.NationalCouncilDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getNationalCouncilDetails, clearNationalCouncilDetails },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NationalCouncilDetails);
