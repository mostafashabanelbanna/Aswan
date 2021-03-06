import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import bgImg from "../../assets/img/info_bg.png";
import cardBg from "../../assets/img/circle-01.png";

const InfoNews = () => {
  return (
    <div
      className="custom_bg_light pt-4"
      style={{
        backgroundImage: `url("${bgImg}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className=" container p-0 ">
        <div className="my-3 d-flex align-items-end">
          <img
            style={{ filter: "drop-shadow(2px 4px 6px black)" }}
            src="/images/icons/نظم المعلومات والتحول الرقمي-01.png"
            width="50px"
          />
          <div className="  underline">
            <h3 className="mt-4 me-2 text-white">
              نظم المعلومات والتحول الرقمي
            </h3>
          </div>
        </div>
      </div>

      <div className="container p-0 mt-4 ">
        <div className="row text-center  p-0 m-0 ">
          <Fade bottom>
            <div className="col-lg-3 p-3 col-md-6 col-10 mx-auto mb-4  hvr-rectangle-out ">
              <Link
                id="link"
                to={`document-library/1`}
                className="text-decoration-none d-flex flex-column align-items-center justify-content-center"
              >
                <div
                  className="d-flex flex-column align-items-center justify-content-center"
                  style={{
                    height: "200px",
                    width: "200px",
                    backgroundImage: `url("${cardBg}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    style={{ width: 150 }}
                    className="brightness px-4 imgfilter"
                    src={"/images/icons/statistics-0١.png"}
                  />
                </div>
                <div
                  className="mt-4"
                  style={{
                    backgroundColor: "rgb(255, 233, 144)",
                    padding: ".5rem .75rem",
                    borderRadius: "6px",
                  }}
                >
                  {" "}
                  إحصائيات{" "}
                </div>
              </Link>
            </div>
          </Fade>
          <Fade bottom delay={400}>
            <div className="col-lg-3 p-3 col-md-6 col-10 mx-auto mb-4 hvr-rectangle-out">
              <Link
                id="link"
                to={`document-library/2`}
                className="text-decoration-none d-flex flex-column align-items-center justify-content-center"
              >
                <div
                  className="d-flex flex-column align-items-center justify-content-center"
                  style={{
                    height: "200px",
                    width: "200px",
                    backgroundImage: `url("${cardBg}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    style={{ width: 150 }}
                    className="brightness px-4 imgfilter"
                    src={"/images/icons/bulletin-0١.png"}
                  />
                </div>
                <div
                  className="mt-4"
                  style={{
                    backgroundColor: "rgb(255, 233, 144)",
                    padding: ".5rem .75rem",
                    borderRadius: "6px",
                  }}
                >
                  {" "}
                  نشرات شهرية{" "}
                </div>
              </Link>
            </div>
          </Fade>
          <Fade bottom>
            <div className="col-lg-3 p-3 col-md-6 col-10 mx-auto mb-4 hvr-rectangle-out">
              <Link
                id="link"
                to={`document-library/3`}
                className="text-decoration-none d-flex flex-column align-items-center justify-content-center"
              >
                <div
                  className="d-flex flex-column align-items-center justify-content-center"
                  style={{
                    height: "200px",
                    width: "200px",
                    backgroundImage: `url("${cardBg}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    style={{ width: 150 }}
                    className="brightness px-4 imgfilter"
                    src={"/images/icons/decision-0١.png"}
                  />
                </div>
                <div
                  className="mt-4"
                  style={{
                    backgroundColor: "rgb(255, 233, 144)",
                    padding: ".5rem .75rem",
                    borderRadius: "6px",
                  }}
                >
                  {" "}
                  إحصائيات نشرات سكانية{" "}
                </div>
              </Link>
            </div>
          </Fade>
          <Fade bottom delay={400}>
            <div className="col-lg-3 p-3 col-md-6 col-10 mx-auto mb-4 hvr-rectangle-out">
              <Link
                id="link"
                to={`document-library/5`}
                className="text-decoration-none d-flex flex-column align-items-center justify-content-center"
              >
                <div
                  className="d-flex flex-column align-items-center justify-content-center"
                  style={{
                    height: "200px",
                    width: "200px",
                    backgroundImage: `url("${cardBg}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    style={{ width: 150 }}
                    className="brightness px-4 imgfilter"
                    src={"/images/icons/statistics-0١.png"}
                  />
                </div>
                <div
                  className="mt-4"
                  style={{
                    backgroundColor: "rgb(255, 233, 144)",
                    padding: ".5rem .75rem",
                    borderRadius: "6px",
                  }}
                >
                  {" "}
                  بيانات مفتوحة{" "}
                </div>
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default InfoNews;
