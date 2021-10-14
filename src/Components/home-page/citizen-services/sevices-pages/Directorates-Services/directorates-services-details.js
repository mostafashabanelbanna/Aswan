import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import {
  getDirectorateDetails,
  clearDirectorateDetails,
} from "../../../../../store/actions/E-Services";
import { useEffect, useState } from "react";
import MainSliderSkeleton from "../../../../loading-skeleton/mainSlider";
import { paths } from "../../../../../paths/paths";
import ReactHtmlParser from "react-html-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPercentage } from "@fortawesome/free-solid-svg-icons";
const DirectoratesDetails = (props) => {
  let routeId = props.Id;
  const [data, setData] = useState({});

  useEffect(() => {
    if (routeId != 0)
      setData(
        props.directoratesDetails.result.plans.find(
          (item) => item.id == routeId
        )
      );
    return () => {
      setData({});
    };
  }, [routeId]);

  if (data.id === routeId) {
    let pName;
    let newPath;
    if (data.photo != null) {
      pName = data.photo;
      newPath = pName.replaceAll(" ", "%20");
    } else {
      newPath = null;
    }
    return (
      <div className="container tab-content ml-1" id="nav-tabContent">
        <div
          className="tab-pane px-4 fade active show"
          id="nav-10"
          role="tabpanel"
          aria-labelledby="nav-10-tab"
        >
          {data.photo ? (
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="col-lg-6 d-flex justify-content-center">
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
                      src={`${paths.DirectoratePhoto}${routeId}/${newPath}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {data.goal ? (
            <div className="col-12 py-4 ">
              <div className="d-inline">
                <p dir="rtl">
                  <strong>
                    <span style={{ fontSize: "20px" }}>
                      <span>{`الهدف: ${data.goal}`}</span>
                    </span>
                  </strong>
                </p>
              </div>
            </div>
          ) : null}

          {data.vision ? (
            <div className="col-12 py-4 ">
              <div className="d-inline">
                <p dir="rtl">
                  <strong>
                    <span style={{ fontSize: "20px" }}>
                      <span>{`الرؤية: ${data.vision}`}</span>
                    </span>
                  </strong>
                </p>
              </div>
            </div>
          ) : null}

          {data.attachment != null && (
            <div className="d-flex flex-row align-items-center">
              <FontAwesomeIcon
                icon={faPaperclip}
                className="align-self-center text-danger"
              />
              <h6 className="text-primary mx-2 mt-1">
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href={`${paths.DirectorateAttachment}${data.id}/${data.attachment}`}
                  target="_blank"
                >
                  إستعراض الملف المرفق
                </a>
              </h6>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return <MainSliderSkeleton />;
  }
};

export default connect(
  (state) => {
    return {
      directoratesDetails: state.EServicesComponents.directoratesDetails,
    };
  },
  (dispatch) => {
    return bindActionCreators(
      { getDirectorateDetails, clearDirectorateDetails },
      dispatch
    );
  }
)(DirectoratesDetails);
