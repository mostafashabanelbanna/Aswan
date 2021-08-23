import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
const NewsDetails = () => {

    return (<div>
        <div className="my-5 text-center"><h3>"بدء­ من اليوم.. السعودية تطبق قيود­ صارمة على حركة غير المطعمين بلقاح "كورونا</h3></div>
        <div className=" container p-0">
            <div className="my-2 d-flex"> <div className="mt-1 ms-2">
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </div> <h5><u>منع غير المحصنين من دخول جميع اماكن العامة والفعاليات والمنشآت الحكومية والخاصة واستخدام وسائل النقل العام</u></h5></div>
            <div className="my-2 d-flex">
                <div className="mt-1 ms-2">
                    <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                </div>
                <h5><u>وزارة الموارد البشرية توضح آلية التعامل مع الموظفين غير المطعمين في القطاع العام والقطاعين الخاص وغير الربحي</u></h5></div>
            <div className="mt-2">  <p className="text-muted">
                06:11 2021 أغسطس 01 صباح 07:19 فى حدثت 2021 أغسطس 01 ص
            </p></div>
        </div>
        <div className=" container p-0">
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                <div className="col-md-6 p-2 col-12">
                    <img src={'/images/cover.jpg'} className="w-100" />
                </div>
                <div className="col-md-6 p-2 col-12 align-items-center d-flex">،" َّ تبدأ السعودية، اعتبار من اليوم احد، تطبيق قيود صارمة على حركة غير المطعمين بلقاح "كورونا
                    ،إذ تفرض السلطات إلزامية التحصين المعتمد من وزارة الصحة بأحد اللقاحات المضادة لفيروس كورونا
                    لدخول جميع اماكن العامة، والفعاليات، والمنشآت الحكومية والخاصة، واستخدام وسائل النقل العام
                    .في المملكة
                    َّ وأكدت وزارة الداخلية السعودية، في بيان على بدء إلزامية التحصين المعتمد من وزارة الصحة اعتبار
                    .من اليوم احد، في جميع مناطق المملكة</div>
            </div>
        </div>
        <div className="justify-content-center align-items-center d-flex my-4">
            <button className="btn " style={{ background: '-webkit-linear-gradient(right, #a4e1bf 0%,  #fef9a4 100%)'}}>المزيد من الاخبار</button>
        </div>
    </div>);
}

export default NewsDetails;