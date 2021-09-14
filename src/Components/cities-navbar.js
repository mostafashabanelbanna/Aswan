import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllCities, clearNavbarCities } from "../store/actions/navbar";
import ListWithImage from "./ui/list-with-image";
import { paths } from "../paths/paths";
import PaginationSection from "./ui/pagination-section";
import ListSkeleton from "./loading-skeleton/list-skiliton";

const CitiesNavBar = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  let pageCount;

  const handlePageClick = ({ selected: selectedPage }) => {
    props.clearNavbarCities();
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    props.getAllCities(currentPage + 1, {});
  }, [currentPage]);

  if (props.citiesList) {
    console.log(props.citiesList);
    pageCount = Math.ceil(props.citiesList.count / 9);
    return (
      <>
        <div className="container mt-5">
          <div className="underline  my-5">
            <h3>مدن المحافظة</h3>
          </div>
          <div className="row ">
            {props.citiesList.result.map((item) => {
              return (
                <div
                  key={item.id}
                  style={{ cursor: "pointer" }}
                  className="shadow-none mb-4 col-lg-4 col-sm-6 col-12"
                >
                  <ListWithImage
                    imgSrc={paths.NavBarCities + item.id + "/" + item.photo}
                    title={item.name}
                    center="yes"
                    imgHeight='250px'
                    hoverTitle="hoverTitle"
                  />
                </div>
              );
            })}
          </div>
          {props.citiesList.result.length ? (
            <PaginationSection
              currentPage={currentPage}
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />
          ) : (
            <div className="text-center mt-5">لا يوجد نتائج</div>
          )}
        </div>
      </>
    );
  }
  return <ListSkeleton/>;
};
const mapStateToProps = (state) => {
  return {
    citiesList: state.homeComponents.citiesList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getAllCities, clearNavbarCities }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesNavBar);
