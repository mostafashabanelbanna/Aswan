import React from "react";
import logo from "../../assets/img/haya_karima_logo.jpg";

const HayahKarima = () => {
  return (
    <div className=" my-5 pt-4">
      <div className=" container p-0 mb-4">
        <div className="mt-2 d-flex ">
          <div className="underline">
            {" "}
            <h3 className="mt-4 me-2 text-secondary ">
              {" "}
              محاور مبادرة حياه كريمة{" "}
            </h3>
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
              <div className="row justify-content-center py-3 text-center">
                <div className="mb-4 col-md-4 col-sm-6 ">
                  <div className="p-2 h-100 hvr-bob hvr-sweep-to-bottom">
                    <img
                      style={{ height: "100px" }}
                      className=" p-2"
                      src={"/images/haya_karima/1.png"}
                    />
                    <div className="mt-4 mb-1 ">
                      محور البنية الأساسية و المرافق
                    </div>
                  </div>
                </div>

                <div className="mb-4 col-md-4 col-sm-6 ">
                  <div className="p-2 h-100 hvr-bob hvr-sweep-to-bottom">
                    <img
                      style={{ height: "100px" }}
                      className="p-2"
                      src={"/images/haya_karima/2.png"}
                    />
                    <div className="mt-4 mb-1 "> محور خدمات المواطن </div>
                  </div>
                </div>

                <div className="mb-4 col-md-4 col-sm-6 ">
                  <div className="p-2 h-100 hvr-bob hvr-sweep-to-bottom">
                    <img
                      style={{ height: "100px" }}
                      className="p-2"
                      src={"/images/haya_karima/3.png"}
                    />
                    <div className="mt-4 mb-1 ">
                      {" "}
                      المحور الثقافى و الإجتماعي{" "}
                    </div>
                  </div>
                </div>
                <div className="mb-4 col-md-4 col-sm-6 ">
                  <div className="p-2 h-100 hvr-bob hvr-sweep-to-bottom">
                    <img
                      style={{ height: "100px" }}
                      className="p-2"
                      src={"/images/haya_karima/4.png"}
                    />
                    <div className="mt-4 mb-1 "> المحور الإقتصادي </div>
                  </div>
                </div>

                <div className="mb-4 col-md-4 col-sm-6 ">
                  <div className="p-2 h-100 hvr-bob hvr-sweep-to-bottom">
                    <img
                      style={{ height: "100px" }}
                      className="p-2"
                      src={"/images/haya_karima/5.png"}
                    />
                    <div className="mt-4 mb-1 "> سكن كريم </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HayahKarima;
