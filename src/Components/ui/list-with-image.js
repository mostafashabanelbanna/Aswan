import React from "react";
import "./list-with-image.css";

const ListWithImage = (props) => {
  return (
    <div className={`${props.hoverTitle} list_container`}>
      <div className="list_img_container">
        <div
          className="list_img"
          style={{
            backgroundImage: `url(${props.imgSrc})`,
            height: props.imgHeight,
          }}
        ></div>
       {props.category? <div className="list_category">{props.category}</div>:null}
      </div>
      {props.date?  <div className="d-flex justify-content-end p-2">
        {props.date}
      </div>:null}
      <div className="my-2 p-2" style={{fontSize:'22px'}}>
        <div  className={`${props.center?'text-center':''}`}>{props.title}</div>
      </div>
      {props.content?<div className="my-2 p-2">
        <div  className={`${props.center?'text-center':''}`}>{props.content}</div>
      </div>:null}
    </div>
  );
};

export default ListWithImage;
