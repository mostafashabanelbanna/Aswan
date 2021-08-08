import React from 'react';


const CitizenServices = () => {

    return (
        <div>
            <div className="custom_contanier p-0 mb-4">
                <div className="mt-2 d-flex">
                    <img src="/images/icons/services_titel-0١.png" width="80px" />
                    <h3 className="mt-4 me-2 text-secondary">خدمات المواطنون  </h3>
                </div>
            </div>
            <div className="custom_contanier p-0 mt-4 mb-3">
                <div className="row justify-content-center text-center p-0 m-0 ">

                    <div className="mb-4 col">
                        <img className='px-4' src={'/images/icons/cluesServices-0١.png'}  width="150px"/>
                        <div className='mt-4'> ادلة المحافظة </div>

                    </div>

                    <div className="mb-4 col">
                        <img className='px-4' src={'/images/icons/electronicServices-0١.png'}  width="150px"/>
                        <div className='mt-4'> دليل الخدمات الالكترونية </div>

                    </div>

                    <div className="mb-4 col">
                        <img className='px-4' src={'/images/icons/priceServices-0١.png'}  width="150px"/>
                        <div className='mt-4'> أسعار السلع </div>

                    </div>

                    <div className="mb-4 col">
                        <img className='px-4' src={'/images/icons/districts_Services-0١.png'}  width="150px"/>
                        <div className='mt-4'> خدمات المدريات </div>
                    </div>
                    <div className="mb-4 col">
                        <img className='px-4' src={'/images/icons/EmergencyServices-0١.png'}  width="150px"/>
                        <div className='mt-4'> أرقام الطوارئ </div>
                    </div>
                    <div className="mb-4 col">
                        <img className='px-4' src={'/images/icons/AdvertisementServices-0١.png'}  width="150px"/>
                        <div className='mt-4'> أعلانات ومناقصات </div>
                    </div>
                    <div className="mb-4 col">
                        <img className='px-4' src={'/images/icons/centersServices-0١.png'}  width="150px"/>
                        <div className='mt-4'> خدمات المراكز الإلكترونية </div>
                    </div>
                </div>
            </div>
            <div className="line my-5 mx-auto"></div>
        </div>
    );
}
export default CitizenServices