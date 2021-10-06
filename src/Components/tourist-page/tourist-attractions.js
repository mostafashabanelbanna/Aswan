import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const TouristAttraction = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          dots:true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots:true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="container my-5">
        <div className="d-flex my-5">
          <div className="mx-3">
            <img
            className='brightness'
              height="50"
              width="60"
              src="/images/tourist-photos/خدمات سياحية-01.png"
            />
          </div>
          <div className="d-flex align-items-center underline">
            <h3 className="mb-5 text_blue">خدمات سياحية</h3>{" "}
          </div>
        </div>
        <Slider {...settings}>
          <Link
            id="link"
            to={`/services/8`}
            className="h-100 p-3 col-sm-6 mb-1 col-lg-2 col-12 hvr-sweep-to-bottom "
          >
            <div style={{ height: "160px" }}>
              <div className="d-flex justify-content-center">
                {" "}
                <img
                  style={{ width: "150px", height: "110px" }}
                  src="/images/tourist-photos/مطاعم-01.png"
                />
              </div>
              <div className="mt-2 fw-bold text-center">مطاعم</div>
            </div>
          </Link>

          <Link
            id="link"
            to={`/services/26`}
            className="h-100 p-3 col-sm-6 mb-1 col-lg-2 col-12  hvr-sweep-to-bottom"
          >
            <div style={{ height: "160px" }}>
              <div className="d-flex justify-content-center">
                {" "}
                <img
                  style={{ width: "150px", height: "110px" }}
                  src="/images/tourist-photos/بازات-01.png"
                />
              </div>
              <div className="mt-2 fw-bold text-center">بازارات وأسواق</div>
            </div>
          </Link>

          <Link
            id="link"
            to={`/services/40`}
            className="h-100 p-3 col-sm-6 mb-1 col-lg-2 col-12  hvr-sweep-to-bottom"
          >
            <div style={{ height: "160px" }}>
              <div className="d-flex justify-content-center">
                {" "}
                <img
                  style={{ width: "150px", height: "110px" }}
                  src="/images/tourist-photos/انتقال سياحي-01.png"
                />
              </div>
              <div className="mt-2 fw-bold text-center">إنتقال سياحي</div>
            </div>
          </Link>

          <Link
            id="link"
            to={`/services/9`}
            className="h-100  p-3 col-sm-6 mb-1 col-lg-2 col-12  hvr-sweep-to-bottom"
          >
            <div style={{ height: "160px" }}>
              <div className="d-flex justify-content-center">
                {" "}
                <img
                  style={{ width: "150px", height: "110px" }}
                  src="/images/tourist-photos/بنوك-01.png"
                />
              </div>
              <div className="mt-2 fw-bold text-center">بنوك</div>
            </div>
          </Link>

          <Link
            id="link"
            to={`/services/72`}
            className="h-100  p-3 col-sm-6 mb-1 col-lg-2 col-12  hvr-sweep-to-bottom"
          >
            <div style={{ height: "160px" }}>
              <div className="d-flex justify-content-center">
                {" "}
                <img
                  style={{ width: "150px", height: "110px" }}
                  src="/images/tourist-photos/الحنطور-01.png"
                />
              </div>
              <div className="mt-2 fw-bold text-center">الحنطور</div>
            </div>
          </Link>

          <Link
            id="link"
            to={`/services/1`}
            className="h-100  p-3 col-sm-6 mb-1 col-lg-2 col-12  hvr-sweep-to-bottom"
          >
            <div style={{ height: "160px" }}>
              <div className="d-flex justify-content-center">
                {" "}
                <img
                  style={{ width: "150px", height: "110px" }}
                  src="/images/tourist-photos/فنادق-01.png"
                />
              </div>
              <div className="mt-2 fw-bold text-center">فنادق</div>
            </div>
          </Link>

          <Link
            id="link"
            to={`/services/16`}
            className="h-100  p-3 col-sm-6 mb-1 col-lg-2 col-12  hvr-sweep-to-bottom"
          >
            <div style={{ height: "160px" }}>
              <div className="d-flex justify-content-center">
                {" "}
                <img
                  style={{ width: "150px", height: "110px" }}
                  src="/images/tourist-photos/شركات سياحة-01.png"
                />
              </div>
              <div className="mt-2 fw-bold text-center">شركات سياحية</div>
            </div>
          </Link>

          <Link
            id="link"
            to={`/services/39`}
            className="h-100  p-3 col-sm-6 mb-1 col-lg-2 col-12  hvr-sweep-to-bottom"
          >
            <div style={{ height: "160px" }}>
              <div className="d-flex justify-content-center">
                {" "}
                <img
                  style={{ width: "150px", height: "110px" }}
                  src="/images/tourist-photos/شركات طيران-01.png"
                />
              </div>
              <div className="mt-2 fw-bold text-center">شركات طيران</div>
            </div>
          </Link>
        </Slider>
      </div>
      <div className="line mx-auto"></div>
    </div>
  );
};

export default TouristAttraction;
