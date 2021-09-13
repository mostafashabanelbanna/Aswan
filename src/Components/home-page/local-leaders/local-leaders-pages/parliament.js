import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getParliament } from "../../../../store/actions/local-leaders-actions";
import ListWithImage from "../../../ui/list-with-image";
import { paths } from "../../../../paths/paths";

const Parliament = (props) => {
  useEffect(() => {
    props.getParliament();
  }, []);

  if (props.allParliament){
  return (
    <>
      <div className=" container underline  my-4">
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
                  hoverTitle="hoverTitle"
                  holder="holder"
                  imageAlbum="imageAlbum"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
        }
  return <div>Loading</div>;
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
