import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getParliament } from "../../../../store/actions/local-leaders-actions";
import ListWithImage from "../../../ui/list-with-image";
import { paths } from "../../../../paths/paths";
import ListSkeleton from "../../../loading-skeleton/list-skiliton";

const Parliament = (props) => {
  useEffect(() => {
    props.getParliament();
  }, []);

  if (props.allParliament){
  return (
    <>
      <div className=" container underline  my-5">
        <h3>مجلس النواب</h3>
      </div>
      <div className="container mt-5">
        <div className="row ">
          {props.allParliament.result.map((item) => {
            return (
              <div style={{ cursor: "pointer" }} className="mb-4 col-lg-4 col-sm-6 col-12">
                <ListWithImage
                  imgSrc={paths.SenatePhotos + item.id + "/" + item.photo}
                  title={item.title}
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
        }
  return <ListSkeleton/>;
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
