import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAppointments,
  getAppointmentsTypes,
} from "../../store/actions/appointment-action";
import { bindActionCreators } from "redux";
import PaginationSection from "../ui/pagination-section";
import ListWithImage from "../ui/list-with-image";
import { paths } from "../../paths/paths";
import ListSkeleton from "../loading-skeleton/list-skiliton";
import { Container } from "react-bootstrap";
import moment from "moment";
import "moment/locale/ar";
import SearchSection from "../ui/search-section";

const FilterAppointment = (props) => {
  const info = props.match.params.info;
  const [currentPage, setCurrentPage] = useState(0);
  const [title, setTitle] = useState(null);
  const [appointmentDateFrom, setAppointmentDateFrom] = useState(null);
  const [appointmentDateTo, setAppointmentDateTo] = useState(null);
  const [appointmentTypeId, setAppointmentTypeId] = useState(parseInt(info));

  let dataFilled = {
    title,
    appointmentDateFrom,
    appointmentDateTo,
    appointmentTypeId,
  };

  let pageCount;
  useEffect(() => {
    props.getAppointments(currentPage + 1, {
      appointmentTypeId: parseInt(info),
    });
    if (!props.apointmenttypes) props.getAppointmentsTypes();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    setCurrentPage(0);
    props.getAppointments(currentPage + 1, data(dataFilled));
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const typeHandler = (e) => {
    setAppointmentTypeId(e.value);
  };
  const publishFromHandler = (dateChanged) =>
    setAppointmentDateFrom(
      moment(new Date(dateChanged._d).toLocaleDateString(), "MM-DD-YYYY")
        .format("YYYY-MM-DD")
        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    );
  const publishToHandler = (dateChanged) =>
    setAppointmentDateTo(
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
    setCurrentPage(selectedPage);
  };

  let typesName = [];
  if (props?.apointmenttypes?.result) {
    typesName = props.apointmenttypes.result.map(({ id, nameA }) => ({
      value: id,
      label: nameA,
    }));
    typesName.unshift({ value: null, label: "كل الانواع" });
  }

  const render = () => {
    if (props?.apointment?.result) {
      pageCount = Math.ceil(props.apointment.count / 9);
      return (
        <>
          <div className="container mt-5">
            <div className="row ">
              {props.apointment.result.length ? (
                props.apointment.result.map((item) => {
                  let pName;
                  let newPath;
                  if (item.photo != null) {
                    pName = item.photo;
                    newPath = pName.replaceAll(" ", "%20");
                  }
                  return (
                    <div className="mb-4 col-md-6 col-xl-4 col-12">
                      <Link
                        id="link"
                        to={`/appointmentdetails/${item.id}`}
                        className="h-100"
                      >
                        <ListWithImage
                          imgSrc={paths.Appointment + item.id + "/" + newPath}
                          title={item.title}
                          date={`${moment(
                            new Date(item.appointmentDate)
                          ).format("LL")}`}
                          category={item.appointmentTypeName}
                          imgHeight="200px"
                          hoverTitle="hoverTitle h-100"
                          // divHeight="25rem"
                        />
                      </Link>
                    </div>
                  );
                })
              ) : (
                <div className="text-center my-5">جاري رفع البيانات</div>
              )}
            </div>
          </div>

          <PaginationSection
            currentPage={currentPage}
            pageCount={pageCount}
            handlePageClick={handlePageClick}
          />
        </>
      );
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
        <div className=" container underline mt-3 mb-5">
          <h3>لقاءات و قرارات السيد المحافظ</h3>
        </div>
      </Container>
      <SearchSection
        submit={submitHandler}
        TextFieldOneHandler={titleHandler}
        labelTextFieldOne="العنوان"
        classNameTextFieldOne="col-lg-3 col-md-6 mt-md-4 mt-0 col-12"
        dropdownOneVal={typesName.find((e) => e.value == appointmentTypeId)}
        dropdownOneHandler={typeHandler}
        dropdownOneName={typesName}
        dropdownOnePlaceholder="القسم"
        classNameDropdownOne="col-lg-3 col-md-6 mt-md-4 mt-0 col-12"
        publishDateFrom={appointmentDateFrom}
        publishFromHandler={publishFromHandler}
        classNameDPFrom="col-lg-3 col-md-6 mt-md-2 mt-0 col-12"
        publishDateTo={appointmentDateTo}
        publishToHandler={publishToHandler}
        classNameDPTo="col-lg-3 col-md-6 mt-md-2 mt-0 col-12"
      />
      {render()}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    apointment: state.GovernerComponents.apointment,
    apointmenttypes: state.GovernerComponents.apointmenttypes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getAppointments, getAppointmentsTypes },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterAppointment);
