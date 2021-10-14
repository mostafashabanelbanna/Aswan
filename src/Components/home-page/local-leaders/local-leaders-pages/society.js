import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getSociety,
  clearSociety,
} from "../../../../store/actions/local-leaders-actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faUserTie,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {} from "../../../../Styles/EServices.css";
import { Col, Container, Row } from "react-bootstrap";
import SearchSection from "../../../ui/search-section";
import PaginationSection from "../../../ui/pagination-section";
import ListSkeleton from "../../../loading-skeleton/list-skiliton";
import { Link } from "react-router-dom";
import { getAllCities } from "../../../../store/actions/E-Services";

const Society = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [dataFlag, setDataFlag] = useState(0);
  const [renderFlag, setRenderFlag] = useState(1);
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [telephone, setTelephone] = useState(null);
  const [manager, setManager] = useState(null);
  const [cityId, setCityId] = useState(null);

  let dataFilled = { name, address, telephone, manager, cityId };
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault();
    setCurrentPage(0);
    props.getSociety(currentPage + 1, data(dataFilled));
    setDataFlag(1);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const addressHandler = (e) => {
    setAddress(e.target.value);
  };

  const telephoneHandler = (e) => {
    setTelephone(e.target.value);
  };

  const managerHandler = (e) => {
    setManager(e.target.value);
  };

  const cityIdHandler = (e) => {
    setCityId(e.value);
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
    props.clearSociety();
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    if (renderFlag) {
      if (dataFlag)
        check(dataFilled) == false
          ? props.getSociety(currentPage + 1)
          : props.getSociety(currentPage + 1, data(dataFilled));
      else props.getSociety(currentPage + 1);
    }

    if (!props.cities) props.getAllCities();

    setRenderFlag(1);

    return () => {
      props.clearSociety();
    };
  }, [currentPage]);

  if (props?.Society?.result && props?.cities?.result) {
    let cityName = props.cities.result.map(({ id, name }) => ({
      value: id,
      label: name,
    }));
    cityName.unshift({ value: null, label: "كل المدن" });

    pageCount = Math.ceil(props.Society.count / 9);
    if (props.Society.page == currentPage + 1) {
      return (
        <>
          <Container fluid>
            <div className=" container underline my-5">
              <h3>الجمعيات الأهلية</h3>
            </div>
          </Container>
          <SearchSection
            submit={submitHandler}
            TextFieldOneHandler={nameHandler}
            labelTextFieldOne="الاسم"
            classNameTextFieldOne="col-lg-4 col-md-6 col-12"
            TextFieldTwoHandler={addressHandler}
            labelTextFieldTwo="العنوان"
            classNameTextFieldTwo="col-lg-4 col-md-6 col-12"
            TextFieldThreeHandler={managerHandler}
            labelTextFieldThree="المدير"
            classNameTextFieldThree="col-lg-4 col-md-6 col-12"
            TextFieldFourHandler={telephoneHandler}
            labelTextFieldFour="رقم التليفون"
            classNameTextFieldFour="col-lg-4 col-md-6 col-12"
            dropdownOneVal={cityName.find((e) => e.value == cityId)}
            dropdownOneHandler={cityIdHandler}
            dropdownOnePlaceholder="المدينة"
            dropdownOneName={cityName}
            classNameDropdownOne="col-lg-4 col-md-6 col-12"
            classNameBtn="col-lg-4 col-md-6 col-12 mt-0 mb-0"
          />
          <div className="container d-flex flex-wrap justify-content-around flex-column flex-sm-row">
            {props.Society.result.map((item, index) => {
              return (
                <div
                  className="holder custom-holder text-center rounded-3 my-5 col-lg-3 mx-md-4 col-md-5 mx-0 col-11 bg-light"
                  key={item.id}
                >
                  <Link
                    to={`/societydetails/${item.id}`}
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

                  {item.address ? (
                    <div className="d-flex my-3">
                      <div className="mx-2">
                        {" "}
                        <FontAwesomeIcon
                          className="text-dark"
                          icon={faCity}
                          size={"1x"}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="mx-2">{item.address}</div>
                    </div>
                  ) : null}

                  {item.manager ? (
                    <div className="d-flex my-3">
                      <div className="mx-2">
                        {" "}
                        <FontAwesomeIcon
                          className="text-dark"
                          icon={faUserTie}
                          size={"1x"}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="mx-2">{item.manager}</div>
                    </div>
                  ) : null}

                  {item.telephone ? (
                    <div className="d-flex my-3">
                      <div className="mx-2">
                        {" "}
                        <FontAwesomeIcon
                          className="text-dark"
                          icon={faPhoneAlt}
                          size={"1x"}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="mx-2">{item.telephone}</div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          {props.Society.result.length ? (
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
    Society: state.LocalLeadersComponents.Society,
    cities: state.EServicesComponents.allCities,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getSociety,
      clearSociety,
      getAllCities,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Society);
