import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactHtmlParser from "react-html-parser";
import {
  getAppointmentDetails, clearAppointmentDetails
} from "../../store/actions/appointment-action";
import { paths } from "../../paths/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import DetailsSkeleton from "../loading-skeleton/Details";
import moment from "moment";
import "moment/locale/ar";

const AppointmentDetails = (props) => {
  const id = props.match.params.id;
  useEffect(() => {
    props.getAppointmentDetails(id);

    return () => {
      props.clearAppointmentDetails();
    };
  }, []);

  if (props.appointmentDetails) {
    let appointmentTypeName = props.appointmentDetails.result.appointmentTypeName;
    let appointmentTypeId = props.appointmentDetails.result.appointmentTypeId;
    return (
      <div>
        <div className="underline container mt-5">
          <h3>{props.appointmentDetails.result.title}</h3>
        </div>
        <div className="container d-flex justify-content-between mt-4">
          <div className="col-7 align-items-end fa-1x">
            <div className="d-flex my-1">
              <div className="mx-3">
                <FontAwesomeIcon icon={faUserTie} size={26}></FontAwesomeIcon>
              </div>
              <div> {props.appointmentDetails.result.governorName}</div>
            </div>
            <div className="d-flex my-1">
              <div className="mx-3">
                {" "}
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  size={26}
                ></FontAwesomeIcon>{" "}
              </div>
              <div>{`${moment(new Date(props.appointmentDetails.result.appointmentDate)).format("LL")}`}</div>
            </div>
          </div>
          <Link id='link'
            to={`/filterappointments/${appointmentTypeId + "&&" + appointmentTypeName + "&&" + "appointment"}`}
            className=" d-flex justify-content-center align-items-center text-center fa-1x detailsSectorName"
          >
            {ReactHtmlParser(appointmentTypeName)}
          </Link>
        </div>

        <hr className="container my-2"></hr>

        <div className=" container p-0">
          <div className="d-flex flex-column flex-md-row justify-content-center ">
            <div className="col-md-8 p-3 col-12 lh-lg  order-md-0 order-1">
              {ReactHtmlParser(props.appointmentDetails.result.content)}
            </div>
            <div className="col-md-4 p-3 col-12">
              <img
                className="w-100 holder"
                src={
                  paths.Appointment +
                  props.appointmentDetails.result.id +
                  "/" +
                  props.appointmentDetails.result.photo
                }
              />
            </div>
          </div>
        </div>
        <Link id='link'
          to={"/appointment"}
          className="justify-content-center text-decoration-none align-items-center d-flex my-5"
        >
          <button
            className="myButton"
          >
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
    appointmentDetails: state.GovernerComponents.appointmentDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getAppointmentDetails, clearAppointmentDetails }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentDetails);
