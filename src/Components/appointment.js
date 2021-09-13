import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAppointments,getAppointmentsTypes } from "../store/actions/appointment-action";
import ListWithImage from "./ui/list-with-image";
import SearchSection from "./ui/search-section";
import moment from "moment";
import "moment/locale/ar";
import { paths } from "../paths/paths";
import { Link } from "react-router-dom";
import PaginationSection from "./ui/pagination-section";
const Appointment = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [title, setTitle] = useState(null);
  const [flag, setFlag] = useState(0);
  const [appointmentDateFrom, setAppointmentDateFrom] = useState(null);
  const [appointmentDateTo, setAppointmentDateTo] = useState(null);
  const [appointmentTypeId, setAppointmentTypeId] = useState(null);
  let dataFilled = {
    title,
    appointmentDateFrom,
    appointmentDateTo,
    appointmentTypeId,
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
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault();
     props.getAppointments(currentPage + 1, data(dataFilled));
    setFlag(1);
    setCurrentPage(0);
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

    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
      };
  useEffect(() => {
    if (flag)
      check(dataFilled) == false
        ? props.getAppointments(currentPage + 1)
        : props.getAppointments(currentPage + 1, data(dataFilled));
    else props.getAppointments(currentPage + 1);
    if (!props.apointmenttypes) props.getAppointmentsTypes();
  }, [currentPage]);

  if(props.apointment&&props.apointmenttypes){
    pageCount = Math.ceil(props.apointment.count / 9);
    let typesName = props.apointmenttypes.result.map(({ id, nameA }) => ({
        value: id,
        label: nameA,
      }));
      typesName.unshift({ value: null, label: "كل الانواع" });
  
  return (
    <>
      <div className=" container underline  my-4">
        <h3> لقاءات و قرارات السيد المحافظ </h3>
      </div>
      <div className="container-fluid bg-light">
        <SearchSection
          submit={submitHandler}
          TextFieldOneHandler={titleHandler}
          labelTextFieldOne="العنوان"
          classNameTextFieldOne="col-sm-6 col-12"
           dropdownOneVal={typesName.find((e) => e.value == appointmentTypeId)}
          dropdownOneHandler={typeHandler}
           dropdownOneName={typesName}
          dropdownOnePlaceholder="القسم"
          classNameDropdownOne="col-sm-6 col-12"
          publishDateFrom={appointmentDateFrom}
          publishFromHandler={publishFromHandler}
          classNameDPFrom="col-6"
          publishDateTo={appointmentDateTo}
          publishToHandler={publishToHandler}
          classNameDPTo="col-6"
        />
      </div>
      {props.apointment.result.length ? (
          <div className='container'>
            <div className="my-4 row">
              {props.apointment.result.map((item, index) => {
                return (
                  <div  key={item.id} className="col-md-4 col-sm-6 mb-4">
                    <Link  className="h-100">
                      <ListWithImage
                        imgSrc={paths.Appointment + item.id + "/" + item.photo}
                        title={item.title}
                        date={"1/1/2022"}
                        category={item.appointmentTypeName}
                        imgHeight="200px"
                      />
                    </Link>
                  </div>
                );
              })}
              <div className='col-12'>
                <PaginationSection
                  currentPage={currentPage}
                  pageCount={pageCount}
                  handlePageClick={handlePageClick}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className=" text-center">لا يوجد نتائج</div>
        )}
    </>
  );}
  return(<div> Loading</div>)
};
const mapStateToProps = (state) => {
  return {
    apointment: state.GovernerComponents.apointment,
    apointmenttypes:state.GovernerComponents.apointmenttypes
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getAppointments,getAppointmentsTypes }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Appointment);
