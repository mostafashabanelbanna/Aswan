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
import GeneralThreeOthersSkeletons from "../../loading-skeleton/General-ThreeOthers";
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

  if (props.newsdetail) {
    let sectorName = props.newsdetail.result.sectorName;
    let sectorid = props.newsdetail.result.sectorId;
    let newsCategoryId = props.newsdetail.result.newsCategoryId;
    let date = props.newsdetail.result.publishDate.split("-");
    let publishedDate = `${date[2]}-${date[1]}-${date[0]}T00:00:00`;
    return (
      <div>
        <div className="underline container mt-5">
          <h3>{props.newsdetail.result.title}</h3>
        </div>
        <div className="container d-flex justify-content-between mt-4">
          <div className="col-7 text-muted align-items-end fa-1x">
            <div className="d-flex my-1">
              <div className="mx-3">
                <FontAwesomeIcon icon={faUserTie} size={26}></FontAwesomeIcon>
              </div>
              <div> {props.newsdetail.result.author}</div>
            </div>
            <div className="d-flex my-1">
              <div className="mx-3">
                {" "}
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  size={26}
                ></FontAwesomeIcon>{" "}
              </div>
              <div>{`${moment(new Date(publishedDate)).format("LL")}`}</div>
            </div>
          </div>
          <Link
            to={`/filternews/${sectorid + "&&" + sectorName + "&&" + "sector"}`}
            className=" d-flex justify-content-center align-items-center text-center text-muted   fa-1x   detailsSectorName"
          >
            {ReactHtmlParser(props.newsdetail.result.sectorName)}
          </Link>
        </div>

        <hr className="container my-2"></hr>

        <div className=" container p-0">
          <div className="d-flex flex-column flex-md-row justify-content-center ">
            <div className="col-md-8 p-3 col-12 lh-lg  order-md-0 order-1">
              {ReactHtmlParser(props.newsdetail.result.content)}
            </div>
            <div className="col-md-4 p-3 col-12">
              <img
                className="w-100 holder h-100"
                src={
                  paths.NewsPhotos +
                  props.newsdetail.result.id +
                  "/" +
                  props.newsdetail.result.photo
                }
              />
            </div>
          </div>
        </div>
        <Link
          to={"/newslist"}
          className="justify-content-center text-decoration-none align-items-center d-flex my-4"
        >
          <button
            className="btn "
            style={{
              background:
                "-webkit-linear-gradient(right, #a4e1bf 0%,  #fef9a4 100%)",
            }}
          >
            المزيد من الاخبار
          </button>
        </Link>
      </div>
    );
  } else {
    return <GeneralThreeOthersSkeletons />;
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
