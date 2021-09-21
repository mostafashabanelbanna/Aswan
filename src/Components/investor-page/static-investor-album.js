import "../../Styles/photo-album-style.css";
import { Link } from "react-router-dom";

const InvestorAlbum = (props) => {
  let photosArr = [
      {id:43, photo:'/images/investor-photos/سياحة.PNG', title:'السياحة'},
      {id:44, photo:'/images/investor-photos/صناعة.PNG', title:'الصناعة'},
      {id:45, photo:'/images/investor-photos/محاجر.PNG', title:'المحاجر'},
      {id:55, photo:'/images/investor-photos/تعدين.PNG', title:'التعدين والبترول'},
      {id:46, photo:'/images/investor-photos/زراعه.PNG', title:'الزراعة'},
      {id:47, photo:'/images/investor-photos/بنية.PNG', title:'البنية التحتية'}
  ]

  const renderAlbum = () => {
    return (
      <div className="d-flex justify-content-around flex-wrap flex-column flex-sm-row">
        {photosArr.map((item, index) => {
          return (
            <Link to={`/investor`} className='text-muted col-lg-4 col-md-6 col-10 mb-4 mb-lg-0 mx-auto p-3'>
            <div
              className="hoverTitle "
              key={item.id}
            >
              <div className="holder mb-4">
                <div
                  style={{
                    backgroundImage: `url(${item.photo})`,
                  }}
                  className="imageAlbum"
                  alt={item.title}
                ></div>
              </div>
              <p className="text-center mb-5" style={{fontSize:'22px'}}>{item.title}</p>
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
              <h3 className="mt-4 me-2 text-secondary">مجالات الإستثمار</h3>
            </div>
          </div>
          {renderAlbum()}
        </div>
      </div>
    );
};

export default InvestorAlbum;
