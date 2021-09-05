import React from "react";
import "./list-with-image.css";

const ListWithImage = (props) => {
  return (
    <div className="list_container">
      <div className="list_img_container">
        <div
          className="list_img"
          style={{
            backgroundImage: `url(${props.imgSrc})`,
            height: props.imgHeight,
          }}
        ></div>
        <div className="list_category">{props.category}</div>
      </div>
      <div className="d-flex justify-content-end p-2 text-muted">
        {props.date}
      </div>
      <div className="my-2 p-2">
        <div>{props.title}</div>
      </div>
    </div>
  );
};

export default ListWithImage;
