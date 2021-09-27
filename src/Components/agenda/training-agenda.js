import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllEventsHome } from "../../store/actions/agenda-actions";
import { getAllEventsInvestor } from "../../store/actions/investor-actions/agenda-actions";
import { getAllEventsTourist } from "../../store/actions/tourist-action/agenda-actions";
import Fade from "react-reveal/Fade";
import ReactDOM from "react-dom";
import $ from "jquery";
import "../../Styles/training-agenda.css";
import { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
import "moment/locale/ar";
import OnePieaceSkeleton from "../loading-skeleton/one-pieace";
import { Link } from "react-router-dom";
const TrainingAgenda = (props) => {
  const [message, setMessage] = useState();
  const [show, setShow] = useState();
  const eventsArr = [{}];

  let agendaProps;

  useEffect(() => {
    if (props.pagePath == "investor") {
      props.getAllEventsInvestor();
    } else if (props.pagePath == "tourist") {
      props.getAllEventsTourist();
    } else {
      props.getAllEventsHome();
    }
  }, []);

  if (props.pagePath == "investor") {
    agendaProps = props.eventsListInvestor;
  } else if (props.pagePath == "tourist") {
    agendaProps = props.eventsListTourist;
  } else {
    agendaProps = props.eventsListHome;
  }

  if (agendaProps) {
    return (
      <div className="pt-5 bg-light">
        <div className="container">
          <div className="d-flex my-2">
            {props.photo?<img
              src={props.photo}
              alt=""
              width="60px"
            />:
            <img
              src="/images/icons/calender_titel-0١.png"
              alt=""
              width="60px"
            />}
            <div className="underline">
              {" "}
              <h3 className="mt-4 me-2  text-dark">{props.title} </h3>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-xl-row container">
          <div className="col-xl-6 col-12 p-3">
            <FullCalendar
              date
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              dayMaxEventRows={2}
              events={eventsArr}
              eventClick={(args) => {
                setMessage(args.event.title);
                setShow(true);
                console.log(args.event._instance.range.start);
              }}
              eventBackgroundColor={"#fbbf3c"}
              eventTextColor={"black"}
              eventBorderColor={true}
              headerToolbar={{start: "", center: "title"}}
              editable={false}
              locale="ar"
              height={"600px"}
            />
          </div>
          <div className="col-xl-6 col-12 px-3">
            {agendaProps.result.map((item, index) => {
              let slicedContent = item.content;
              if (item.content !== null && item.content.length > 250) {
                const brief = item.content;
                slicedContent = brief.substring(0, 250).concat(" ...");
              }
              eventsArr.push({
                title: item.title,
                start: item.startDateTime,
                end: item.endDateTime,
              });
              return (
                <Fade dalay={200}>
                  <div>
                    <div>
                      <h3>{item.eventTypeName}</h3>
                    </div>
                    <div>
                      <h5>{item.title}</h5>
                    </div>
                    <div>
                      <p>{ReactHtmlParser(slicedContent)}</p>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mt-5">
                      <div className="p-3 bg_gradient">{`${moment(
                        new Date(item.startDateTime)
                      ).format("LL")} إلى ${moment(
                        new Date(item.endDateTime)
                      ).format("LL")}`}</div>
                      <div className="align-items-center d-flex">
                        <Link id='link'
                          to={`/eventdetails/${item.id}`}
                        >
                          <button
                            className="myButton mx-1 mb-2 mb-sm-0"
                            style={{ verticalAlign: "middle" }}
                          >
                            <span>المزيد</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="my-3"
                      style={{
                        height: "1px",
                        width: "60%",
                        backgroundColor: "gray",
                        margin: "auto",
                      }}
                    ></div>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
        <div className='container d-flex justify-content-end'>
          <Link id='link' to="/eventlist">
            <button
              className="myButton mx-1 mb-2 mb-sm-0"
              style={{ verticalAlign: "middle" }}
            >
              <span>عرض الكل</span>
            </button>
          </Link>
        </div>
        <div className="line mt-5"></div>
      </div>
    );
  } else {
    return <OnePieaceSkeleton />;
  }
};

export default connect(
  (state) => {
    return {
      eventsListHome: state.homeComponents.eventsList,
      eventsListInvestor: state.investorHome.eventsList,
      eventsListTourist: state.touristHome.eventsList,
    };
  },
  (dispatch) => {
    return bindActionCreators(
      { getAllEventsHome, getAllEventsInvestor, getAllEventsTourist },
      dispatch
    );
  }
)(TrainingAgenda);
