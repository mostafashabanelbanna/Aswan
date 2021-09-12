import React from "react";
import { Link } from "react-router-dom";

import LightSpeed from "react-reveal/LightSpeed";
const CitizenServices = () => {
  return (
    <div className="bg-light pt-4">
      <div className=" container p-0 mb-4">
        <div className="mt-2 d-flex ">
          <img src="/images/icons/services_titel-0١.png" width="50px" />

          <div className="underline">
            {" "}
            <h3 className="mt-4 me-2 text-secondary ">خدمات المواطنين </h3>
          </div>
        </div>
      </div>
      <div className="container-fluid  px-3 position-relative">
        <div className="bgvid ">
          <video muted autoPlay loop>
            <source
              src={"./videos/pexels-diva-plavalaguna-6985339.mp4"}
            ></source>
          </video>
        </div>
        <div className="container">
          <div className=" row justify-content-around ">
            <div className="col-6 "></div>
            <div
              className="col-lg-6 col-md-9 col-12  bg-light py-4"
              style={{ zIndex: 1 }}
            >
              <div className="d-flex flex-column d-sm-block justify-content-center py-3 text-center">
                <Link
                  to="/eservices"
                  className="text-decoration-none text-muted"
                >
                  <div className="mb-4 col-md-3 col-sm-6 col-12 hvr-underline-from-center ">
                    <img
                      style={{ width: 100 }}
                      className="px-4"
                      src={"/images/icons/cluesServices-0١.png"}
                    />
                    <div className="mt-4 mb-1 "> ادلة المحافظة </div>
                  </div>
                </Link>

                <Link
                  to="/eservicesdirectories"
                  className="text-decoration-none text-muted"
                >
                  <div className="mb-4 col-md-3 col-sm-6 col-8 hvr-underline-from-center ">
                    <img
                      style={{ width: 100 }}
                      className="px-4"
                      src={"/images/icons/electronicServices-0١.png"}
                    />
                    <div className="mt-4 mb-1 "> دليل الخدمات الالكترونية </div>
                  </div>
                </Link>

                <a href='http://agriprice.gov.eg/' className='text-muted' target="_blank">
                  <div className="mb-4 col-md-3 col-sm-6 col-8 hvr-underline-from-center ">
                    <img
                      style={{ width: 100 }}
                      className="px-4"
                      src={"/images/icons/priceServices-0١.png"}
                    />
                    <div className="mt-4 mb-1 "> أسعار السلع </div>
                  </div>
                </a>

                <Link to='/directorates' className="text-decoration-none text-muted">
                  <div className="mb-4 col-md-3 col-sm-6 hvr-underline-from-center ">
                    <img
                      style={{ width: 100 }}
                      className="px-4"
                      src={"/images/icons/districts_Services-0١.png"}
                    />
                    <div className="mt-4 mb-1 "> خدمات المديريات </div>
                  </div>
                </Link>

                <Link to={'/emergencynumbers'} className="text-decoration-none text-muted">
                  <div className="mb-4 col-md-3 col-sm-6 hvr-underline-from-center ">
                    <img
                      style={{ width: 100 }}
                      className="px-4"
                      src={"/images/icons/EmergencyServices-0١.png"}
                    />
                    <div className="mt-4 mb-1 "> أرقام الطوارئ </div>
                  </div>
                </Link>

                <Link to='/advertisements' className="text-decoration-none text-muted">
                  <div className="mb-4 col-md-3 col-sm-6 hvr-underline-from-center ">
                    <img
                      style={{ width: 100 }}
                      className="px-4"
                      src={"/images/icons/AdvertisementServices-0١.png"}
                    />
                    <div className="mt-4 mb-1 "> أعلانات ومناقصات </div>
                  </div>
                </Link>


                <div className="mb-4 col-md-3 col-sm-6 hvr-underline-from-center ">
                  <img
                    style={{ width: 100 }}
                    className="px-4"
                    src={"/images/icons/centersServices-0١.png"}
                  />
                  <div className="mt-4 mb-1 "> خدمات المراكز التكنولوجية </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line mx-auto"></div>
    </div>
  );
};
export default CitizenServices;
