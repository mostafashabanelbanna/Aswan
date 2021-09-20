import React from 'react'
import Slider from "react-slick";

const TouristAttraction = () => {

    var settings = {
        dots: false,
        arrows:false,
        centerMode:true,
      infinite: true,
      centerPadding: "80px",

        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    return (<div className='container'>
        <div className='  d-flex  my-4'>
            <div className='mx-3'>
                <img height='50' width='60' src='/images/icons/Tourist-0٢.png' />
            </div>
            <div className='d-flex align-items-center'><h3>الخريطة الإستثمارية</h3> </div>
        </div>

          <Slider {...settings}>
            <div className=' p-3 col-sm-6 col-lg-2 col-12 '>
               <div className='d-flex justify-content-center'> <img className='w-75' src='/images/icons/Tourist-0٢.png' /></div>
                <div className="mt-2 fw-bold text-center">مطاعم</div>
            </div>
            <div className=' p-3 col-sm-6 col-lg-2 col-12 '>
               <div className='d-flex justify-content-center'> <img className='w-75' src='/images/icons/Tourist-0٢.png' /></div>
                <div className="mt-2 fw-bold text-center">بازارات وأسواق</div>
            </div>
            <div className=' p-3 col-sm-6 col-lg-2 col-12 '>
               <div className='d-flex justify-content-center'> <img className='w-75' src='/images/icons/Tourist-0٢.png' /></div>
                <div className="mt-2 fw-bold text-center">إنتقال سياحي</div>
            </div>
            <div className=' p-3 col-sm-6 col-lg-2 col-12 '>
               <div className='d-flex justify-content-center'> <img className='w-75' src='/images/icons/Tourist-0٢.png' /></div>
                <div className="mt-2 fw-bold text-center">بنوك</div>
            </div>
            <div className=' p-3 col-sm-6 col-lg-2 col-12 '>
               <div className='d-flex justify-content-center'> <img className='w-75' src='/images/icons/Tourist-0٢.png' /></div>
                <div className="mt-2 fw-bold text-center">الحنطور</div>
            </div>
            <div className=' p-3 col-sm-6 col-lg-2 col-12 '>
               <div className='d-flex justify-content-center'> <img className='w-75' src='/images/icons/Tourist-0٢.png' /></div>
                <div className="mt-2 fw-bold text-center">فنادق</div>
            </div>
            <div className=' p-3 col-sm-6 col-lg-2 col-12 '>
               <div className='d-flex justify-content-center'> <img className='w-75' src='/images/icons/Tourist-0٢.png' /></div>
                <div className="mt-2 fw-bold text-center">شركات سياحية</div>
            </div>
            <div className=' p-3 col-sm-6 col-lg-2 col-12 '>
               <div className='d-flex justify-content-center'> <img className='w-75' src='/images/icons/Tourist-0٢.png' /></div>
                <div className="mt-2 fw-bold text-center">شركات طيران</div>
            </div>
            </Slider>
    </div>);
}

export default TouristAttraction;