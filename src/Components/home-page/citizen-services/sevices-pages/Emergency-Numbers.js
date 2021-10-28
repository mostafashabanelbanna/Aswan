import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getEServices,
  clearEServices,
  getAllCities,
  getAllDirectoryCategory,
  getAllDirectoryType,
  clearDirectoryCategory,
} from "../../../../store/actions/E-Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faCity,
  faUserTie,
  faPhoneAlt,
  faMapMarkerAlt,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {} from "../../../../Styles/EServices.css";
import { Col, Container, Row } from "react-bootstrap";
import SearchSection from "../../../ui/search-section";
import PaginationSection from "../../../ui/pagination-section";
import ListSkeleton from "../../../loading-skeleton/list-skiliton";
import { render } from "react-dom";

const EmergencyNumbers = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [renderFlag, setRenderFlag] = useState(1);
  const [name, setName] = useState(null);
  const [directoryTypeId, setDirectoryTypeId] = useState(18);
  const [directoryCategoryId, setDirectoryCategoryId] = useState(29);
  const [cityId, setCityId] = useState(null);
  const [dataFlag, setDataFlag] = useState(0);

  let dataFilled = { name, directoryTypeId, directoryCategoryId, cityId };
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault();
    setCurrentPage(0);
    props.getEServices(
      currentPage + 1,
      data({ name, directoryTypeId, directoryCategoryId, cityId })
    );
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const directoryTypeHandler = (e) => {
    setRenderFlag(0);
    setDirectoryTypeId(e.value);
    setDirectoryCategoryId(null);
  };
  const directoryCategoryHandler = (e) => {
    setDirectoryCategoryId(e.value);
  };
  const cityIdHandler = (e) => {
    setCityId(e.value);
  };

  function data(a) {
    for (let property in a) {
      if (a[property] == null) delete a[property];
    }
    return a;
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    props.clearEServices();
    setCurrentPage(selectedPage);
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

  useEffect(() => {
    if (renderFlag) {
      props.getEServices(currentPage + 1, data(dataFilled));
    }
    if (!props.cities) props.getAllCities();

    if (!props.directoryTypes) props.getAllDirectoryType();

    props.getAllDirectoryCategory(directoryTypeId);

    setRenderFlag(1);

    return () => {
      props.clearDirectoryCategory();
    };
  }, [currentPage, directoryTypeId]);

  let cityName = [];
  if (props?.cities?.result) {
    cityName = props.cities.result.map(({ id, name }) => ({
      value: id,
      label: name,
    }));
    cityName.unshift({ value: null, label: "كل المدن" });
  }

  let dirCatVal = [];
  if (props?.directoryCategories?.result) {
    if (props.directoryCategories != null) {
      dirCatVal = props.directoryCategories.result.map((item) => ({
        value: item.id,
        label: item.nameA,
      }));
      dirCatVal.unshift({ value: null, label: "كل التصنيفات" });
    } else {
      dirCatVal = [];
      dirCatVal.push({ value: null, label: "كل التصنيفات" });
    }
  }

  let dirTypeVal = [];
  if (props?.directoryTypes?.result) {
    dirTypeVal = props.directoryTypes.result.map((item) => ({
      value: item.id,
      label: item.nameA,
    }));
    dirTypeVal.unshift({ value: null, label: "كل الأنواع" });
  }

  const render = () => {
    if (props?.services?.result) {
      pageCount = Math.ceil(props.services.count / 9);
      if (props.services.page == currentPage + 1) {
        return (
          <>
            <div className="container d-flex flex-wrap justify-content-around flex-column flex-sm-row">
              {props.services.result.map((item, index) => {
                return (
                  <div
                    className="holder text-center rounded-3 my-5 col-lg-3 mx-md-4 col-md-5 mx-0 col-11 bg-light"
                    key={item.id}
                  >
                    <div className="justify-content-end d-flex my-3 ">
                      <span
                        className="py-1 px-2 fa-1x"
                        style={{
                          backgroundColor: "rgb(6, 73, 106)",
                          color: "white",
                          borderTopRightRadius: "5px",
                          borderBottomRightRadius: "5px",
                        }}
                      >
                        {item.directoryTypeName}-{item.directoryCategoryName}
                      </span>
                    </div>

                    <div className="justify-content-center d-flex my-2 ">
                      <span className="py-1 px-2 rounded-3 h4">
                        {item.name}
                      </span>
                    </div>

                    <div className="d-flex my-3 ">
                      <div className="mx-2">
                        {" "}
                        <FontAwesomeIcon
                          icon={faCity}
                          size={"1x"}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="mx-2">
                        {" "}
                        {item.address == null ? item.cityName : item.address}
                      </div>
                    </div>

                    <div className="d-flex my-3 ">
                      <div className="mx-2">
                        {" "}
                        <FontAwesomeIcon
                          icon={faUserTie}
                          size={"1x"}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="mx-2"> {item.name}</div>
                    </div>

                    <div className="d-flex my-3 ">
                      <div className="mx-2">
                        {" "}
                        <FontAwesomeIcon
                          icon={faPhoneAlt}
                          size={"1x"}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="mx-2"> {item.telephone}</div>
                    </div>

                    <div className="d-flex my-3 ">
                      <div className="mx-2">
                        {" "}
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          size={"1x"}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="mx-2"> {item.cityName}</div>
                    </div>

                    {item.manger ? (
                      <div className="d-flex my-3 ">
                        <div className="mx-2">
                          {" "}
                          <FontAwesomeIcon
                            icon={faBriefcase}
                            size={"1x"}
                          ></FontAwesomeIcon>
                        </div>
                        <div className="mx-2"> {item.manager}</div>
                      </div>
                    ) : null}

                    {item.mapUrl ? (
                      <div className="d-flex my-3 ">
                        <div className="mx-2">
                          {" "}
                          <FontAwesomeIcon
                            icon={faLink}
                            size={"1x"}
                          ></FontAwesomeIcon>
                        </div>
                        <div className="mx-2">
                          {" "}
                          <a
                            className=" text-decoration-none"
                            style={{ cursor: "pointer" }}
                            href={item.mapUrl}
                            target="_blank"
                          >
                            {item.mapUrl}
                          </a>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
            {props.services.result.length ? (
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
          <h3>أرقام الطوارئ</h3>
        </div>
      </Container>
      <SearchSection
        submit={submitHandler}
        TextFieldOneHandler={nameHandler}
        labelTextFieldOne="الاسم"
        classNameTextFieldOne="col-md-3 col-sm-6 mt-3 mb-0 mb-md-3 col-12"
        dropdownThreeVal={cityName.find((e) => e.value == cityId)}
        dropdownThreeHandler={cityIdHandler}
        dropdownThreePlaceholder="المدينة"
        dropdownThreeName={cityName}
        classNameDropdownThree="col-md-3 col-sm-6 col-12"
        dropdownTwoVal={dirCatVal.find((e) => e.value == directoryCategoryId)}
        dropdownTwoHandler={directoryCategoryHandler}
        dropdownTwoPlaceholder="كل التصنيفات"
        dropdownTwoName={dirCatVal}
        classNameDropdownTwo="col-md-3 col-sm-6 col-12"
        dropdownOneVal={dirTypeVal.find((e) => e.value == directoryTypeId)}
        dropdownOneHandler={directoryTypeHandler}
        dropdownOnePlaceholder="كل الأنواع"
        dropdownOneName={dirTypeVal}
        classNameDropdownOne="col-md-3 col-sm-6 col-12"
      />
      {render()}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    services: state.EServicesComponents.allServices,
    cities: state.EServicesComponents.allCities,
    directoryCategories: state.EServicesComponents.allDirectoryCategories,
    directoryTypes: state.EServicesComponents.allDirectoryTypes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getEServices,
      clearEServices,
      clearDirectoryCategory,
      getAllCities,
      getAllDirectoryCategory,
      getAllDirectoryType,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyNumbers);
