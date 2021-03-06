import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactHtmlParser from "react-html-parser";
import { getFocusedInvestorOpportunities } from "../../store/actions/investor-actions/investment-opportunities";
import { paths } from "../../paths/paths";
import SearchSkeleton from "../loading-skeleton/search-skeleton";
import TitleSkeleton from "../loading-skeleton/title-skeleton";
import { Link } from "react-router-dom";

const InvestmentOpportunities = (props) => {
  useEffect(() => {
    props.getFocusedInvestorOpportunities();
  }, []);

  const renderAlbum = () => {
    return (
      <div className="container d-flex justify-content-around flex-wrap flex-column flex-sm-row">
        {props.focusedOpportunities.result.map((item, index) => {
          let pName;
          let newPath;
          if (item.photo != null) {
            pName = item.photo;
            newPath = pName.replaceAll(" ", "%20");
          }
          let Title;
          if (item.title) {
            Title = item.title;
          } else {
            Title = `فرص إستثمارية بالمنطقة الصناعية: ${item.industryZoneName} - النشاط: ${item.activityName}`;
          }
          return (
            <Link
              id="link"
              key={item.id}
              to={"/opportunitiesdetails/" + item.id}
              className="text-white col-xl-3 col-md-6 col-12 mb-4 mb-lg-0 mx-auto p-3"
            >
              <div className="hoverTitle">
                <div className="holder mb-4">
                  <div
                    style={{
                      backgroundImage: `url("${paths.InvestmentPhotos}${item.id}/${newPath}")`,
                      cursor: "unset",
                    }}
                    className="imageAlbum"
                    alt={Title}
                  ></div>
                </div>
                <p className="text-center mb-5" style={{ fontSize: "18px" }}>
                  {Title}
                </p>
              </div>
            </Link>
          );
        })}
        <div className="container d-flex justify-content-end">
          <Link id="link" to="/opportunitieslist" className="">
            <button
              className="btn_blue mx-1 mb-2 mb-sm-0"
              style={{ verticalAlign: "middle" }}
            >
              <span style={{ color: "white" }}>عرض الكل</span>
            </button>
          </Link>
        </div>
      </div>
    );
  };

  if (props?.focusedOpportunities?.result) {
    return (
      <div>
        <div
          className="city_name_attachment"
          style={{
            backgroundImage: `url("/images/mohamed-soliman-MFgPnJOsI_I-unsplash.jpg")`,
          }}
        >
          <div
            className="city_name_inner d-flex flex-column align-items-center p-5"
            // style={{ padding: "3rem" }}
          >
            <div className="d-flex container my-5">
              <div className="mx-3">
                <img
                  className="brightness"
                  height="50"
                  src="/images/investor-photos/فرص استثمارية-01.png"
                />
              </div>
              <div className="d-flex align-items-center underline">
                <h3 className="mb-5">الفرص الإستثمارية</h3>
              </div>
            </div>
            {renderAlbum()}
          </div>
        </div>
        <div className="line mx-auto"></div>
      </div>
    );
  }
  return (
    <>
      <TitleSkeleton />
      <SearchSkeleton />
    </>
  );
};

export default connect(
  (state) => {
    return {
      focusedOpportunities: state.investorHome.focusedOpportunities,
    };
  },
  (dispatch) => {
    return bindActionCreators({ getFocusedInvestorOpportunities }, dispatch);
  }
)(InvestmentOpportunities);
