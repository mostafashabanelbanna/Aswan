import { Link } from "react-router-dom";
import "../../../Styles/local-leaders-style.css";

const LocalLeaders = (props) => {
  return (
    <div>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12 px-0">
            <div className="container p-0">
              <div className="d-flex my-3">
                <img
                  src="./images/icons/leaders_titel-0١.png"
                  alt=""
                  className="brightness"
                  width="80px"
                />

                <div className="underline">
                  {" "}
                  <h3 className="mt-4 me-2 text_blue">قيادات محلية</h3>
                </div>
              </div>
              <div className="d-flex flex-column flex-sm-row d-sm-block justify-content-center py-3 text-center">
                {/* <Link id="link" to="/tribe" className=" text-decoration-none">
                  <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-5 hvr-grow">
                    <img
                      src="./images/icons/tribes-0١.png"
                      className="mb-3 icons"
                      alt=""
                    />
                    <p>شيوخ القبائل</p>
                  </div>
                </Link> */}

                <Link
                  id="link"
                  to="/nationalcouncil"
                  className="mx-md-1 text-decoration-none"
                >
                  <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-5 hvr-grow">
                    <img
                      src="./images/icons/مجالس قومية-01.png"
                      className="mb-3 icons"
                      alt=""
                    />
                    <p>المجالس القومية</p>
                  </div>
                </Link>

                <Link
                  id="link"
                  to="/society"
                  className="mx-md-1 text-decoration-none"
                >
                  <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-5 hvr-grow">
                    <img
                      src="./images/icons/قيادات محلية-01.png"
                      className="mb-3 icons"
                      alt=""
                    />
                    <p>الجمعيات الأهلية</p>
                  </div>
                </Link>

                <Link
                  id="link"
                  to="/parliament"
                  className="mx-md-1 text-decoration-none"
                >
                  <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-5 hvr-grow">
                    <img
                      src="./images/icons/deputies-0١.png"
                      className="mb-3 icons"
                      alt=""
                    />
                    <p>مجلس النواب</p>
                  </div>
                </Link>

                <Link
                  id="link"
                  to="/senate"
                  className="mx-md-1 text-decoration-none"
                >
                  <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-5 hvr-grow">
                    <img
                      src="./images/icons/elders-0١.png"
                      className="mb-3 icons"
                      alt=""
                    />
                    <p>مجلس الشيوخ</p>
                  </div>
                </Link>

                <Link
                  id="link"
                  to="/youthleaders"
                  className="mx-md-1 text-decoration-none"
                >
                  <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-5 hvr-grow">
                    <img
                      src="./images/icons/Youth-0١.png"
                      className="mb-3 icons"
                      alt=""
                    />
                    <p>القيادات الشابة</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalLeaders;
