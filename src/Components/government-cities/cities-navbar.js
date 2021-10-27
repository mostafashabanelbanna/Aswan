import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllFocusedCities } from "../../store/actions/navbar";
import ListWithImage from "../ui/list-with-image";
import { paths } from "../../paths/paths";
import PaginationSection from "../ui/pagination-section";
import ListSkeleton from "../loading-skeleton/list-skiliton";
import { Link } from "react-router-dom";

const CitiesNavBar = (props) => {
  useEffect(() => {
    props.getAllFocusedCities();
  }, []);

  if (props?.citiesList?.result) {
    return (
      <>
        <div className="container my-5">
          <div className="underline mb-5 mt-3">
            <h3>مدن المحافظة</h3>
          </div>
          <div className="row ">
            {props.citiesList.result.map((item) => {
              let pName;
              let newPath;
              if (item.photo != null) {
                pName = item.photo;
                newPath = pName.replaceAll(" ", "%20");
              }
              return (
                <Link
                  key={item.id}
                  to={`/citydetails/${item.id}`}
                  className="shadow-none mb-4 col-md-6 col-xl-4 col-12"
                >
                  <ListWithImage
                    imgSrc={paths.NavBarCities + item.id + "/" + newPath}
                    title={item.name}
                    center="yes"
                    imgHeight="250px"
                    hoverTitle="hoverTitle"
                    divHeight="20rem"
                  />
                </Link>
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
    citiesList: state.homeComponents.citiesFocusedList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getAllFocusedCities }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesNavBar);
