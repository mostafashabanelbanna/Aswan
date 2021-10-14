import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getNationalCouncil,
  clearNationalCouncil,
} from "../../../../store/actions/local-leaders-actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {} from "../../../../Styles/EServices.css";
import { Col, Container, Row } from "react-bootstrap";
import SearchSection from "../../../ui/search-section";
import PaginationSection from "../../../ui/pagination-section";
import ListSkeleton from "../../../loading-skeleton/list-skiliton";
import { Link } from "react-router-dom";

const NationalCouncil = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [dataFlag, setDataFlag] = useState(0);
  const [renderFlag, setRenderFlag] = useState(1);
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);

  let dataFilled = { name, address };
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault();
    setCurrentPage(0);
    props.getNationalCouncil(currentPage + 1, data(dataFilled));
    setDataFlag(1);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const addressHandler = (e) => {
    setAddress(e.target.value);
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
    props.clearNationalCouncil();
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    if (renderFlag) {
      if (dataFlag)
        check(dataFilled) == false
          ? props.getNationalCouncil(currentPage + 1)
          : props.getNationalCouncil(currentPage + 1, data(dataFilled));
      else props.getNationalCouncil(currentPage + 1);
    }

    setRenderFlag(1);

    return () => {
      props.clearNationalCouncil();
    };
  }, [currentPage]);

  if (props?.NationalCouncil?.result) {
    pageCount = Math.ceil(props.NationalCouncil.count / 9);
    if (props.NationalCouncil.page == currentPage + 1) {
      return (
        <>
          <Container fluid>
            <div className=" container underline my-5">
              <h3>المجالس القومية</h3>
            </div>
          </Container>
          <SearchSection
            submit={submitHandler}
            TextFieldOneHandler={nameHandler}
            labelTextFieldOne="الاسم"
            classNameTextFieldOne="col-md-5 col-12"
            TextFieldTwoHandler={addressHandler}
            labelTextFieldTwo="العنوان"
            classNameTextFieldTwo="col-md-5 col-12"
            classNameBtn="col-md-2 col-12 mt-2"
          />
          <div className="container d-flex flex-wrap justify-content-around flex-column flex-sm-row">
            {props.NationalCouncil.result.map((item, index) => {
              return (
                <div
                  className="holder custom-holder text-center rounded-3 my-5 col-lg-3 mx-md-4 col-md-5 mx-0 col-11 bg-light"
                  key={item.id}
                >
                  <Link
                    to={`/nationalcouncildetails/${item.id}`}
                    id="link"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <div className="justify-content-center d-flex my-2 ">
                      <span
                        className="py-1 px-2 rounded-3 h4"
                        style={{ color: "orange" }}
                      >
                        {item.name}
                      </span>
                    </div>
                  </Link>

                  {item.homePage ? (
                    <a
                      className="d-flex my-3"
                      style={{ cursor: "pointer" }}
                      target="_blank"
                    >
                      <div className="mx-2">
                        {" "}
                        <FontAwesomeIcon
                          className="text-dark"
                          icon={faGlobe}
                          size={"1x"}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="mx-2">{item.homePage}</div>
                    </a>
                  ) : null}
                </div>
              );
            })}
          </div>
          {props.NationalCouncil.result.length ? (
            <PaginationSection
              currentPage={currentPage}
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />
          ) : (
            <div className="text-center my-5">جاري رفع البيانات</div>
          )}
        </>
      );
    }
  }
  return <ListSkeleton />;
};
const mapStateToProps = (state) => {
  return {
    NationalCouncil: state.LocalLeadersComponents.NationalCouncil,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getNationalCouncil,
      clearNationalCouncil,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NationalCouncil);
