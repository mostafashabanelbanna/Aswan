import { useEffect } from "react";
import {
  getProjectDetails,
  clearData,
} from "../../store/actions/government-projects-actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactHtmlParser from "react-html-parser";
import { paths } from "../../paths/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import Col from "react-bootstrap/Col";
import "../../Styles/government-projects-style.css";

const ProjectDetails = (props) => {
  useEffect(() => {
    props.getProjectDetails(props.match.params.id);

    return () => {
      props.clearData();
    };
  }, []);

  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
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

  if (props.projectDetails) {
    let details = Object.assign({}, props.projectDetails.result);
    return (
      <div className="container">
        <div>
          <h3 className="mb-4">{ReactHtmlParser(details.name)}</h3>
          <h6 className="text-danger">{ReactHtmlParser(details.sectorName)}</h6>
          {details.attachment != null && (
            <div className="d-flex flex-row">
              <FontAwesomeIcon
                icon={faPaperclip}
                className="align-self-center text-danger"
              />
              <h6 className="text-primary mx-2">
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href={`${paths.ProjectAttachment}${details.id}/${details.attachment}`}
                >
                  إستعراض الملف المرفق
                </a>
              </h6>
            </div>
          )}
          <hr className="text-danger m-0" />
        </div>
        <div className="row my-2 flex-column-reverse flex-lg-row">
          <div className="col-lg-7">
            <div style={{ lineHeight: "30px", fontSize: "1vw" }}>
              <p>
                <span style={{ fontFamily: "Arial,Helvetica,sans-serif" }}>
                  <span>
                    <strong>{ReactHtmlParser(details.description)}</strong>
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <img
              className="img-fluid p-1 border border-dark border-2"
              style={{ borderRadius: "16px" }}
              src={`${paths.ProjectPhoto}${details.id}/${details.photo}`}
            />
          </div>
        </div>
        <div className="row my-2">
          <iframe
            width="100%"
            height="450px"
            src={`https://www.youtube.com/embed/${details.youtubeId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="my-3">
            <Slider {...settings} style={{ width: "100%" }}>
              {details.photos.map((photo, index) => {
                console.log("photo objjjjjjjjj" + photo);
                return (
                  <div style={{ position: "relative",  boxShadow:"3px 3px 3px 3px #808278" }}>
                    <img
                      src={`${paths.ProjectPhotos}${photo.id}/${photo.photo}`}
                      className="projectAlbum p-2 rounded-3 border border-1 border-dark"
                      alt={photo.name}
                    />
                    <div
                      class="text-center"
                      style={{ position: "absolute", bottom: 30, border: "1px solid black",  }}
                    ><p>

                      التجلى الأعظم بسانت كاترين{" "}
                    </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
        </div>
      </div>
    );
  }
  return <div>No Details</div>;
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
