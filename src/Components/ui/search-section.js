import React from "react";
import { TextField } from "@material-ui/core";
import Select from 'react-select'
import { DatePicker, MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import "moment/locale/ar";

const SearchSection = (props) => {
    return (<>
        <div className='container'>
            <form onSubmit={props.submit}>
                <div className='row align-items-center'>
                   {props.TextFieldOneHandler? <div className={`${props.classNameTextFieldOne} form-group my-4`}>
                        <TextField onChange={props.TextFieldOneHandler} className='w-100' id="standard-basic" label={props.labelTextFieldOne} />
                    </div>:<div className="d-none"></div>}

                    {props.TextFieldTwoHandler? <div className={`${props.classNameTextFieldTwo} form-group my-4`}>
                        <TextField onChange={props.TextFieldTwoHandler} className='w-100' id="standard-basic" label={props.labelTextFieldTwo} />
                    </div>:<div className='d-none'></div>}

                    {props.dropdownOneHandler?<div style={{ height: '1.1rem' }} className={`${props.classNameDropdownOne} form-group my-4`}>
                        <Select isDisabled={props.disableOne??false} value={props.dropdownOneVal} onChange={props.dropdownOneHandler} placeholder={props.dropdownOnePlaceholder} options={props.dropdownOneName} />
                    </div>:<div className='d-none'></div>}

                    {props.dropdownTwoHandler?<div style={{ height: '1.1rem' }} className={`${props.classNameDropdownTwo} form-group my-4`}>
                        <Select isDisabled={props.disableTwo??false} value={props.dropdownTwoVal} onChange={props.dropdownTwoHandler} placeholder={props.dropdownTwoPlaceholder} options={props.dropdownTwoName} />
                    </div>:<div className='d-none'></div>}

                    {props.dropdownThreeHandler?<div style={{ height: '1.1rem' }} className={`${props.classNameDropdownThree} form-group my-4`}>
                        <Select isDisabled={props.disableThree??false} value={props.dropdownThreeVal} onChange={props.dropdownThreeHandler} placeholder={props.dropdownThreePlaceholder} options={props.dropdownThreeName} />
                    </div>:<div className='d-none'></div>}
                        {props.publishFromHandler?<div className={`${props.classNameDPFrom}`}>
                            <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={"sw"} >
                                <KeyboardDatePicker
                                    format="L"
                                    value={props.publishDateFrom}
                                    variant="dialog"
                                    maxDateMessage=""
                                    mask="__-__-____"
                                    placeholder="يوم/شهر/سنة"
                                    onChange={props.publishFromHandler}
                                    views={["year", "month", "date"]}
                                />
                            </MuiPickersUtilsProvider>
                        </div>:<div className='d-none'></div>}
                       {props.publishToHandler? <div className={`${props.classNameDPTo}`}>
                            <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={"sw"} >
                                <KeyboardDatePicker
                                    format="L"
                                    value={props.publishDateTo}
                                    variant="dialog"
                                    maxDateMessage=""
                                    mask="__-__-____"
                                    placeholder="يوم/شهر/سنة"
                                    onChange={props.publishToHandler}
                                    views={["year", "month", "date"]}
                                />
                            </MuiPickersUtilsProvider>
                        </div>:<div className='d-none'></div>}
                    <div className=" d-flex justify-content-end">
                        {" "}
                        <button type={'submit'}

                            className="myButton mx-1 my-4"
                            style={{ verticalAlign: "middle" }}
                        >
                            <span>بحث</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>

    </>);
}

export default SearchSection;