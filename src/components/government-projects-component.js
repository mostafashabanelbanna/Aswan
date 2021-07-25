import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

class GovernmentProjects extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid col-12">
        <div className="d-flex me-4 mb-3">
          <FontAwesomeIcon icon={faCogs} className="titleIcon me-5" />
          <p className="titles mb-1">مشروعات المحافظة</p>
        </div>
        <div className="d-flex justify-content-around">
          <FontAwesomeIcon icon={faChevronRight} className="fa-5x rightIcon" />
          <div className="d-flex flex-md-row flex-column mx-auto align-items-center align-items-md-stretch">
            <div className="w-75 ContainerDiv mx-3 p-4 pb-5">
              <p className="titles">مشروع المحاجر</p>
              <p className="content">
                محاجـر الجرانيـت والرخـام علـي ضفـاف بحيرة ناصر باسـوان تعتبر
                مـن أهم المحاجر علي مسـتوي الجمهوريـة لمـا تحويـه من خامـات
                جرانيتيه هامـة حيث أن إجمالـي عدد محاجر الجرانيت بأسـوان فقـط
                يصـل إلـي 63 محجـرا تـم تجديد 44 منهـا خلال هذا العـام وجـار
                التجديد لباقـي المحاجر ولا توجد أي شكاوي من المرخصين.. بجانب 17
                محجر رمليoe ورمال وزلط ، هــذا بخــلاف المحاجــر التــي كانــت
                تقــع تحــت ســيطرة الهيئــة العامــة لبحيــرة ناصــر بمنطقــة
                العلاقـي والتـي يصـل عددهـا إلـي 250 محجـر للجرانيـت والرخـام
                وعـدد العامليـن بـكل محجـر يتراوح من 5 عاملين إلي 20 ً عاملا
                حرصا مــن محافظــة أســوان علــي دفــع عجلــة الاســتثمار فــي
                قطــاع المحاجــر تــم نقــل تبعيــة المحاجر المقامة علي ضفاف
                بحيرة ناصر من الهيئة إلي المحافظة بهدف تنمية موارد المحافظة
                وقـال المحافـظ ان نقـل تبعية المحاجر من هيئة تنميةبحيـرة
                ناصرللمحافظةأمر طبيعي وخاصة أنها ليست أراضي زراعية حيث ان نقل
                التبعية لهذه المحاجر يمثل مسئولية كبيرة علي المحافظة وجديـر
                بالذكـر زيـادة حصيلـة إيـرادات المشـروع علـي مسـتوي المحافظـة
                الـى 008 %بواقـع إلـي 42 مليون جنيه خلال العام المالي 9002 /
                0102 بعد أن كان 3 مليون جنيه فقط
              </p>
            </div>
            <div className="w-75 mx-3 mt-5 mt-md-0">
              <img
                src="./assets/m.jpg"
                className="col-12 h-100 img-fluid imageAlbum"
                alt=""
              />
            </div>
          </div>
          <FontAwesomeIcon icon={faChevronLeft} className="fa-5x leftIcon" />
        </div>
        <div className="line my-5 mx-auto"></div>
      </div>
    );
  }
}

export default GovernmentProjects;
