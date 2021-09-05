import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./ads.css";

const Ads = () => {
  const [show, setShow] = useState(true);
  const openAds = () => {
    setShow(!show);
  };
  return (
    <div className={`ads_container ${show ? "" : "ads_container_sink"}`}>
      <div>
        <span className="ads_toggle_btn" onClick={openAds}>
          <FontAwesomeIcon
            className={` ${show ? "" : "icon_chavron_rotate"}`}
            icon={faChevronDown}
          ></FontAwesomeIcon>
        </span>
      </div>

      <div className="ads_inner_content h-100">
        <div className="container h-100 ">
          <div className="row align-items-center h-100 ">
            <div className="col-sm-4">
              <div
                style={{
                  backgroundColor: "rgb(255 220 110 / 80%)",
                  borderRadius: "10px",
                }}
              >
                <h3 className="text-center">إعلان 1</h3>
              </div>
            </div>

            <div className="col-sm-4">
              <div
                style={{
                  backgroundColor: "#a4e1bf",
                  borderRadius: "10px",
                }}
              >
                <h3 className="text-center">إعلان 2</h3>
              </div>
            </div>

            <div className="col-sm-4">
              <div
                style={{
                  backgroundColor: "rgb(34 168 155 / 50%) ",
                  borderRadius: "10px",
                }}
              >
                <h3 className="text-center">إعلان 1</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
