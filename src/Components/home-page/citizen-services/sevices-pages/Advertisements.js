import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getAdvertisements,
  clearAdvertisements,
  getAllAdvertisementTypes,
} from "../../../../store/actions/E-Services";
import { Col, Container, Row } from "react-bootstrap";
import moment from "moment";
import "moment/locale/ar";
import SearchSection from "../../../ui/search-section";
import PaginationSection from "../../../ui/pagination-section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import ListSkeleton from "../../../loading-skeleton/list-skiliton";

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
    setCurrentPage(0);
    props.getAdvertisements(currentPage + 1, data(dataFilled));
    setFlag(1);
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

    if (!props.advertisementTypes) props.getAllAdvertisementTypes();
    return () => {
      props.clearAdvertisements();
    };
  }, [currentPage]);

  let advName = [];
  if (props?.advertisementTypes?.result) {
    advName = props.advertisementTypes.result.map(({ id, nameA }) => ({
      value: id,
      label: nameA,
    }));
    advName.unshift({ value: null, label: "كل الفئات" });
  }

  const render = () => {
    if (props?.advertisementsList?.result) {
      pageCount = Math.ceil(props.advertisementsList.count / 9);
      if (props.advertisementsList.page == currentPage + 1) {
        return (
          <>
            <div className="container d-flex flex-wrap justify-content-around flex-column flex-sm-row">
              {props.advertisementsList.result.map((item, index) => {
                let slicedDescription = item.description;
                if (
                  item.description !== null &&
                  item.description.length > 500
                ) {
                  const desc = item.description;
                  slicedDescription = desc.substring(0, 490).concat(" ...");
                }

                return (
                  <div
                    className="holder text-center rounded-3 my-5 col-lg-3 mx-md-4 col-md-5 mx-0 col-11 bg-light"
                    key={item.id}
                  >
                    {item.advertismentTypeName ? (
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
                          {item.advertismentTypeName}
                        </span>
                      </div>
                    ) : null}

                    <div className="justify-content-start d-flex my-2">
                      <span className="py-1 px-2 fa-1x">
                        {slicedDescription}
                      </span>
                    </div>

                    {item.publishDate ? (
                      <div className="d-flex my-3">
                        <div className="mx-2">
                          {" "}
                          <FontAwesomeIcon
                            icon={faCalendarAlt}
                            size={"1x"}
                          ></FontAwesomeIcon>
                        </div>
                        <div className="mx-2">
                          {" "}
                          <a
                            style={{
                              textDecoration: "none",
                              cursor: "pointer",
                            }}
                          >
                            {`${moment(new Date(item.publishDate)).format(
                              "LL"
                            )}`}
                          </a>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
            {props.advertisementsList.result.length ? (
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
        <div className=" container underline  my-3">
          <h3>إعلانات ومناقصات</h3>
        </div>
      </Container>
      <SearchSection
        submit={submitHandler}
        TextFieldOneHandler={titleHandler}
        labelTextFieldOne="العنوان"
        classNameTextFieldOne="col-lg-3 col-md-6 col-12"
        dropdownOneVal={advName.find((e) => e.value == advertismentTypeId)}
        dropdownOneHandler={advHandler}
        dropdownOneName={advName}
        dropdownOnePlaceholder="الفئة"
        classNameDropdownOne="col-lg-3 col-md-6 col-12"
        publishDateFrom={publishDateFrom}
        publishFromHandler={publishFromHandler}
        classNameDPFrom="col-lg-3 col-md-6 col-12"
        publishDateTo={publishDateTo}
        publishToHandler={publishToHandler}
        classNameDPTo="col-lg-3 col-md-6 col-12"
      />
      {render()}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    advertisementsList: state.EServicesComponents.allAdvertisements,
    advertisementTypes: state.EServicesComponents.allAdvertisementTypes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getAdvertisements, clearAdvertisements, getAllAdvertisementTypes },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Advertisements);

/*
              // let date = new Date(item.publishDate.split('T')[0]);
              // let months = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
              //   "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
              // ];
              // let days = ["اﻷحد", "اﻷثنين", "الثلاثاء", "اﻷربعاء", "الخميس", "الجمعة", "السبت"];
              // let delDateString = days[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()] + ', ' + date.getFullYear();
            */
