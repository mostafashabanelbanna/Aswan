import React from 'react';


const InfoNews = () => {

    return (
        <div>
            <div className="custom_contanier p-0 ">
                <div className="mt-2 d-flex">
                    <img src="/images/icons/information_titel-0١.png" width='7%' />
                    <h4 className="mt-4 me-2 text-secondary"> معلومات ودراسات ونشرات </h4>
                </div>
            </div>
            <div className="container p-0 mt-4 ">
                <div className="row text-center  p-0 m-0 ">
                    
                    <div className="col-lg-3  col-6 mb-4">
                        <img className='w-100 h-75 px-4' src={'/images/icons/statistics-0١.png'} />
                        <div className='mt-4'> احصائيات </div>


                    </div>

                    <div className="col-lg-3  col-6 mb-4">
                        <img className='w-100 h-75 px-4' src={'/images/icons/bulletin-0١.png'} />
                        <div className='mt-4'> احصائيات </div>


                    </div>

                    <div className="col-lg-3  col-6 mb-4">
                        <img className='w-100 h-75 px-4' src={'/images/icons/decision-0١.png'} />
                        <div className='mt-4'> احصائيات </div>

                    </div>

                    <div className="col-lg-3  col-6 mb-4">
                        <img className='w-100 h-75 px-4' src={'/images/icons/statistics-0١.png'} />
                        <div className='mt-4'> احصائيات </div>

                    </div>

                </div>
            </div>
            <div className="line my-5 mx-auto"></div>

        </div>
    );
}
export default InfoNews