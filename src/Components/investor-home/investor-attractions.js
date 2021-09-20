import React from 'react'

const TouristAttraction = () => {
    return (<div className='container'>
        <div className='  d-flex  my-4'>
            <div className='mx-3'>
                <img height='50' width='60' src='/images/icons/Tourist-0٢.png' />
            </div>
            <div className='d-flex align-items-center'><h3>خدمات سياحية</h3> </div>
        </div>

        <div className=' d-flex justify-content-around flex-column flex-sm-row flex-wrap text-center'>
            <div className=' p-3 col-sm-6 col-lg-2 col-12 '>
               <div> <img className='w-75' src='/images/icons/Tourist-0٢.png' /></div>
                <div className="mt-2 fw-bold">الحنطور</div>
            </div>
            <div className=' p-3  col-sm-6  col-lg-2 col-12'>
               <div> <img className='w-75' src='/images/icons/Tourist-0٢.png' /></div>
                <div className="mt-2 fw-bold">الحنطور</div>
            </div>
            <div className=' p-3  col-sm-6  col-lg-2 col-12'>
               <div> <img className='w-75' src='/images/icons/Tourist-0٢.png' /></div>
                <div className="mt-2 fw-bold">الحنطور</div>
            </div>
            <div className=' p-3  col-sm-6  col-lg-2 col-12'>
               <div> <img className='w-75' src='/images/icons/Tourist-0٢.png' /></div>
                <div className="mt-2 fw-bold">الحنطور</div>
            </div>

        </div>
    </div>);
}

export default TouristAttraction;