import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Styles/news.css'
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { mainNews, sliderNews } from '../actions/News_Action'
import ReactHtmlParser from 'react-html-parser';

const News = (props) => {

    useEffect(() => {
        props.sliderNews();
        props.mainNews();
    }, [])

    var settings = {
        dots: false,
        // autoplay:true,
        // autoplaySpeed:1000,
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
    if (props.mainews && props.news)
        return (
            <div>
                <div className="custom_contanier p-0">
                    <div className="m-3 d-flex">
                        <img src="/images/icons/news_titel-0١.png" width='7%' />
                        <h4 className="mt-3 me-3 text-secondary"> اخبار المحافظة </h4>
                    </div>
                    <div className="row p-0 mt-3">
                        <div className=" text-secondary">
                            <h2 className="mb-lg-5 mb-2">
                                {props.mainews.result.title}
                            </h2>
                        </div>
                        <div className=" col-12 col-sm-12 d-flex d-lg-block align-items-center align-content-center  p-2 lh-lg text-secondary order-sm-2 order-lg-1 order-2">
                            <div>
                                <div className=" float-lg-start  col-lg-6 me-sm-0 me-md-0  me-lg-5   col-sm-12 col-12 d-flex d-lg-block justify-content-center align-items-center align-content-center order-lg-2  order-sm-1 order-1">
                                    <img
                                        className="  mt-3 mb-3 rounded-3 w-100"
                                        src={'images/Upload/News/Photo/' + props.mainews.result.id + '/' + props.mainews.result.photo}
                                        alt={props.mainews.result.title}
                                    />
                                </div>
                               <div id='newscontent'> {ReactHtmlParser(props.mainews.result.content)}</div>
                            </div>

                        </div>

                    </div>
                </div>
                <div>
                    <div className="container p-0">

                        <Slider {...settings}>
                            {props.news.result.map((item, index) => {

                                return (<div key={item.id} className="col-sm-3 col-12 mt-4 text-center px-3">
                                    <img

                                        className="rounded-3 " width='100%' height='205px'
                                        src={'images/Upload/News/Photo/' + item.id + '/' + item.photo}
                                        alt={item.caption}
                                    />
                                    <div className="mt-4  container p-2">
                                        {item.title}
                                    </div>
                                </div>)
                            })}



                        </Slider>
                    </div>

                </div>
            <div className="line my-5 mx-auto"></div>

            </div>
        );
    return (<div>Loading</div>)
};

const mapStateToProps = (state) => {
    return { news: state.homeComponents.slidernews, mainews: state.homeComponents.mainews }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ sliderNews, mainNews }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
