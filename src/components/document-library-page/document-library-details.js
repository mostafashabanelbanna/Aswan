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
import { faCalendar, faLink } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import "moment/locale/ar";
const DocumentLibraryDetails = (props) => {
  const id = props.match.params.id;
  useEffect(() => {
    props.documentLibraryDetails(id);
    return () => {
      props.clearDocumentLibrarydetails();
    };
  }, []);

  console.log(props.documentLibraryDetail);

  if (props.documentLibraryDetail) {
    let sectorName = props.documentLibraryDetail.result.sectorName;
    let sectorid = props.documentLibraryDetail.result.sectorId;
    return (
      <div>
        <div className="underline container mt-5">
          <h3>{props.documentLibraryDetail.result.title}</h3>
        </div>
        <div className="container d-flex justify-content-between mt-4">
          <div className="col-7   text-muted align-items-end  fa-1x  ">
            <div className="d-flex ">
              <div className="mx-3">
                <FontAwesomeIcon icon={faLink} size={26}></FontAwesomeIcon>
              </div>
              <div>
                <a
                  target="_blank"
                  href={props.documentLibraryDetail.result.url}
                >
                  الرابط
                </a>
              </div>
            </div>
            <div className="d-flex ">
              <div className="mx-3">
                {" "}
                <FontAwesomeIcon
                  icon={faCalendar}
                  size={26}
                ></FontAwesomeIcon>{" "}
              </div>
              <div>
              {`${moment(new Date(props.documentLibraryDetail.result.publishDate)).format("LL")}`}</div>
            </div>
          </div>
          <Link
            to={`/filternews/${sectorid + "&&" + sectorName + "&&" + "sector"}`}
            className=" d-flex justify-content-center align-items-center text-center text-muted   fa-1x   detailsSectorName"
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
              <img
                className="w-100"
                src={
                  paths.DocumentLibraryPhotos +
                  props.documentLibraryDetail.result.id +
                  "/" +
                  props.documentLibraryDetail.result.photo
                }
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <iframe
                frameborder="0"
                src={`${paths.DocumentLibrarAttachment}${props.documentLibraryDetail.result.id}/${props.documentLibraryDetail.result.attachment}`}
                width="100%"
                height="800px"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div>Loading</div>;
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
