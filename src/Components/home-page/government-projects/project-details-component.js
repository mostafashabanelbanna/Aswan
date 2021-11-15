import { useEffect, useState } from "react";
import {
  getProjectDetails,
  clearData,
} from "../../../store/actions/government-projects-actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactHtmlParser from "react-html-parser";
import { paths } from "../../../paths/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPercentage } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import Col from "react-bootstrap/Col";
import "../../../Styles/government-projects-style.css";
import "../../../Styles/photo-album-style.css";

import SliderDetailsModalComponent from "../../slider-details-modal-component";
import { Link } from "react-router-dom";
import DetailsSkeleton from "../../loading-skeleton/Details";

const ProjectDetails = (props) => {
  useEffect(() => {
    const resolver = async () => {
      await props.getProjectDetails(props.match.params.id);
    };

    resolver();

    return () => {
      props.clearData();
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

  if (props?.projectDetails?.result) {
    let details = Object.assign({}, props.projectDetails.result);
    return (
      <div className="container">
        <div>
          <div className="underline mt-4">
            {" "}
            <h3>{ReactHtmlParser(details.name)}</h3>
          </div>
          <div className="d-flex justify-content-end">
            <div className="d-flex flex-column col mt-2">
              {details.changeRate != null && (
                <div className="d-flex flex-row mt-2">
                  <h6 className="mx-2 my-0">
                    نسبة التنفيذ: {details.changeRate} %
                  </h6>
                </div>
              )}
              {details.attachment != null && (
                <div className="d-flex flex-row align-items-center">
                  <FontAwesomeIcon
                    icon={faPaperclip}
                    className="align-self-center text-danger"
                  />
                  <h6 className="text-primary mx-2 mt-1">
                    <a
                      target="_blank"
                      style={{ textDecoration: "none", color: "black" }}
                      href={`${paths.ProjectAttachment}${details.id}/${details.attachment}`}
                    >
                      إستعراض الملف المرفق
                    </a>
                  </h6>
                </div>
              )}
            </div>
            <div className=" text-start fa-1x p-3 mb-1 detailsSectorName">
              <h6 className="mb-0 text-center">
                {ReactHtmlParser(details.sectorName)}
              </h6>
            </div>
          </div>
          <hr className=" m-0" />
        </div>

        <div className="container mb-3">
          <div className="row">
            <div className="col-12 text-justify">
              <p className="text-justify">
                <img
                  className="img-fluid holder detailsPhoto col-12 col-lg-6 float-lg-start me-lg-5 mb-4 me-0 mt-3"
                  src={`${paths.ProjectPhoto}${details.id}/${details.photo}`}
                  alt={`${details.photo}`}
                />
              </p>
              <div
                className=" text-justify ps-lg-3 ps-0"
                style={{
                  lineHeight: "30px",
                  fontSize: "1rem",
                  textAlign: "justify",
                }}
              >
                {ReactHtmlParser(details.description)}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container mb-3">
          <div className="row">
            <div className="col-12 text-justify">
              <p className="text-justify">
                <img
                  clclassNameass="img-fluid holder detailsPhoto col-12 col-lg-6 float-lg-start me-lg-5 mb-4 me-0 mt-3"
                  src={`${paths.ProjectPhoto}${details.id}/${details.photo}`}
                  alt=""
                />
              </p>
              <div
                className=" text-justify ps-lg-3 ps-0"
                style={{
                  lineHeight: "30px",
                  fontSize: "1rem",
                  textAlign: "justify",
                }}
              >
                {ReactHtmlParser(details.description)}
              </div>
            </div>
          </div>
        </div> */}

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
                          backgroundImage: `url("${paths.ProjectPhotos}${photo.id}/${newPath}")`,
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
                        backgroundImage: `url("${paths.ProjectPhotos}${photo.id}/${newPath}")`,
                      }}
                      className="imageAlbum"
                    ></div>
                  </div>
                  <p className="text-center my-2">{title}</p>
                </div>
              );
            })}
          </div>
        )}

        <div
          className="embed-responsive embed-responsive-16by9 mx-3 my-5 "
          style={{ borderRadius: "10px" }}
        >
          <iframe
            allowFullScreen
            className="embed-responsive-item rounded-3"
            style={{ outline: "none" }}
            loading="lazy"
            width="100%"
            height="450px"
            src={`https://www.youtube.com/embed/${details.youtubeId}`}
          ></iframe>
        </div>
        {renderModal(content)}
        <div className="d-flex justify-content-center my-3">
          <Link id="link" to={`/projectslist`}>
            <button
              className="btn_blue mx-1 mb-2 mb-sm-0"
              style={{ verticalAlign: "middle" }}
            >
              <span>مزيد من المشروعات</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return <DetailsSkeleton />;
};

export default connect(
  (state) => {
    return {
      projectDetails: state.homeComponents.projectDetails,
    };
  },
  (dispatch) => {
    return bindActionCreators({ getProjectDetails, clearData }, dispatch);
  }
)(ProjectDetails);
