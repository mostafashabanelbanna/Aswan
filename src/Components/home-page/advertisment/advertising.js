import React from "react";
import { Link } from "react-router-dom";

const Advertising = () => {
  return (
    <>
      <div className="custom_bg_light py-3">
        <div className=" container p-0 ">
          <div className="my-3 d-flex align-items-end">
            <img src="/images/icons_black/ads-0١.png" height="50px" />

            <div className="underline">
              <h3 className="mt-4 me-2 text_blue">اعلانات</h3>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row text-center justify-content-around">
            <Link
              id="link"
              to="/ads/0"
              className="text-decoration-none col-lg-3 p-3 col-5 mb-4 hvr-shutter-out-vertical"
            >
              <img
                style={{ width: 150 }}
                className="px-4 imgfilter brightness"
                src={"/images/icons/AdvertisementServices-0١.png"}
              />
              <div className="mt-4"> اعلانات ومناقصات </div>
            </Link>
            <Link
              id="link"
              to="/career"
              className="text-decoration-none col-lg-3 p-3 col-5 mb-4 hvr-shutter-out-vertical"
            >
              <img
                style={{ width: 150 }}
                className="  px-4 imgfilter brightness"
                src={"/images/icons/وظائف_icon-01.png"}
              />
              <div className="mt-2"> وظائف شاغرة </div>
            </Link>
            <Link
              id="link"
              to="/youth"
              className="text-decoration-none col-lg-3 p-3 col-5 mb-4 hvr-shutter-out-vertical"
            >
              <img
                style={{ width: 150 }}
                className="  px-4 imgfilter brightness"
                src={"/images/icons/تشغيل_icon-01.png"}
              />
              <div className="mt-4"> تشغيل شباب </div>
            </Link>

            <Link
              id="link"
              to="/ads/5"
              className="text-decoration-none col-lg-3 p-3 col-5 mb-4 hvr-shutter-out-vertical"
            >
              <img
                style={{ width: 150 }}
                className="  px-4 imgfilter brightness"
                src={"/images/icons/منجات_icon-01.png"}
              />
              <div className="mt-4"> منتجات يدوية </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="line mx-auto"></div>
    </>
  );
};

export default Advertising;
