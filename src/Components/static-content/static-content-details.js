import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import {
  getStaticContentDetails,
  clearStaticContentDetails,
} from "../../store/actions/static-content";
import { useEffect, useState } from "react";
import MainSliderSkeleton from "../loading-skeleton/mainSlider";
import { paths } from "../../paths/paths";
import ReactHtmlParser from "react-html-parser";

const StaticContentDetails = (props) => {
  let routeId = props.Id;
  const [data, setData] = useState([]);
  //   const [id, setId] = useState(routeId)
  //   if(props.loadId){
  //       setId(props.loadId)
  //   }
  useEffect(() => {
    if (routeId != 0)
      // props.getStaticContentDetails(routeId);
      setData(props.allStaticContent.result.find((item) => item.id == routeId));
    return () => {
      // if(props.match)
      // setId(props.match.params.id)
      props.clearStaticContentDetails();
    };
  }, [routeId]);

  if (data) {
    let pName;
    let newPath;
    if (data.photo != null) {
      pName = data.photo;
      newPath = pName.replaceAll(" ", "%20");
    }
    return (
      <div className="container tab-content ml-1" id="nav-tabContent">
        <div
          className="tab-pane px-4 fade active show"
          id="nav-10"
          role="tabpanel"
          aria-labelledby="nav-10-tab"
        >
          <div className="col-12">
            <div className="row justify-content-center">
              <div className="col-lg-6 d-flex justify-content-center">
              {data.photo?<div
                  className="m-2 text-center"
                  style={{
                    backgroundColor: "#faa74a",
                    boxShadow: "3px 4px 16px 6px rgb(179 179 179 / 36%)",
                    border: "8px solid #faa74a",
                    borderRadius: "10px",
                    width: "fit-content",
                  }}
                >
                  <img
                    style={{ borderRadius: "10px", width: "15rem", height: "15rem" }}
                    className="img-fluid"
                    src={`${paths.StaticContent}${routeId}/${newPath}`}
                  />
                </div>:null}
              </div>
            </div>
            <div className="col-12 py-4 ">
              <div className="d-inline">
                <p dir="rtl">
                {data.content?<strong>
                    <span style={{ fontSize: "18px" }}>
                      <span>{ReactHtmlParser(data.content)}</span>
                    </span>
                  </strong>:null}
                </p>
              </div>
            </div>
          </div>
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
      //   staticContentDetails: state.staticContent.staticContentDetails,
      allStaticContent: state.staticContent.allStaticContent,
    };
  },
  (dispatch) => {
    return bindActionCreators(
      { getStaticContentDetails, clearStaticContentDetails },
      dispatch
    );
  }
)(StaticContentDetails);
