import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import {
  getStaticContentDetails,
  clearStaticContentDetails,
} from "../../../store/actions/static-content";
import { useEffect, useState } from "react";
import Details from "../../loading-skeleton/Details";
import { paths } from "../../../paths/paths";
import ReactHtmlParser from "react-html-parser";

const FamousStaticContentDetails = (props) => {
  let routeId = props.match.params.id;
  useEffect(() => {
    props.getStaticContentDetails(routeId);
    return () => {
      props.clearStaticContentDetails();
    };
  }, []);

  if (props?.staticContentDetails?.result) {
    let data = props.staticContentDetails.result;
    let pName;
    let newPath;
    if (data.photo != null) {
      pName = data.photo;
      newPath = pName.replaceAll(" ", "%20");
    }
    return (
      <div className="container tab-content ml-1" id="nav-tabContent">
        <div className="container">
          <div className="my-3 underline">
            <h3 className="mb-0">{data.title}</h3>
          </div>
        </div>
        <div className="col-12">
          <div className="row justify-content-center">
            <div className="col-lg-6 d-flex justify-content-center">
              {data.photo ? (
                <div
                  className="m-2 text-center"
                  style={{
                    boxShadow: "3px 4px 16px 6px rgb(179 179 179 / 36%)",
                    border: "4px solid #faa74a",
                    borderRadius: "10px",
                    width: "fit-content",
                  }}
                >
                  <img
                    style={{
                      borderRadius: "10px",
                      width: "15rem",
                      height: "15rem",
                    }}
                    className="img-fluid"
                    src={`${paths.StaticContent}${routeId}/${newPath}`}
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div className="col-12 py-4 ">
            <div className="d-inline">
              <p dir="rtl">
                {data.content ? (
                  <strong>
                    <span style={{ fontSize: "18px" }}>
                      <span>{ReactHtmlParser(data.content)}</span>
                    </span>
                  </strong>
                ) : null}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Details />;
  }
};

export default connect(
  (state) => {
    return {
      staticContentDetails: state.staticContent.staticContentDetails,
    };
  },
  (dispatch) => {
    return bindActionCreators(
      { getStaticContentDetails, clearStaticContentDetails },
      dispatch
    );
  }
)(FamousStaticContentDetails);
