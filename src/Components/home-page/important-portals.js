import Slider from "react-slick";
import { useEffect } from "react";
import { getAllPortals } from "../../store/actions/important-portals-actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { paths } from "../../paths/paths";
import "../../Styles/important-portals-style.css";
import OnePieaceSkeleton from "../loading-skeleton/one-pieace";
import TitleSkeleton from "../loading-skeleton/title-skeleton";

const ImportantPortals = (props) => {
  useEffect(() => {
    props.getAllPortals();
  }, []);

  var settings = {
    dots: true,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
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

  if (props?.portalsList?.result) {
    if (props.portalsList.result.length) {
      let portals = Object.assign({}, props.portalsList);
      return (
        <div>
          <div className="container my-5 p-0">
            <div className="d-flex my-2">
              <img
                className="brightness"
                src="./images/icons/web_titel-0??.png"
                alt=""
                width="80px"
              />
              <div className="underline">
                {" "}
                <h3 className="mt-4 me-2 text_blue">?????????? ????????</h3>
              </div>
            </div>
            <div className="portalsBorder mt-4 p-5 justify-content-center">
              {portals.result.length >= 5 ? (
                <Slider {...settings}>
                  {portals.result.map((photo, index) => {
                    return (
                      <div
                        // className="d-flex flex-column ms-md-0 my-2 circular-image hvr-shrink"
                        key={photo.id}
                      >
                        <a
                          href={photo.url}
                          //className="d-flex justify-content-center align-items-center"
                          target="_blank"
                          rel="noreferrer"
                        > 
                        <div className="d-flex align-items-center justify-content-center bg-light p-2 rounded" style={{width:"120px", height: '120px'}}> 
                          <img className="img-fluid"
                            src={`${paths.ImportantPortalsPhotos}${photo.id}/${photo.photo}`}
                            alt={photo.name}
                          />
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </Slider>
              ) : (
                <div className="d-flex justify-content-center flex-wrap">
                  {portals.result.map((photo, index) => {
                    return (
                      <div
                        className="d-flex flex-column col-9 col-sm-6 col-lg-3 ms-md-0 my-3 circular-image hvr-shrink"
                        key={photo.id}
                      >
                        <a
                          href={photo.url}
                          className="d-flex justify-content-center align-items-center"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={`${paths.ImportantPortalsPhotos}${photo.id}/${photo.photo}`}
                            alt={photo.name}
                          />
                        </a>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
  }
  return (
    <>
      <TitleSkeleton />
      <OnePieaceSkeleton />
    </>
  );
};

export default connect(
  (state) => {
    return {
      portalsList: state.homeComponents.portalsList,
    };
  },
  (dispatch) => {
    return bindActionCreators({ getAllPortals }, dispatch);
  }
)(ImportantPortals);
