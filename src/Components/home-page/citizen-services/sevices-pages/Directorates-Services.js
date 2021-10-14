import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getDirectorates,
  clearDirectorates,
} from "../../../../store/actions/E-Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faPhoneAlt,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {} from "../../../../Styles/EServices.css";
import { Container } from "react-bootstrap";
import SearchSection from "../../../ui/search-section";
import PaginationSection from "../../../ui/pagination-section";
import ListSkeleton from "../../../loading-skeleton/list-skiliton";
import { Link } from "react-router-dom";

const Directorates = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flag, setFlag] = useState(0);
  const [name, setName] = useState(null);
  const [manager, setManager] = useState(null);

  let dataFilled = { name, manager };
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault();
    props.getDirectorates(currentPage + 1, data(dataFilled));
    setFlag(1);
    setCurrentPage(0);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const managerHandler = (e) => {
    setManager(e.target.value);
  };

  function check(a) {
    let flag = 0;
    for (let property in a) {
      if (a[property] != null) {
        flag = 1;
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
    props.clearDirectorates();
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    if (flag)
      check(dataFilled) == false
        ? props.getDirectorates(currentPage + 1)
        : props.getDirectorates(currentPage + 1, data(dataFilled));
    else props.getDirectorates(currentPage + 1);

    return () => {
      props.clearDirectorates();
    };
  }, [currentPage]);

  if (props?.directorates?.result) {
    pageCount = Math.ceil(props.directorates.count / 9);
    if (props.directorates.page == currentPage + 1) {
      return (
        <>
          <Container fluid>
            <div className=" container underline  my-5">
              <h3>خدمات المديريات</h3>
            </div>
          </Container>
          <SearchSection
            submit={submitHandler}
            TextFieldOneHandler={nameHandler}
            labelTextFieldOne="الاسم"
            classNameTextFieldOne="col-md-10 mb-0 mb-md-3 col-12"
            // TextFieldTwoHandler={managerHandler}
            // labelTextFieldTwo="المدير"
            // classNameTextFieldTwo="col-sm-6 col-12"
            classNameBtn="col-md-2 col-12"
          />
          <div className="container d-flex flex-wrap justify-content-around flex-column flex-sm-row">
            {props.directorates.result.map((item, index) => {
              return (
                <div
                  className="holder custom-holder text-center rounded-3 my-5 col-lg-3 mx-md-4 col-md-5 mx-0 col-11 bg-light"
                  key={item.id}
                >
                  {item.sector ? (
                    <div className="justify-content-end d-flex my-3">
                      <span
                        className="py-1 px-2 fa-1x"
                        style={{
                          backgroundColor: "rgb(6, 73, 106)",
                          color: "white",
                          borderTopRightRadius: "5px",
                          borderBottomRightRadius: "5px",
                        }}
                      >
                        {item.sector}
                      </span>
                    </div>
                  ) : null}
                  <Link
                    id="link"
                    to={`/directorates/${item.id}/${item.name}`}
                    // to="/statichome/2001/aboutgovernment/2001/investor"
                    className="justify-content-center d-flex my-2"
                  >
                    <span className="py-1 px-2 rounded-3 h4">{item.name}</span>
                  </Link>
                  {item.manager ? (
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
                  ) : null}
                  {item.telephone || item.fax ? (
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
                  ) : null}

                  {item.address ? (
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
                  ) : null}

                  {item.email ? (
                    <div className="d-flex my-3">
                      <div className="mx-2">
                        {" "}
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          size={"1x"}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="mx-2"> {item.email}</div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          {props.directorates.result.length ? (
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
    directorates: state.EServicesComponents.allDirectorates,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getDirectorates, clearDirectorates }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Directorates);
