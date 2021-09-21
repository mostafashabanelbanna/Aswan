import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const TouristAttraction = () => {
  var settings = {
    dots: true,
    arrows: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="d-flex my-4">
        <div className="mx-3">
          <img height="50" width="60" src="/images/icons/Tourist-0٢.png" />
        </div>
        <div className="d-flex align-items-center underline">
          <h3 className="mb-5">خدمات سياحية</h3>{" "}
        </div>
      </div>

      <Slider {...settings}>
        <Link
          to={`/services/8`}
          className=" p-3 col-sm-6 col-lg-2 col-12 text-muted"
        >
          <div className="d-flex justify-content-center">
            {" "}
            <img className="w-75" src="/images/icons/Tourist-0٢.png" />
          </div>
          <div className="mt-2 fw-bold text-center">مطاعم</div>
        </Link>

        <Link
          to={`/services/26`}
          className=" p-3 col-sm-6 col-lg-2 col-12 text-muted"
        >
          <div className="d-flex justify-content-center">
            {" "}
            <img className="w-75" src="/images/icons/Tourist-0٢.png" />
          </div>
          <div className="mt-2 fw-bold text-center">بازارات وأسواق</div>
        </Link>

        <Link
          to={`/services/40`}
          className=" p-3 col-sm-6 col-lg-2 col-12 text-muted"
        >
          <div className="d-flex justify-content-center">
            {" "}
            <img className="w-75" src="/images/icons/Tourist-0٢.png" />
          </div>
          <div className="mt-2 fw-bold text-center">إنتقال سياحي</div>
        </Link>

        <Link
          to={`/services/9`}
          className=" p-3 col-sm-6 col-lg-2 col-12 text-muted"
        >
          <div className="d-flex justify-content-center">
            {" "}
            <img className="w-75" src="/images/icons/Tourist-0٢.png" />
          </div>
          <div className="mt-2 fw-bold text-center">بنوك</div>
        </Link>

        <Link
          to={`/services/72`}
          className=" p-3 col-sm-6 col-lg-2 col-12 text-muted"
        >
          <div className="d-flex justify-content-center">
            {" "}
            <img className="w-75" src="/images/icons/Tourist-0٢.png" />
          </div>
          <div className="mt-2 fw-bold text-center">الحنطور</div>
        </Link>

        <Link
          to={`/services/1`}
          className=" p-3 col-sm-6 col-lg-2 col-12 text-muted"
        >
          <div className="d-flex justify-content-center">
            {" "}
            <img className="w-75" src="/images/icons/Tourist-0٢.png" />
          </div>
          <div className="mt-2 fw-bold text-center">فنادق</div>
        </Link>

        <Link
          to={`/services/16`}
          className=" p-3 col-sm-6 col-lg-2 col-12 text-muted"
        >
          <div className="d-flex justify-content-center">
            {" "}
            <img className="w-75" src="/images/icons/Tourist-0٢.png" />
          </div>
          <div className="mt-2 fw-bold text-center">شركات سياحية</div>
        </Link>

        <Link
          to={`/services/39`}
          className=" p-3 col-sm-6 col-lg-2 col-12 text-muted"
        >
          <div className="d-flex justify-content-center">
            {" "}
            <img className="w-75" src="/images/icons/Tourist-0٢.png" />
          </div>
          <div className="mt-2 fw-bold text-center">شركات طيران</div>
        </Link>
      </Slider>
    </div>
  );
};

export default TouristAttraction;
