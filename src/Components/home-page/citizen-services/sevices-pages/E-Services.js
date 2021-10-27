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
  faLocationArrow,
  faPhoneAlt,
  faMapMarkerAlt,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {} from "../../../../Styles/EServices.css";
import { Col, Container, Row } from "react-bootstrap";
import SearchSection from "../../../ui/search-section";
import PaginationSection from "../../../ui/pagination-section";
import ListSkeleton from "../../../loading-skeleton/list-skiliton";
import { paths } from "../../../../paths/paths";

const EServices = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [dataFlag, setDataFlag] = useState(0);
  const [renderFlag, setRenderFlag] = useState(1);
  const [name, setName] = useState(null);
  const [directoryTypeId, setDirectoryTypeId] = useState(null);
  const [directoryCategoryId, setDirectoryCategoryId] = useState(null);
  const [cityId, setCityId] = useState(null);

  let dataFilled = { name, directoryTypeId, directoryCategoryId, cityId };
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault();
    setCurrentPage(0);
    props.getEServices(currentPage + 1, data(dataFilled));
    setDataFlag(1);
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
    props.clearEServices();
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    if (renderFlag) {
      if (dataFlag)
        check(dataFilled) == false
          ? props.getEServices(currentPage + 1)
          : props.getEServices(currentPage + 1, data(dataFilled));
      else props.getEServices(currentPage + 1);
    }
    if (!props.cities) props.getAllCities();

    if (!props.directoryTypes) props.getAllDirectoryType();

    props.getAllDirectoryCategory(directoryTypeId);

    setRenderFlag(1);

    return () => {
      props.clearDirectoryCategory();
    };
  }, [currentPage, directoryTypeId]);

  if (props?.services?.result) {
    let cityName = props.cities.result.map(({ id, name }) => ({
      value: id,
      label: name,
    }));
    let dirCatVal;
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
    let dirTypeVal = props.directoryTypes.result.map(({ id, nameA }) => ({
      value: id,
      label: nameA,
    }));
    cityName.unshift({ value: null, label: "كل المدن" });
    dirTypeVal.unshift({ value: null, label: "كل الأنواع" });
    pageCount = Math.ceil(props.services.count / 9);
    if (props.services.page == currentPage + 1) {
      return (
        <>
          <Container fluid>
            <div className=" container underline my-5">
              <h3>ادلة المحافظة</h3>
            </div>
          </Container>
          <SearchSection
            submit={submitHandler}
            TextFieldOneHandler={nameHandler}
            labelTextFieldOne="الاسم"
            classNameTextFieldOne="col-md-3 col-sm-6 mt-3 mb-0 col-12"
            dropdownThreeVal={cityName.find((e) => e.value == cityId)}
            dropdownThreeHandler={cityIdHandler}
            dropdownThreePlaceholder="المدينة"
            dropdownThreeName={cityName}
            classNameDropdownThree="col-md-3 col-sm-6 col-12"
            dropdownTwoVal={dirCatVal.find(
              (e) => e.value == directoryCategoryId
            )}
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
          <div className="container d-flex flex-wrap justify-content-around flex-column flex-sm-row">
            {props.services.result.map((item, index) => {
              let pName;
              let newPath;
              if (item.photo != null) {
                pName = item.photo;
                newPath = pName.replaceAll(" ", "%20");
              }
              return (
                <div
                  className="holder custom-holder text-center rounded-3 my-5 col-lg-3 mx-md-4 col-md-5 mx-0 col-11 bg-light"
                  key={item.id}
                >
                  {item.photo ? (
                    <div
                      style={{
                        backgroundImage: `url(${paths.Directory}${item.id}/${newPath})`,
                        height: "200px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="justify-content-end d-flex py-3">
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
                    </div>
                  ) : (
                    <div
                      style={{
                        backgroundImage: `url(/images/icons/cluesServices-0١.png)`,
                        height: "200px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="justify-content-end d-flex py-3">
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
                    </div>
                  )}
                  <div className="justify-content-center d-flex my-2 ">
                    <span className="py-1 px-2 rounded-3 h4">{item.name}</span>
                  </div>
                  <div className="d-flex my-3 ">
                    <div className="mx-2">
                      {" "}
                      <FontAwesomeIcon
                        icon={faLocationArrow}
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
                        icon={faCity}
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
                  ) : (
                    <div className="d-none"></div>
                  )}
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
                          إضغط هنا للذهاب للرابط
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
  return <ListSkeleton />;
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
      getAllCities,
      getAllDirectoryCategory,
      clearDirectoryCategory,
      getAllDirectoryType,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EServices);
