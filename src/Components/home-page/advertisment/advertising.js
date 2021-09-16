import React from 'react'
import { Link } from "react-router-dom";

const Advertising = () => {
    return (<>
        <div className='bg-light mt-3'>
        <div className=" container p-0 ">
        <div className="my-3 d-flex">
          <img
            src="/images/icons/information_titel-0١.png"
            width='80px'
          />

          <div className="underline">
            <h3 className="mt-4 me-2 text-secondary">
                اعلانات
            </h3>
          </div>
        </div>
      </div>
            <div className='container '>
            <div className='row text-center justify-content-around'>
            <div className="col-lg-3 p-3 col-5 mb-4 ">
              <Link to="ads/0" className="text-decoration-none text-muted">
                <img
                  style={{ width: 150 }}
                  className="  px-4 imgfilter"
                  src={"/images/icons/AdvertisementServices-0١.png"}
                />
                <div className="mt-4"> اعلانات ومناقصات </div>
              </Link>
            </div>
            <div className="col-lg-3 p-3 col-5 mb-4 ">
              <Link to="career" className="text-decoration-none text-muted">
                <img
                  style={{ width: 150 }}
                  className="  px-4 imgfilter"
                  src={"/images/icons/statistics-0١.png"}
                />
                <div className="mt-4"> وظائف شاغرة </div>
              </Link>
            </div>
            <div className="col-lg-3 p-3 col-5 mb-4 ">
              <Link to="youth" className="text-decoration-none text-muted">
                <img
                  style={{ width: 150 }}
                  className="  px-4 imgfilter"
                  src={"/images/icons/statistics-0١.png"}
                />
                <div className="mt-4"> تشغيل شباب  </div>
              </Link>
            </div>
            <div className="col-lg-3 p-3 col-5 mb-4 ">
              <Link to="ads/5" className="text-decoration-none text-muted">
                <img
                  style={{ width: 150 }}
                  className="  px-4 imgfilter"
                  src={"/images/icons/statistics-0١.png"}
                />
                <div className="mt-4"> منتجات يدوية </div>
              </Link>
            </div>
            </div>
            </div>
        </div>
    </>);
}

export default Advertising;