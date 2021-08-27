import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Fade from "react-reveal/Fade";

import "../Styles/training-agenda.css";

const TrainingAgenda = () => {
  const [message, setMessage] = useState();
  const [show, setShow] = useState();
  const eventsArr = [
    { title: "bbb", date: "2021-08-25" },
    { title: "ddd", date: "2021-08-24" },
    { title: "bbfffb", date: "2021-08-24" },
    { title: "rrr", date: "2021-08-24" },
    { title: "tr", date: "2021-08-24" },
  ];

  return (
    <div>
      <div className="d-flex flex-column flex-xl-row container">
        <div className="col-xl-6 col-12 p-3">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
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
            height={"880px"}
          />
        </div>
        <div className="col-xl-6 col-12 px-3">
          <div>
            <div>
              <h2>مؤتمرات</h2>
            </div>
            <div>
              فاعليات اليوم الثانى من المؤتمر السنوى العشرون للمركز القومي .
              للبحوث الاجتماعية والجنائية تحت عنوان "السكان وتحديات التنمية
            </div>
            <div className="d-flex justify-content-between mt-5">
              <div className="p-3 bg_gradient">الأحد 2021 / 10 يوليو</div>
              <div className="align-items-center d-flex">المزيد</div>
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

          <div>
            <div>
              <div className="d-flex">
                <div>Hi</div>
                <div>
                  <h2>مؤتمرات</h2>
                </div>
              </div>
              <div>
                فاعليات اليوم الثانى من المؤتمر السنوى العشرون للمركز القومي .
                للبحوث الاجتماعية والجنائية تحت عنوان "السكان وتحديات التنمية
              </div>
              <div className="d-flex justify-content-between">
                <div className="p-3 bg-info">الأحد 2021 / 10 يوليو</div>
                <div className="align-items-center d-flex">المزيد</div>
              </div>
              <div
                className="my-2"
                style={{
                  height: "1px",
                  width: "60%",
                  backgroundColor: "black",
                  margin: "auto",
                }}
              ></div>
            </div>
            <div className="col-md-6 col-12 px-3">
              <Fade dalay={200}>
                <div>
                  <div className="d-flex">
                    <div>Hi</div>
                    <div>
                      <h2>مؤتمرات</h2>
                    </div>
                  </div>
                  <div>
                    فاعليات اليوم الثانى من المؤتمر السنوى العشرون للمركز القومي
                    . للبحوث الاجتماعية والجنائية تحت عنوان "السكان وتحديات
                    التنمية
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="p-3 bg-info">الأحد 2021 / 10 يوليو</div>
                    <div className="align-items-center d-flex">المزيد</div>
                  </div>
                  <div
                    className="my-2"
                    style={{
                      height: "1px",
                      width: "60%",
                      backgroundColor: "black",
                      margin: "auto",
                    }}
                  ></div>
                </div>
              </Fade>
              <Fade delay={400}>
                <div>
                  <div className="d-flex">
                    <div>Hi</div>
                    <div>
                      <h2>مؤتمرات</h2>
                    </div>
                  </div>
                  <div>
                    فاعليات اليوم الثانى من المؤتمر السنوى العشرون للمركز القومي
                    . للبحوث الاجتماعية والجنائية تحت عنوان "السكان وتحديات
                    التنمية
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="p-3 bg-info">الأحد 2021 / 10 يوليو</div>
                    <div className="align-items-center d-flex">المزيد</div>
                  </div>
                  <div
                    className="my-2"
                    style={{
                      height: "1px",
                      width: "60%",
                      backgroundColor: "black",
                      margin: "auto",
                    }}
                  ></div>
                </div>
              </Fade>
              <Fade delay={400}>
                <div>
                  <div className="d-flex">
                    <div>Hi</div>
                    <div>
                      <h2>مؤتمرات</h2>
                    </div>
                  </div>
                  <div>
                    فاعليات اليوم الثانى من المؤتمر السنوى العشرون للمركز القومي
                    . للبحوث الاجتماعية والجنائية تحت عنوان "السكان وتحديات
                    التنمية
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="p-3 bg-info">الأحد 2021 / 10 يوليو</div>
                    <div className="align-items-center d-flex">المزيد</div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      {/* <ActivityModal dialogClassName={message} show={show} onHide={() => setShow(false)} /> */}
    </div>
  );
};

export default TrainingAgenda;
