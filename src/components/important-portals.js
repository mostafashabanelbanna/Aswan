import Slider from "react-slick";
import { useEffect } from "react";
import { getAllPortals } from "../store/actions/important-portals-actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { paths } from "../paths/paths";
import '../Styles/important-portals-style.css'

const ImportantPortals = (props) => {
  useEffect(() => {
    props.getAllPortals();
  }, []);

  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 500,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
    swipeToSlide:true,
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

  if (props.portalsList) {
    if (props.portalsList.result.length) {
      let portals = Object.assign({}, props.portalsList);
      return (
        <div>
        <div className="container mt-5 mb-2">
          <div className="d-flex my-2">
          <img
          src="./images/icons/web_titel-0١.png"
          alt=""
          width="80px"
        />
            <div className="underline">
              {" "}
              <h3 className="mt-4 me-2 text-secondary">روابط هامة</h3>
            </div>
          </div>
          <div className="portalsBorder mt-4 p-5  justify-content-center">
          <Slider {...settings}>
            {portals.result.map((photo, index) => {
                return (
                    <div
                    className="d-flex flex-column ms-md-0 circular-image hovering"
                    key={photo.id}
                    >
                  <a href={photo.url} className="align-self-center" target="_blank" rel="noreferrer">
                    <img
                      src={`${paths.ImportantPortalsPhotos}${photo.id}/${photo.photo}`}
                      alt={photo.name}
                      />
                  </a>
                </div>
              );
            })}
          </Slider>
        </div>
        </div>
          <div className="line my-5"></div>
        </div>
      );
    }
  }
  return <div>No List</div>;
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
