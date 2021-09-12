import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAppointments } from "../store/actions/appointment-action";
import ListWithImage from './ui/list-with-image'
import SearchSection from "./ui/search-section";

const Appointment = () => {
  return <>
        <div className=" container underline  my-4">
            <h3> لقاءات و قرارات السيد المحافظ </h3>
          </div>
          <div className='container-fluid bg-light'>
              <SearchSection 
                
              />
          </div>
  </>;
};
const mapStateToProps = (state) => {
    return {
        apointment: state.GovernerComponents.apointment,
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getAppointments }, dispatch);
};
export default connect(mapStateToProps,mapDispatchToProps)(Appointment);
