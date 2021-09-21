import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import { paths } from "../../paths/paths";
import { Container } from "react-bootstrap";
import TouristAttractionSkeleton from "../loading-skeleton/touristAttraction";

const InvestmentOpportunities = () => {
  return (
    <div className="my-5">
      <div className="d-flex container my-4">
          <div className="mx-3">
            <img height="50" width="60" src="/images/icons/Tourist-0٢.png" />
          </div>
          <div className="d-flex align-items-center underline">
            <h3 className='mb-5'>الفرص الإستثمارية</h3>
          </div>
        </div>
      <div
        className="city_name_attachment"
        style={{
          backgroundImage: `url(/images/mohamed-soliman-MFgPnJOsI_I-unsplash.jpg)`,
        }}
      >
        <div
          className="city_name_inner d-flex flex-column align-items-center"
          style={{ padding: "6rem"}}
        >
          <h3 className="text-center text-white">{'sdsds'}</h3>
        </div>
      </div>
    </div>
  );
};

export default InvestmentOpportunities;
