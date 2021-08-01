import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
    if (props.mainews&&props.news)
        return (
            <div>
                <div className="custom_contanier p-0">
                    <div className="m-3 d-flex">
                        <img src="/images/check-mark.png" />
                        <h4 className="mt-3 me-3 text-secondary"> اخبار المحافظة </h4>
                    </div>
                    <div className="row p-0 m-3">
                        <div className=" text-secondary">
                            <h2 className="mb-lg-5 mb-2">
                                {/* محافظ أسوان يوجه بسرعة طلاء واجهات المبانى والعقارات والمنشآت
                            الحكومية */}
                                {props.mainews.result.title}
                            </h2>
                        </div>
                        <div className=" col-12 col-sm-12 d-flex d-lg-block align-items-center align-content-center  p-2 lh-lg text-secondary order-sm-2 order-lg-1 order-2">
                        <p>
                        <div className=" float-lg-start  col-lg-6 me-sm-0 me-md-0  me-lg-5   col-sm-12 col-12 d-flex d-lg-block justify-content-center align-items-center align-content-center order-lg-2  order-sm-1 order-1">
                            <img
                                className="  mt-3 mb-3 rounded-3 img-fluid" 
                                // src={"images/shrimp-zone-seafood_menu_2.jpg"}
                                src={'images/Upload/News/Photo/' + props.mainews.result.id + '/' + props.mainews.result.photo}
                                alt={props.mainews.result.title}
                            />
                            </div>
                        {ReactHtmlParser(props.mainews.result.content)}
                            </p>
                            {/* من جانبه طالب اللواء أشرف عطية، با1/4سراع في تنفيذ التصميمات الخاصة
                            بالهوية البصرية لوضع رؤية متكاملة تعتمد على الدراسة العلمية
                            1/4دماجها في مشروعات التطوير والتجميل الجارية والمخططة مستقبليoe،
                            علاوة على توحيد اللون والتصميم لطلاء واجهات المباني والعقارات
                            والمنشآت الحكومية بما يعكس الثقافة والتراث .ا¶سوانى ا¶صيل أشــاد
                            المحافــظ، بالتعــاون البنــاء للاســتفادة مــن خبــرات الجامعــة
                            ا¶لمانيــة وإمكانياتهـا الفنيـة والتكنولوجيـة وا1/4داريـة فـى
                            مجـالات التصميـم والتطويـر لدعـم .مدن المحافظة جماليoe
                            وتخطيطيoe....... أقراء المزيد */}
                        </div>
                        {/* <div className="col-lg-6   col-sm-12 col-12 d-flex d-lg-block justify-content-center align-items-center align-content-center order-lg-2  order-sm-1 order-1"> */}
                            {/* <img
                                className="  mt-3 mb-3 rounded-3 img-fluid" 
                                // src={"images/shrimp-zone-seafood_menu_2.jpg"}
                                src={'images/Upload/News/Photo/' + props.mainews.result.id + '/' + props.mainews.result.photo}
                                alt={props.mainews.result.title}
                            /> */}
                        {/* </div> */}
                    </div>
                </div>
                <div>
                    <div className="container p-0">

                        <Slider {...settings}>
                            {props.news.result.map((item, index) => {

                                return (<div    key={item.id} className="col-sm-3 col-12 mt-4 text-center p-4">
                                    <img
                                   
                                        className="rounded-3 " width='100%' height='205px'
                                        src={'images/Upload/News/Photo/' + item.id + '/' + item.photo}
                                        alt={item.caption}
                                    />
                                    <div className="mt-4 mb-4 container p-4">
                                        {item.title}
                                    </div>
                                </div>)
                            })}


                            {/* <div className="col-sm-3 col-12 mt-4 text-center p-4">
                                <img
                                    className="rounded-3 " width='100%'
                                    src="images/shrimp-zone-seafood_menu_2.jpg"
                                />
                                <div className="mt-4 mb-4 container p-4">
                                    محافظ أسوان يلتقى السفير ا1/4ندونيسي لمناقشة أوجه التعاون
                                    وا1/4ستثمار
                                </div>
                            </div>

                            <div className="col-sm-3 col-12 mt-4 text-center p-4">
                                <img
                                    className="rounded-3 " width='100%'
                                    src="images/shrimp-zone-seafood_menu_2.jpg"
                                />
                                <div className="mt-4 mb-4 container p-4">
                                    محافظ أسوان يلتقى السفير ا1/4ندونيسي لمناقشة أوجه التعاون
                                    وا1/4ستثمار
                                </div>
                            </div>
                            <div className="col-sm-3 col-12 mt-4 text-center p-4">
                                <img
                                    className="rounded-3 " width='100%'
                                    src="images/shrimp-zone-seafood_menu_2.jpg"
                                />
                                <div className="mt-4 mb-4 container p-4">
                                    محافظ أسوان يلتقى السفير ا1/4ندونيسي لمناقشة أوجه التعاون
                                    وا1/4ستثمار
                                </div>
                            </div>
                            <div className="col-sm-3 col-12 mt-4 text-center p-4">
                                <img
                                    className="rounded-3 " width='100%'
                                    src="images/shrimp-zone-seafood_menu_2.jpg"
                                />
                                <div className="mt-4 mb-4 container p-4">
                                    محافظ أسوان يلتقى السفير ا1/4ندونيسي لمناقشة أوجه التعاون
                                    وا1/4ستثمار
                                </div>
                            </div>
                            <div className="col-sm-3 col-12 mt-4 text-center p-4">
                                <img
                                    className="rounded-3 " width='100%'
                                    src="images/shrimp-zone-seafood_menu_2.jpg"
                                />
                                <div className="mt-4 mb-4 container p-4">
                                    محافظ أسوان يلتقى السفير ا1/4ندونيسي لمناقشة أوجه التعاون
                                    وا1/4ستثمار
                                </div>
                            </div>
                            <div className="col-sm-3 col-12 mt-4 text-center p-4">
                                <img
                                    className="rounded-3 " width='100%'
                                    src="images/shrimp-zone-seafood_menu_2.jpg"
                                />
                                <div className="mt-4 mb-4 container p-4">
                                    محافظ أسوان يلتقى السفير ا1/4ندونيسي لمناقشة أوجه التعاون
                                    وا1/4ستثمار
                                </div>
                            </div>
                            <div className="col-sm-3 col-12 mt-4 text-center p-4">
                                <img
                                    className="rounded-3 " width='100%'
                                    src="images/shrimp-zone-seafood_menu_2.jpg"
                                />
                                <div className="mt-4 mb-4 container p-4">
                                    محافظ أسوان يلتقى السفير ا1/4ندونيسي لمناقشة أوجه التعاون
                                    وا1/4ستثمار
                                </div>
                            </div>
                            <div className="col-sm-3 col-12 mt-4 text-center p-4">
                                <img
                                    className="rounded-3 " width='100%'
                                    src="images/shrimp-zone-seafood_menu_2.jpg"
                                />
                                <div className="mt-4 mb-4 container p-4">
                                    محافظ أسوان يلتقى السفير ا1/4ندونيسي لمناقشة أوجه التعاون
                                    وا1/4ستثمار
                                </div>
                            </div>
           */}
                        </Slider>
                    </div>

                </div>
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
