import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllFamousPeople } from "../../store/actions/government-famous-actions";
import Slider from "react-slick";
import "../../Styles/government-famous-style.css";
import { paths } from "../../paths/paths";
import OnePieaceSkeleton from "../loading-skeleton/one-pieace";

const GovernmentFamous = (props) => {
  console.log(props);
  useEffect(() => {
    props.getAllFamousPeople();
  }, []);
  var settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide:true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (props.famousPeople) {
    if (props.famousPeople.result.length) {
      console.log(props.famousPeople);
      let famousPeopleList = Object.assign({}, props.famousPeople);
      return (
        <div className="bg-light">
          <div className="container mt-5 mb-2">
            <div className="d-flex my-3 py-4">
              <img
                src="./images/icons/Famous_titel-0٢.png"
                alt=""
                width="80px"
              />
              <div className="underline">
                <h3 className="mt-4 me-2 text-secondary">مشاهير المحافظة</h3>
              </div>
            </div>
            <Slider {...settings}>
              {famousPeopleList.result.map((person, index) => {
                return (
                  <div
                    key={person.id}
                    className="d-flex flex-column align-items-center justify-content-between hovering"
                  >
                    <div className="outerPolygon">
                      <div
                        className="innerPolygon"
                        style={{
                          backgroundImage: `url(${paths.FamousPeople}${person.id}/${person.photo})`,
                        }}
                      ></div>
                    </div>
                    <p className="text-center">{person.title}</p>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="line mb-5"></div>
        </div>
      );
    }
  }
  return <OnePieaceSkeleton/>;
};

export default connect(
  (state) => {
    return {
      famousPeople: state.homeComponents.famousList,
    };
  },
  (dispatch) => {
    return bindActionCreators({ getAllFamousPeople }, dispatch);
  }
)(GovernmentFamous);
