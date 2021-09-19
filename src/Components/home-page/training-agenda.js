import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllEvents } from "../../store/actions/agenda-actions";
import Fade from "react-reveal/Fade";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import "../../Styles/training-agenda.css";
import { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
import "moment/locale/ar";
const TrainingAgenda = (props) => {

  const [message, setMessage] = useState();
  const [show, setShow] = useState();
  const eventsArr = [
    { title: "إعلان", date: "2021-09-13" },
    { title: "مناقصة", date: "2021-09-01" },
    { title: "إعلان", date: "2021-09-01" },
    { title: "مؤتمرات", date: "2021-09-01" },
  ];

  let day;

  useEffect (() => {
    props.getAllEvents();
  }, [])

  if(props.eventsList){
    console.log(props.eventsList)
    return (
      <div className="pt-5 bg-light">
        <div className="container">
          <div className="d-flex my-2">
            <img src="./images/icons/calender_titel-0١.png" alt="" width="80px" />
            <div className="underline">
              {" "}
              <h3 className="mt-4 me-2  text-secondary"> أطروحات إستثمارية </h3>
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
              eventBorderColor={false}
              headerToolbar={{ start: "", center: "title", end: "" }}
              editable={false}
              locale="ar"
              height={"841px"}
            />
          </div>
          <div className="col-xl-6 col-12 px-3">
          {props.eventsList.result.map((item,index) => {
            let slicedContent = item.content;
            if (item.content !== null && item.content.length > 250) {
              const brief = item.content;
              slicedContent = brief.substring(0, 250).concat(" ...");
            }
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
                  <p>
                    {ReactHtmlParser(slicedContent)}
                  </p>  
                </div>
                <div className="d-flex justify-content-between mt-5">
                  <div className="p-3 bg_gradient">{`${moment(new Date(item.startDateTime)).format("LL")} إلى ${moment(new Date(item.endDateTime)).format("LL")}`}</div>
                  <div className="align-items-center d-flex">
                    <button
                      className="myButton mx-1 mb-2 mb-sm-0"
                      style={{ verticalAlign: "middle" }}
                    >
                      <span>المزيد</span>
                    </button>
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
          )})}
          </div>
        </div>
        <div className="line mt-5"></div>
      </div>
    );
  } else {
    return <div className='text-center text-muted'>لا يوجد نتائج</div>
  }
};

export default connect(
  (state) => {
    return {
      eventsList: state.homeComponents.eventsList,
    };
  },
  (dispatch) => {
    return bindActionCreators({ getAllEvents }, dispatch);
  }
)(TrainingAgenda);
