import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";

function PhotosAlbum(props) {
  return (
    <div className="container-fluid col-11 mt-5 mb-2">
      <div className="d-flex mb-3 justify-content-center justify-content-md-start">
        <FontAwesomeIcon icon={faImages} className="titleIcon" />
        <p className="titles mb-1">البوم الصور</p>
      </div>
      <div className="d-flex justify-content-lg-around flex-column flex-md-row">
        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="./assets/m.jpg"
            className="w-100 shadow-1-strong imageAlbum mb-4"
            alt=""
          />
          <p className="text-center titles mb-5">نهر النيل في اسوان</p>

          <img
            src="./assets/m.jpg"
            className="w-100 shadow-1-strong imageAlbum mb-4"
            alt=""
          />

          <p className="text-center titles">مقابر النبلاء</p>
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0 me-md-4">
          <img
            src="./assets/m.jpg"
            className="w-100 shadow-1-strong imageAlbum mb-4"
            alt=""
          />

          <p className="text-center titles mb-5">الحديقة النباتية بأسوان</p>

          <img
            src="./assets/m.jpg"
            className="w-100 shadow-1-strong imageAlbum mb-4"
            alt=""
          />

          <p className="text-center titles">كلابشة</p>
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0 me-md-4">
          <img
            src="./assets/m.jpg"
            className="w-100 shadow-1-strong imageAlbum mb-4"
            alt=""
          />

          <p className="text-center titles mb-5">متحف النوبة</p>

          <img
            src="./assets/m.jpg"
            className="w-100 shadow-1-strong imageAlbum mb-4"
            alt=""
          />

          <p className="text-center titles">المسلة الغير مكتملة</p>
        </div>
      </div>
      <div className="line mx-auto my-5 w-100"></div>
    </div>
  );
}

export default PhotosAlbum;
