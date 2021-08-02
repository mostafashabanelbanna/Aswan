import React from 'react'

const Footer = () => {

    return (
        <div className='bg-dark'>
            <div className='custom_contanier '>
                <div className='row p-0 m-0 mb-5 pt-5 pb-2'>
                    <div className='text-light col-2 ms-5 justify-content-center align-items-center  d-flex flex-column'>
                        <img className='mb-4 p-2 w-100' src={'/images/shrimp-zone-seafood_menu_2.jpg'} />
                        <div>dsdsdsdsdssdsddssd</div>
                    </div>
                    <div className='col-9 '>
                        <div className=' d-flex text-light '>
                            <div className='col-3 p-2'>
                                <div class="searcher_title">
                                    <div class="d-inline-flex flex-column position-relative">
                                        <p>عن المحافظة</p>
                                    </div>
                                </div>

                                <div className=' d-flex flex-column'>
                                    <a>المحافظون السابقون</a>
                                    <a>قيادات المحافظة</a>
                                    <a>الديوان العام</a>
                                    <a>مشروعات المحافظة</a>
                                    <a>لقاءات و قرارات السيد المحافظ</a>
                                </div>
                            </div>
                            <div className='col-3 p-2'>
                                <div class="searcher_title">
                                    <div class="d-inline-flex flex-column position-relative">
                                        <p>الركن الاعلامي</p>
                                    </div>
                                </div>
                                <div className=' d-flex flex-column'>

                                    <a>الاخبار</a>
                                    <a>ألبوم الصور</a>
                                    <a>مكتبة الفيديو</a>
                                </div>
                            </div>
                            <div className='col-3 p-2'>
                                <div class="searcher_title">
                                    <div class="d-inline-flex flex-column position-relative">
                                        <p> الخدمات</p>
                                    </div>
                                </div>
                                <div className=' d-flex flex-column'>

                                    <a>ادلة المحافظة</a>
                                    <a>المديريات</a>
                                    <a>إعلانات و مناقصات</a>
                                </div>
                            </div>
                            <div className='col-3 p-2'>
                                <div class="searcher_title">
                                    <div class="d-inline-flex flex-column position-relative">
                                        <p>المجالس </p>
                                    </div>
                                </div>
                                <div className=' d-flex flex-column'>
                                    <a>الجمعيات الاهلية</a>
                                    <a>المجالس القومية</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-light text-center mt-4 mb-3'>حقوق النشر © ا1/4صدارة 0.4 - 2020 نظام مركز المعلومات ودعم اتخاذ القرار - جميع الحقوق محفوظة</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;