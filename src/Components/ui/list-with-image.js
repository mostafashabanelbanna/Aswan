import React, {useState, useEffect} from "react";
import "./list-with-image.css";
import CareerForm from "../forms/career-form";
import { paths } from "../../paths/paths";

const ListWithImage = (props) => {
  return (
    <div className={`${props.hoverTitle} list_container position-relative`}>
      <div className="list_img_container">
        <div
          className="list_img"
          style={{
            backgroundImage: `url(${props.imgSrc})`,
            height: props.imgHeight,
          }}
        ></div>
        {props.category ? (
          <div className="list_category">{props.category}</div>
        ) : null}
      </div>
      {props.date ? (
        <div className="d-flex justify-content-end p-2">{props.date}</div>
      ) : null}
      <div className="my-2 p-2" style={{ fontSize: "22px" }}>
        <div className={`${props.center ? "text-center" : ""}`}>
          {props.title}
        </div>
      </div>
      {props.content ? (
        <div className="my-2 p-2 new-line">
          <div className={`${props.center ? "text-center" : ""}`}>
            {props.content}
          </div>
        </div>
      ) : null}
      {props.careerButton == true ? (
        <div className="col-12 d-flex justify-content-center position-absolute" style={{bottom: 0}} onClick={props.renderModal}>
          <button
            type="button"
            className="myButton mx-1 my-4"
            style={{ verticalAlign: "middle"}}
          >
            <span>مشاركة</span>
          </button>
        </div>
      ) : null}
      {props.youthButton == true ? (
        <div className="col-12 d-flex justify-content-center position-absolute" style={{bottom: 0}} onClick={props.renderModal}>
          <button
            type='button'
            className="myButton mx-1 my-4"
            style={{ verticalAlign: "middle"}}
          >
            <span>مشاركة</span>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ListWithImage;
