import React from "react";
import logo from "../../../assets/img/haya_karima_logo.jpg";
import { Link } from "react-router-dom";
const HayahKarima = () => {
  return (
    <div className="pt-4">
      <div className=" container p-0 mb-4">
        <div className="mt-2 d-flex ">
          <div className="my-3 d-flex">
            <img src="/images/icons/حياه كريمة-01.png" width="80px" />
            <div className="underline">
              {" "}
              <h3 className="mt-4 me-2 text-dark"> محاور مبادرة حياه كريمة </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  px-3 position-relative">
        <div className="haya_carima_bg"></div>
        <div className="haya_carima_bg_logo">
          <img src={logo} style={{ width: "140px" }} />
        </div>
        <div className="container">
          <div className=" row justify-content-around ">
            <div
              className="bg-white  col-lg-6 col-md-9 col-12 py-4"
              style={{ zIndex: 1 }}
            >
              <div className="row justify-content-center py-3 text-center ">
                <Link id='link'
                  to={`/HayaKarimaDetails/${1}`}
                  className="mb-4 col-md-4 col-sm-6 "
                >
                  <div className="p-2 h-100 hvr-bob hvr-sweep-to-bottom">
                    <img
                      style={{ height: "100px" }}
                      className=" p-2"
                      src={"/images/haya_karima/1.png"}
                    />
                    <div className="mt-4 mb-1  text-dark">
                      محور البنية الأساسية <br /> و المرافق
                    </div>
                  </div>
                </Link>

                <Link id='link'
                  to={`/HayaKarimaDetails/${2}`}
                  className="mb-4 col-md-4 col-sm-6 "
                >
                  <div className="p-2 h-100 hvr-bob hvr-sweep-to-bottom">
                    <img
                      style={{ height: "100px" }}
                      className="p-2"
                      src={"/images/haya_karima/2.png"}
                    />
                    <div className="mt-4 mb-1  text-dark">
                      {" "}
                      محور خدمات المواطن
                    </div>
                  </div>
                </Link>

                <Link id='link'
                  to={`/HayaKarimaDetails/${3}`}
                  className="mb-4 col-md-4 col-sm-6 "
                >
                  <div className="p-2 h-100 hvr-bob hvr-sweep-to-bottom">
                    <img
                      style={{ height: "100px" }}
                      className="p-2"
                      src={"/images/haya_karima/3.png"}
                    />
                    <div className="mt-4 mb-1  text-dark">
                      {" "}
                      المحور الثقافى و الإجتماعي{" "}
                    </div>
                  </div>
                </Link>
                <Link id='link'
                  to={`/HayaKarimaDetails/${4}`}
                  className="mb-4 col-md-4 col-sm-6 "
                >
                  <div className="p-2 h-100 hvr-bob hvr-sweep-to-bottom">
                    <img
                      style={{ height: "100px" }}
                      className="p-2"
                      src={"/images/haya_karima/4.png"}
                    />
                    <div className="mt-4 mb-1  text-dark">
                      {" "}
                      المحور الإقتصادي
                    </div>
                  </div>
                </Link>

                <Link id='link'
                  to={`/HayaKarimaDetails/${5}`}
                  className="mb-4 col-md-4 col-sm-6 "
                >
                  <div className="p-2 h-100 hvr-bob hvr-sweep-to-bottom">
                    <img
                      style={{ height: "100px" }}
                      className="p-2"
                      src={"/images/haya_karima/5.png"}
                    />
                    <div className="mt-4 mb-1  text-dark"> سكن كريم</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-6 "></div>
          </div>
        </div>
      </div>
      <div className="line mx-auto"></div>
    </div>
  );
};
export default HayahKarima;
