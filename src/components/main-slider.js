import React from "react";

import { Carousel } from "react-bootstrap";

import fiela from "../assets/main-slider/fiela.png";
import gw from "../assets/main-slider/gw.jpg";

import "../Styles/navbar.css";
const MainSlider = () => {
  return (
    <div className="mainSlider">
      <Carousel fade={true}>
        <Carousel.Item>
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
        <Carousel.Item>
          <div
            style={{ backgroundImage: `url(${gw})` }}
            className="item_conatainer position-relative"
          >
            <div
              className=" borderside position-absolute text-light"
              style={{ right: "6%", bottom: "12%" }}
            >
              <div style={{ fontWeight: "bold" }} className="item_title">
                <span>السد العالى</span>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MainSlider;
