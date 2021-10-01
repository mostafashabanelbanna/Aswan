import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllEventsHome, clearAllEventsHome } from "../../store/actions/agenda-actions";
import { getAllEventsInvestor, clearAllEventsInvestor } from "../../store/actions/investor-actions/agenda-actions";
import { getAllEventsTourist, clearAllEventsTourist } from "../../store/actions/tourist-action/agenda-actions";
import Fade from "react-reveal/Fade";
import ReactDOM from "react-dom";
import "../../Styles/training-agenda.css";
import { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
import "moment/locale/ar";
import OnePieaceSkeleton from "../loading-skeleton/one-pieace";
import { Link, useHistory } from "react-router-dom";

const TrainingAgenda = (props) => {
  const [message, setMessage] = useState();
  const [show, setShow] = useState();
  let eventsArray = [{}]
  let history = useHistory();
  let agendaProps;

  useEffect(() => {
    if (props.pagePath == "investor") {
      props.getAllEventsInvestor();
    } else if (props.pagePath == "tourist") {
      props.getAllEventsTourist();
    } else {
      props.getAllEventsHome();
    }
    return () => {
      props.clearAllEventsInvestor();
      props.clearAllEventsTourist();
      props.clearAllEventsHome();
    }
  }, [props.pagePath]);

  if (props.pagePath == "investor") {
    agendaProps = props.eventsListInvestor;
  } else if (props.pagePath == "tourist") {
    agendaProps = props.eventsListTourist;
  } else {
    agendaProps = props.eventsListHome;
  }

  if (agendaProps?.result) {
    return (
      <div className="pt-5 custom_bg_light">
        <div className="container">
          <div className="d-flex my-2">
            {props.photo ? (
              <img 
              className='brightness' 
              src={props.photo} alt="" width="60px" />
            ) : (
              <img
              className='brightness'
                src="/images/icons/calender_titel-0١.png"
                alt=""
                width="70px"
              />
            )}
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
              events={eventsArray}
              eventClick={(args) => {
                setMessage(args.event.title);
                setShow(true);
                history.push(`/eventdetails/${parseInt(args.event._def.publicId)}`);
              }}
              eventBackgroundColor={"#fbbf3c"}
              eventTextColor={"black"}
              eventBorderColor={true}
              headerToolbar={{ start: "", center: "title" }}
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
              eventsArray.push({
                id:item.id,
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
                      <div className="p-3 bg_gradient text-white">{`${moment(
                        new Date(item.startDateTime)
                      ).format("LL")} إلى ${moment(
                        new Date(item.endDateTime)
                      ).format("LL")}`}</div>
                      <div className="align-items-center d-flex">
                        <Link id="link" to={`/eventdetails/${item.id}`}>
                          <button
                            className="btn_orange mx-1 mb-2 mb-sm-0"
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
        <div className="container d-flex justify-content-end">
          <Link id="link" to="/eventlist">
            <button
              className="btn_blue mx-1 mb-2 mb-sm-0"
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
      { getAllEventsHome, getAllEventsInvestor, getAllEventsTourist,
      clearAllEventsHome, clearAllEventsInvestor, clearAllEventsTourist },
      dispatch
    );
  }
)(TrainingAgenda);
