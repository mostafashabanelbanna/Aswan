import React from 'react';
import Fade from 'react-reveal/Fade';


const InfoNews = () => {

    return (
        <div>
            <div className=" container p-0 ">
                <div className="mt-2 d-flex">
                   
                    <img src="/images/icons/information_titel-0١.png" style={{width:50 }} />
                    
                    <div className="  underline">
                    <h3 className="mt-4 me-2 text-secondary"> معلومات ودراسات ونشرات </h3>
                    </div>
                </div>
            </div>
            
            <div className="container p-0 mt-4 ">
                <div className="row text-center  p-0 m-0 ">
                <Fade bottom >
                    <div className="col-lg-3 p-3 col-5 mb-4   hvr-bounce-to-right ">
                        <img style={{width:150}} className='  px-4 imgfilter' src={'/images/icons/statistics-0١.png'} />
                        <div className='mt-4'> احصائيات </div>


                    </div>
</Fade>
<Fade bottom delay={400}>

                    <div className="col-lg-3 p-3 col-5 mb-4 hvr-bounce-to-right">
                        <img style={{width:150}} className=' px-4 imgfilter' src={'/images/icons/bulletin-0١.png'} />
                        <div className='mt-4'> نشرات شهرية </div>


                    </div>
                    </Fade>
                    <Fade bottom >

                    <div className="col-lg-3 p-3 col-5 mb-4 hvr-bounce-to-right">
                        <img style={{width:150}} className=' px-4 imgfilter' src={'/images/icons/decision-0١.png'} />
                        <div className='mt-4'> احصائيات نشرات سكانية </div>

                    </div>
                    </Fade>
                    <Fade bottom delay={400}>

                    <div className="col-lg-3 p-3 col-5 mb-4 hvr-bounce-to-right">
                        <img style={{width:150}} className='w px-4 imgfilter' src={'/images/icons/statistics-0١.png'} />
                        <div className='mt-4'> دعم القرار </div>

                    </div>
</Fade>
                </div>
            </div>
            <div className="line my-5 mx-auto"></div>

        </div>
    );
}
export default InfoNews