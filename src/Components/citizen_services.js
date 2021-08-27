import React from 'react';

import LightSpeed from 'react-reveal/LightSpeed';
const CitizenServices = () => {

    return (
        <div>
            <div className=" container p-0 mb-4">
                <div className="mt-2 d-flex ">
                    <img src="/images/icons/services_titel-0١.png" width="50px" />

                    <div className="underline"> <h3 className="mt-4 me-2 text-secondary ">خدمات المواطنون  </h3></div>
                </div>
            </div>
            <div className='container-fluid  px-3 position-relative' >
               <div className='bgvid '>
                   <video muted autoPlay loop>
                       <source src={'./videos/computer.mp4'}></source>
                   </video>
               </div>
               <div className='container'>
                <div className=' row justify-content-around '>
                    <div className='col-6 '></div>
                    <div className='col-lg-6 col-md-9 col-12  bg-light '>
                        <div className='row justify-content-center py-3 text-center'>
                            <div className="mb-4 col-3 hvr-underline-from-center ">
                                <img style={{ width: 100 }} className='px-4' src={'/images/icons/cluesServices-0١.png'} />
                                <div className='mt-4 mb-1 '> ادلة المحافظة </div>

                            </div>
                            <div className="mb-4 col-3 hvr-underline-from-center ">
                                <img style={{ width: 100 }} className='px-4' src={'/images/icons/electronicServices-0١.png'} />
                                <div className='mt-4 mb-1 '> دليل الخدمات الالكترونية </div>

                            </div>
                            <div className="mb-4 col-3 hvr-underline-from-center ">
                                <img style={{ width: 100 }} className='px-4' src={'/images/icons/priceServices-0١.png'} />
                                <div className='mt-4 mb-1 '> أسعار السلع </div>

                            </div>
                            <div className="mb-4 col-3 hvr-underline-from-center ">
                                <img style={{ width: 100 }} className='px-4' src={'/images/icons/districts_Services-0١.png'} />
                                <div className='mt-4 mb-1 '> خدمات المدريات </div>

                            </div>
                            <div className="mb-4 col-3 hvr-underline-from-center ">
                                <img style={{ width: 100 }} className='px-4' src={'/images/icons/EmergencyServices-0١.png'} />
                                <div className='mt-4 mb-1 '> أرقام الطوارئ </div>

                            </div>
                            <div className="mb-4 col-3 hvr-underline-from-center ">
                                <img style={{ width: 100 }} className='px-4' src={'/images/icons/AdvertisementServices-0١.png'} />
                                <div className='mt-4 mb-1 '> أعلانات ومناقصات </div>

                            </div>
                            <div className="mb-4 col-3 hvr-underline-from-center ">
                                <img style={{ width: 100 }} className='px-4' src={'/images/icons/centersServices-0١.png'} />
                                <div className='mt-4 mb-1 '> خدمات المراكز الإلكترونية </div>

                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>
        </div>
        // <div>
        //     <div className=" container p-0 mb-4">
        //         <div className="mt-2 d-flex ">
        //             <img src="/images/icons/services_titel-0١.png" width="50px" />

        //            <div className="underline"> <h3 className="mt-4 me-2 text-secondary ">خدمات المواطنون  </h3></div>
        //         </div>
        //     </div>
        //     <LightSpeed    right cascade>
        //     <div className="container p-0 mt-4 mb-3">
        //         <div className="d-flex flex-wrap justify-content-center text-center p-0 m-0 ">

        //             <div className="mb-4 col hvr-underline-from-center ">
        //                 <img style={{width:150}} className='px-4' src={'/images/icons/cluesServices-0١.png'} />
        //                 <div className='mt-4 mb-1 '> ادلة المحافظة </div>

        //             </div>

        //             <div className="mb-4 col hvr-underline-from-center ">
        //                 <img style={{width:150}} className='px-4' src={'/images/icons/electronicServices-0١.png'} />
        //                 <div className='mt-4 mb-1'> دليل الخدمات الالكترونية </div>

        //             </div>

        //             <div className="mb-4 col hvr-underline-from-center">
        //                 <img style={{width:150}} className='px-4' src={'/images/icons/priceServices-0١.png'} />
        //                 <div className='mt-4 mb-1'> أسعار السلع </div>

        //             </div>

        //             <div className="mb-4 col hvr-underline-from-center">
        //                 <img style={{width:150}} className='px-4' src={'/images/icons/districts_Services-0١.png'} />
        //                 <div className='mt-4 mb-1'> خدمات المدريات </div>
        //             </div>
        //             <div className="mb-4 col hvr-underline-from-center">
        //                 <img style={{width:150}} className='px-4' src={'/images/icons/EmergencyServices-0١.png'} />
        //                 <div className='mt-4 mb-1'> أرقام الطوارئ </div>
        //             </div>
        //             <div className="mb-4 col hvr-underline-from-center">
        //                 <img style={{width:150}} className='px-4' src={'/images/icons/AdvertisementServices-0١.png'} />
        //                 <div className='mt-4 mb-1'> أعلانات ومناقصات </div>
        //             </div>
        //             <div className="mb-4 col hvr-underline-from-center">
        //                 <img style={{width:150}} className='px-4' src={'/images/icons/centersServices-0١.png'} />
        //                 <div className='mt-4 mb-1'> خدمات المراكز الإلكترونية </div>
        //             </div>
        //         </div>
        //     </div>
        //     </LightSpeed   >
        //     <div className="line my-5 mx-auto"></div>
        // </div>
    );
}
export default CitizenServices