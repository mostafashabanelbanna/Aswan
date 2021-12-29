import React, { useEffect, useState } from "react";
import { getAllPaidAds } from "../../store/actions/advertisment-action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./ads.css";
import { Link } from "react-router-dom";
import { paths } from "../../paths/paths";
import Slider from "react-slick";
import { faChevronUp, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ads = (props) => {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    props.getAllPaidAds();
  }, []);

  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
    swipeToSlide: true,
  };

  if (props?.ads?.result?.length > 0 && display) {
    console.log(props.ads.result);
    return (
      <div
        className="side_social_icons text-center p-1 py-2 rounded-3 mb-3 "
        style={{
          backgroundColor: "",
          height: "260px",
          width: "200px",
        }}
      >
        <div className="w-100 d-flex px-1">
          <FontAwesomeIcon
            onClick={() => {
              setDisplay(false);
            }}
            color={"#3b51a3"}
            size="1x"
            icon={faTimes}
            cursor={"pointer"}
          ></FontAwesomeIcon>
        </div>
        <Slider {...settings} className="ads_slider">
          {props.ads.result.map((item) => {
            return (
              <div key={item.id} className="p-2">
                <Link to={`/advertisment-details/${item.id}`}>
                  <div
                    className="rounded-2"
                    style={{
                      background: `url("${paths.ads}${item.id}/${item.photo}")`,
                      height: "200px",
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      padding: "10px",
                      textAlign: "justify",
                    }}
                  ></div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
  return null;
};

export default connect(
  (state) => {
    return {
      ads: state.advertismentComponents.ads,
    };
  },
  (dispatch) => {
    return bindActionCreators({ getAllPaidAds }, dispatch);
  }
)(Ads);
