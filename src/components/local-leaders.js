import '../Styles/local-leaders-style.css';

const LocalLeaders = (props) => {
  return (
    <div className="container mt-5 mb-4">
      <div className="d-flex my-2 mb-2 ">
        <img
          src="./images/icons/leaders_titel-0١.png"
          alt=""
          width="50px"
        />

      <div className='underline'> <h3 className="mt-4 me-2  text-secondary">قيادات محلية</h3></div>
      </div>
      <div className="container p-0 mt-5">
        <div className="row text-center p-0 m-0 ">
          <div className="col-lg-3 col-12 col-sm-6 mb-5 hvr-grow">
            <img src="./images/icons/tribes-0١.png" className="mb-3 icons" alt=""/>
            <p>شيوخ القبائل</p>
          </div>
          <div className="col-lg-3 col-12 col-sm-6 mb-5 hvr-grow">
            <img src="./images/icons/deputies-0١.png" className="mb-3 icons" alt=""/>
            <p>مجلس النواب</p>
          </div>
          <div className="col-lg-3 col-12 col-sm-6 mb-5 hvr-grow">
            <img src="./images/icons/elders-0١.png" className="mb-3 icons" alt=""/>
            <p>مجلس الشيوخ</p>
          </div>
          <div className="col-lg-3 col-12 col-sm-6 mb-5 hvr-grow">
            <img src="./images/icons/Youth-0١.png" className="mb-3 icons" alt=""/>
            <p>القيادات الشابة</p>
          </div>
        </div>
      </div>
      <div className="line mx-auto my-5 w-100"></div>
    </div>
  );
};

export default LocalLeaders;
