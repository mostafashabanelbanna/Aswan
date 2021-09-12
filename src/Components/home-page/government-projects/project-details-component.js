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
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import Col from "react-bootstrap/Col";
import "../../../Styles/government-projects-style.css";
import "../../../Styles/photo-album-style.css";

import SliderDetailsModalComponent from "../../slider-details-modal-component";

import OnePieaceSkeleton from '../../loading-skeleton/one-pieace'

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
  const [content, setContent] = useState({})

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
    return(
    <SliderDetailsModalComponent
      content={content}
      show={show}
      onHide={() => setShow(false)}
      pathName={paths.ProjectPhotos}
    />
    )
  }

  if (props.projectDetails) {
    console.log(props.projectDetails);
    let details = Object.assign({}, props.projectDetails.result);
    return (
      <div className="container">
        <div>
          <div className="underline mt-4">
            {" "}
            <h3>{ReactHtmlParser(details.name)}</h3>
          </div>
          <div className="d-flex justify-content-end">
            <div className="text-muted text-start fa-1x p-3 mb-1 detailsSectorName">
              <h6 className="mb-0 text-center">
                {ReactHtmlParser(details.sectorName)}
              </h6>
            </div>
            {details.attachment != null && (
              <div className="d-flex flex-row my-2">
                <h6 className="text-primary mx-2">
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href={`${paths.ProjectAttachment}${details.id}/${details.attachment}`}
                  >
                    إستعراض الملف المرفق
                  </a>
                </h6>
                <FontAwesomeIcon
                  icon={faPaperclip}
                  className="align-self-center text-danger"
                />
              </div>
            )}
          </div>
          <hr className="text-muted m-0" />
        </div>
        <div className="row my-4 flex-column-reverse flex-lg-row">
          <div className="col-lg-7 my-3 my-lg-0">
              <p className="text-muted" style={{ lineHeight: "30px", fontSize: "1rem" }}>
                {ReactHtmlParser(details.description)}
              </p>
          </div>
          <div className="col-lg-5 detailsPhoto p-0 h-100">
            <img
              className="img-fluid"
              style={{ borderRadius: 17 }}
              src={`${paths.ProjectPhoto}${details.id}/${details.photo}`}
            />
          </div>
        </div>

        <div className="my-3">
          <Slider {...settings} style={{ width: "100%" }}>
            {details.photos.map((photo, index) => {
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
                        backgroundImage: `url(${paths.ProjectPhotos}${photo.id}/${photo.photo})`,
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
      </div>
    );
  }
  return (
  <div className="text-center container">
    <OnePieaceSkeleton/>
    <OnePieaceSkeleton/>
  </div>
  )
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