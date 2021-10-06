import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactHtmlParser from "react-html-parser";
import {
  getYouthDetails,
  clearYouthDetails
} from "../../../../store/actions/advertisment-action";
import { paths } from "../../../../paths/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faLink } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import "moment/locale/ar";
import Details from "../../../loading-skeleton/Details";
import YouthForm from "../../../forms/youth-form";

const YouthDetails = (props) => {
  const id = props.match.params.id;
  useEffect(() => {
    props.getYouthDetails(id);
    return () => {
      props.clearYouthDetails();
    };
  }, []);

  const [show, setShow] = useState(false);
  const [content, setContent] = useState({});

  const onShow = () => {
    setShow(true);
  };

  const renderModal = (content) => {
    return (
      <YouthForm
        content={content}
        showYouthModal={show}
        onHideYouthModal={() => setShow(false)}
      />
    );
  };

  if (props?.youthDetails?.result) {
    return (
      <div>
        <div className="underline container mt-5">
          <h3>{props.youthDetails.result.title}</h3>
        </div>

        <hr className="container mt-4 mb-3"></hr>

        <div className=" container p-0">
          <div className="d-flex flex-column flex-md-row justify-content-center ">
            <div className="p-3 col-12" style={{fontSize:'20px'}}>
              {ReactHtmlParser(props.youthDetails.result.description)}
            </div>
          </div>
        </div>
        <div className="container">
            <div className="col-12 d-flex flex-column">
              <div className='my-1'>{`متطلبات الوظيفة: ${ReactHtmlParser(props.youthDetails.result.requirement)}`}</div>
              <div className='my-1'>{`تاريخ البداية: ${moment(new Date(props.youthDetails.result.startDate)).format("LL")}`}</div>
              <div className='my-1'>{`تاريخ النهاية: ${moment(new Date(props.youthDetails.result.endDate)).format("LL")}`}</div>
            </div>
            <p
              className='my-1'
            >
              عدد المتقدمين للوظيفة: {props.youthDetails.result.applicantCount}
            </p>
        </div>

        <div
          className="col-12 d-flex flex-column align-items-center justify-content-center"
          style={{ bottom: 0 }}
          onClick={() => {
            onShow();
            setContent(props.youthDetails.result);
            }}>
          <button
            type="button"
            className="btn_blue mx-1 my-4"
            style={{ verticalAlign: "middle" }}
          >
            <span style={{ color: "white" }}>مشاركة</span>
          </button>
        </div>
        {renderModal(content)}
      </div>
    );
  }
  return <Details />;
};
const mapStateToProps = (state) => {
  return {
    youthDetails: state.advertismentComponents.youthDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getYouthDetails, clearYouthDetails },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YouthDetails);
