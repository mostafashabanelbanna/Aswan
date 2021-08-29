import React from "react";
import logo from "../assets/img/logo.png";

const BgAttachment = () => {
  return (
    <div>
      <div className="city_name_attachment">
        <div className="city_name_inner d-flex flex-column align-items-center p-5">
          <img className="mb-3" style={{ height: "180px" }} src={logo} />
          <h3 className="text-center text-white"> محافظة أسوان</h3>
        </div>
      </div>
    </div>
  );
};

export default BgAttachment;
