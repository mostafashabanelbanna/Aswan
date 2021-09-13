import React from "react";
import "./list-with-image.css";

const ListWithImage = (props) => {
  return (
    <div className={`${props.hoverTitle} list_container`}>
      <div className={`${props.holder} list_img_container`}>
        <div
          className={`${props.imageAlbum} list_img`}
          style={{
            backgroundImage: `url(${props.imgSrc})`,
            height: props.imgHeight,
          }}
        ></div>
       {props.category? <div className="list_category">{props.category}</div>:<div className='d-none'></div>}
      </div>
      {props.date?  <div className="d-flex justify-content-end p-2 text-muted">
        {props.date}
      </div>:<div className='d-none'></div>}
      <div className="my-2 p-2">
        <div  className={`${props.center?'text-center':''}`}>{props.title}</div>
      </div>
    </div>
  );
};

export default ListWithImage;
