import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getEServiceDirectories, clearEServiceDirectories, getAllServiceDirectoryTypes} from "../../../../store/actions/E-Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {} from "../../../../Styles/EServices.css";
import { Container } from "react-bootstrap";
import SearchSection from "../../../ui/search-section";
import PaginationSection from "../../../ui/pagination-section";
import ListSkeleton from "../../../loading-skeleton/list-skiliton";


const TechCenterServices = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flag, setFlag] = useState(1);
  const [name, setName] = useState(null);
  const [serviceCategoryId, setServiceDirectories] = useState(null);

  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault()
    props.getEServiceDirectories(currentPage + 1, data({ name, serviceCategoryId:4 }))
    setFlag(1)
    setCurrentPage(0);
  }

  const nameHandler = (e) => {setName(e.target.value);}
  const serviceDirectoriesHandler = (e) => {setServiceDirectories(4);}

  function data(a) {
    for (let property in a) {
      if (a[property] == null)
        delete a[property];

    }
    return a;
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    props.clearEServiceDirectories();
    setCurrentPage(selectedPage)
  };

  useEffect(() => {
    if(flag){
        props.getEServiceDirectories(currentPage + 1, data({ serviceCategoryId:4 }));
    }

    if (!props.serviceTypes)
      props.getAllServiceDirectoryTypes();

    setFlag(1);

    return () => {
      props.clearEServiceDirectories();
    };
  }, [currentPage]);

  if (props?.serviceDirectories?.result) {
    let serviceDirVal;
    if(props.serviceTypes != null){
        serviceDirVal = props.serviceTypes.result.map((item) => ({ value: item.id, label: item.nameA }));
        serviceDirVal.unshift({ value: null, label: "كل الخدمات" })
    } else {
        serviceDirVal = [];
        serviceDirVal.push({ value: null, label: "كل الخدمات" })
    }
    pageCount = Math.ceil(props.serviceDirectories.count / 9);
    if(props.serviceDirectories.page == currentPage + 1){
    return (
      <>
        <Container fluid>
          <div className=" container underline  my-5">
            <h3>خدمات المراكز التكنولوجية</h3>
          </div>
          </Container>
            <SearchSection
            submit={submitHandler}
            TextFieldOneHandler={nameHandler}
            labelTextFieldOne='الاسم'
            classNameTextFieldOne='col-md-5 col-12'
            dropdownOneVal={serviceDirVal.find(e => e.value == 4)}
            dropdownOneHandler={serviceDirectoriesHandler}
            dropdownOnePlaceholder='كل الخدمات'
            dropdownOneName={serviceDirVal}
            classNameDropdownOne='col-md-5 mt-4 mb-md-3 mb-0 col-12'
            classNameBtn='col-md-2 col-12'
            />
        <div className="container d-flex flex-wrap justify-content-around flex-column flex-sm-row">
          {props.serviceDirectories.result.map((item, index) => {
            return (
              <div
                className="holder text-center rounded-3 my-5 col-lg-3 mx-md-4 col-md-5 mx-0 col-11 p-3  bg-light"
                key={item.id}
              >
                <div className="justify-content-start d-flex my-2 ">
                  <span className="py-1 px-2 fa-1x">{item.serviceCategoryName}</span>
                </div>

                <div className="justify-content-center d-flex my-2 ">
                  <span className="py-1 px-2 rounded-3 h4" style={{backgroundColor: 'rgb(6, 73, 106)',color: 'white'}}>{item.name}</span>
                </div>

                {item.url?<div className="d-flex my-3 ">
                  <div className="mx-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faLink}
                      size={"1x"}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="mx-2">
                    {" "}
                    <a className=' text-decoration-none' style={{ textDecoration: "none", cursor: "pointer" }} href={item.mapUrl} target='_blank'>
                    {item.mapUrl}
                    </a>
                  </div>
                </div>:null
                }     
              </div>
            );
          })}
        </div>
        {props.serviceDirectories.result.length?
        <PaginationSection 
        currentPage={currentPage}
        pageCount={pageCount}
        handlePageClick={handlePageClick}
      />:<div className="text-center my-5">جاري رفع البيانات</div>
    }
      </>
    );}
  }
  return <ListSkeleton/>;
};
const mapStateToProps = (state) => {
  return { 
    serviceDirectories: state.EServicesComponents.allServiceDirectories,
    serviceTypes: state.EServicesComponents.allServiceDirectoryTypes
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getEServiceDirectories, clearEServiceDirectories, getAllServiceDirectoryTypes }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TechCenterServices);
