import React from 'react';


const LoaclLeaders = () => {

    return (
        <div>
            <div className="custom_contanier p-0 mb-4">
                <div className="mt-2 d-flex">
                    <img src="/images/icons/leaders_titel-0١.png" width='7%' />
                    <h4 className="mt-4 me-2 text-secondary"> اخبار المحافظة </h4>
                </div>
            </div>
            <div className="container p-0 mt-4">
                <div className="row text-center p-0 m-0 ">

                    <div className="col-lg-3  col-6 mb-4">
                        <img className='w-100  px-4' src={'/images/icons/tribes-0١.png'} />
                        <div className='mt-4'> احصائيات </div>

                    </div>

                    <div className="col-lg-3  col-6 mb-4">
                        <img className='w-100 px-4' src={'/images/icons/deputies-0١.png'} />
                        <div className='mt-4'> احصائيات </div>

                    </div>

                    <div className="col-lg-3  col-6 mb-4">
                        <img className='w-100 px-4' src={'/images/icons/elders-0١.png'} />
                        <div className='mt-4'> احصائيات </div>

                    </div>

                    <div className="col-lg-3  col-6 mb-4">
                        <img className='w-100 px-4' src={'/images/icons/Youth-0١.png'} />
                        <div className='mt-4'> احصائيات </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
export default LoaclLeaders