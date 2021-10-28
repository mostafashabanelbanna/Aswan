import React, { useEffect, useState } from "react";
import logo from "../../../assets/img/haya_karima_logo.jpg";
import { Link } from "react-router-dom";
import "../../../Styles/good-life-style.css";
import axios from "../../../Axios/Axios_Config";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const HayahKarima = () => {
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const [percentage3, setPercentage3] = useState(0);
  const [percentage4, setPercentage4] = useState(0);
  const [percentage5, setPercentage5] = useState(0);

  const getPercentages = async () => {
    //fetch data
    const response1 = await axios.get(
      "/GoodLifeInitiativeAPI/GetlastChange/" + 1
    );
    if (response1 && response1.data) {
      setPercentage1(response1.data.result);
    }

    const response2 = await axios.get(
      "/GoodLifeInitiativeAPI/GetlastChange/" + 2
    );
    if (response2 && response2.data) {
      setPercentage2(response2.data.result);
    }

    const response3 = await axios.get(
      "/GoodLifeInitiativeAPI/GetlastChange/" + 3
    );
    if (response3 && response3.data) {
      setPercentage3(response3.data.result);
    }

    const response4 = await axios.get(
      "/GoodLifeInitiativeAPI/GetlastChange/" + 4
    );
    if (response4 && response4.data) {
      setPercentage4(response4.data.result);
    }

    const response5 = await axios.get(
      "/GoodLifeInitiativeAPI/GetlastChange/" + 5
    );
    if (response5 && response5.data) {
      setPercentage5(response5.data.result);
    }
  };

  useEffect(() => {
    getPercentages();
  }, []);

  return (
    <div className="pt-4">
      <div className=" container p-0 mb-4">
        <div className="mt-2 d-flex ">
          <div className="my-3 d-flex align-items-center">
            <img
              className="brightness"
              src="/images/icons_black/حياه كريمة-01.png"
              height="50px"
            />
            <div className="underline">
              {" "}
              <h3 className="mt-4 me-2 text_blue"> محاور مبادرة حياه كريمة </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid haya_carima_bg p-0 position-relative">
        <div className="haya_carima_bg_logo">
          <img src={logo} style={{ width: "140px" }} />
        </div>
        <div className="container-fluid">
          <div className=" row justify-content-around">
            <div
              className="col-xl-6 col-md-9 col-12 py-4"
              style={{ zIndex: 1, backgroundColor: "rgb(128,128,128,0.2)" }}
            >
              <div className="row justify-content-center py-3 text-center ">
                <Link
                  id="link"
                  to={`/HayaKarimaDetails/${1}`}
                  className="mb-4 col-md-4 col-sm-6 "
                >
                  <div className="p-2 d-flex flex-column h-100 hvr-bob hvr-sweep-to-bottom">
                    <img
                      style={{ height: "100px" }}
                      className="brightness p-2  mx-auto"
                      src={"/images/haya_karima/1.png"}
                    />

                    <div className="mx-auto" style={{ width: 60, height: 60 }}>
                      <CircularProgressbar
                        value={percentage1}
                        text={
                          <tspan y={63} x={80}>
                            {percentage1}%
                          </tspan>
                        }
                        styles={buildStyles({
                          // Rotation of path and trail, in number of turns (0-1)
                          rotation: 0,

                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "butt",

                          // Text size
                          textSize: "36px",

                          // How long animation takes to go from one percentage to another, in seconds
                          pathTransitionDuration: 0.5,

                          // Can specify path transition in more detail, or remove it entirely
                          // pathTransition: 'none',
                          // Colors
                          pathColor: `rgb(6, 73, 106)`,
                          textColor: "rgb(6, 73, 106)",
                          trailColor: "#d6d6d6",
                          backgroundColor: "white",
                        })}
                      />
                    </div>

                    <div className="mt-1 mb-1 text-dark">
                      محور البنية الأساسية <br /> و المرافق
                    </div>
                  </div>
                </Link>

                <Link
                  id="link"
                  to={`/HayaKarimaDetails/${2}`}
                  className="mb-4 col-md-4 col-sm-6 "
                >
                  <div className="p-2 d-flex flex-column h-100 hvr-bob hvr-sweep-to-bottom">
                    <img
                      style={{ height: "100px" }}
                      className="brightness p-2  mx-auto"
                      src={"/images/haya_karima/2.png"}
                    />

                    <div className="mx-auto" style={{ width: 60, height: 60 }}>
                      <CircularProgressbar
                        value={percentage2}
                        text={
                          <tspan y={63} x={83}>
                            {percentage2}%
                          </tspan>
                        }
                        styles={buildStyles({
                          // Rotation of path and trail, in number of turns (0-1)
                          rotation: 0,

                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "butt",

                          // Text size
                          textSize: "36px",

                          // How long animation takes to go from one percentage to another, in seconds
                          pathTransitionDuration: 0.5,

                          // Can specify path transition in more detail, or remove it entirely
                          // pathTransition: 'none',
                          // Colors
                          pathColor: `rgb(6, 73, 106)`,
                          textColor: "rgb(6, 73, 106)",
                          trailColor: "#d6d6d6",
                          backgroundColor: "white",
                        })}
                      />
                    </div>

                    <div className="mt-1 mb-1 text-dark">
                      {" "}
                      محور خدمات المواطن
                    </div>
                  </div>
                </Link>

                <Link
                  id="link"
                  to={`/HayaKarimaDetails/${3}`}
                  className="mb-4 col-md-4 col-sm-6 "
                >
                  <div className="p-2 d-flex flex-column h-100 hvr-bob hvr-sweep-to-bottom">
                    <img
                      style={{ height: "100px" }}
                      className="brightness p-2  mx-auto"
                      src={"/images/haya_karima/3.png"}
                    />

                    <div className="mx-auto" style={{ width: 60, height: 60 }}>
                      <CircularProgressbar
                        value={percentage3}
                        text={
                          <tspan y={63} x={80}>
                            {percentage3}%
                          </tspan>
                        }
                        styles={buildStyles({
                          // Rotation of path and trail, in number of turns (0-1)
                          rotation: 0,

                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "butt",

                          // Text size
                          textSize: "36px",

                          // How long animation takes to go from one percentage to another, in seconds
                          pathTransitionDuration: 0.5,

                          // Can specify path transition in more detail, or remove it entirely
                          // pathTransition: 'none',
                          // Colors
                          pathColor: `rgb(6, 73, 106)`,
                          textColor: "rgb(6, 73, 106)",
                          trailColor: "#d6d6d6",
                          backgroundColor: "white",
                        })}
                      />
                    </div>

                    <div className="mt-1 mb-1  text-dark">
                      {" "}
                      المحور الثقافى و الإجتماعي{" "}
                    </div>
                  </div>
                </Link>
                <Link
                  id="link"
                  to={`/HayaKarimaDetails/${4}`}
                  className="mb-4 col-md-4 col-sm-6 "
                >
                  <div className="p-2 d-flex flex-column h-100 hvr-bob hvr-sweep-to-bottom">
                    <img
                      style={{ height: "100px" }}
                      className="brightness p-2  mx-auto"
                      src={"/images/haya_karima/4.png"}
                    />

                    <div className="mx-auto" style={{ width: 60, height: 60 }}>
                      <CircularProgressbar
                        value={percentage4}
                        text={
                          <tspan y={63} x={80}>
                            {percentage4}%
                          </tspan>
                        }
                        styles={buildStyles({
                          // Rotation of path and trail, in number of turns (0-1)
                          rotation: 0,

                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "butt",

                          // Text size
                          textSize: "36px",

                          // How long animation takes to go from one percentage to another, in seconds
                          pathTransitionDuration: 0.5,

                          // Can specify path transition in more detail, or remove it entirely
                          // pathTransition: 'none',
                          // Colors
                          pathColor: `rgb(6, 73, 106)`,
                          textColor: "rgb(6, 73, 106)",
                          trailColor: "#d6d6d6",
                          backgroundColor: "white",
                        })}
                      />
                    </div>

                    <div className="mt-1 mb-1  text-dark">
                      {" "}
                      المحور الإقتصادي
                    </div>
                  </div>
                </Link>

                <Link
                  id="link"
                  to={`/HayaKarimaDetails/${5}`}
                  className="mb-4 col-md-4 col-sm-6 col-10"
                >
                  <div className="p-2 d-flex flex-column h-100 hvr-bob hvr-sweep-to-bottom">
                    <img
                      style={{ height: "100px" }}
                      className="brightness p-2 mx-auto"
                      src={"/images/haya_karima/5.png"}
                    />

                    <div className="mx-auto" style={{ width: 60, height: 60 }}>
                      <CircularProgressbar
                        value={percentage5}
                        text={
                          <tspan y={63} x={80}>
                            {percentage5}%
                          </tspan>
                        }
                        styles={buildStyles({
                          // Rotation of path and trail, in number of turns (0-1)
                          rotation: 0,

                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "butt",

                          // Text size
                          textSize: "36px",

                          // How long animation takes to go from one percentage to another, in seconds
                          pathTransitionDuration: 0.5,

                          // Can specify path transition in more detail, or remove it entirely
                          // pathTransition: 'none',
                          // Colors
                          pathColor: `rgb(6, 73, 106)`,
                          textColor: "rgb(6, 73, 106)",
                          trailColor: "#d6d6d6",
                          backgroundColor: "white",
                        })}
                      />
                    </div>

                    <div className="mt-1 mb-1  text-dark"> سكن كريم</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-6 "></div>
          </div>
        </div>
      </div>
      <div className="line mx-auto"></div>
    </div>
  );
};
export default HayahKarima;
