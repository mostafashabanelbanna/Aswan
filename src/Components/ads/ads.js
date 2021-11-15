import React, { useEffect, useState } from "react";
import { getAllPaidAds } from "../../store/actions/advertisment-action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./ads.css";
import { Link } from "react-router-dom";
import { paths } from "../../paths/paths";
import Slider from "react-slick";

const Ads = (props) => {
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

  if (props?.ads?.result?.length > 0) {
    return (
      <Slider {...settings} className="ads_slider">
        {props.ads.result.map((item) => {
          console.log(item.photo);
          return (
            <div className="p-2">
              <Link to={`/advertisment-details/${item.id}`}>
                <div
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
    );

    // return (
    //   <div>
    //     <div className="ads_inner_content h-100">
    //       <div className="container h-100 pt-2">
    //         <div className="row h-100 ">
    //           {props.ads.result.length >= 1 ? (
    //             <Link
    //               id="link"
    //               className="col-sm-4 px-2"
    //               to={`/advertisment-details/${props.ads.result[0].id}`}
    //             >
    //               <div
    //                 style={{
    //                   background: `url(${paths.ads}${props.ads.result[0].id}/${props.ads.result[0].photo})`,
    //                   borderRadius: "10px",
    //                   height: "200px",
    //                   width: "100%",
    //                   backgroundRepeat: "no-repeat",
    //                   backgroundSize: "cover",
    //                   padding: "10px",
    //                   textAlign: "justify",
    //                 }}
    //               ></div>
    //             </Link>
    //           ) : null}

    //           {props.ads.result.length >= 2 ? (
    //             <Link
    //               id="link"
    //               className="col-sm-4 px-2"
    //               to={`/advertisment-details/${props.ads.result[1].id}`}
    //             >
    //               <div
    //                 style={{
    //                   background: `url(${paths.ads}${props.ads.result[1].id}/${props.ads.result[1].photo})`,
    //                   borderRadius: "10px",
    //                   height: "200px",
    //                   width: "100%",
    //                   backgroundRepeat: "no-repeat",
    //                   backgroundSize: "cover",
    //                   padding: "10px",
    //                   textAlign: "justify",
    //                 }}
    //               ></div>
    //             </Link>
    //           ) : null}

    //           {props.ads.result.length >= 3 ? (
    //             <Link
    //               id="link"
    //               className="col-sm-4 px-2"
    //               to={`/advertisment-details/${props.ads.result[2].id}`}
    //             >
    //               <div
    //                 style={{
    //                   background: `url(${paths.ads}${props.ads.result[2].id}/${props.ads.result[2].photo})`,
    //                   borderRadius: "10px",
    //                   height: "200px",
    //                   width: "100%",
    //                   backgroundRepeat: "no-repeat",
    //                   backgroundSize: "cover",
    //                   padding: "10px",
    //                   textAlign: "justify",
    //                 }}
    //               ></div>
    //             </Link>
    //           ) : null}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
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
