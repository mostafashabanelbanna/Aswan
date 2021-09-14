import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getDirectorates, clearDirectorates} from "../../../../store/actions/E-Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faPhoneAlt, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {} from "../../../../Styles/EServices.css";
import { Container } from "react-bootstrap";
import SearchSection from "../../../ui/search-section";
import PaginationSection from "../../../ui/pagination-section";
import ListSkeleton from "../../../loading-skeleton/list-skiliton";


const Directorates = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flag, setFlag] = useState(0);
  const [name, setName] = useState(null);
  const [manager, setManager] = useState(null);

  let dataFilled = { name, manager }
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault()
    props.getDirectorates(currentPage + 1, data(dataFilled))
    setFlag(1)
    setCurrentPage(0);
  }

  const nameHandler = (e) => {setName(e.target.value);}
  const managerHandler = (e) => {setManager(e.target.value);}

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
    props.clearDirectorates();
    setCurrentPage(selectedPage)
  };

  useEffect(() => {
    if (flag)
      check(dataFilled) == false ? props.getDirectorates(currentPage + 1) : props.getDirectorates(currentPage + 1, data(dataFilled));
    else
      props.getDirectorates(currentPage + 1)

    return () => {
      props.clearDirectorates();
    }
  }, [currentPage]);

  if (props.directorates) {
    pageCount = Math.ceil(props.directorates.count / 9);
    if(props.directorates.page == currentPage + 1){
    return (
      <>
        <Container fluid>
          <div className=" container underline  my-4">
            <h3>خدمات المديريات</h3>
          </div>
          <div className=" bg-light p-3">
            <SearchSection
            submit={submitHandler}
            TextFieldOneHandler={nameHandler}
            labelTextFieldOne='الاسم'
            classNameTextFieldOne='col-sm-6 col-12'
            TextFieldTwoHandler={managerHandler}
            labelTextFieldTwo='المدير'
            classNameTextFieldTwo='col-sm-6 col-12'
            />
          </div>
        </Container>
        <div className="d-flex flex-wrap justify-content-around flex-column flex-sm-row">
          {props.directorates.result.map((item, index) => {
            return (
              <div
                className="text-center rounded-3 my-4 col-lg-3 mx-md-4 col-md-5 mx-0 col-11 p-3  bg-light"
                key={item.id}
                style={{
                  boxShadow:
                    "rgb(0 0 0 / 10%) 0px 4px 6px -1px,rgb(0 0 0 / 6%) 0px 2px 4px -1px",
                }}
              >
                <div className="justify-content-center d-flex my-2 text-muted">
                  <span
                    className="py-1 px-2 rounded-3 h4"
                    style={{ backgroundColor: "rgb(255 220 110 / 30%)" }}
                  >
                    {item.name}
                  </span>
                </div>

                <div className="d-flex my-3">
                  <div className="mx-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faUserTie}
                      size={"1x"}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="mx-2"> {item.manager}</div>
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
                      {item.telephone == null ? item.fax : item.telephone}
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
                  <div className="mx-2"> {item.address}</div>
                </div>

                {item.email?<div className="d-flex my-3">
                  <div className="mx-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size={"1x"}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="mx-2"> {item.email}</div>
                </div>:<div className='d-none'></div>
                }

              </div>
            );
          })}
        </div>
        {props.directorates.result.length?
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
  return <ListSkeleton/>;
};
const mapStateToProps = (state) => {
  return { 
    directorates: state.EServicesComponents.allDirectorates
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getDirectorates, clearDirectorates }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Directorates);
