import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getParliament } from "../../../../store/actions/local-leaders-actions";
import ListWithImage from "../../../ui/list-with-image";
import { paths } from "../../../../paths/paths";
import ListSkeleton from "../../../loading-skeleton/list-skiliton";
import ReactHtmlParser from "react-html-parser";

const Parliament = (props) => {
  useEffect(() => {
    props.getParliament();
  }, []);

  if (props?.allParliament?.result) {
    return (
      <>
        <div className=" container underline  my-5">
          <h3>مجلس النواب</h3>
        </div>
        <div className="container mt-5">
          <div className="row ">
            {props.allParliament.result.map((item) => {
              let pName;
              let newPath;
              if (item.photo != null) {
                pName = item.photo;
                newPath = pName.replaceAll(" ", "%20");
              }
              return (
                <div className="mb-4 col-md-6 col-xl-4 col-12">
                  <ListWithImage
                    imgSrc={paths.SenatePhotos + item.id + "/" + item.photo}
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
  }
  return <ListSkeleton />;
};
const mapStateToProps = (state) => {
  return {
    allParliament: state.LocalLeadersComponents.allParliament,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getParliament }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Parliament);
