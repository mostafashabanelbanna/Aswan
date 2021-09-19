import React from 'react'
import Slider from "react-slick";

const TourStart =()=>{

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
    return (<div className=''>
        <div className='text-center d-flex align-content-center align-items-center justify-content-center my-4'>
                <div className='mx-3'>
                    <img src='/images/icons/Investor-0١.png' />
                </div>
                <div className='d-flex align-self-end fw-bold'><h2>اخبار إستثمارية</h2> </div>
            </div>
        <div style={{ backgroundColor: '#eeecec' }} className=" me-3 ms-3">
            <Slider {...settings}  >
                <div className="mt-4 text-center p-4">
                    <img src={'/images/cover.jpg'} className="rounded-3" width='100%' />
                </div>
                <div className="mt-4 text-center p-4">
                    <img src={'/images/cover.jpg'} className="rounded-3" width='100%' />
                </div>
                <div className="mt-4 text-center p-4">
                    <img src={'/images/cover.jpg'} className="rounded-3" width='100%' />
                </div>
                <div className="mt-4 text-center p-4">
                    <img src={'/images/cover.jpg'} className="rounded-3" width='100%' />
                </div>
                <div className="mt-4 text-center p-4">
                    <img src={'/images/cover.jpg'} className="rounded-3" width='100%' />
                </div>
                <div className="mt-4 text-center p-4">
                    <img src={'/images/cover.jpg'} className="rounded-3" width='100%' />
                </div>
            </Slider>
        </div>
    </div>)
}

export default TourStart;