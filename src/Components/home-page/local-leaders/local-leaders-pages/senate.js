import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSenate } from "../../../../store/actions/local-leaders-actions";
import ListWithImage from "../../../ui/list-with-image";
import { paths } from "../../../../paths/paths";
import ListSkeleton from "../../../loading-skeleton/list-skiliton";
import ReactHtmlParser from "react-html-parser";

const Senate = (props) => {
  useEffect(() => {
    props.getSenate();
  }, []);

  if (props?.allSenate?.result)
    return (
      <>
        <div className=" container underline mt-3 mb-5">
          <h3>مجلس الشيوخ</h3>
        </div>
        <div className="container mt-5">
          <div className="row ">
            {props.allSenate.result.map((item) => {
              let pName;
              let newPath;
              if (item.photo != null) {
                pName = item.photo;
                newPath = pName.replaceAll(" ", "%20");
              }
              return (
                <div key={item.id} className="mb-4 col-md-6 col-xl-4 col-12">
                  <ListWithImage
                    imgSrc={paths.SenatePhotos + item.id + "/" + newPath}
                    title={item.title}
                    content={ReactHtmlParser(item.content)}
                    center="yes"
                    imgHeight="250px"
                    hoverTitle="hoverTitle h-100"
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
    allSenate: state.LocalLeadersComponents.allSenate,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getSenate }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Senate);
