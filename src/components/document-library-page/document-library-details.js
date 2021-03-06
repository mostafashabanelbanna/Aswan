import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactHtmlParser from "react-html-parser";
import {
  documentLibraryDetails,
  clearDocumentLibrarydetails,
} from "../../store/actions/document-library";
import { paths } from "../../paths/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faLink } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import "moment/locale/ar";
import OnePieaceSkeleton from "../loading-skeleton/one-pieace";
import DetailsSkeleton from "../loading-skeleton/Details";
const DocumentLibraryDetails = (props) => {
  const id = props.match.params.id;
  useEffect(() => {
    props.documentLibraryDetails(id);
    return () => {
      props.clearDocumentLibrarydetails();
    };
  }, []);

  if (props?.documentLibraryDetail?.result) {
    // let sectorName = props.documentLibraryDetail.result.sectorName;
    // let sectorid = props.documentLibraryDetail.result.sectorId;
    return (
      <div>
        <div className="underline container mt-5">
          <h3>{props.documentLibraryDetail.result.title}</h3>
        </div>
        <div className="container d-flex justify-content-between mt-4">
          <div className="col-7 align-items-end fa-1x">
            {props.documentLibraryDetail.result.url ? (
              <div className="d-flex ">
                <div className="mx-3">
                  <FontAwesomeIcon icon={faLink} size={26}></FontAwesomeIcon>
                </div>
                <div>
                  <a
                    target="_blank"
                    href={props.documentLibraryDetail.result.url}
                    style={{ cursor: "pointer" }}
                  >
                    {props.documentLibraryDetail.result.url}
                  </a>
                </div>
              </div>
            ) : null}
            {props.documentLibraryDetail.result.publishDate ? (
              <div className="d-flex ">
                <div className="mx-3">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    size={26}
                  ></FontAwesomeIcon>{" "}
                </div>
                <div>
                  {`${moment(
                    new Date(props.documentLibraryDetail.result.publishDate)
                  ).format("LL")}`}
                </div>
              </div>
            ) : null}
          </div>
          <Link
            id="link"
            to="/document-library/1"
            className=" d-flex justify-content-center align-items-center text-center fa-1x detailsSectorName"
          >
            {ReactHtmlParser(
              props.documentLibraryDetail.result.documentTypeName
            )}
          </Link>
        </div>

        <hr className="container my-2"></hr>

        <div className=" container p-0">
          <div className="d-flex flex-column flex-md-row justify-content-center ">
            <div className="col-md-8 p-3 col-12 lh-lg  order-md-0 order-1">
              {ReactHtmlParser(props.documentLibraryDetail.result.content)}
            </div>
            <div className="col-md-4 p-3 col-12">
              {props.documentLibraryDetail.result.photo ? (
                <img
                  className="w-100"
                  src={
                    paths.DocumentLibraryPhotos +
                    props.documentLibraryDetail.result.id +
                    "/" +
                    props.documentLibraryDetail.result.photo
                  }
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {props.documentLibraryDetail.result.attachment ? (
                <iframe
                  frameBorder="0"
                  src={`${paths.DocumentLibrarAttachment}${props.documentLibraryDetail.result.id}/${props.documentLibraryDetail.result.attachment}`}
                  width="100%"
                  height="800px"
                ></iframe>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <DetailsSkeleton />;
};
const mapStateToProps = (state) => {
  return {
    documentLibraryDetail: state.DocumentLibrary.documentLibraryDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { documentLibraryDetails, clearDocumentLibrarydetails },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentLibraryDetails);
