import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const InfoNews = () => {
  return (
    <div className="bg-light pt-4">
      <div className=" container p-0 ">
        <div className="my-3 d-flex">
          <img
            src="/images/icons/information_titel-0١.png"
            width='80px'
          />

          <div className="  underline">
            <h3 className="mt-4 me-2 text-secondary">
              {" "}
              معلومات ودراسات ونشرات{" "}
            </h3>
          </div>
        </div>
      </div>

      <div className="container p-0 mt-4 ">
        <div className="row text-center  p-0 m-0 ">
          <Fade bottom>
            <div className="col-lg-3 p-3 col-5 mb-4  hvr-rectangle-out ">
              <Link to="document-library" className="text-decoration-none text-muted">
                <img
                  style={{ width: 150 }}
                  className="  px-4 imgfilter"
                  src={"/images/icons/statistics-0١.png"}
                />
                <div className="mt-4"> احصائيات </div>
              </Link>
            </div>
          </Fade>
          <Fade bottom delay={400}>
            <div className="col-lg-3 p-3 col-5 mb-4 hvr-rectangle-out">
              <img
                style={{ width: 150 }}
                className=" px-4 imgfilter"
                src={"/images/icons/bulletin-0١.png"}
              />
              <div className="mt-4"> نشرات شهرية </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="col-lg-3 p-3 col-5 mb-4 hvr-rectangle-out">
              <img
                style={{ width: 150 }}
                className=" px-4 imgfilter"
                src={"/images/icons/decision-0١.png"}
              />
              <div className="mt-4"> احصائيات نشرات سكانية </div>
            </div>
          </Fade>
          <Fade bottom delay={400}>
            <div className="col-lg-3 p-3 col-5 mb-4 hvr-rectangle-out">
              <img
                style={{ width: 150 }}
                className="w px-4 imgfilter"
                src={"/images/icons/statistics-0١.png"}
              />
              <div className="mt-4"> دعم القرار </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default InfoNews;
