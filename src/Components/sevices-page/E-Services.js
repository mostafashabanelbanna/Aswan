import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getEServices ,clearEServices, getAllCities, getAllDirectoryCategory, getAllDirectoryType} from "../../store/actions/E-Services";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCity, faUserTie, faPhoneAlt, faMapMarkerAlt, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {} from "../../Styles/EServices.css";
import { Col, Container, Row } from "react-bootstrap";
import SearchSection from "../ui/search-section";


const EServices = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flag, setFlag] = useState(0);
  const [name, setName] = useState(null);
  const [manger, setManger] = useState(null);
  const [directoryTypeId, setDirectoryTypeId] = useState(null);
  const [directoryCategoryId, setDirectoryCategoryId] = useState(null);
  const [cityId, setCityId] = useState(null);

  let dataFilled = { name, manger, directoryTypeId, directoryCategoryId, cityId }
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault()
    props.getEServices(currentPage + 1, data(dataFilled))
    setFlag(1)
    setCurrentPage(0);
  }

  const nameHandler = (e) => {setName(e.target.value);}
  const mangerHandler = (e) => {setManger(e.target.value);}
  const directoryTypeHandler = (e) => {setDirectoryTypeId(e.value);}
  const directoryCategoryHandler = (e) => {setDirectoryCategoryId(e.value);}
  const cityIdHandler = (e) => {setCityId(e.value);}

  function check(a) {
    let flag = 0;
    for (let property in a) {
      if (a[property] != null) {
        flag = 1
        return true;
      }
    }
    return false;
  }

  function data(a) {
    for (let property in a) {
      if (a[property] == null)
        delete a[property];

    }
    return a;
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    props.clearEServices();
    setCurrentPage(selectedPage)
  };

  useEffect(() => {
    if (flag)
      check(dataFilled) == false ? props.getEServices(currentPage + 1) : props.getEServices(currentPage + 1, data(dataFilled));
    else
      props.getEServices(currentPage + 1)

    if (!props.cities)
      props.getAllCities();

    if (!props.directoryCategories)
      props.getAllDirectoryCategory();

    if (!props.directoryTypeIds)
      props.getAllDirectoryType();
  }, [currentPage]);

  // #e0c36a
  // useEffect(() => {
  //  keyword==null? props.getEServices(currentPage + 1):props.getEServices(currentPage + 1,{'name':keyword});
  // }, [currentPage]);

  if (props.services) {
    let cityName = props.cities.result.map(({ id, nameA }) => ({ value: id, label: nameA }));
    let dirCatVal = props.directoryCategories.result.map(({ id, nameA }) => ({ value: id, label: nameA }));
    let dirTypeVal = props.directoryTypes.result.map(({ id, nameA }) => ({ value: id, label: nameA }));
    cityName.unshift({ value: null, label: "كل المدن" })
    dirCatVal.unshift({ value: null, label: "كل التصنيفات" })
    dirTypeVal.unshift({ value: null, label: "كل الأنواع" })
    pageCount = Math.ceil(props.services.count / 9);
    console.log("hiii",props.services)
    if(props.services.page==currentPage+1){
    return (
      <>
        <Container fluid>
          <div className=" container underline  my-4">
            <h3>ادلة المحافظة</h3>
          </div>
          <div className=" bg-light p-3">
            <SearchSection
            submit={submitHandler}
            TextFieldOneHandler={nameHandler}
            labelTextFieldOne='الاسم'
            TextFieldTwoHandler={mangerHandler}
            labelTextFieldTwo= 'المدير'
            dropdownThreeVal={cityName.find(e => e.value == cityId)}
            dropdownThreeHandler={cityIdHandler}
            dropdownThreePlaceholder='المدينة'
            dropdownThreeName={cityName}
            dropdownTwoVal={dirCatVal.find(e => e.value == directoryCategoryId)}
            dropdownTwoHandler={directoryCategoryHandler}
            dropdownTwoPlaceholder='كل التصنيفات'
            dropdownTwoName={dirCatVal}
            dropdownOneVal={dirTypeVal.find(e => e.value == directoryTypeId)}
            dropdownOneHandler={directoryTypeHandler}
            dropdownOnePlaceholder='كل الأنواع'
            dropdownOneName={dirTypeVal}
            />
          </div>
        </Container>
        <div className="d-flex flex-wrap justify-content-around flex-column flex-sm-row">
          {props.services.result.map((item, index) => {
            return (
              <div
                className="text-center rounded-3 my-4 col-lg-3 mx-md-4 col-md-5 mx-0 col-11 p-3  bg-light"
                key={item.id}
                style={{boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 6px -1px,rgb(0 0 0 / 6%) 0px 2px 4px -1px'}}
              >
                <div className="justify-content-start d-flex my-2 text-muted">
                  <span className="py-1 px-2 fa-1x">{item.directoryTypeName}-{item.directoryCategoryName}</span>
                </div>

                <div className="justify-content-center d-flex my-2 text-muted">
                  <span className="py-1 px-2 rounded-3" style={{backgroundColor:'rgb(255 220 110 / 30%)'}}>{item.name}</span>
                </div>

                <div className="d-flex my-3">
                  <div className="mx-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faCity}
                      size={"x2"}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="mx-2">
                    {" "}
                    <a style={{ textDecoration: "none", cursor: "pointer" }}>
                      {item.address == null? item.cityName:item.address}
                    </a>
                  </div>
                </div>

                <div className="d-flex my-3">
                  <div className="mx-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faUserTie}
                      size={"x2"}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="mx-2">
                    {" "}
                    <a style={{ textDecoration: "none", cursor: "pointer" }}>
                      {item.name}
                    </a>
                  </div>
                </div>

                <div className="d-flex my-3">
                  <div className="mx-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faPhoneAlt}
                      size={"x2"}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="mx-2">
                    {" "}
                    <a style={{ textDecoration: "none", cursor: "pointer" }}>
                      {item.telephone}
                    </a>
                  </div>
                </div>

                <div className="d-flex my-3">
                  <div className="mx-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      size={"x2"}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="mx-2">
                    {" "}
                    <a style={{ textDecoration: "none", cursor: "pointer" }}>
                      {item.cityName}
                    </a>
                  </div>
                </div>

                {item.manger?<div className="d-flex my-3">
                  <div className="mx-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      size={"x2"}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="mx-2">
                    {" "}
                    <a style={{ textDecoration: "none", cursor: "pointer" }}>
                      {item.manager}
                    </a>
                  </div>
                </div>:<div className="d-none"></div>
                }

                {item.mapUrl?<div className="d-flex my-3">
                  <div className="mx-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faLink}
                      size={"x2"}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="mx-2">
                    {" "}
                    <a style={{ textDecoration: "none", cursor: "pointer" }}>
                      {item.mapUrl}
                    </a>
                  </div>
                </div>:<div className="d-none"></div>
                }     
              </div>
            );
          })}
        </div>
        {props.services.result.length?
        <div className=" justify-content-center d-flex">
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            forcePage={currentPage}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </div>:<div className="text-center mt-5">لا يوجد نتائج</div>
    }
      </>
    );}
    else{
      return <div> Loading Two </div>
    }
  }
  return <div>Loading</div>;
};
const mapStateToProps = (state) => {
  return { 
    services: state.EServicesComponents.allServices,
    cities: state.EServicesComponents.allCities,
    directoryCategories: state.EServicesComponents.allDirectoryCategories,
    directoryTypes: state.EServicesComponents.allDirectoryTypes
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getEServices,clearEServices, getAllCities, getAllDirectoryCategory, getAllDirectoryType}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EServices);
