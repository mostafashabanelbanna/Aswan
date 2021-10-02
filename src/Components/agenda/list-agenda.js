import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getEventsList,
  clearEventsList,
  getEventsSectors,
  getEventsTypes,
} from "../../store/actions/events-actions";
import { Container } from "react-bootstrap";
import moment from "moment";
import "moment/locale/ar";
import SearchSection from "../ui/search-section";
import PaginationSection from "../ui/pagination-section";
import ListSkeleton from "../loading-skeleton/list-skiliton";
import ListWithImage from "../ui/list-with-image";
import { paths } from "../../paths/paths";
import { Link } from "react-router-dom";

const AgendaList = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flag, setFlag] = useState(0);
  const [title, setTitle] = useState(null);
  const [eventStartDateFrom, setEventStartDateFrom] = useState(null);
  const [eventStartDateTo, setEventStartDateTo] = useState(null);
  const [eventEndDateFrom, setEventEndDateFrom] = useState(null);
  const [eventEndDateTo, setEventEndDateTo] = useState(null);
  const [eventTypeId, setEventTypeId] = useState(null);
  const [sectorId, setSectorId] = useState(null);

  let dataFilled = {
    title,
    eventStartDateFrom,
    eventStartDateTo,
    eventEndDateFrom,
    eventEndDateTo,
    eventTypeId,
    sectorId,
  };
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault();
    props.getEventsList(currentPage + 1, data(dataFilled));
    setFlag(1);
    setCurrentPage(0);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const eventTypeHandler = (e) => {
    setEventTypeId(e.value);
  };

  const sectorHandler = (e) => {
    setSectorId(e.value);
  };

  const eventStartDateFromHandler = (dateChanged) =>
    setEventStartDateFrom(
      moment(new Date(dateChanged._d).toLocaleDateString(), "MM-DD-YYYY")
        .format("YYYY-MM-DD")
        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    );

  const eventStartDateToHandler = (dateChanged) =>
    setEventStartDateTo(
      moment(new Date(dateChanged._d).toLocaleDateString(), "MM-DD-YYYY")
        .format("YYYY-MM-DD")
        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    );

  const eventEndDateFromHandler = (dateChanged) =>
    setEventEndDateFrom(
      moment(new Date(dateChanged._d).toLocaleDateString(), "MM-DD-YYYY")
        .format("YYYY-MM-DD")
        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    );

  const eventEndDateToHandler = (dateChanged) =>
    setEventEndDateTo(
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
    props.clearEventsList();
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    if (flag)
      check(dataFilled) == false
        ? props.getEventsList(currentPage + 1)
        : props.getEventsList(currentPage + 1, data(dataFilled));
    else props.getEventsList(currentPage + 1);

    if (!props.eventsSectors) props.getEventsSectors();

    if (!props.eventsTypes) props.getEventsTypes();

    return () => {
      props.clearEventsList();
    };
  }, [currentPage]);

  if (props?.eventsList?.result && props?.eventsSectors?.result && props?.eventsTypes?.result) {
    let eventsTypeName = props.eventsTypes.result.map(({ id, nameA }) => ({
      value: id,
      label: nameA,
    }));
    eventsTypeName.unshift({ value: null, label: "كل الأنواع" });

    let eventsSectorName = props.eventsSectors.result.map(({ id, nameA }) => ({
      value: id,
      label: nameA,
    }));
    eventsSectorName.unshift({ value: null, label: "كل التصنيفات" });
    pageCount = Math.ceil(props.eventsList.count / 9);
    if (props.eventsList.page == currentPage + 1) {
      return (
        <>
          <Container fluid>
            <div className=" container underline  my-5">
              <h3>الأحداث</h3>
            </div>
          </Container>
              <SearchSection
                submit={submitHandler}
                TextFieldOneHandler={titleHandler}
                labelTextFieldOne="العنوان"
                classNameTextFieldOne="col-md-4 mt-md-4 mt-3 mb-md-3 mb-0 col-12"
                dropdownOneVal={eventsTypeName.find(
                  (e) => e.value == eventTypeId
                )}
                dropdownOneHandler={eventTypeHandler}
                dropdownOnePlaceholder="كل الأنواع"
                dropdownOneName={eventsTypeName}
                classNameDropdownOne="col-md-4 col-12"

                dropdownTwoVal={eventsSectorName.find(
                  (e) => e.value == sectorId
                )}
                dropdownTwoHandler={sectorHandler}
                dropdownTwoPlaceholder="كل التصنيفات"
                dropdownTwoName={eventsSectorName}
                classNameDropdownTwo="col-md-4 col-12"

                publishDateFrom={eventStartDateFrom}
                publishFromHandler={eventStartDateFromHandler}
                classNameDPFrom="col-md-3 col-sm-6 col-12 mt-0"
                DPFromLabel='تاريخ بداية الحدث من'

                publishDateTo={eventStartDateTo}
                publishToHandler={eventStartDateToHandler}
                classNameDPTo="col-md-3 col-sm-6 col-12 mt-0"
                DPToLabel='تاريخ بداية الحدث إلى'
                
                endDateFrom={eventEndDateFrom}
                endDateFromHandler={eventEndDateFromHandler}
                classNameEDFTo="col-md-3 col-sm-6 col-12 mt-0"
                EDFToLabel='تاريخ نهاية الحدث من'

                endDateTo={eventEndDateTo}
                endDateToHandler={eventEndDateToHandler}
                classNameEDTTo="col-md-3 col-sm-6 col-12 mt-0"
                EDTToLabel='تاريخ نهاية الحدث إلى'
                
              />
          <div className="d-flex container flex-wrap justify-content-around flex-column flex-sm-row">
            {props.eventsList.result.map((item, index) => {
              let slicedBrief = item.brief;
              if (item.brief !== null && item.brief.length > 150) {
                const brief = item.brief;
                slicedBrief = brief.substring(0, 140).concat(" ...");
              }

              let pName;
              let newPath;
              if (item.photo != null) {
                pName = item.photo;
                newPath = pName.replaceAll(" ", "%20");
              }
              return (
                <div
                  style={{ cursor: "pointer" }}
                  className="mb-4 col-lg-4 col-sm-6 col-12 p-3"
                >
                  <Link id='link'
                    to={`/eventdetails/${item.id}`}
                    className="h-100 text-decoration-none"
                  >
                    <ListWithImage
                      imgSrc={paths.EventsPhotos + item.id + "/" + item.photo}
                      title={item.title}
                      date={`${moment(new Date(item.startDateTime)).format(
                        "LL"
                      )} إلى ${moment(new Date(item.endDateTime)).format(
                        "LL"
                      )}`}
                      category={item.sectorName}
                      content={slicedBrief}
                      center="yes"
                      imgHeight="250px"
                      hoverTitle="hoverTitle"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
          {props.eventsList.result.length ? (
            <PaginationSection
              currentPage={currentPage}
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />
          ) : (
            <div className="text-center my-5">لا يوجد نتائج</div>
          )}
        </>
      );
    }
  }
  return <ListSkeleton />;
};
const mapStateToProps = (state) => {
  return {
    eventsList: state.eventsComponents.eventsList,
    eventsTypes: state.eventsComponents.eventsTypes,
    eventsSectors: state.eventsComponents.eventsSectors,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getEventsList, clearEventsList, getEventsSectors, getEventsTypes },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AgendaList);
