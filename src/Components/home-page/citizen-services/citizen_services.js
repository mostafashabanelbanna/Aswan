import React, { useState } from "react";
import { Link } from "react-router-dom";
import CitizenServicesForm from "../../forms/citize-service-form";
import LightSpeed from "react-reveal/LightSpeed";
const CitizenServices = () => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState({});

  const onShow = () => {
    setShow(true);
  };

  const renderModal = () => {
    return (
      <CitizenServicesForm
        showCitizenServicesFormModal={show}
        onHideCitizenServicesFormModal={() => setShow(false)}
      />
    );
  };

  return (
    <div className="custom_bg_light pt-4">
      <div className=" container p-0 mt-2">
        <div className="my-3 d-flex align-items-end">
          <img
            className="brightness"
            src="/images/icons_black/services_titel-0١.png"
            height="50px"
          />
          <div className="underline">
            {" "}
            <h3 className="mt-4 me-2 text_blue ">خدمات المواطنين </h3>
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
        <div className="container-fluid p-0">
          <div className=" row justify-content-around ">
            <div className="col-6 "></div>
            <div
              className="col-lg-6 col-md-9 col-12 custom_bg_light py-4"
              style={{ zIndex: 1 }}
            >
              <div className="d-flex flex-column d-sm-block justify-content-center py-3 text-center">
                <Link
                  id="link"
                  to="/eservices"
                  className="text-decoration-none"
                >
                  <div className="mb-4 col-md-4 col-sm-6 col-8  hvr-rectangle-out ">
                    <img
                      style={{ width: 100 }}
                      className="px-4 brightness"
                      src={"/images/icons/cluesServices-0١.png"}
                    />
                    <div className="mt-4 mb-1 fw-bold"> ادلة المحافظة </div>
                  </div>
                </Link>

                <Link
                  id="link"
                  to="/eservicesdirectories"
                  className="text-decoration-none"
                >
                  <div className="mb-4 col-md-4 col-sm-6 col-8  hvr-rectangle-out ">
                    <img
                      style={{ width: 100 }}
                      className="px-4 brightness"
                      src={"/images/icons/electronicServices-0١.png"}
                    />
                    <div className="mt-4 mb-1  fw-bold">
                      {" "}
                      دليل الخدمات الالكترونية{" "}
                    </div>
                  </div>
                </Link>

                <a
                  id="link"
                  href="http://agriprice.gov.eg/local-prices"
                  // href="http://agriprice.gov.eg/local-prices/Aswan/Aswan"
                  target="_blank" //localhost:3001/
                >
                  <div className="mb-4 col-md-4 col-sm-6 col-8  hvr-rectangle-out ">
                    <img
                      style={{ width: 100 }}
                      className="px-4 brightness"
                      src={"/images/icons/priceServices-0١.png"}
                    />
                    <div className="mt-4 mb-1  fw-bold"> أسعار السلع </div>
                  </div>
                </a>

                <Link
                  id="link"
                  to="/directorates"
                  className="text-decoration-none"
                >
                  <div className="mb-4 col-md-4 col-sm-6 col-8  hvr-rectangle-out ">
                    <img
                      style={{ width: 100 }}
                      className="px-4 brightness"
                      src={"/images/icons/districts_Services-0١.png"}
                    />
                    <div className="mt-4 mb-1  fw-bold"> خدمات المديريات </div>
                  </div>
                </Link>

                <Link
                  id="link"
                  to={"/emergencynumbers"}
                  className="text-decoration-none"
                >
                  <div className="mb-4 col-md-4 col-sm-6 col-8  hvr-rectangle-out ">
                    <img
                      style={{ width: 100 }}
                      className="px-4 brightness"
                      src={"/images/icons/EmergencyServices-0١.png"}
                    />
                    <div className="mt-4 mb-1  fw-bold"> أرقام الطوارئ </div>
                  </div>
                </Link>

                {/* <Link to='/advertisements' className="text-decoration-none">
                  <div className="mb-4 col-md-3 col-sm-6 col-8  hvr-rectangle-out ">
                    <img
                      style={{ width: 100 }}
                      className="px-4"
                      src={"/images/icons/AdvertisementServices-0١.png"}
                    />
                    <div className="mt-4 mb-1 "> أعلانات ومناقصات </div>
                  </div>
                </Link> */}

                <Link
                  id="link"
                  to="/techcenterservices"
                  className="text-decoration-none"
                >
                  <div className="mb-4 col-md-4 col-sm-6 col-8  hvr-rectangle-out ">
                    <img
                      style={{ width: 100 }}
                      className="px-4 brightness"
                      src={"/images/icons/centersServices-0١.png"}
                    />
                    <div className="mt-4 mb-1  fw-bold">
                      {" "}
                      خدمات المراكز التكنولوجية{" "}
                    </div>
                  </div>
                </Link>
                {/* <div 
                style={{cursor:'pointer'}}
                id='link'
                className="mb-4 mx-auto col-md-4 col-sm-6 col-8  hvr-rectangle-out"
                onClick={() => {
                  onShow();
                }}
                >
                  <img
                    style={{ width: 100 }}
                    className="px-4 brightness"
                    src={"/images/icons_black/services_titel-0١.png"}
                  />
                  <div className="mt-4 mb-1 fw-bold">
                    خدمة المواطنين
                  </div>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderModal()}
      <div className="line"></div>
    </div>
  );
};
export default CitizenServices;
