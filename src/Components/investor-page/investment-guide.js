import "../../Styles/photo-album-style.css";
import { Link } from "react-router-dom";

const InvestorGuide = (props) => {
  let photosArr = [
    {
      routeId: `/statichome/${1009}/natureoftheproject/${1009}/${'investor'}`,
      photo: "/images/investor-photos/ماهية المشروع-01.png",
      title: "ماهية المشروع",
    },
    {
      routeId: `/statichome/${1010}/applicationform/${1010}/${'investor'}`,
      photo: "/images/investor-photos/نموذج التسجيل-01.png",
      title: "نموذج التسجيل للمشروع",
    },
    {
      routeId: `/document-library/${6}`,
      photo: "/images/investor-photos/دراسة جدوى-01.png",
      title: "دراسات جدوى",
    },
    {
      routeId: `/statichome/${1004}/financingframework/${1004}/${'investor'}`,
      photo: "/images/investor-photos/الاطار التمويلي-01.png",
      title: "الإطار التمويلي",
    },
    {
      routeId: `/statichome/${1005}/licensingprocedures/${1005}/${'investor'}`,
      photo: "/images/investor-photos/اجراءات التراخيص-01.png",
      title: "اجراءات الترخيص",
    },
    {
      routeId: `/statichome/${1006}/implementationphases/${1006}/${'investor'}`,
      photo: "/images/investor-photos/مراحل التنفيذ-01.png",
      title: "مراحل التنفيذ",
    },
    {
      routeId: `/statichome/${1007}/successstories/${1007}/${'investor'}`,
      photo: "/images/investor-photos/قصص نجاح-01.png",
      title: "قصص نجاح",
    },
    {
      routeId: `/statichome/${1008}/commonquestions/${1008}/${'investor'}`,
      photo: "/images/investor-photos/اسئلة شائعه-01.png",
      title: "اسئلة شائعة",
    },
  ];

  const renderAlbum = () => {
    return (
      <div className="d-flex align-content-center flex-wrap flex-column flex-sm-row">
        {photosArr.map((item, index) => {
          let pName;
          let newPath;
          if (item.photo != null) {
            pName = item.photo;
            newPath = pName.replaceAll(" ", "%20");
          }
          return (
            <Link
              id="link"
              to={item.routeId}
              className="d-flex flex-column hvr-bob hvr-sweep-to-bottom p-3 my-3 col-sm-6 col-lg-3 col-10  align-items-center"
            >
              <div className="d-flex w-50 hvr-grow-rotate justify-content-center">
                {" "}
                <img className="brightness w-100" src={item.photo} />
              </div>
              <div className="mt-2 fw-bold text-center">{item.title}</div>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-light">
      <div className="container py-5">
        <div className="d-flex align-items-end">
          <img
            className="brightness"
            src="./images/investor-photos/دليل المسثمر-01.png"
            alt=""
            height="50px"
          />
          <div className="underline">
            {" "}
            <h3 className="mt-2 me-2 text-dark">دليل الإستثمار</h3>
          </div>
        </div>
        {renderAlbum()}
      </div>
      <div className="line mx-auto"></div>
    </div>
  );
};

export default InvestorGuide;
