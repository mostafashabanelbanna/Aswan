import React from 'react';


const Complaints = () => {

    return (
        <div>
            <div className="custom_contanier p-0 mb-4">
                <div className="m-3 d-flex">
                    <img src="/images/icons/complaints_titel-0٢.png"  width='7%'/>
                    <h4 className="mt-3 me-3 text-secondary"> الشكاوى </h4>
                </div>
            </div>
            <div className="container p-0">
                <div className="row  p-0 m-0 ">

                    <div className="col-lg-3  col-6 mb-3">
                        <div className="text-center" style={{ border: '1px solid #BADA55', borderRadius: '50%', height: 170, width: '65%' }} >
                            <img className=' mt-2' height='152px' style={{ borderRadius: '50%', width: '88%' }} src={'/images/shrimp-zone-seafood_menu_2.jpg'} />
                        </div>
                    </div>
                    <div className="col-lg-3  col-6 mb-3">
                        <div className="text-center" style={{ border: '1px solid #BADA55', borderRadius: '50%', height: 170, width: '65%' }}>
                            <img className=' mt-2' height='152px' style={{ borderRadius: '50%', width: '88%' }} src={'/images/shrimp-zone-seafood_menu_2.jpg'} />
                        </div>
                    </div>
                    <div className="col-lg-3  col-6 mb-3">
                        <div className="text-center" style={{ border: '1px solid #BADA55', borderRadius: '50%', height: 170, width: '65%' }} >
                            <img className=' mt-2' height='152px' style={{ borderRadius: '50%', width: '88%' }} src={'/images/shrimp-zone-seafood_menu_2.jpg'} />
                        </div>
                    </div>
                    <div className="col-lg-3  col-6 mb-3">
                        <div className="text-center" style={{ border: '1px solid #BADA55', borderRadius: '50%', height: 170, width: '65%' }} >
                            <img className=' mt-2' height='152px' style={{ borderRadius: '50%', width: '88%' }} src={'/images/shrimp-zone-seafood_menu_2.jpg'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="line my-5 mx-auto"></div>
        </div>
    );
}
export default Complaints