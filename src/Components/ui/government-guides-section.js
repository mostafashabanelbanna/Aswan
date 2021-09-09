import React from "react";
import { TextField } from "@material-ui/core";
import Select from 'react-select'

const GuidesSearchSection = (props) => {
    return (
    <>
        <div className='container'>
            <form onSubmit={props.submit}>
                <div className='row align-items-center'>
                    <div class="form-group col-sm-6 col-12 mb-4">
                        <TextField onChange={props.nameHandler} className='w-100' id="standard-basic" label="الاسم" />
                    </div>

                    <div class="form-group col-sm-6 col-12 mb-4">
                        <TextField onChange={props.mangerHandler} className='w-100' id="standard-basic" label="المدير" />
                    </div>
                </div>

                <div className='row align-items-center'>
                    <div style={{ height: '1.1rem' }} class="form-group col-sm-4 col-12 mb-4">
                        <Select value={props.dirTypeVal} onChange={props.dirTypeHandler} placeholder='نوع الدليل' options={props.dirTypeName} />
                    </div>
                    <div style={{ height: '1.1rem' }} class="form-group col-sm-4 col-12 mb-4">
                        <Select value={props.dirCatVal} onChange={props.dirCatHandler} placeholder='تصنيف الدليل' options={props.dirCatName} />
                    </div>

                    <div style={{ height: '1.1rem' }} class="form-group col-sm-4 col-12 mb-4">
                        <Select value={props.cityVal} onChange={props.cityHandler} placeholder='المدينة' options={props.cityName} />
                    </div>
                </div>

                <div className=" d-flex justify-content-end">
                    {" "}
                    <button type={'submit'}

                        className="myButton mx-1 mb-2 mb-sm-0"
                        style={{ verticalAlign: "middle" }}
                    >
                        <span>بحث</span>
                    </button>
                </div>
            </form>
        </div>

    </>
    );
}

export default GuidesSearchSection;