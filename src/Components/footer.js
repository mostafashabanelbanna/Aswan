import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {

    return (
        <div style={{ backgroundColor: 'rgba(37,38,38,255)' }}>
            <div className='container '>
                <div className='row p-0 m-0  pt-4 pb-4 '>


                    <div className='text-light col-lg-2 col-md-2    container-xxl m-md-0 container-md col-6   ms-md-5   d-flex flex-column'>
                        <img className='mb-2 p-3 ' src={'/images/icons/footer_logo-0١.png'} />
                        <div className=' d-flex col-9  mb-3 container-xxl p-0 text-center'>
                            <div className='col-3'> <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></div>
                            <div className='col-3'> <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></div>
                            <div className='col-3'> <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></div>
                            <div className='col-3'> <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></div>
                        </div>
                    </div>


                    <div className='col-md-9  col-12'>
                        <div className=' d-flex text-light flex-md-nowrap flex-wrap'>
                            <div className=' col-md-3 col-6 p-2'>
                                <div class="searcher_title">
                                    <div class="d-inline-flex flex-column position-relative">
                                        <p>عن المحافظة</p>
                                    </div>
                                </div>

                                <div className='lh-lg d-flex flex-column'>
                                    <a>المحافظون السابقون</a>
                                    <a>قيادات المحافظة</a>
                                    <a>الديوان العام</a>
                                    <a>مشروعات المحافظة</a>
                                    <a>لقاءات و قرارات السيد المحافظ</a>
                                </div>
                            </div>
                            <div className='col-md-3 col-6 p-2'>
                                <div class="searcher_title">
                                    <div class="d-inline-flex flex-column position-relative">
                                        <p>الركن الاعلامي</p>
                                    </div>
                                </div>
                                <div className='lh-lg d-flex flex-column'>

                                    <a>الاخبار</a>
                                    <a>ألبوم الصور</a>
                                    <a>مكتبة الفيديو</a>
                                </div>
                            </div>
                            <div className='col-md-3 col-6 p-2'>
                                <div class="searcher_title">
                                    <div class="d-inline-flex flex-column position-relative">
                                        <p> الخدمات</p>
                                    </div>
                                </div>
                                <div className=' lh-lg d-flex flex-column'>

                                    <a>ادلة المحافظة</a>
                                    <a>المديريات</a>
                                    <a>إعلانات و مناقصات</a>
                                </div>
                            </div>
                            <div className='col-md-3 col-6 p-2'>
                                <div class="searcher_title">
                                    <div class="d-inline-flex flex-column position-relative">
                                        <p>المجالس </p>
                                    </div>
                                </div>
                                <div className='lh-lg d-flex flex-column'>
                                    <a>الجمعيات الاهلية</a>
                                    <a>المجالس القومية</a>
                                </div>
                            </div>

                        </div>
                        <div className='text-light text-center mt-4 mt-md-5 '>حقوق النشر © ا1/4صدارة 0.4 - 2020 نظام مركز المعلومات ودعم اتخاذ القرار - جميع الحقوق محفوظة</div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Footer;