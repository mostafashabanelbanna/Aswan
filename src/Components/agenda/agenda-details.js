import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactHtmlParser from "react-html-parser";
import {
  getEventDetails,
  clearEventDetails,
} from "../../store/actions/events-actions.js";
import { paths } from "../../paths/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import DetailsSkeleton from "../loading-skeleton/Details";
import moment from "moment";
import "moment/locale/ar";

const AgendaDetails = (props) => {
  const id = props.match.params.id;
  useEffect(() => {
    props.getEventDetails(id);

    return () => {
      props.clearEventDetails();
    };
  }, []);

  if (props?.eventDetails?.result) {
    let sectorName = props.eventDetails.result.sectorName;
    let sectorId = props.eventDetails.result.sectorId;
    let eventTypeId = props.eventDetails.result.eventTypeId;
    console.log(`props.eventDetails`, props.eventDetails);
    return (
      <div>
        <div className="underline container mt-5">
          <h3>{props.eventDetails.result.title}</h3>
        </div>
        <div className="container d-flex justify-content-between mt-4">
          <div className="col-7 align-items-end fa-1x">
            {props.eventDetails.result.location ? (
              <div className="d-flex my-1">
                <div className="mx-3">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    size={26}
                  ></FontAwesomeIcon>
                </div>
                <div> {props.eventDetails.result.location}</div>
              </div>
            ) : null}
            <div className="d-flex my-1">
              <div className="mx-3">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  size={26}
                ></FontAwesomeIcon>
              </div>
              <div>{`${moment(
                new Date(props.eventDetails.result.startDateTime)
              ).format("LL")} إلى ${moment(
                new Date(props.eventDetails.result.endDateTime)
              ).format("LL")}`}</div>
            </div>
          </div>
          <Link
            id="link"
            to={`/filterevents/${
              sectorId + "&&" + sectorName + "&&" + "sector"
            }`}
            className=" d-flex justify-content-center align-items-center text-center fa-1x detailsSectorName"
          >
            {ReactHtmlParser(props.eventDetails.result.sectorName)}
          </Link>
        </div>

        <hr className="container my-2"></hr>

        <div className="container mb-3">
          <div className="row">
            <div className="col-12 text-justify">
              {props.eventDetails.result.photo ? (
                <p className="text-justify">
                  <img
                    className="img-fluid detailsPhoto col-12 col-lg-6 float-lg-start me-lg-3 me-0 mt-3"
                    src={
                      paths.EventsPhotos +
                      props.eventDetails.result.id +
                      "/" +
                      props.eventDetails.result.photo
                    }
                    alt={props.eventDetails.result.title}
                  />
                </p>
              ) : null}
              <div
                className="text-justify ps-lg-3 ps-0"
                style={{
                  lineHeight: "30px",
                  fontSize: "1rem",
                  textAlign: "justify",
                }}
              >
                {ReactHtmlParser(props.eventDetails.result.content)}
              </div>
            </div>
          </div>
        </div>
        {props.eventDetails.result.agenda ? (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <iframe
                  frameBorder="0"
                  src={`${paths.EventAttachment}${props.eventDetails.result.id}/${props.eventDetails.result.agenda}`}
                  width="100%"
                  height="800px"
                ></iframe>
              </div>
            </div>
          </div>
        ) : null}
        <Link
          id="link"
          to={"/eventlist"}
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
    eventDetails: state.eventsComponents.eventDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getEventDetails, clearEventDetails }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AgendaDetails);
