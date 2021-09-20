import React, { useState, useEffect } from "react";
import axios from "../../Axios/Axios_Config";
import { paths } from "../../paths/paths";

import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../Styles/navbar.css";
import MainSliderSkeleton from "../loading-skeleton/mainSlider";
const MainSlider = () => {
  const [mainSlider, setMainSlider] = useState([]);

  const getMainSlider = async () => {
    //fetch data
    const response = await axios
      .get("/TouristAttraction/GetSlider")
      .catch((err) => console.log("Error", err)); //handle errors
    if (response && response.data) {
      setMainSlider(response.data.result);
    }
  };

  useEffect(() => {
    getMainSlider();
  }, []);

  const noMainSlider = !mainSlider || (mainSlider && mainSlider.length === 0); //check if no Main Slider

  return (
    <div className="mainSlider" style={{ height: "80vh" }}>
      <Carousel fade={true}>
        {!noMainSlider &&
          mainSlider.map((item, idx) => {
            return (
              <Carousel.Item style={{ height: "80vh" }}>
                <Link
                  to={`tourist-attraction-details/${item.id}`}
                  className="h-100"
                >
                  <div
                    style={{
                      backgroundImage: `url(${paths.MainSlider}${item.id}/${item.photo})`,
                    }}
                    className="item_conatainer position-relative"
                  >
                    <div
                      className=" borderside position-absolute text-light"
                      style={{ right: "6%", bottom: "12%" }}
                    >
                      <div
                        style={{ fontWeight: "bold" }}
                        className="item_title"
                      >
                        <span>{item.name}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Carousel.Item>
            );
          })}
      </Carousel>
      {noMainSlider && <MainSliderSkeleton />}
    </div>
  );
};

export default MainSlider;
