import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "../Styles/government-famous-style.css";

const GovernmentFamous = (props) => {
  var settings = {
    dots: false,
    arrows: true,
    // autoplay:true,
    // autoplaySpeed:1000,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
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
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="custom_contanier mt-5 mb-2">
      <div className="d-flex my-2">
        <img
          src="./images/icons/Famous_titel-0٢.png"
          alt=""
          width="80px"
        />
        <h3 className="mt-4 me-2 text-secondary">مشاهير المحافظة</h3>
      </div>
      <Slider {...settings}>
        <div className="d-flex flex-column ms-lg-4 align-items-center justify-content-between hovering">
          <div
            className="outerPolygon"
            onClick={() => console.log("helloooooooooooooo")}
          >
            <div className="innerPolygon"></div>
          </div>
          <p className="text-center">محمد منير</p>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="outerPolygon">
            <div className="innerPolygon"></div>
          </div>
          <p className="text-center">محمد منير</p>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="outerPolygon">
            <div className="innerPolygon"></div>
          </div>
          <p className="text-center">محمد منير</p>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="outerPolygon">
            <div className="innerPolygon"></div>
          </div>
          <p className="text-center">محمد منير</p>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="outerPolygon">
            <div className="innerPolygon"></div>
          </div>
          <p className="text-center">محمد منير</p>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="outerPolygon">
            <div className="innerPolygon"></div>
          </div>
          <p className="text-center">محمد منير</p>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="outerPolygon">
            <div className="innerPolygon"></div>
          </div>
          <p className="text-center">محمد منير</p>
        </div>
      </Slider>

      <div className="line mx-auto my-5 w-100"></div>
    </div>
  );
};

export default GovernmentFamous;
