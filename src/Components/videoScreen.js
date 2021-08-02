import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {sliderVideo} from '../actions/News_Action'
const Video = (props) => {

    useEffect(()=>{
        props.sliderVideo();
    },[])

    var settings = {
        dots: false,
        autoplay:true,
        autoplaySpeed:1000,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
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
    if(props.videos)
    return (
        <div className="custom_contanier ">
            <div className="p-0 m-0 ">
                <div className="m-3 d-flex">
                    <img src="/images/check-mark.png" />
                    <h4 className="mt-3 me-3 text-secondary"> مكتبة الفيديو </h4>
                </div>
                <div className="me-3 ms-3 bg-secondary">
                    <iframe style={{ outline: 'none' }} loading='lazy' width='100%' height='450px'  src={'https://www.youtube.com/embed/'+props.videos.result[0].youtubeId} /*src='videos/1. Welcome!.mp4'*/></iframe>
                </div>
                <div className='bg-secondary p-4  me-3 ms-3'>
                    <div className=' container gradient_style align-self-center col-9'></div>
                </div>



                <div className="bg-secondary me-3 ms-3">



                    <Slider {...settings}  >

                        {props.videos.result.map((item,index)=>{
                            return(
                            <div key={item.id} className="mt-4 text-center p-4">
                         
                            <iframe src={'https://www.youtube.com/embed/'+item.youtubeId} className="rounded-3" width='100%'></iframe>
                            <div className="mt-4">
                                {item.title}
                      
                            </div>
                        </div>);
                        })}
                        
                    </Slider>


                </div>

            </div>
        </div>
    );
    return(<div>Loading</div>)
}
const mapStateToProps = (state) => {
    return { videos: state.homeComponents.slidervideo }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ sliderVideo}, dispatch)
}
export default connect(mapStateToProps ,mapDispatchToProps )( Video);