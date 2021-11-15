import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  advertismentDetails,
  clearAdvertismentDetails,
} from "../../store/actions/advertisment-action";
import { paths } from "../../paths/paths";
import moment from "moment";
import "moment/locale/ar";
import DetailsSkeleton from "../loading-skeleton/Details";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const AdvertismentDetails = (props) => {
  let id = props.match.params.id;

  useEffect(() => {
    // const resolver = async () => {
    //   await setId(props.match.params.id)
    // }

    // resolver();
    props.advertismentDetails(id);
    return () => {
      props.clearAdvertismentDetails();
    };
  }, [id]);

  var settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  if (props?.advertismentDetail?.result) {
    return (
      <div className="pt-4">
        <Container fluid className="px-0">
          <div className="container underline mt-3 mb-5">
            <h4>{props.advertismentDetail.result.title}</h4>
          </div>
          <div className="d-flex container my-1">
            <div className="mx-3">
              {" "}
              <FontAwesomeIcon
                icon={faCalendarAlt}
                size={26}
              ></FontAwesomeIcon>{" "}
            </div>
            <div>{`${moment(
              new Date(props.advertismentDetail.result.publishDate)
            ).format("LL")}`}</div>
          </div>
          <div className=" bg-light h-100">
            <div className="container">
              <div className="d-flex flex-column-reverse flex-lg-row">
                <Col lg={8} className=" p-3">
                  <div className="d-flex justify-content-end">
                    <div
                      className="rounded"
                      style={{
                        padding: "2px 6px",
                        backgroundColor: "rgb(255 220 110 / 30%) ",
                      }}
                    >
                      {props.advertismentDetail.result.advertismentTypeName}{" "}
                      {props.advertismentDetail.result.advertismentCategoryName
                        ? "-"
                        : null}
                      {props.advertismentDetail.result.advertismentCategoryName}
                    </div>
                  </div>

                  <h5 className="mb-4">
                    {props.advertismentDetail.result.description}
                  </h5>
                </Col>
                <Col lg={4} className="bg-white text-center p-3">
                  <img
                    className="img-fluid"
                    src={
                      paths.ads +
                      props.advertismentDetail.result.id +
                      "/" +
                      props.advertismentDetail.result.photo
                    }
                  />
                </Col>
              </div>
              {/* Show Slider if album is not empty */}
              {props.advertismentDetail.result.advertismentTypeId === 5 ? (
                <Row>
                  <Col>
                    <Slider {...settings}>
                      {props.advertismentDetail.result.map((item, index) => {
                        return <div className=""></div>;
                      })}
                    </Slider>
                  </Col>
                </Row>
              ) : null}
              {/* End of Slider */}
            </div>
            {props.advertismentDetail.result.attachment ? (
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <iframe
                      frameborder="0"
                      src={`${paths.AdsAttachment}${props.advertismentDetail.result.id}/${props.advertismentDetail.result.attachment}`}
                      width="100%"
                      height="800px"
                    ></iframe>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </Container>
      </div>
    );
  }
  return <DetailsSkeleton />;
};

const mapStateToProps = (state) => {
  return {
    advertismentDetail: state.advertismentComponents.advertismentDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { advertismentDetails, clearAdvertismentDetails },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvertismentDetails);
