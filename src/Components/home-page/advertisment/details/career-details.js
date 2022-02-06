import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactHtmlParser from "react-html-parser";
import {
  getCareerDetails,
  clearCareerDetails,
} from "../../../../store/actions/advertisment-action";
import Details from "../../../loading-skeleton/Details";
import CareerForm from "../../../forms/career-form";
import { paths } from "../../../../paths/paths";

const CareerDetails = (props) => {
  const id = props.match.params.id;
  useEffect(() => {
    props.getCareerDetails(id);
    return () => {
      props.clearCareerDetails();
    };
  }, []);

  const [show, setShow] = useState(false);
  const [content, setContent] = useState({});

  const onShow = () => {
    setShow(true);
  };

  const renderModal = (content) => {
    return (
      <CareerForm
        content={content}
        showCareerModal={show}
        onHideCareerModal={() => setShow(false)}
      />
    );
  };

  if (props?.careerDetails?.result) {
    return (
      <div>
        <div className="underline container mt-5">
          <h3>{props.careerDetails.result.title}</h3>
        </div>

        <hr className="container mt-4 mb-3"></hr>

        <div className=" container p-0">
          <div className="d-flex flex-column flex-md-row justify-content-center ">
            <div className="p-3 col-12" style={{ fontSize: "20px" }}>
              {ReactHtmlParser(props.careerDetails.result.description)}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
          <div className="col-lg-8  col-12 d-flex flex-column mb-3">
            <div className="my-1">{`متطلبات الوظيفة: ${ReactHtmlParser(
              props.careerDetails.result.requirement
            )}`}</div>
            <div className="my-1">{`الخبرة المطلوبة: ${ReactHtmlParser(
              props.careerDetails.result.seniorityLevelName
            )}`}</div>
            <div className="my-1">{`نوع الوظيفة: ${ReactHtmlParser(
              props.careerDetails.result.employmentTypeName
            )}`}</div>
            <p className="my-1">
            عدد المتقدمين للوظيفة: {props.careerDetails.result.applicantCount}
          </p>
         
          </div>
          <div className= " col-lg-4  col-12 mb-3">
          {props.careerDetails.result.photo ? (
                <div className="career-image text-center">
                  <img src={`${paths.careerPhoto}${props.careerDetails.result.id}/${props.careerDetails.result.photo}`} className="img-fluid"/>
                  
                </div>

              ) : null}
         
           
          
           
          </div>
          
          </div>
          <div className="career-attachment my-3">
          {props.careerDetails.result.attachment ? (
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <iframe
                      frameBorder="0"
                      src={`${paths.careerAttachment}${props.careerDetails.result.id}/${props.careerDetails.result.attachment}`}
                      width="100%"
                      height="800px"
                    ></iframe>
                  </div>
                </div>
              </div>
            ) : null}
            </div>
        </div>
        <div
          className="col-12 d-flex flex-column align-items-center justify-content-center"
          style={{ bottom: 0 }}
          onClick={() => {
            onShow();
            setContent(props.careerDetails.result);
          }}
        >
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
    careerDetails: state.advertismentComponents.careerDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getCareerDetails, clearCareerDetails }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CareerDetails);
