import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getHayaDetails,
  clearHayaDetails,
} from "../../../store/actions/haya-carima-actions";
import { bindActionCreators } from "redux";
import ReactHtmlParser from "react-html-parser";
import { Bar } from "react-chartjs-2";
import FocusedGeneralIndicatorSkeleton from "../../loading-skeleton/focused-general-indicator";

const HayaKarimaDetails = (props) => {
  let id = props.match.params.id;

  useEffect(() => {
    props.getHayaDetails(id);
    return () => {
      props.clearHayaDetails();
    };
  }, []);
  if (props?.hayadata?.result) {
    const state = {
      labels: props.hayadata.result.rates.map((item) => item.changeDate),
      datasets: [
        {
          label: "نسبة التنفيذ",
          backgroundColor: "#ffdc6e",
          borderColor: "#ffdc6e",
          borderWidth: 2,
          data: props.hayadata.result.rates.map((item) => item.changeValue),
        },
      ],
    };
    return (
      <>
        <div className="underline container mt-5">
          <h3>{props.hayadata.result.name}</h3>
        </div>
        <div className=" container mt-4 ">
          <h6>{ReactHtmlParser(props.hayadata.result.description)}</h6>
        </div>
        <div className=" container d-flex flex-wrap flex-sm-nowrap">
          <div className="col-lg-4 col-sm-6 col-12 px-4 d-flex align-items-center">
            <table className="table table-striped table-bordered">
              <thead style={{ backgroundColor: "#ffdc6e" }}>
                <tr>
                  <th scope="col">نسبة التنفيذ</th>
                  <th scope="col">تاريخ التنفيذ</th>
                </tr>
              </thead>
              <tbody>
                {props.hayadata.result.rates.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>%{item.changeValue}</td>
                      <td>{item.changeDate}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-lg-8 col-sm-6 col-12">
            <Bar data={state} />
          </div>
        </div>
      </>
    );
  }
  return <FocusedGeneralIndicatorSkeleton />;
};
const mapStateToProps = (state) => {
  return {
    hayadata: state.homeComponents.hayacarima,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getHayaDetails, clearHayaDetails }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(HayaKarimaDetails);
