import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactHtmlParser from "react-html-parser";
import {
  newsdetails,
  clearNewsdetails,
} from "../../../store/actions/News_Action";
import { paths } from "../../../paths/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import DetailsSkeleton from "../../loading-skeleton/Details";
import moment from "moment";
import "moment/locale/ar";

const NewsDetails = (props) => {
  const id = props.match.params.id;
  useEffect(() => {
    props.newsdetails(id);

    return () => {
      props.clearNewsdetails();
    };
  }, []);

  if (props?.newsdetail?.result) {
    let sectorName = props.newsdetail.result.sectorName;
    let sectorid = props.newsdetail.result.sectorId;
    return (
      <div>
        <div className="underline container mt-5">
          <h3>{props.newsdetail.result.title}</h3>
        </div>
        <div className="container d-flex justify-content-between mt-4">
          <div className="col-7  align-items-end fa-1x">
            {props.newsdetail.result.author ? (
              <div className="d-flex my-1">
                <div className="mx-3">
                  <FontAwesomeIcon icon={faUserTie} size={26}></FontAwesomeIcon>
                </div>
                <div> {props.newsdetail.result.author}</div>
              </div>
            ) : null}
            {props.newsdetail.result.publishDate ? (
              <div className="d-flex my-1">
                <div className="mx-3">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    size={26}
                  ></FontAwesomeIcon>{" "}
                </div>
                <div>{`${moment(
                  new Date(props.newsdetail.result.publishDate)
                ).format("LL")}`}</div>
              </div>
            ) : null}
          </div>
          <Link
            id="link"
            to={`/filternews/${sectorid + "&&" + sectorName + "&&" + "sector"}`}
            className=" d-flex justify-content-center align-items-center text-center    fa-1x   detailsSectorName"
          >
            {ReactHtmlParser(props.newsdetail.result.sectorName)}
          </Link>
        </div>

        <hr className="container my-2"></hr>

        <div className="container mb-3">
          <div className="row">
            <div className="col-12 text-justify">
              <p className="text-justify">
                <img
                  className="img-fluid holder detailsPhoto col-12 col-lg-6 float-lg-start me-lg-5 mb-4 me-0 mt-3"
                  src={
                    paths.NewsPhotos +
                    props.newsdetail.result.id +
                    "/" +
                    props.newsdetail.result.photo
                  }
                  alt="President Photo"
                />
              </p>
              <div
                className=" text-justify ps-lg-3 ps-0"
                style={{
                  lineHeight: "30px",
                  fontSize: "1rem",
                  textAlign: "justify",
                }}
              >
                {props.newsdetail.result.introTitle ? (
                  <p
                    style={{
                      color: "rgb(66, 176, 211)",
                      fontWeight: "bold",
                      fontSize: 18,
                    }}
                  >
                    النبذة:
                    <span
                      style={{
                        color: "black",
                        fontWeight: "lighter",
                        fontSize: 16,
                      }}
                    >
                      {props.newsdetail.result.introTitle}
                    </span>
                  </p>
                ) : null}
                {ReactHtmlParser(props.newsdetail.result.content)}
              </div>
            </div>
          </div>
        </div>
        <Link
          id="link"
          to={"/newslist"}
          className="justify-content-center text-decoration-none align-items-center d-flex my-5"
        >
          <button className="btn_blue">
            <span>عرض المزيد</span>
          </button>
        </Link>
      </div>
    );
  } else {
    return <DetailsSkeleton />;
  }
};

const mapStateToProps = (state) => {
  return {
    newsdetail: state.homeComponents.newsdetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ newsdetails, clearNewsdetails }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetails);
