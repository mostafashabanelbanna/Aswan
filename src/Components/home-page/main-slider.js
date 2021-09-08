import React from "react";

import { Carousel } from "react-bootstrap";

import fiela from "../../assets/main-slider/fiela.png";
import gw from "../../assets/main-slider/gw.jpg";
import kom_ombo from "../../assets/main-slider/kom_ombo.jpg";
import Elephantine_island from "../../assets/main-slider/Elephantine_island.jpg";

import "../../Styles/navbar.css";
const MainSlider = () => {
  return (
    <div className="mainSlider" style={{ height: "80vh" }}>
      <Carousel fade={true}>
        <Carousel.Item style={{ height: "80vh" }}>
          <div
            style={{ backgroundImage: `url(${fiela})` }}
            className="item_conatainer position-relative"
          >
            <div
              className=" borderside position-absolute text-light"
              style={{ right: "6%", bottom: "12%" }}
            >
              <div style={{ fontWeight: "bold" }} className="item_title">
                <span>معبد فيله</span>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ height: "80vh" }}>
          <div
            style={{ backgroundImage: `url(${gw})` }}
            className="item_conatainer position-relative"
          >
            <div
              className=" borderside position-absolute text-light"
              style={{ right: "6%", bottom: "12%" }}
            >
              <div className="item_title">
                <span>السد العالى</span>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ height: "80vh" }}>
          <div
            style={{ backgroundImage: `url(${kom_ombo})` }}
            className="item_conatainer position-relative"
          >
            <div
              className=" borderside position-absolute text-light"
              style={{ right: "6%", bottom: "12%" }}
            >
              <div className="item_title">
                <span> معبد كوم امبو</span>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ height: "80vh" }}>
          <div
            style={{ backgroundImage: `url(${Elephantine_island})` }}
            className="item_conatainer position-relative"
          >
            <div
              className=" borderside position-absolute text-light"
              style={{ right: "6%", bottom: "12%" }}
            >
              <div className="item_title">
                <span>جزيرة الفنتين</span>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MainSlider;
