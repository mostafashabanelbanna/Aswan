import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactHtmlParser from "react-html-parser";
import { getFocusedInvestorOpportunities } from '../../store/actions/investor-actions/investment-opportunities'
import { paths } from "../../paths/paths";
import OnePieaceSkeleton from "../loading-skeleton/one-pieace";
import { Link } from "react-router-dom";


const InvestmentOpportunities = (props) => {

  useEffect(() => {
    props.getFocusedInvestorOpportunities();
  }, [])

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
          return (
            <Link id='link'
              // to={`/opportunitiesdetails/${item.id}`}
              className="text-white col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mx-auto p-3"
            >
              <div className="hoverTitle" key={item.id}>
                <div className="holder mb-4">
                  <div
                    style={{
                      backgroundImage: `url(${paths.InvestmentPhotos}${item.id}/${newPath})`,
                    }}
                    className="imageAlbum"
                    alt={`فرص إستثمارية بالمنطقة الصناعية: ${item.industryZoneName} - النشاط: ${item.activityName}`}
                  ></div>
                </div>
                <p className="text-center mb-5" style={{ fontSize: "18px" }}>
                  {`فرص إستثمارية بالمنطقة الصناعية: ${item.industryZoneName} - النشاط: ${item.activityName}`}
                </p>
              </div>
            </Link>
          );
        })}
        <div className='container d-flex justify-content-end'>
          <Link id='link' to="/opportunitieslist" className="">
            <button
              className="myButton mx-1 mb-2 mb-sm-0"
              style={{ verticalAlign: "middle" }}
            >
              <span>عرض الكل</span>
            </button>
          </Link>
        </div>
      </div>
    );
  };

  if (props.focusedOpportunities) {
    return (
      <div>
        <div
          className="city_name_attachment"
          style={{
            backgroundImage: `url(/images/mohamed-soliman-MFgPnJOsI_I-unsplash.jpg)`,
          }}
        >
          <div
            className="city_name_inner d-flex flex-column align-items-center p-5"
            // style={{ padding: "3rem" }}
          >
          <div className="d-flex container my-5">
            <div className="mx-3">
              <img className='brightness' height="50" width="60" src="/images/investor-photos/فرص استثمارية-01.png" />
            </div>
            <div className="d-flex align-items-center underline">
              <h3 className="mb-5">الفرص الإستثمارية</h3>
            </div>
          </div>
            {renderAlbum()}
          </div>
        </div>
      </div>
    );
  }
  return <OnePieaceSkeleton />;
};

export default connect(
  (state) => {
    return {
      focusedOpportunities: state.investorHome.focusedOpportunities
    };
  },
  (dispatch) => {
    return bindActionCreators({ getFocusedInvestorOpportunities }, dispatch);
  }
)(InvestmentOpportunities);
