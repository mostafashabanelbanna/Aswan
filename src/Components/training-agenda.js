import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Fade from "react-reveal/Fade";

import "../Styles/training-agenda.css";

const TrainingAgenda = () => {
  const [message, setMessage] = useState();
  const [show, setShow] = useState();
  const eventsArr = [
    { title: "إعلان", date: "2021-08-26" },
    { title: "مناقصة", date: "2021-08-26" },
    { title: "إعلان", date: "2021-08-26" },
    { title: "مؤتمرات", date: "2021-08-25" },
  ];

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
            height={"880px"}
          />
        </div>
        <div className="col-xl-6 col-12 px-3">
          <Fade dalay={200}>
            <div>
              <div>
                <h2>إعلان</h2>
              </div>
              <div>
                احجز وحدتك في حي اللوتس -- التجمع الثاني - مدينة اسوان الوحدات
                تنطبق عليها شروط مبادرة 3% للبنك المركزي للتمويل العقاري تم حجز
                55% من الوحدات المعروضة
              </div>
              <div className="d-flex justify-content-between mt-5">
                <div className="p-3 bg_gradient">الخميس 2021 / 26 يوليو</div>
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
          <Fade dalay={200}>
            <div>
              <div>
                <h2>مناقصة</h2>
              </div>
              <div>
                المكان: مدينة دراو- وسط المدينة الاعداد لطرح محلات مول تجاري
                للايجار بالمزاد العلني
              </div>
              <div className="d-flex justify-content-between mt-5">
                <div className="p-3 bg_gradient">الخميس 2021 / 26 يوليو</div>
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
          <Fade dalay={200}>
            <div>
              <div>
                <h2>إعلان</h2>
              </div>
              <div>
                المكان: مدينة ادفو - كورنيش النيل جاري الاعداد لطرح تطوير حديقة
                الاندلس و حورس و الطرح حق انتفاع 20 عام لاقامة كافتريات و قاعة
                مناسبات و مناطق العاب اطفال و مسطحات خضراء و التي تمثل اضافة
                حضارية لكورنيش المدينة الطرح بالتصميمات المعتمدة
              </div>
              <div className="d-flex justify-content-between mt-5">
                <div className="p-3 bg_gradient">الخميس 2021 / 26 يوليو</div>
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
          <Fade dalay={200}>
            <div>
              <div className="d-flex">
                <div>
                  <h2>مؤتمرات</h2>
                </div>
              </div>
              <div>
                فاعليات اليوم الثانى من المؤتمر السنوى العشرون للمركز القومي .
                للبحوث الاجتماعية والجنائية تحت عنوان "السكان وتحديات التنمية
              </div>
              <div className="d-flex justify-content-between my-5">
                <div className="p-3 bg_gradient">الأربعاء 2021 / 25 يوليو</div>
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
        </div>
      </div>
      <div className="line mt-5"></div>
    </div>
  );
};

export default TrainingAgenda;
