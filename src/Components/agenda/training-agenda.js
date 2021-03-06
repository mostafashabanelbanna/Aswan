import React, { useState, createRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getEventByMonth,
  clearEventByMonth,
} from "../../store/actions/agenda-actions";
import {
  getInvestorEventByMonth,
  clearInvestorEventByMonth,
} from "../../store/actions/investor-actions/agenda-actions";
import {
  getTouristEventByMonth,
  clearTouristEventByMonth,
} from "../../store/actions/tourist-action/agenda-actions";
import Fade from "react-reveal/Fade";
import ReactDOM from "react-dom";
import "../../Styles/training-agenda.css";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
import "moment/locale/ar";
import OnePieaceSkeleton from "../loading-skeleton/one-pieace";
import { Link, useHistory } from "react-router-dom";
import $ from "jquery";
import AgendaForm from "../forms/agenda-form";
import AgendaSkeleton from "../loading-skeleton/agenda-skeleton";

const TrainingAgenda = (props) => {
  let calenderRef = createRef();
  let month = new Date().getMonth() + 1;
  // $('.fc-next-button').on('click',()=>{
  //  setMonth((month)=>month+1)
  // })
  // $('.fc-prev-button').on('click',()=>{
  //   setMonth((month)=>month-1)
  //  })
  //  document.getElementsByClassName('fc-next-button')[0].onclick = ()=>{}
  //   document.getElementsByClassName('fc-prev-button')[0].onclick=()=>{}
  let child = $(".fc .fc-daygrid-event-harness-abs").parent("div");
  const [message, setMessage] = useState();
  const [showEvent, setShowEvent] = useState();
  // const [month, setMonth] = useState(10);

  const [show, setShow] = useState(false);
  const [content, setContent] = useState({});

  const onShow = () => {
    setShow(true);
  };

  const renderModal = (content) => {
    return (
      <AgendaForm
        content={content}
        showEventModal={show}
        onHideEventModal={() => setShow(false)}
      />
    );
  };

  let eventsArray = [{}];
  let history = useHistory();
  let agendaProps;
  $(child).parent("div").css("background-color", "rgb(6, 73, 106,0.7)");
  useEffect(() => {
    if (props.pagePath == "investor") {
      props.getInvestorEventByMonth(month);
    } else if (props.pagePath == "tourist") {
      props.getTouristEventByMonth(month);
    } else {
      props.getEventByMonth(month);
    }
    return () => {
      props.clearInvestorEventByMonth();
      props.clearTouristEventByMonth();
      props.clearEventByMonth();
    };
  }, [props.pagePath]);

  // $('.fc .fc-daygrid-day-frame:has(.fc .fc-daygrid-event-harness-abs)').css('background-color', 'red');

  if (props.pagePath == "investor") {
    agendaProps = props.eventsListInvestor;
  } else if (props.pagePath == "tourist") {
    agendaProps = props.eventsListTourist;
  } else {
    agendaProps = props.eventsListHome;
  }

  // if (agendaProps?.result) {
  return (
    <div className="pt-5 training-agenda-bg">
      <div className="agenda-overlay"></div>
      <div className="container">
        <div className="d-flex mb-5">
          {props.photo ? (
            <img className="brightness" src={props.photo} alt="" width="60px" />
          ) : (
            <img
              className="brightness"
              src="/images/icons/thumbnail_AGC logo02-01.png"
              alt=""
              width="70px"
            />
          )}
          <div className="underline agenda-title">
            {" "}
            <h3 className="mt-2 me-2 text_blue ">{props.title} </h3>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-xl-row container">
        <div className="col-xl-6 col-12 px-xl-3 px-0 ">
          <FullCalendar
            ref={calenderRef}
            customButtons={{
              next: {
                click: function () {
                  let calendarApi = calenderRef.current.getApi();
                  calendarApi.next();
                  let currentMonth = calendarApi.getDate().getMonth();
                  if (props.pagePath == "investor") {
                    props.clearInvestorEventByMonth();
                    props.getInvestorEventByMonth(currentMonth + 1);
                  } else if (props.pagePath == "tourist") {
                    props.clearTouristEventByMonth();
                    props.getTouristEventByMonth(currentMonth + 1);
                  } else {
                    props.clearEventByMonth();
                    props.getEventByMonth(currentMonth + 1);
                  }
                },
                icon: "fc-icon fc-icon-chevron-right",
              },
              prev: {
                // text:'MyButton',
                click: function () {
                  let calendarApi = calenderRef.current.getApi();
                  calendarApi.prev();
                  let currentMonth = calendarApi.getDate().getMonth();
                  if (props.pagePath == "investor") {
                    props.clearInvestorEventByMonth();
                    props.getInvestorEventByMonth(currentMonth + 1);
                  } else if (props.pagePath == "tourist") {
                    props.clearTouristEventByMonth();
                    props.getTouristEventByMonth(currentMonth + 1);
                  } else {
                    props.clearEventByMonth();
                    props.getEventByMonth(currentMonth + 1);
                  }
                },
                icon: "fc-icon fc-icon-chevron-left",
              },
            }}
            date
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            dayMaxEventRows={2}
            events={eventsArray}
            eventClick={(args) => {
              setMessage(args.event.title);
              setShowEvent(true);
              history.push(
                `/eventdetails/${parseInt(args.event._def.publicId)}`
              );
            }}
            eventBackgroundColor={"#fbbf3c"}
            eventTextColor={"black"}
            eventBorderColor={true}
            headerToolbar={{ start: "", right: "prev,next", center: "title" }}
            editable={false}
            locale="ar"
            height={"600px"}
          />
        </div>
        <div
          className={
            agendaProps?.result
              ? agendaProps.result.length
                ? `col-xl-6 col-12 px-3`
                : `col-xl-6 col-12 px-3 d-flex justify-content-center align-items-center `
              : `col-xl-6 col-12 px-3 mt-xl-0 mt-3`
          }
        >
          {agendaProps?.result ? (
            agendaProps.result.length ? (
              agendaProps.result.map((item, index) => {
                let slicedContent = item.content;
                if (item.content !== null && item.content.length > 250) {
                  const brief = item.content;
                  slicedContent = brief.substring(0, 250).concat(" ...");
                }
                eventsArray.push({
                  id: item.id,
                  title: item.title,
                  start: item.startDateTime,
                  end: item.endDateTime,
                });
                return (
                  <Fade dalay={200} key={item.id}>
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
                      ).format("LL")} ?????? ${moment(
                        new Date(item.endDateTime)
                      ).format("LL")}`}</div>
                      {/*  */}
                      {item.eventTypeId == 4 ? (
                        <div className="align-items-center d-flex">
                          <button
                            onClick={() => {
                              setContent(item);
                              onShow();
                            }}
                            className=" mx-1 mb-2 mb-sm-0 btn_blue"
                            style={{ verticalAlign: "middle" }}
                          >
                            <span>????????????</span>
                          </button>
                        </div>
                      ) : null}
                      <div className="align-items-center d-flex">
                        <Link id="link" to={`/eventdetails/${item.id}`}>
                          <button
                            className="btn_orange mx-1 mb-2 mb-sm-0"
                            style={{ verticalAlign: "middle" }}
                          >
                            <span>????????????</span>
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
                  </Fade>
                );
              })
            ) : (
              <div  className="no-events" > ???? ???????? ?????????? ?????? ?????????? </div>
            )
          ) : (
            <AgendaSkeleton />
          )}
        </div>
      </div>
      <div className="container d-flex justify-content-end">
        <Link id="link" to="/eventlist" className="show-all" >
          <button
            className="btn_blue mx-1 mb-2 mb-sm-0"
            style={{ verticalAlign: "middle" }}
          >
            <span >?????? ????????</span>
          </button>
        </Link>
      </div>
      {renderModal(content)}
      <div className="line mt-5"></div>
    </div>
  );
  // } else {
  //   return <OnePieaceSkeleton />;
  // }
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
      {
        getEventByMonth,
        getInvestorEventByMonth,
        getTouristEventByMonth,
        clearEventByMonth,
        clearInvestorEventByMonth,
        clearTouristEventByMonth,
      },
      dispatch
    );
  }
)(TrainingAgenda);
