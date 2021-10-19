import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getYouthLeaders } from "../../../../store/actions/local-leaders-actions";
import ListWithImage from "../../../ui/list-with-image";
import { paths } from "../../../../paths/paths";
import ListSkeleton from "../../../loading-skeleton/list-skiliton";
import ReactHtmlParser from "react-html-parser";

const YouthLeaders = (props) => {
  useEffect(() => {
    props.getYouthLeaders();
  }, []);

  if (props?.allYouthLeaders?.result)
    return (
      <>
        <div className="container underline  my-5">
          <h3>القيادات الشابة</h3>
        </div>
        <div className="container mt-5">
          <div className="row ">
            {props.allYouthLeaders.result.map((item) => {
              let pName;
              let newPath;
              if (item.photo != null) {
                pName = item.photo;
                newPath = pName.replaceAll(" ", "%20");
              }
              return (
                <div className="mb-4 col-md-6 col-xl-4 col-12">
                  <ListWithImage
                    imgSrc={paths.SenatePhotos + item.id + "/" + newPath}
                    title={item.title}
                    content={ReactHtmlParser(item.content)}
                    center="yes"
                    imgHeight="250px"
                    hoverTitle="hoverTitle"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  return <ListSkeleton />;
};
const mapStateToProps = (state) => {
  return {
    allYouthLeaders: state.LocalLeadersComponents.allYouthLeaders,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getYouthLeaders }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(YouthLeaders);
