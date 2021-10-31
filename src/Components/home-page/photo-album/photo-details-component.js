import { useEffect, useState } from "react";
import {
  getPhotoDetails,
  clearPhotoDetails,
} from "../../../store/actions/photos-album-actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactHtmlParser from "react-html-parser";
import { paths } from "../../../paths/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "../../../Styles/government-projects-style.css";
import "../../../Styles/photo-album-style.css";
import SliderDetailsModalComponent from "../../slider-details-modal-component";

import { Link } from "react-router-dom";
import DetailsSkeleton from "../../loading-skeleton/Details";

const PhotoDetails = (props) => {
  useEffect(() => {
    const resolver = async () => {
      await props.getPhotoDetails(props.match.params.id);
    };

    resolver();

    return () => {
      props.clearPhotoDetails();
    };
  }, []);

  const [show, setShow] = useState(false);
  const [content, setContent] = useState({});
  // const [photosLength , setPhotosLength]=useState(1)

  const onShow = () => {
    setShow(true);
  };

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 4000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
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

  if (props?.photoDetails?.result) {
    let details = Object.assign({}, props.photoDetails.result);
    let sectorName = props.photoDetails.result.sectorName;
    let sectorId = props.photoDetails.result.sectorId;
    return (
      <div className="container">
        <div>
          <div className="underline mt-4">
            {" "}
            <h3>{ReactHtmlParser(details.titleA)}</h3>
          </div>
          {details.sectorName ? (
            <div>
              <div className="d-flex justify-content-end">
                <Link
                  id="link"
                  to={`/filterphotos/${
                    sectorId + "&&" + sectorName + "&&" + "sector"
                  }`}
                  className=" d-flex justify-content-center align-items-center text-center  fa-1x"
                >
                  <div className=" text-center fa-1x p-3 mb-1 detailsSectorName">
                    {ReactHtmlParser(details.sectorName)}
                  </div>
                </Link>
              </div>
              <hr className=" m-0" />
            </div>
          ) : null}
        </div>
        <div className="row my-5 flex-column-reverse flex-lg-row">
          <div className="col-lg-7 my-3 my-lg-0">
            <p className="" style={{ lineHeight: "30px", fontSize: "1rem" }}>
              {ReactHtmlParser(details.photoCaptionA)}
            </p>
          </div>
          <div className="col-lg-5 detailsPhoto p-0 h-100">
            <img
              className="img-fluid w-100"
              style={{ borderRadius: 17, height: 450 }}
              src={`${paths.PhotoLibraryAlbum}${details.id}/${details.photo}`}
            />
          </div>
        </div>

        {details.photos ? (
          <div className="my-3 d-flex flex-wrap justify-content-center">
            {details.photos.length > 2 ? (
              <div className="col-12">
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
              <div className="col-12">
                <div className="my-3 d-flex flex-wrap justify-content-center">
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
                        className="col-lg-4 mx-auto p-3 hoverTitle"
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
              </div>
            )}
          </div>
        ) : null}
        <Link
          id="link"
          to={"/photoslist"}
          className="justify-content-center text-decoration-none align-items-center d-flex my-5"
        >
          <button className="btn_blue">
            <span>عرض المزيد</span>
          </button>
        </Link>
        {renderModal(content)}
      </div>
    );
  }
  return <DetailsSkeleton />;
};

export default connect(
  (state) => {
    return {
      photoDetails: state.homeComponents.photoDetails,
    };
  },
  (dispatch) => {
    return bindActionCreators({ getPhotoDetails, clearPhotoDetails }, dispatch);
  }
)(PhotoDetails);
