import { Link } from "react-router-dom";
import "../../../Styles/local-leaders-style.css";

const LocalLeaders = (props) => {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-12 px-0">
          <div className="container p-0">
            <div className="d-flex my-3">
              <img
                src="./images/icons/leaders_titel-0١.png"
                alt=""
                width="80px"
              />

              <div className="underline">
                {" "}
                <h3 className="mt-4 me-2  text-dark">قيادات محلية</h3>
              </div>
            </div>
            <div className="d-flex flex-column d-sm-block justify-content-center py-3 text-center">
              
              <Link id='link' to='/tribe' className=" text-decoration-none">
                <div className="col-lg-3 col-12 col-sm-6 mb-5 hvr-grow">
                  <img
                    src="./images/icons/tribes-0١.png"
                    className="mb-3 icons"
                    alt=""
                  />
                  <p>شيوخ القبائل</p>
                </div>
              </Link>

              <Link id='link' to='/parliament' className=" text-decoration-none">
                <div className="col-lg-3 col-12 col-sm-6 mb-5 hvr-grow">
                  <img
                    src="./images/icons/deputies-0١.png"
                    className="mb-3 icons"
                    alt=""
                  />
                  <p>مجلس النواب</p>
                </div>
              </Link>

              <Link id='link' to='/senate' className=" text-decoration-none">
                <div className="col-lg-3 col-12 col-sm-6 mb-5 hvr-grow">
                  <img
                    src="./images/icons/elders-0١.png"
                    className="mb-3 icons"
                    alt=""
                  />
                  <p>مجلس الشيوخ</p>
                </div>
              </Link>

              <div className="col-lg-3 col-12 col-sm-6 mb-5 hvr-grow">
                <img
                  src="./images/icons/Youth-0١.png"
                  className="mb-3 icons"
                  alt=""
                />
                <p>القيادات الشابة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalLeaders;
