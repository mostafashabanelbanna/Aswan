import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getTribe,
  clearTribe,
  getAllCities,
} from "../../../../store/actions/local-leaders-actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCity,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {} from "../../../../Styles/EServices.css";
import { Container } from "react-bootstrap";
import SearchSection from "../../../ui/search-section";
import PaginationSection from "../../../ui/pagination-section";
import ListSkeleton from "../../../loading-skeleton/list-skiliton";

const Tribe = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flag, setFlag] = useState(1);
  const [name, setName] = useState(null);
  const [cityId, setCityId] = useState(null);

  let dataFilled = { name, cityId };
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault();
    props.getTribe(currentPage + 1, data(dataFilled));
    setFlag(1);
    setCurrentPage(0);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
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

  const handlePageClick = ({ selected: selectedPage }) => {
    props.clearTribe();
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    if (flag)
      check(dataFilled) == false
        ? props.getTribe(currentPage + 1)
        : props.getTribe(currentPage + 1, data(dataFilled));
    else props.getTribe(currentPage + 1);

    if (!props.allCities) props.getAllCities();

    setFlag(1);

    return () => {
      props.clearTribe();
    };
  }, [currentPage]);

  if (props?.allTribe?.result) {
    let cityName = props.allCities.result.map(({ id, name }) => ({
      value: id,
      label: name,
    }));
    pageCount = Math.ceil(props.allTribe.count / 9);
    if (props.allTribe.page == currentPage + 1) {
      return (
        <>
          <Container fluid>
            <div className=" container underline  my-5">
              <h3>شيوخ القبائل</h3>
            </div>
            <div className=" bg-light p-3">
              <SearchSection
                submit={submitHandler}
                TextFieldOneHandler={nameHandler}
                labelTextFieldOne="الاسم"
                classNameTextFieldOne="col-sm-6 col-12"
                dropdownOneVal={cityName.find((e) => e.value == cityId)}
                dropdownOneHandler={cityIdHandler}
                dropdownOnePlaceholder="كل المدن"
                dropdownOneName={cityName}
                classNameDropdownOne="col-sm-6 col-12"
              />
            </div>
          </Container>
          <div className="col-10 mx-auto my-5 d-flex flex-wrap justify-content-around flex-column flex-sm-row">
            {props.allTribe.result.map((item, index) => {
              return (
                <div className="col-md-6">
                  <div
                    className="row p-2 m-2"
                    style={{
                      color: "var(--primary-color)",
                      boxShadow: "3px 4px 16px 6px rgb(179 179 179 / 36%)",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="col-8">
                      <div className="row">
                        <div
                          className="col-12 my-3 pe-3"
                          style={{
                            color: "var(--secondary-color)",
                            fontSize: "1.3rem",
                          }}
                        >
                          {item.name}
                        </div>
                        <div className="d-flex my-3">
                                <div className="mx-2">
                                {" "}
                                <FontAwesomeIcon
                                    icon={faCity}
                                    size={"1x"}
                                ></FontAwesomeIcon>
                                </div>
                            <div className="mx-2"> {item.cityName}</div>
                        </div>

                        <div className="d-flex my-3">
                                <div className="mx-2">
                                {" "}
                                <FontAwesomeIcon
                                    icon={faPhoneAlt}
                                    size={"1x"}
                                ></FontAwesomeIcon>
                                </div>
                            <div className="mx-2"> {item.number}</div>
                        </div>

                        <div className="d-flex my-3">
                                <div className="mx-2">
                                {" "}
                                <FontAwesomeIcon
                                    icon={faMapMarkerAlt}
                                    size={"1x"}
                                ></FontAwesomeIcon>
                                </div>
                            <div className="mx-2"> {item.location}</div>
                        </div>

                      </div>
                    </div>

                    {item.photo?
                    <div className="col-4 d-flex align-items-center">
                      <div>
                        <img
                          src="http://41.128.217.177:10085/Upload/Tribe/Photo/4/علي مساعيد.jpg"
                          style={{ borderRadius: "8px" }}
                          className="img-fluid"
                        />
                      </div>
                    </div>:
                    <div className="col-4 d-flex align-items-center">
                    <div>
                      <img
                        src='./images/DefaultUser.png'
                        style={{ borderRadius: "8px" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>}
                  </div>
                </div>
              );
            })}
          </div>
          {props.allTribe.result.length ? (
            <PaginationSection
              currentPage={currentPage}
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />
          ) : (
            <div className="text-center mt-5">لا يوجد نتائج</div>
          )}
        </>
      );
    } else {
      return <div> Loading Two </div>;
    }
  }
  return <ListSkeleton/>;
};
const mapStateToProps = (state) => {
  return {
    allTribe: state.LocalLeadersComponents.allTribe,
    allCities: state.LocalLeadersComponents.allCities,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getTribe, clearTribe, getAllCities }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tribe);
