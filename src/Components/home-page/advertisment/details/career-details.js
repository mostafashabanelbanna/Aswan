import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactHtmlParser from "react-html-parser";
import {
  getCareerDetails,
  clearCareerDetails
} from "../../../../store/actions/advertisment-action";
import { paths } from "../../../../paths/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faLink } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import "moment/locale/ar";
import Details from "../../../loading-skeleton/Details";

const CareerDetails = (props) => {
  const id = props.match.params.id;
  useEffect(() => {
    props.getCareerDetails(id);
    return () => {
      props.clearCareerDetails();
    };
  }, []);


  if (props?.careerDetails?.result) {
    return (
      <div>
        <div className="underline container mt-5">
          <h3>{props.careerDetails.result.title}</h3>
        </div>

        <hr className="container mt-4 mb-3"></hr>

        <div className=" container p-0">
          <div className="d-flex flex-column flex-md-row justify-content-center ">
            <div className="p-3 col-12">
              {ReactHtmlParser(props.careerDetails.result.description)}
            </div>
          </div>
        </div>
        <div className="container">
            <div className="col-12 d-flex flex-column">
              <div>متطلبات الوظيفة: {ReactHtmlParser(props.careerDetails.result.requirement)}</div>
              <div>الخبرة المطلوبة: {ReactHtmlParser(props.careerDetails.result.seniorityLevelName)}</div>
              <div>نوع الوظيفة: {ReactHtmlParser(props.careerDetails.result.employmentTypeName)}</div>
            </div>
        </div>
      </div>
    );
  }
  return <Details />;
};
const mapStateToProps = (state) => {
  return {
    careerDetails: state.advertismentComponents.careerDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getCareerDetails, clearCareerDetails },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CareerDetails);
