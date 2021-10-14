import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactHtmlParser from "react-html-parser";
import {
  getSocietyDetails,
  clearSocietyDetails,
} from "../../../../../store/actions/local-leaders-actions";
import Details from "../../../../loading-skeleton/Details";
import { paths } from "../../../../../paths/paths";

const SocietyDetails = (props) => {
  const id = props.match.params.id;
  useEffect(() => {
    props.getSocietyDetails(id);
    return () => {
      props.clearSocietyDetails();
    };
  }, []);

  if (props?.SocietyDetails?.result) {
    let details = props.SocietyDetails.result;
    return (
      <div>
        <div className="underline container mt-5">
          <h3>{details.name}</h3>
        </div>
        <hr className="container mt-4 mb-3"></hr>

        <div className="container">
          <div className="row my-4">
            <div
              className="col-lg-9 px-0 info-col-1"
              style={{ visibility: "visible", animationName: "slideInUp" }}
            >
              {details.workField ? (
                <div className="info-cards">
                  <div
                    style={{
                      background:
                        "radial-gradient( circle, #faa74a 0%, #faa74a 25%, #e98718 69%, orange 100%, orange 100%, #faa74a 100% )",
                      color: "#fff",
                    }}
                  >
                    <h5 className="p-2 text-center">مجال العمل</h5>
                  </div>
                  <div className="m-3 px-3">
                    <h6
                      className=" mb-3 text-justify"
                      style={{ lineHeight: 2 }}
                    >
                      <p>
                        <span>{ReactHtmlParser(details.workField)}</span>
                      </p>
                    </h6>
                  </div>
                </div>
              ) : null}
              {details.activity ? (
                <div className="info-cards my-4">
                  <div
                    style={{
                      background:
                        "radial-gradient( circle, #faa74a 0%, #faa74a 25%, #e98718 69%, orange 100%, orange 100%, #faa74a 100% )",
                      color: "#fff",
                    }}
                  >
                    <h5 className="p-2 text-center">النشاط</h5>
                  </div>
                  <div className="m-3 px-3">
                    <h6
                      className=" mb-3 text-justify"
                      style={{ lineHeight: 2 }}
                    >
                      <p>
                        <span>{ReactHtmlParser(details.activity)}</span>
                      </p>
                    </h6>
                  </div>
                </div>
              ) : null}
            </div>
            <div
              className="col-lg-3 pl-0 info-col-1"
              style={{ visibility: "visible", animationName: "slideInUp" }}
            >
              <div className="info-cards">
                <div
                  style={{
                    background:
                      "radial-gradient( circle, #faa74a 0%, #faa74a 25%, #e98718 69%, orange 100%, orange 100%, #faa74a 100% )",
                    color: "#fff",
                  }}
                >
                  <h5 className="p-2 text-center">البيانات</h5>
                </div>
                <div className="m-3 px-2">
                  {details.cityName ? (
                    <div className="my-4 border-bottom">
                      <div
                        className="mb-2"
                        style={{
                          color: "#e98718",
                          fontWeight: 400,
                        }}
                      >
                        المدينة
                      </div>
                      <div className="pr-4">
                        <h6>{details.cityName}</h6>
                      </div>
                    </div>
                  ) : null}

                  {details.manager ? (
                    <div className="my-4 border-bottom">
                      <div
                        className="mb-2"
                        style={{
                          color: "#e98718",
                          fontWeight: 400,
                        }}
                      >
                        المدير
                      </div>
                      <div className="pr-4">
                        <h6>{details.manager}</h6>
                      </div>
                    </div>
                  ) : null}

                  {details.managerJob ? (
                    <div className="my-4 border-bottom">
                      <div
                        className="mb-2"
                        style={{
                          color: "#e98718",
                          fontWeight: 400,
                        }}
                      >
                        وظيفة المدير
                      </div>
                      <div className="pr-4">
                        <h6>{details.managerJob}</h6>
                      </div>
                    </div>
                  ) : null}

                  {details.memberCount ? (
                    <div className="my-4 border-bottom">
                      <div
                        className="mb-2"
                        style={{
                          color: "#e98718",
                          fontWeight: 400,
                        }}
                      >
                        عدد الاعضاء
                      </div>
                      <div className="pr-4">
                        <h6>{details.memberCount}</h6>
                      </div>
                    </div>
                  ) : null}

                  {details.telephone ? (
                    <div className="my-4 border-bottom">
                      <div
                        className="mb-2"
                        style={{
                          color: "#e98718",
                          fontWeight: 400,
                        }}
                      >
                        التليفون
                      </div>
                      <div className="pr-4">
                        <h6>{details.telephone}</h6>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <Details />;
};
const mapStateToProps = (state) => {
  return {
    SocietyDetails: state.LocalLeadersComponents.SocietyDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getSocietyDetails, clearSocietyDetails },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SocietyDetails);
