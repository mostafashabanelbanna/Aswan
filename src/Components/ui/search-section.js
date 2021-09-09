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
                   {    !props.TextFieldOne? <div class="form-group col-4 mb-4">
                        <TextField onChange={props.TextFieldOneHandler} className='w-100' id="standard-basic" label="العنوان" />
                    </div>:<div className="d-none"></div>}

                    {    props.TextFieldTwo? <div class="form-group col-4 mb-4">
                        <TextField onChange={props.TextFieldTwoHandler} className='w-100' id="standard-basic" label="العنوان" />
                    </div>:<div className='d-none'></div>}

                    {props.dropdownOneHandler?<div style={{ height: '1.1rem' }} class="form-group col-4 mb-4">
                        <Select value={props.dropdownOneVal} onChange={props.dropdownOneHandler} placeholder={props.dropdownOnePlaceholder} options={props.dropdownOneName} />
                    </div>:<div className='d-none'></div>}

                    {props.dropdownTwoHandler?<div style={{ height: '1.1rem' }} class="form-group col-4 mb-4">
                        <Select value={props.dropdownTwoVal} onChange={props.dropdownTwoHandler} placeholder={props.dropdownTwoPlaceholder} options={props.dropdownTwoName} />
                    </div>:<div className='d-none'></div>}

                    {props.dropdownThreeHandler?<div style={{ height: '1.1rem' }} class="form-group col-4 mb-4">
                        <Select value={props.dropdownThreeVal} onChange={props.dropdownThreeHandler} placeholder={props.dropdownThreePlaceholder} options={props.dropdownThreeName} />
                    </div>:<div className='d-none'></div>}
                        {props.publishFromHandler?<div className='col-3'>
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
                       {props.publishToHandler? <div className='  col-4'>
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

                            className="myButton mx-1 mb-2 mb-sm-0"
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