import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faChevronRight , faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const News = () => {
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
                            محافظ أسوان يوجه بسرعة طلاء واجهات المبانى والعقارات والمنشآت
                            الحكومية
                        </h2>
                    </div>
                    <div className="col-lg-6 col-12 col-sm-6 d-flex d-lg-block align-items-center align-content-center  p-2 lh-lg text-secondary order-sm-1 order-lg-1 order-2">
                        
                        من جانبه طالب اللواء أشرف عطية، با1/4سراع في تنفيذ التصميمات الخاصة
                        بالهوية البصرية لوضع رؤية متكاملة تعتمد على الدراسة العلمية
                        1/4دماجها في مشروعات التطوير والتجميل الجارية والمخططة مستقبليoe،
                        علاوة على توحيد اللون والتصميم لطلاء واجهات المباني والعقارات
                        والمنشآت الحكومية بما يعكس الثقافة والتراث .ا¶سوانى ا¶صيل أشــاد
                        المحافــظ، بالتعــاون البنــاء للاســتفادة مــن خبــرات الجامعــة
                        ا¶لمانيــة وإمكانياتهـا الفنيـة والتكنولوجيـة وا1/4داريـة فـى
                        مجـالات التصميـم والتطويـر لدعـم .مدن المحافظة جماليoe
                        وتخطيطيoe....... أقراء المزيد
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12 d-flex d-lg-block align-items-center align-content-center order-sm-2 order-1">
                        <img
                            className="w-100 h-75 rounded-3"
                            src={"images/shrimp-zone-seafood_menu_2.jpg"}
                            alt="Hi"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="container-fluid">
                    <div className='d-flex justify-content-center'>
                            <div className=' text-center d-lg-inline d-none align-self-center' style={{width:'4.1%'}}>
                                {/* <img src='images/right.png' width='90%'/> */}
                        <FontAwesomeIcon size={"2x"} icon={faChevronRight}></FontAwesomeIcon>

                            </div>
                        <div className="gradient_style bg-secondary d-flex flex-sm-row flex-column col-11 justify-content-sm-around justify-content-center  mb-3">
                            <div className="col-sm-3 col-12 mt-4 text-center">
                                <img
                                    className="rounded-3 " width='85%'
                                    src="images/shrimp-zone-seafood_menu_2.jpg"
                                />
                                <div className="mt-4 mb-4 container">
                                    محافظ أسوان يلتقى السفير ا1/4ندونيسي لمناقشة أوجه التعاون
                                    وا1/4ستثمار
                                </div>
                            </div>
                            <div className="col-sm-3 col-12 mt-4 text-center">
                                <img
                                    className="rounded-3 " width='85%'
                                    src="images/shrimp-zone-seafood_menu_2.jpg"
                                />
                                <div className="mt-4 mb-4 container">
                                    محافظ أسوان يلتقى السفير ا1/4ندونيسي لمناقشة أوجه التعاون
                                    وا1/4ستثمار
                                </div>
                            </div>
                            <div className="col-sm-3 col-12 mt-4 text-center">
                                <img
                                    className="rounded-3 " width='85%'
                                    src="images/shrimp-zone-seafood_menu_2.jpg"
                                />
                                <div className="mt-4 mb-4 container">
                                    محافظ أسوان يلتقى السفير ا1/4ندونيسي لمناقشة أوجه التعاون
                                    وا1/4ستثمار
                                </div>
                            </div>
                        </div>
                        <div className='d-lg-inline d-none text-center align-self-center' style={{width:'4.2%'}}>
                        {/* <img src='images/left.png' width='90%'/> */}
                        <FontAwesomeIcon size={"2x"} icon={faChevronLeft}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
                <div className='container-fluid justify-content-center'  >
                </div>

            </div>
        </div>
    );
};

export default News;
