import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getAllInvestorOpportunities,
  clearAllInvestorOpportunities,
  getAllActivity,
  getAllIndustrialZone,
  getAllInvestmentPaymentSystem,
  getAllInvestmentSpecialtyType,
} from "../../../store/actions/investor-actions/investment-opportunities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faCity,
  faLocationArrow,
  faPhoneAlt,
  faMapMarkerAlt,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {} from "../../../Styles/EServices.css";
import { Col, Container, Row } from "react-bootstrap";
import SearchSection from "../../ui/search-section";
import PaginationSection from "../../ui/pagination-section";
import ListSkeleton from "../../loading-skeleton/list-skiliton";
import { paths } from "../../../paths/paths";
import ReactHtmlParser from "react-html-parser";
import ListWithImage from "../../ui/list-with-image";
import { Link } from "react-router-dom";

const InvestmentOpportunitiesList = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [dataFlag, setDataFlag] = useState(0);
  const [renderFlag, setRenderFlag] = useState(1);
  const [activityID, setActivityID] = useState(null);
  const [industryPartID, setIndustryPartID] = useState(null);
  const [investmentSpecialtyTypeid, setInvestmentSpecialtyTypeid] =
    useState(null);
  const [investmentPaymentSystemid, setInvestmentPaymentSystemid] =
    useState(null);

  let dataFilled = {
    activityID,
    industryPartID,
    investmentSpecialtyTypeid,
    investmentPaymentSystemid,
  };
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault();
    setCurrentPage(0);
    props.getAllInvestorOpportunities(currentPage + 1, data(dataFilled));
    setDataFlag(1);
  };

  const activityIDHandler = (e) => {
    setActivityID(e.value);
  };
  const industryPartIDHandler = (e) => {
    setIndustryPartID(e.value);
  };
  const investmentSpecialtyTypeidHandler = (e) => {
    setInvestmentSpecialtyTypeid(e.value);
  };
  const investmentPaymentSystemidHandler = (e) => {
    setInvestmentPaymentSystemid(e.value);
  };

  function check(a) {
    let flags = 0;
    for (let property in a) {
      if (a[property] != null) {
        flags = 1;
        return true;
      }
    }
    return false;
  }

  function data(a) {
    for (let property in a) {
      if (a[property] == null) delete a[property];
    }
    return a;
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    props.clearAllInvestorOpportunities();
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    if (renderFlag) {
      if (dataFlag)
        check(dataFilled) == false
          ? props.getAllInvestorOpportunities(currentPage + 1)
          : props.getAllInvestorOpportunities(
              currentPage + 1,
              data(dataFilled)
            );
      else props.getAllInvestorOpportunities(currentPage + 1);
    }

    if (!props.investorPaymentSystem) props.getAllInvestmentPaymentSystem();

    if (!props.investorSpecialtyType) props.getAllInvestmentSpecialtyType();

    if (!props.activity) props.getAllActivity();

    if (!props.industrialZone) props.getAllIndustrialZone();

    setRenderFlag(1);
  }, [currentPage]);

  let investorPaymentSystemVal = [];
  if (props?.investorPaymentSystem?.result) {
    investorPaymentSystemVal = props.investorPaymentSystem.result.map(
      ({ id, nameA }) => ({ value: id, label: nameA })
    );
    investorPaymentSystemVal.unshift({ value: null, label: "???????? ????????????" });
  }

  let investorSpecialtyTypeVal = [];
  if (props?.investorSpecialtyType?.result) {
    investorSpecialtyTypeVal = props.investorSpecialtyType.result.map(
      ({ id, nameA }) => ({ value: id, label: nameA })
    );
    investorSpecialtyTypeVal.unshift({ value: null, label: "?????? ??????????????" });
  }

  let activityVal = [];
  if (props?.activity?.result) {
    activityVal = props.activity.result.map(({ id, nameA }) => ({
      value: id,
      label: nameA,
    }));
    activityVal.unshift({ value: null, label: "????????????" });
  }

  let industrialZoneVal = [];
  if (props?.industrialZone?.result) {
    industrialZoneVal = props.industrialZone.result.map(({ id, nameA }) => ({
      value: id,
      label: nameA,
    }));
    industrialZoneVal.unshift({ value: null, label: "???? ?????????????? " });
  }

  const render = () => {
    if (props?.investorOpportunitiesList?.result) {
      pageCount = Math.ceil(props.investorOpportunitiesList.count / 9);
      if (props.investorOpportunitiesList.page == currentPage + 1) {
        return (
          <>
            <div className="container mt-5">
              <div className="row ">
                {props.investorOpportunitiesList.result.map((item) => {
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
                    Title = "???????? ??????????????????: ";
                  }
                  return (
                    <div
                      key={item.id}
                      className="mb-4 col-md-6 col-xl-4 col-12"
                    >
                      <Link
                        id="link"
                        to={"/opportunitiesdetails/" + item.id}
                        className="h-100"
                      >
                        <ListWithImage
                          imgSrc={
                            paths.InvestmentPhotos + item.id + "/" + newPath
                          }
                          content={`- ${Title}\n
                          - ?????????????? ????????????????: ${item.industryZoneName}\n
                          - ????????????: ${item.activityName}\n
                          - ????????????: ${item.investmentSpecialtyTypeName}\n
                          - ???????? ????????????: ${item.investmentPaymentSystemName}\n
                          `}
                          center=""
                          imgHeight="250px"
                          hoverTitle="hoverTitle h-100"
                        />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            {props.investorOpportunitiesList.result.length ? (
              <PaginationSection
                currentPage={currentPage}
                pageCount={pageCount}
                handlePageClick={handlePageClick}
              />
            ) : (
              <div className="text-center my-5">???????? ?????? ????????????????</div>
            )}
          </>
        );
      }
    }
    return (
      <>
        <ListSkeleton />
      </>
    );
  };

  return (
    <>
      <Container fluid>
        <div className=" container underline mt-3 mb-5">
          <h3>?????? ??????????????????</h3>
        </div>
      </Container>
      <SearchSection
        submit={submitHandler}
        dropdownOneVal={industrialZoneVal.find(
          (e) => e.value == industryPartID
        )}
        dropdownOneHandler={industryPartIDHandler}
        dropdownOnePlaceholder="???? ?????????????? "
        dropdownOneName={industrialZoneVal}
        classNameDropdownOne="col-md-5 col-12"
        dropdownTwoVal={activityVal.find((e) => e.value == activityID)}
        dropdownTwoHandler={activityIDHandler}
        dropdownTwoPlaceholder="????????????"
        dropdownTwoName={activityVal}
        classNameDropdownTwo="col-md-5 col-12"
        classNameBtn="col-md-2 mt-0 col-12"
        // dropdownThreeVal={investorSpecialtyTypeVal.find(
        //   (e) => e.value == investmentSpecialtyTypeid
        // )}
        // dropdownThreeHandler={investmentSpecialtyTypeidHandler}
        // dropdownThreePlaceholder="?????? ??????????????"
        // dropdownThreeName={investorSpecialtyTypeVal}
        // classNameDropdownThree="col-md-3 col-sm-6 col-12"
        // dropdownFourVal={investorPaymentSystemVal.find(
        //   (e) => e.value == investmentPaymentSystemid
        // )}
        // dropdownFourHandler={investmentPaymentSystemidHandler}
        // dropdownFourPlaceholder="???????? ????????????"
        // dropdownFourName={investorPaymentSystemVal}
        // classNameDropdownFour="col-md-3 col-sm-6 col-12"
      />
      {render()}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    investorOpportunitiesList: state.investorHome.investorOpportunitiesList,
    investorPaymentSystem: state.investorHome.investorPaymentSystem,
    investorSpecialtyType: state.investorHome.investorSpecialtyType,
    activity: state.investorHome.activity,
    industrialZone: state.investorHome.industrialZone,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllInvestorOpportunities,
      clearAllInvestorOpportunities,
      getAllActivity,
      getAllIndustrialZone,
      getAllInvestmentPaymentSystem,
      getAllInvestmentSpecialtyType,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvestmentOpportunitiesList);
