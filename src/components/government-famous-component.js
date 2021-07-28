import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

function GovernmentFamous(props) {
  var settings = {
    dots: false,
    arrows: false,
    // autoplay:true,
    // autoplaySpeed:1000,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
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
    <div className="container mt-5 mb-2">
      <div className="d-flex mb-3 justify-content-center justify-content-md-start">
        <FontAwesomeIcon icon={faStar} className="titleIcon" />
        <p className="titles mb-1">مشاهير المحافظة</p>
      </div>
      <Slider {...settings}>
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
}

export default GovernmentFamous;
