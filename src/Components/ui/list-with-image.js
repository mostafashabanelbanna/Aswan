import React, { useState, useEffect } from "react";
import "./list-with-image.css";
import CareerForm from "../forms/career-form";
import { paths } from "../../paths/paths";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";

const ListWithImage = (props) => {
  return (
    <div
      className={`${props.hoverTitle} list_container position-relative`}
      style={{ height: `${props.divHeight}` }}
    >
      <div className="list_img_container">
        <div
          className="list_img"
          style={{
            backgroundImage: `url(${props.imgSrc})`,
            height: props.imgHeight,
          }}
        >
        </div>

        {/* category */}
        {props.category ? (
          <div className="list_category">{props.category}</div>
        ) : null}
        
        {/* changeRate */}
        {props.changeRate ? (
          <div className=" list_percentage" style={{ width: 60, height: 60 }}>
            <CircularProgressbar
              value={props.changeRate}
              text={
                <tspan y={63} x={80}>
                  %{props.changeRate}
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
                pathColor: `#ff6c1a`,
                textColor: "black",
                trailColor: "#d6d6d6",
                backgroundColor: "white",
              })}
            />
          </div>
        ) : null}
      </div>

      {/* date */}
      {props.date ? (
        <div className="d-flex justify-content-end p-2">{props.date}</div>
      ) : null}


      <div className="mt-2 mb-5 p-2" style={{ fontSize: "22px" }}>
        <div className={`${props.center ? "text-center" : ""}`}>
          {props.title}
        </div>

        {/* careerDetails */}
        {props.careerButton == true ? (
          <div
            className="my-2"
            style={{ textAlign: "justify", fontSize: "18px" }}
          >
            {props.careerDetails}
          </div>
        ) : null}
        
        {/* youthDetails */}
        {props.youthButton == true ? (
          <div
            className="my-2"
            style={{ textAlign: "justify", fontSize: "18px" }}
          >
            {props.youthDetails}
          </div>
        ) : null}
      </div>
      
      {/* content For All Lists Other Than Career And Youth */}
      {props.content ? (
        <div className="my-2 p-2 new-line">
          <div className={`${props.center ? "text-center" : ""}`}>
            {props.content}
          </div>
        </div>
      ) : null}
      
      {/* applied people number */}
      {props.appliedPeople != null ? (
        <div
          className="col-12 d-flex flex-column align-items-center justify-content-center position-absolute"
          style={{ bottom: 80 }}
          onClick={props.renderModal}
        >
          <p
            style={{ backgroundColor: "#fecf55", height: "35px" }}
            className="w-100 p-2 m-0"
          >
            عدد المتقدمين للوظيفة: {props.appliedPeople}
          </p>
        </div>
      ) : null}
      
      {/* careerDetailsButton */}
      {props.careerButton == true ? (
       <div className='position-absolute'  style={{ bottom: 0 , right:10 }}>
          <Link to={`/careerdetails/${props.details.id}`} className="btn_orange my-4">
          <span style={{ color: "white" }}>التفاصيل</span>
        </Link>
       </div>
      ) : null}
      
      {/* applyCareerButton */}
      {props.careerButton == true ? ( //to={`/youthdetails/${item.id}`}
        <div
          className="position-absolute"
          style={{ bottom: 0, left:10 }}
          onClick={props.renderModal}
        >
          <button
            type="button"
            className="btn_blue mx-1 my-4"
            style={{ verticalAlign: "middle" }}
          >
            <span style={{ color: "white" }}>مشاركة</span>
          </button>
        </div>
      ) : null}
      
      {/* youthDetailsButton */}
      {props.youthButton == true ? (
        <div className='position-absolute' style={{bottom:0 , right:10}}>
          <Link to={`/youthdetails/${props.details.id}`} className="btn_orange my-4">
          <span style={{ color: "white" }}>التفاصيل</span>
        </Link>
        </div>
      ) : null}
      
      {/* applyYouthButton */}
      {props.youthButton == true ? (
        <div
          className=" position-absolute"
          style={{ bottom: 0 , left:10 }}
          onClick={props.renderModal}
        >
          <button
            type="button"
            className="btn_blue mx-1 my-4"
            style={{ verticalAlign: "middle" }}
          >
            <span style={{ color: "white" }}>مشاركة</span>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ListWithImage;
