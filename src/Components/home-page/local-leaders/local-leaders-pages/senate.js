import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSenate } from "../../../../store/actions/local-leaders-actions";
import ListWithImage from "../../../ui/list-with-image";
import { paths } from "../../../../paths/paths";
import ListSkeleton from "../../../loading-skeleton/list-skiliton";

const Senate = (props) => {
  useEffect(() => {
    props.getSenate();
  }, []);

  if (props.allSenate)
    return (
      <>
        <div className=" container underline  my-5">
          <h3>مجلس الشيوخ</h3>
        </div>
        <div className="container mt-5">
          <div className="row ">
            {props.allSenate.result.map((item) => {
              return (
                <div style={{ cursor: "pointer" }} className="mb-4 col-lg-4 col-sm-6 col-12">
                  <ListWithImage
                    imgSrc={paths.SenatePhotos + item.id + "/" + item.photo}
                    title={item.title}
                    content={item.content}
                    center="yes"
                    imgHeight='250px'
                    hoverTitle="hoverTitle"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  return <ListSkeleton/>;
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
