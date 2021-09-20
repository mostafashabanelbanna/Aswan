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
import GeneralThreeOthersSkeletons from "../../loading-skeleton/General-ThreeOthers";
import SliderDetailsModalComponent from "../../slider-details-modal-component";

import { Link } from "react-router-dom";

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
    autoplaySpeed: 1000,
    infinite: true,
    speed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // dots: true,
    // arrows: false,
    // autoplay: true,
    // autoplaySpeed: 1000,
    // infinite: true,
    // speed: 2000,
    // slidesToShow: 4,
    // slidesToScroll: 1,
    // initialSlide: 1,
    // pauseOnFocus: true,
    // pauseOnHover: true,
    // swipe: true,
    // swipeToSlide: true,
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

  if (props.photoDetails) {
    let details = Object.assign({}, props.photoDetails.result);
    let sectorName = props.photoDetails.result.sectorName;
    let sectorId = props.photoDetails.result.sectorId;
    // photosLength = props.photoDetails.result.photos.length;
    return (
      <div className="container">
        <div>
          <div className="underline mt-4">
            {" "}
            <h3>{ReactHtmlParser(details.titleA)}</h3>
          </div>
          <div className="d-flex justify-content-end">
            <Link
            to={`/filterphotos/${sectorId + "&&" + sectorName + "&&" + "sector"}`}
            className=" d-flex justify-content-center align-items-center text-center text-muted fa-1x"
            >
            <div className="text-muted text-center fa-1x p-3 mb-1 detailsSectorName">
                {ReactHtmlParser(details.sectorName)}
            </div>
            </Link>
          </div>
          <hr className="text-muted m-0" />
        </div>
        <div className="row my-4 flex-column-reverse flex-lg-row">
          <div className="col-lg-7 my-3 my-lg-0">
            <p
              className="text-muted"
              style={{ lineHeight: "30px", fontSize: "1rem" }}
            >
              {ReactHtmlParser(details.photoCaptionA)}
            </p>
          </div>
          <div className="col-lg-5 detailsPhoto p-0 h-100">
            <img
              className="img-fluid w-100"
              style={{ borderRadius: 17 }}
              src={`${paths.PhotoLibraryAlbum}${details.id}/${details.photo}`}
            />
          </div>
        </div>

        {details.photos ? (
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
                          backgroundImage: `url(${paths.PhotoLibraryAlbum}${photo.id}/${photo.photo})`,
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
        ) : null}
        <Link
          to={"/photoslist"}
          className="justify-content-center text-decoration-none align-items-center d-flex my-5"
        >
          <button
            className="btn "
            style={{
              background:
                "-webkit-linear-gradient(right, #a4e1bf 0%,  #fef9a4 100%)",
            }}
          >
            عرض المزيد
          </button>
        </Link>
        {renderModal(content)}
      </div>
    );
  }
  return <GeneralThreeOthersSkeletons />;
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
