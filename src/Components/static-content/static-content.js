import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import {
  getStaticContent,
  clearStaticContent,
  getStaticContentDetails,
  clearStaticContentDetails,
} from "../../store/actions/static-content";
import { useEffect } from "react";
import MainSliderSkeleton from "../loading-skeleton/mainSlider";
import StaticContentDetails from "./static-content-details";
import { useState } from "react";

const StaticContent = (props) => {
  const [detailsID, setDetailsID] = useState(0);
  const [flag, setFlag] = useState(0);
  const [personId, setPersonId] = useState(props.code);
  let id = props.id;
  let title = props.title;
  let titleName;
  const [titleFamous, setTitleFamous] = useState(titleName);
  let name = props.name;
  let activeClass = "activeClass";

  if (title == "aboutgovernment") {
    titleName = "عن المحافظة";
  } else if (title == "natureoftheproject") {
    titleName = "ماهية المشروع";
  } else if (title == "applicationform") {
    titleName = "نموذج التسجيل";
  } else if (title == "financingframework") {
    titleName = "الاطار التمويلي";
  } else if (title == "licensingprocedures") {
    titleName = "اجراءات التراخيص";
  } else if (title == "implementationphases") {
    titleName = "مراحل التنفيذ";
  } else if (title == "successstories") {
    titleName = "قصص نجاح";
  } else if (title == "commonquestions") {
    titleName = "أسئلة شائعة";
  } else if (title == "tourism") {
    titleName = "السياحة";
  } else if (title == "industry") {
    titleName = "الصناعة";
  } else if (title == "quarries") {
    titleName = "المحاجر";
  } else if (title == "miningandpetroleum") {
    titleName = "التعدين والبترول";
  } else if (title == "farming") {
    titleName = "الزراعة";
  } else if (title == "infrastructure") {
    titleName = "البنية التحتية";
  } else {
    titleName = title;
  }

  useEffect(() => {
    props.getStaticContent(parseInt(id));
    return () => {
      props.clearStaticContent();
    };
  }, [parseInt(id)]);

  if (props?.allStaticContent?.result?.length > 0) {
    if (flag == 0) {
      setDetailsID(
        name == "investor" || name == "aboutgovernment"
          ? props.allStaticContent.result[0].id
          : personId
      );
      setFlag(1);
    }
  }

  if (props.allStaticContent) {
    return (
      <div>
        <div className="container">
          <div className="my-3 underline">
            <h3 className="mb-0">{titleFamous ?? titleName}</h3>
          </div>
        </div>
        <div className="col-12 py-4">
          <div className="container py-3 col-12 text-center flex-wrap d-flex justify-content-around align-items-center p-0">
            {props.allStaticContent.result.map((item, index) => {
              return (
                <div
                  id="link"
                  onClick={() => {
                    setDetailsID(item.id);
                    setTitleFamous(item.title);
                    setPersonId(item.id);
                  }}
                  style={{
                    cursor: "pointer",
                    border: "1px solid orange",
                    borderRadius: "4px",
                  }}
                  className={` ${
                    name == "investor" || name == "aboutgovernment"
                      ? detailsID == item.id
                        ? activeClass
                        : ""
                      : personId == item.id
                      ? activeClass
                      : ""
                  } text-decoration-none my-3 col-sm-6 col-md-3 mx-2 col-9 hvr-grow-shadow hvr-underline-reveal d-flex justify-content-center align-items-center`}
                >
                  <div className="my-2">
                    <span className="spansz">{item.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
          {detailsID != 0 ? (
            <StaticContentDetails Id={detailsID} />
          ) : (
            <div className="text-center my-5">جاري رفع البيانات</div>
          )}
        </div>
      </div>
    );
  } else {
    return <MainSliderSkeleton />;
  }
};

export default connect(
  (state) => {
    return {
      allStaticContent: state.staticContent.allStaticContent,
      // staticContentDetails: state.staticContent.staticContentDetails
    };
  },
  (dispatch) => {
    return bindActionCreators(
      {
        getStaticContent,
        clearStaticContent,
        getStaticContentDetails,
        clearStaticContentDetails,
      },
      dispatch
    );
  }
)(StaticContent);
