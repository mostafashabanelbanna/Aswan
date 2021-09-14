import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getEx_Conservatives } from "../../store/actions/governer";
import ListWithImage from "../ui/list-with-image";
import { paths } from "../../paths/paths";
import moment from "moment";
import "moment/locale/ar";

const ExConservatives = (props) => {
  useEffect(() => {
    props.getEx_Conservatives();
  }, []);

  if (props.exconservatives){
      console.log(props.exconservatives)
    return (
      <>
        <div className=" container underline  my-4">
          <h3>المحافظون السابقون </h3>
        </div>
        <div className="container mt-5">
          <div className="row ">
            {props.exconservatives.result.map((item) => {
              return (
                <div style={{cursor:"pointer"}} className="mb-4 col-lg-4 col-sm-6 col-12">
                  <ListWithImage
                    imgSrc={paths.Governer + item.id + "/" + item.photo}
                    title={item.name}
                    date={`${moment(new Date(item.jobStartDate)).format("LL")} إلى ${moment(new Date(item.jobEndDate)).format("LL")}`}
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
    } return <div>Loading</div>;
};
const mapStateToProps = (state) => {
  return {
    exconservatives: state.GovernerComponents.exconservatives,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getEx_Conservatives }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ExConservatives);
