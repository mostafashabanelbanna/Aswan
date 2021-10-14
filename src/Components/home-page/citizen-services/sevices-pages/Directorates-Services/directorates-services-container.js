import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import {
  getDirectorateDetails,
  clearDirectorateDetails,
} from "../../../../../store/actions/E-Services";
import { useEffect } from "react";
import MainSliderSkeleton from "../../../../loading-skeleton/mainSlider";
import DirectoratesDetails from "./directorates-services-details";
import { useState } from "react";

const DirectoratesContainer = (props) => {
  let id = props.id;
  let name = props.name;
  const [detailsID, setDetailsID] = useState(0);
  const [flag, setFlag] = useState(0);
  let activeClass = "activeClass";

  useEffect(() => {
    props.getDirectorateDetails(parseInt(id));
    return () => {
      props.clearDirectorateDetails();
    };
  }, [parseInt(id)]);

  if (props?.directoratesDetails?.result) {
    if (flag == 0 && props.directoratesDetails.result.plans.length > 0) {
      setDetailsID(props.directoratesDetails.result.plans[0].id);
      setFlag(1);
    }
  }

  if (props?.directoratesDetails?.result) {
    return (
      <div>
        <div className="container">
          <div className="my-5 underline">
            <h3 className="mb-0">{name}</h3>
          </div>
        </div>

        <div className="container d-flex flex-md-row flex-column">
          <div className="col-12 my-3 px-md-4 px-1">
            <div className="d-flex justify-content-center">
              <div className="w-50">
                <h5
                  className="text-center "
                  style={{
                    background: "rgb(30, 116, 188)",
                    background:
                      "radial-gradient( circle, #faa74a 0%, #faa74a 25%, #e98718 69%, orange 100%, orange 100%, #faa74a 100% )",
                    color: "#fff",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    padding: "0.5rem",
                    marginBottom: "0",
                  }}
                >
                  البيانات
                </h5>
              </div>
            </div>
            <div
              style={{
                boxShadow: "3px 4px 16px 6px rgb(179 179 179 / 36%)",
                borderRadius: "35px",
              }}
            >
              <div>
                <div className="p-5">
                  {props.directoratesDetails.result.address ? (
                    <div
                      className="pb-2 mb-4"
                      style={{ borderBottom: "1px solid #e98718" }}
                    >
                      <h5 className="mb-4" style={{ color: "#e98718" }}>
                        عنوان الوحدة المحلية
                      </h5>
                      <h5>{props.directoratesDetails.result.address}</h5>
                    </div>
                  ) : null}
                  {props.directoratesDetails.result.telephone ? (
                    <div
                      className="pb-2 mb-4"
                      style={{ borderBottom: "1px solid #e98718" }}
                    >
                      <h5 className="mb-4" style={{ color: "#e98718" }}>
                        التليفون
                      </h5>
                      <h5>{props.directoratesDetails.result.telephone}</h5>
                    </div>
                  ) : null}
                  {props.directoratesDetails.result.fax ? (
                    <div
                      className="pb-2 mb-4"
                      style={{ borderBottom: "1px solid #e98718" }}
                    >
                      <h5 className="mb-4" style={{ color: "#e98718" }}>
                        الفاكس
                      </h5>
                      <h5>{props.directoratesDetails.result.fax}</h5>
                    </div>
                  ) : null}
                  {props.directoratesDetails.result.manager ? (
                    <div
                      className="pb-2 mb-4"
                      style={{ borderBottom: "1px solid #e98718" }}
                    >
                      <h5 className="mb-4" style={{ color: "#e98718" }}>
                        مدير {props.directoratesDetails.result.name}
                      </h5>
                      <h5>{props.directoratesDetails.result.manager}</h5>
                    </div>
                  ) : null}
                  {props.directoratesDetails.result.viceManager ? (
                    <div
                      className="pb-2 mb-4"
                      style={{ borderBottom: "1px solid #e98718" }}
                    >
                      <h5 className="mb-4" style={{ color: "#e98718" }}>
                        نائب مدير {props.directoratesDetails.result.name}
                      </h5>
                      <h5>{props.directoratesDetails.result.viceManager}</h5>
                    </div>
                  ) : null}
                  {props.directoratesDetails.result.email ? (
                    <div
                      className="pb-2 mb-4"
                      style={{ borderBottom: "1px solid #e98718" }}
                    >
                      <h5 className="mb-4" style={{ color: "#e98718" }}>
                        البريد الإلكتروني
                      </h5>
                      <h5>{props.directoratesDetails.result.email}</h5>
                    </div>
                  ) : null}
                  {props.directoratesDetails.result.homePage ? (
                    <div
                      className="pb-2 mb-4"
                      style={{ borderBottom: "1px solid #e98718" }}
                    >
                      <h5 className="mb-4" style={{ color: "#e98718" }}>
                        الرابط
                      </h5>
                      <a
                        target="_blank"
                        href={props.directoratesDetails.result.homePage}
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        <h5>{props.directoratesDetails.result.homePage}</h5>
                      </a>
                    </div>
                  ) : null}
                  {props.directoratesDetails.result.resumee ? (
                    <div
                      className="pb-2 mb-4"
                      style={{ borderBottom: "1px solid #e98718" }}
                    >
                      <h5 className="mb-4" style={{ color: "#e98718" }}>
                        السيرة الذاتية
                      </h5>
                      <h5>{props.directoratesDetails.result.resumee}</h5>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 py-4">
          <div className="container py-3 col-12 text-center flex-wrap d-flex justify-content-around align-items-center p-0">
            {props.directoratesDetails.result.plans.map((item, index) => {
              return (
                <div
                  id="link"
                  onClick={() => {
                    setDetailsID(item.id);
                  }}
                  style={{
                    cursor: "pointer",
                    border: "1px solid orange",
                    borderRadius: "4px",
                  }}
                  className={` ${
                    detailsID == item.id ? activeClass : ""
                  } text-decoration-none my-3 col-sm-6 col-md-3 mx-2 col-9 hvr-grow-shadow hvr-underline-reveal d-flex justify-content-center align-items-center`}
                >
                  <div className="my-2">
                    <span className="spansz">{item.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
          {detailsID != 0 ? (
            <DirectoratesDetails Id={detailsID} />
          ) : (
            <div className="text-center my-5">جاري رفع البيانات</div>
          )}
        </div>
      </div>
    );
  } else {
    return <MainSliderSkeleton />;
  }
};

export default connect(
  (state) => {
    return {
      directoratesDetails: state.EServicesComponents.directoratesDetails,
    };
  },
  (dispatch) => {
    return bindActionCreators(
      {
        getDirectorateDetails,
        clearDirectorateDetails,
      },
      dispatch
    );
  }
)(DirectoratesContainer);
