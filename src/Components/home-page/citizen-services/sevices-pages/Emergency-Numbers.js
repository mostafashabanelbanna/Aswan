import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getEServices ,clearEServices, getAllCities, getAllDirectoryCategory, getAllDirectoryType} from "../../../../store/actions/E-Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCity, faUserTie, faPhoneAlt, faMapMarkerAlt, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {} from "../../../../Styles/EServices.css";
import { Col, Container, Row } from "react-bootstrap";
import SearchSection from "../../../ui/search-section";
import PaginationSection from "../../../ui/pagination-section";


const EmergencyNumbers = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [renderFlag, setRenderFlag] = useState(1);
  const [name, setName] = useState(null);
  const [manger, setManger] = useState(null);
  const [directoryTypeId, setDirectoryTypeId] = useState(null);
  const [directoryCategoryId, setDirectoryCategoryId] = useState(null);
  const [cityId, setCityId] = useState(null);
  

  let pageCount;
  

  const submitHandler = (e) => {
    e.preventDefault()
    props.getEServices(currentPage + 1, data({ name, manger, directoryTypeId:18, directoryCategoryId:29, cityId }))
    setCurrentPage(0);
  }

  const nameHandler = (e) => {setName(e.target.value);}
  const mangerHandler = (e) => {setManger(e.target.value);}
  const directoryTypeHandler = (e) => { setRenderFlag(0); setDirectoryTypeId(18); }
  const directoryCategoryHandler = (e) => {setDirectoryCategoryId(29);}
  const cityIdHandler = (e) => {setCityId(e.value);}

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
    if(renderFlag){
        props.getEServices(currentPage + 1, {directoryTypeId:18, directoryCategoryId:29})
    }
    if (!props.cities)
      props.getAllCities();
    
    if (!props.directoryTypes)
      props.getAllDirectoryType();
    
    props.getAllDirectoryCategory(18);
    
    setRenderFlag(1);

    return () => {
      props.clearDirectoryCategory();
      props.clearEServices();
    };

  }, [currentPage]);

  if (props.services) {
    let cityName = props.cities.result.map(({ id, nameA }) => ({ value: id, label: nameA }));
    let dirCatVal;
    if(props.directoryCategories != null){
      dirCatVal = props.directoryCategories.result.map((item) => ({ value: item.id, label: item.nameA }));
      dirCatVal.unshift({ value: null, label: "كل التصنيفات" })
    } else {
      dirCatVal = [];
      dirCatVal.push({ value: null, label: "كل التصنيفات" })
    }
    let dirTypeVal = props.directoryTypes.result.map((item) => ({ value: item.id, label: item.nameA }));
    cityName.unshift({ value: null, label: "كل المدن" })
    dirTypeVal.unshift({ value: null, label: "كل الأنواع" })
    pageCount = Math.ceil(props.services.count / 9);
    if(props.services.page==currentPage+1){
    return (
      <>
        <Container fluid>
          <div className=" container underline my-4">
            <h3>أرقام الطوارئ</h3>
          </div>
          <div className=" bg-light p-3">
            <SearchSection
            submit={submitHandler}
            TextFieldOneHandler={nameHandler}
            labelTextFieldOne='الاسم'
            classNameTextFieldOne='col-sm-6 col-12'
            TextFieldTwoHandler={mangerHandler}
            labelTextFieldTwo= 'المدير'
            classNameTextFieldTwo='col-sm-6 col-12'
            dropdownThreeVal={cityName.find(e => e.value == cityId)}
            dropdownThreeHandler={cityIdHandler}
            dropdownThreePlaceholder='المدينة'
            dropdownThreeName={cityName}
            classNameDropdownThree='col-md-4 col-sm-6 col-12'
            dropdownTwoVal={dirCatVal.find(e => e.value == 29)}
            dropdownTwoHandler={directoryCategoryHandler}
            dropdownTwoPlaceholder='كل التصنيفات'
            dropdownTwoName={dirCatVal}
            classNameDropdownTwo='col-md-4 col-sm-6 col-12'
            disableTwo={true}
            dropdownOneVal={dirTypeVal.find(e => e.value == 18)}
            dropdownOneHandler={directoryTypeHandler}
            dropdownOnePlaceholder='كل الأنواع'
            dropdownOneName={dirTypeVal}
            classNameDropdownOne='col-md-4 col-sm-6 col-12'
            disableOne={true}
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
                  <span className="py-1 px-2 rounded-3 h4" style={{backgroundColor:'rgb(255 220 110 / 30%)'}}>{item.name}</span>
                </div>

                <div className="d-flex my-3">
                  <div className="mx-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faCity}
                      size={"1x"}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="mx-2">
                    {" "}
                      {item.address == null? item.cityName:item.address}
                  </div>
                </div>

                <div className="d-flex my-3">
                  <div className="mx-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faUserTie}
                      size={"1x"}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="mx-2">
                    {" "}
                      {item.name}
                  </div>
                </div>

                <div className="d-flex my-3">
                  <div className="mx-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faPhoneAlt}
                      size={"1x"}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="mx-2">
                    {" "}
                      {item.telephone}
                  </div>
                </div>

                <div className="d-flex my-3">
                  <div className="mx-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      size={"1x"}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="mx-2">
                    {" "}
                      {item.cityName}
                  </div>
                </div>

                {item.manger?<div className="d-flex my-3">
                  <div className="mx-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      size={"1x"}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="mx-2">
                    {" "}
                      {item.manager}
                  </div>
                </div>:<div className="d-none"></div>
                }

                {item.mapUrl?<div className="d-flex my-3">
                  <div className="mx-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faLink}
                      size={"1x"}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="mx-2">
                    {" "}
                    <a style={{ textDecoration: "none", cursor: "pointer" }} href={item.mapUrl}>
                      الرابط
                    </a>
                  </div>
                </div>:<div className="d-none"></div>
                }     
              </div>
            );
          })}
        </div>
        {props.services.result.length?
        <PaginationSection 
        currentPage={currentPage}
        pageCount={pageCount}
        handlePageClick={handlePageClick}
      />:<div className="text-center mt-5">لا يوجد نتائج</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyNumbers);