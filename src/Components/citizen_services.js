import React from 'react';


const CitizenServices = () => {

    return (
        <div>
            <div className="custom_contanier p-0 mb-4">
                <div className="mt-2 d-flex">
                    <img src="/images/icons/services_titel-0١.png" width='7%' />
                    <h4 className="mt-4 me-2 text-secondary">خدمات المواطنون  </h4>
                </div>
            </div>
            <div className="container p-0 mt-4 mb-3">
                <div className="row  text-center p-0 m-0 ">

                    <div className="col-lg-2  col-4 mb-4">
                        <img className='w-100  px-4' src={'/images/icons/cluesServices-0١.png'} />
                        <div className='mt-4'> دلة المحافظة </div>

                    </div>

                    <div className="col-lg-2  col-4 mb-4">
                        <img className='w-100 px-4' src={'/images/icons/electronicServices-0١.png'} />
                        <div className='mt-4'> دليل الخدمات الالكترونية </div>

                    </div>

                    <div className="col-lg-2  col-4 mb-4">
                        <img className='w-100 px-4' src={'/images/icons/priceServices-0١.png'} />
                        <div className='mt-4'> أسعار السلع </div>

                    </div>

                    <div className="col-lg-2  col-4 mb-4">
                        <img className='w-100 px-4' src={'/images/icons/districts_Services-0١.png'} />
                        <div className='mt-4'> خدمات المدريات </div>
                    </div>
                    <div className="col-lg-2  col-4 mb-4">
                        <img className='w-100 px-4' src={'/images/icons/EmergencyServices-0١.png'} />
                        <div className='mt-4'> أرقام الطوارئ </div>
                    </div>
                    <div className="col-lg-2  col-4 mb-4">
                        <img className='w-100 px-4' src={'/images/icons/AdvertisementServices-0١.png'} />
                        <div className='mt-4'> أعلانات ومناقصات </div>
                    </div>

                </div>
            </div>
            <div className="line my-5 mx-auto"></div>
        </div>
    );
}
export default CitizenServices