import "../../Styles/photo-album-style.css";
import { Link } from "react-router-dom";

const InvestorAlbum = (props) => {
  let photosArr = [
    {
      id: 43,
      photo: "/images/investor-photos/سياحة.PNG",
      name: "tourism",
      title: "السياحة",
    },
    {
      id: 44,
      photo: "/images/investor-photos/صناعة.PNG",
      name: "industry",
      title: "الصناعة",
    },
    {
      id: 45,
      photo: "/images/investor-photos/محاجر.PNG",
      name: "quarries",
      title: "المحاجر",
    },
    {
      id: 55,
      photo: "/images/investor-photos/تعدين.PNG",
      name: "miningandpetroleum",
      title: "التعدين والبترول",
    },
    {
      id: 46,
      photo: "/images/investor-photos/زراعه.PNG",
      name: "farming",
      title: "الزراعة",
    },
    {
      id: 47,
      photo: "/images/investor-photos/بنية.PNG",
      name: "infrastructure",
      title: "البنية التحتية",
    },
  ];

  const renderAlbum = () => {
    return (
      <div className="d-flex justify-content-around flex-wrap flex-column flex-sm-row">
        {photosArr.map((item, index) => {
          return (
            <Link
              id="link"
              to={`/statichome/${item.id}/${item.name}`}
              className=" col-lg-4 col-md-6 col-10 mb-4 mb-lg-0 mx-auto p-3"
            >
              <div className="hoverTitle " key={item.id}>
                <div className="holder mb-4">
                  <div
                    style={{
                      backgroundImage: `url(${item.photo})`,
                    }}
                    className="imageAlbum"
                    alt={item.title}
                  ></div>
                </div>
                <p className="text-center mb-5" style={{ fontSize: "22px" }}>
                  {item.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="d-flex my-2">
          <img
            src="./images/icons/photoalbum_titel-0٢.png"
            alt=""
            width="80px"
          />
          <div className="underline">
            {" "}
            <h3 className="mt-4 me-2 text-dark">مجالات الإستثمار</h3>
          </div>
        </div>
        {renderAlbum()}
      </div>
      <div className="line mx-auto"></div>
    </div>
  );
};

export default InvestorAlbum;
