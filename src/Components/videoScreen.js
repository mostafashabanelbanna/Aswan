import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
const Video = () => {
    return (
        <div className="custom_contanier ">
            <div className="p-0 m-0 ">
                <div className="m-3 d-flex">
                    <img src="/images/check-mark.png" />
                    <h4 className="mt-3 me-3 text-secondary"> مكتبة الفيديو </h4>
                </div>
                <div className="me-3 ms-3 bg-secondary">
                    <iframe style={{ outline: 'none' }} loading='lazy' width='100%' height='450px' src='videos/1. Welcome!.mp4'></iframe>
                </div>
                <div className='bg-secondary p-4  me-3 ms-3'>
                    <div className=' container gradient_style align-self-center col-9'></div>
                </div>
                <div className='bg-secondary me-3 ms-3'>
                        <div className='d-flex'>
                            {/* <div className='text-center align-self-center' style={{ width: '4.1%' }}>
                                <img src='images/right.png' width='90%' />
                            </div> */}
                            <div className="arrow_style bg-secondary d-flex col-12 justify-content-around mb-3">
                                <div className=" m-4 text-center">
                                    <img
                                        className="rounded-3 " width='100%'
                                        src="images/shrimp-zone-seafood_menu_2.jpg"
                                    />
                                    <div className="mt-4 ">
                                        محافظ أسوان يلتقى السفير ا1/4ندونيسي لمناقشة أوجه التعاون
                                        وا1/4ستثمار
                                    </div>
                                </div>
                                <div className=" m-4 text-center">
                                    <img
                                        className="rounded-3 " width='100%'
                                        src="images/shrimp-zone-seafood_menu_2.jpg"
                                    />
                                    <div className="mt-4 ">
                                        محافظ أسوان يلتقى السفير ا1/4ندونيسي لمناقشة أوجه التعاون
                                        وا1/4ستثمار
                                    </div>
                                </div>
                                <div className=" m-4 text-center">
                                    <img
                                        className="rounded-3 " width='100%'
                                        src="images/shrimp-zone-seafood_menu_2.jpg"
                                    />
                                    <div className="mt-4 ">
                                        محافظ أسوان يلتقى السفير ا1/4ندونيسي لمناقشة أوجه التعاون
                                        وا1/4ستثمار
                                    </div>
                                </div>
                                <div className=" m-4 text-center">
                                    <img
                                        className="rounded-3 " width='100%'
                                        src="images/shrimp-zone-seafood_menu_2.jpg"
                                    />
                                    <div className="mt-4">
                                        محافظ أسوان يلتقى السفير ا1/4ندونيسي لمناقشة أوجه التعاون
                                        وا1/4ستثمار
                                    </div>
                                </div>
                            </div>
                            {/* <div className='text-center align-self-center' style={{ width: '4.2%' }}>
                                <img src='images/left.png' width='90%' />
                            </div> */}
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Video;