import { useEffect, useState } from "react";
import {
  getVideoDetails, clearVideoDetails
} from "../../../store/actions/News_Action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactHtmlParser from "react-html-parser";
import { paths } from "../../../paths/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "../../../Styles/government-projects-style.css";
import "../../../Styles/photo-album-style.css";
import GeneralThreeOthersSkeletons from '../../loading-skeleton/General-ThreeOthers'

import SliderDetailsModalComponent from "../../slider-details-modal-component";
import { Link } from "react-router-dom";


const VideoDetails = (props) => {
  useEffect(() => {
    const resolver = async () => {
      await props.getVideoDetails(props.match.params.id);
    };

    resolver();

    return () => {
      props.clearVideoDetails();
    };
  }, []);

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

  if (props.videoDetails) {
    let details = Object.assign({}, props.videoDetails.result);
    return (
      <div className="container">
        <div>
          <div className="underline mt-4">
            {" "}
            <h3>{ReactHtmlParser(details.title)}</h3>
          </div>
          <hr className="text-muted mx-0 my-5" />
        </div>
        <div className="row my-4 flex-column-reverse flex-lg-row">
          {details.content?<div className="col-12 my-3 my-lg-0">
              <p className="text-muted" style={{ lineHeight: "30px", fontSize: "1rem" }}>
                {ReactHtmlParser(details.content)}
              </p>
          </div>:null}
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
        <Link
          to={"/videoslist"}
          className="justify-content-center text-decoration-none align-items-center d-flex my-4"
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
      </div>
    );
  }
  return <GeneralThreeOthersSkeletons/>
};

export default connect(
  (state) => {
    return {
        videoDetails: state.homeComponents.videoDetails,
    };
  },
  (dispatch) => {
    return bindActionCreators({ getVideoDetails, clearVideoDetails}, dispatch);
  }
)(VideoDetails);
