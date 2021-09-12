import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getAdvertisements,
  clearAdvertisements,
  getAllAdvertisementTypes
} from "../../store/actions/E-Services";
import { Col, Container, Row } from "react-bootstrap";
import moment from "moment";
import "moment/locale/ar";
import SearchSection from "../ui/search-section";
import PaginationSection from "../ui/pagination-section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const Advertisements = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flag, setFlag] = useState(0);
  const [title, setTitle] = useState(null);
  const [advertismentTypeId, setAdvertismentTypeId] = useState(null);
  const [publishDateFrom, setPublishDateFrom] = useState(null);
  const [publishDateTo, setPublishDateTo] = useState(null);

  let dataFilled = {
    title,
    advertismentTypeId,
    publishDateFrom,
    publishDateTo,
  };
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault();
    props.newsList(currentPage + 1, data(dataFilled));
    setFlag(1);
    setCurrentPage(0);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const advHandler = (e) => {
    setAdvertismentTypeId(e.value);
  };
  const publishFromHandler = (dateChanged) =>
    setPublishDateFrom(
      moment(new Date(dateChanged._d).toLocaleDateString(), "MM-DD-YYYY")
        .format("YYYY-MM-DD")
        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    );
  const publishToHandler = (dateChanged) =>
    setPublishDateTo(
      moment(new Date(dateChanged._d).toLocaleDateString(), "MM-DD-YYYY")
        .format("YYYY-MM-DD")
        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    );

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
    props.clearAdvertisements();
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    if (flag)
      check(dataFilled) == false
        ? props.getAdvertisements(currentPage + 1)
        : props.getAdvertisements(currentPage + 1, data(dataFilled));
    else props.getAdvertisements(currentPage + 1);

  }, [currentPage]);

  if (props.advertisementsList && props.advertisementTypes) {
    console.log(props.advertisementsList);
    console.log(props.advertisementTypes)
    let advName = props.advertisementTypes.result.map(({ id, nameA }) => ({
      value: id,
      label: nameA,
    }));
    advName.unshift({ value: null, label: "كل الفئات" });
    pageCount = Math.ceil(props.advertisementsList.count / 9);
    if(props.advertisementsList.page == currentPage + 1){
    return (
      <>
        <Container fluid>
          <div className=" container underline  my-4">
            <h3>إعلانات ومناقصات</h3>
          </div>
          <div className=" bg-light p-3">
            <SearchSection
              submit={submitHandler}
              TextFieldOneHandler={titleHandler}
              labelTextFieldOne="العنوان"
              classNameTextFieldOne="col-sm-4 col-12"
              dropdownOneVal={advName.find(
                (e) => e.value == advertismentTypeId
              )}
              dropdownOneHandler={advHandler}
              dropdownOneName={advName}
              dropdownOnePlaceholder="الفئة"
              classNameDropdownOne="col-sm-4 col-12"
              publishDateFrom={publishDateFrom}
              publishFromHandler={publishFromHandler}
              classNameDPFrom="col-sm-2 col-6"
              publishDateTo={publishDateTo}
              publishToHandler={publishToHandler}
              classNameDPTo="col-sm-2 col-6"
            />
          </div>
        </Container>
        <div className="d-flex flex-wrap justify-content-around flex-column flex-sm-row">
          {props.advertisementsList.result.map((item, index) => {
            return (
              <div
                className="text-center rounded-3 my-4 col-lg-3 mx-md-4 col-md-5 mx-0 col-11 p-3  bg-light"
                key={item.id}
                style={{boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 6px -1px,rgb(0 0 0 / 6%) 0px 2px 4px -1px'}}
              >
                <div className="justify-content-center d-flex my-2 text-muted">
                  <span className="py-1 px-2 rounded-3 h4" style={{backgroundColor:'rgb(255 220 110 / 30%)'}}>{item.advertismentTypeName}</span>
                </div>

                <div className="justify-content-start d-flex my-2 text-muted">
                  <span className="py-1 px-2 fa-1x">{item.description}</span>
                </div>

                {item.publishDate?<div className="d-flex my-3">
                  <div className="mx-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      size={"2x"}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="mx-2">
                    {" "}
                    <a style={{ textDecoration: "none", cursor: "pointer" }}>
                      {item.publishDate}
                    </a>
                  </div>
                </div>:<div className="d-none"></div>
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
      />:<div className="text-center mt-5">لا يوجد نتائج</div>
    }
      </>
    );} else {
      return <div> Loading Two </div>
    }
  }
  return <div>Loading</div>;
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    advertisementsList: state.EServicesComponents.allAdvertisements,
    advertisementTypes: state.EServicesComponents.allAdvertisementTypes
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getAdvertisements, clearAdvertisements, getAllAdvertisementTypes },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Advertisements);
