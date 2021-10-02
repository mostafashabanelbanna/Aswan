import React from "react";
import { TextField } from "@material-ui/core";
import Select from "react-select";
import {
  DatePicker,
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import "moment/locale/ar";
import "./MUIcalender.css";

const SearchSection = (props) => {
  return (
    <div style={{backgroundColor:'rgb(6, 73, 106)'}}>
      <div className="container">
        <form onSubmit={props.submit}>
          <div className="row align-items-center">
            {props.TextFieldOneHandler ? (
              <div className={`${props.classNameTextFieldOne} form-group my-3`}>
                <TextField
                  variant="outlined"
                  onChange={props.TextFieldOneHandler}
                  className="w-100"
                  id="standard-basic"
                  placeholder={props.labelTextFieldOne}
                />
              </div>
            ) : null}

            {props.TextFieldTwoHandler ? (
              <div className={`${props.classNameTextFieldTwo} form-group my-3`}>
                <TextField
                  onChange={props.TextFieldTwoHandler}
                  className="w-100"
                  id="standard-basic"
                  placeholder={props.labelTextFieldTwo}
                />
              </div>
            ) : null}

            {props.dropdownOneHandler ? (
              <div
                style={{ height: "1.1rem", zIndex:'16'}}
                className={`${props.classNameDropdownOne} align-self-baseline my-3 form-group`}
              >
                <Select
                  isDisabled={props.disableOne ?? false}
                  value={props.dropdownOneVal}
                  onChange={props.dropdownOneHandler}
                  placeholder={props.dropdownOnePlaceholder}
                  options={props.dropdownOneName}
                />
              </div>
            ) : null}

            {props.dropdownTwoHandler ? (
              <div
                style={{ height: "1.1rem", zIndex:'15' }}
                className={`${props.classNameDropdownTwo} align-self-baseline my-3 form-group`}
              >
                <Select
                  isDisabled={props.disableTwo ?? false}
                  value={props.dropdownTwoVal}
                  onChange={props.dropdownTwoHandler}
                  placeholder={props.dropdownTwoPlaceholder}
                  options={props.dropdownTwoName}
                />
              </div>
            ) : null}

            {props.dropdownThreeHandler ? (
              <div
                style={{ height: "1.1rem", zIndex:'14' }}
                className={`${props.classNameDropdownThree} align-self-baseline my-3 form-group`}
              >
                <Select
                  isDisabled={props.disableThree ?? false}
                  value={props.dropdownThreeVal}
                  onChange={props.dropdownThreeHandler}
                  placeholder={props.dropdownThreePlaceholder}
                  options={props.dropdownThreeName}
                />
              </div>
            ) : null}

            {props.dropdownFourHandler ? (
              <div
                style={{ height: "1.1rem", zIndex:'13'}}
                className={`${props.classNameDropdownFour} align-self-baseline form-group my-3`}
              >
                <Select
                  isDisabled={props.disableFour ?? false}
                  value={props.dropdownFourVal}
                  onChange={props.dropdownFourHandler}
                  placeholder={props.dropdownFourPlaceholder}
                  options={props.dropdownFourName}
                />
              </div>
            ) : null}

            {props.publishFromHandler ? (
              <div className={`${props.classNameDPFrom}`} style={{marginTop: '20px'}}>
                <label className="my-2" style={{color:'white'}}>{props.DPFromLabel}</label>
                <MuiPickersUtilsProvider
                  libInstance={moment}
                  utils={MomentUtils}
                  locale={"sw"}
                  className="bg-danger"
                >
                  <KeyboardDatePicker
                    format="L"
                    inputVariant="outlined"
                    value={props.publishDateFrom}
                    variant="dialog"
                    maxDateMessage=""
                    mask="__-__-____"
                    placeholder="يوم/شهر/سنة"
                    onChange={props.publishFromHandler}
                    views={["year", "month", "date"]}
                  />
                </MuiPickersUtilsProvider>
              </div>
            ) : null}

            {props.publishToHandler ? (
              <div className={`${props.classNameDPTo}`} style={{marginTop: '20px'}}>
                <label className="my-2" style={{color:'white'}}>{props.DPToLabel}</label>
                <MuiPickersUtilsProvider
                  libInstance={moment}
                  utils={MomentUtils}
                  locale={"sw"}
                  className="w-100"
                >
                  <KeyboardDatePicker
                    format="L"
                    value={props.publishDateTo}
                    variant="dialog"
                    inputVariant="outlined"
                    maxDateMessage=""
                    mask="__-__-____"
                    placeholder="يوم/شهر/سنة"
                    onChange={props.publishToHandler}
                    views={["year", "month", "date"]}
                  />
                </MuiPickersUtilsProvider>
              </div>
            ) : null}

            {props.endDateFromHandler ? (
              <div className={`${props.classNameEDFTo}`} style={{marginTop: '20px'}}>
                <label className="my-2" style={{color:'white'}}>{props.EDFToLabel}</label>
                <MuiPickersUtilsProvider
                  libInstance={moment}
                  utils={MomentUtils}
                  locale={"sw"}
                  className="bg-danger"
                >
                  <KeyboardDatePicker
                    format="L"
                    inputVariant="outlined"
                    value={props.endDateFrom}
                    variant="dialog"
                    maxDateMessage=""
                    mask="__-__-____"
                    placeholder="يوم/شهر/سنة"
                    onChange={props.endDateFromHandler}
                    views={["year", "month", "date"]}
                  />
                </MuiPickersUtilsProvider>
              </div>
            ) : null}

            {props.endDateToHandler ? (
              <div className={`${props.classNameEDTTo}`} style={{marginTop: '20px'}}>
                <label className="my-2" style={{color:'white'}}>{props.EDTToLabel}</label>
                <MuiPickersUtilsProvider
                  libInstance={moment}
                  utils={MomentUtils}
                  locale={"sw"}
                  className="bg-danger"
                >
                  <KeyboardDatePicker
                    format="L"
                    inputVariant="outlined"
                    value={props.endDateTo}
                    variant="dialog"
                    maxDateMessage=""
                    mask="__-__-____"
                    placeholder="يوم/شهر/سنة"
                    onChange={props.endDateToHandler}
                    views={["year", "month", "date"]}
                  />
                </MuiPickersUtilsProvider>
              </div>
            ) : null}

            <div
              className={`${props.classNameBtn} d-flex my-2 justify-content-end`}
            >
              {" "}
              <button
                type={"submit"}
                className="btn_orange mx-1 my-4 my-md-3"
                style={{ verticalAlign: "middle", width:'100px' }}
              >
                <span>بحث</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchSection;
