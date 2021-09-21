import React, { useState, useEffect } from "react";
import axios from "../../Axios/Axios_Config";

import Slider from "react-slick";

import ReactHtmlParser from "react-html-parser";

import SliderDetailsModalComponent from "../slider-details-modal-component";

import { paths } from "../../paths/paths";
import { Container } from "react-bootstrap";
import TouristAttractionSkeleton from "../loading-skeleton/touristAttraction";

const TouristAttractionDetails = (props) => {
  const id = props.match.params.id;

  const [touristAttraction, setTouristAttraction] = useState([]);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState({});

  const onShow = () => {
    setShow(true);
  };

  const getTouristAttraction = async () => {
    //fetch data
    const response = await axios
      .get("/TouristAttraction/Details/" + id)
      .catch((err) => console.log("Error", err)); //handle errors
    if (response && response.data) {
      setTouristAttraction(response.data.result);
    }
  };

  useEffect(() => {
    getTouristAttraction();
  }, []);

  const noTouristAttraction =
    !touristAttraction || (touristAttraction && touristAttraction.length === 0); //check if no Tourist Attraction

  const renderModal = (content) => {
    return (
      <SliderDetailsModalComponent
        content={content}
        show={show}
        onHide={() => setShow(false)}
        pathName={paths.TouristAttractionSlider}
      />
    );
  };

  var settings = {
    dots: false,
    // autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 2000,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  let pName = touristAttraction.photo;
  let newPath  = pName.replaceAll(' ','%20')

  return (
    <>
      {renderModal(content)}
      {!noTouristAttraction && (
        <div className="my-5">
          <div
            className="city_name_attachment"
            style={{
              backgroundImage: `url(${paths.MainSlider}${touristAttraction.id}/${newPath})`,
            }}
          >
            <div
              className="city_name_inner d-flex flex-column align-items-center"
              style={{ padding: "6rem" }}
            >
              <h3 className="text-center text-white">
                {touristAttraction.name}
              </h3>
            </div>
          </div>
          <Container>
            <div className="my-4">
              {ReactHtmlParser(touristAttraction.description)}
            </div>
            <Slider {...settings} style={{ width: "100%" }}>
              {touristAttraction.photos.map((photo, index) => {
                let pName = photo.photo;
                let newPath  = pName.replaceAll(' ','%20')
                let title = photo.title;
                let imgPath = `url(${paths.TouristAttractionSlider}${photo.id}/${newPath})`;
                if (photo.title === null) {
                  title = photo.caption;
                }
                return (
                  <div
                    className="mx-auto p-3 hoverTitle"
                    key={photo.id}
                    onClick={() => {
                      onShow();
                      setContent(photo);
                    }}
                  >
                    <div className="holder">
                      <div
                        style={{
                          // position: "relative",
                          backgroundImage: imgPath,
                        }}
                        className="imageAlbum"
                      ></div>
                    </div>
                    <p className="text-center my-2">{title}</p>
                  </div>
                );
              })}
            </Slider>
          </Container>
        </div>
      )}
      {noTouristAttraction ? <TouristAttractionSkeleton /> : null}
    </>
  );
};

export default TouristAttractionDetails;
