import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllCities, clearNavbarCities } from "../../store/actions/navbar";
import ListWithImage from "../ui/list-with-image";
import { paths } from "../../paths/paths";
import PaginationSection from "../ui/pagination-section";
import ListSkeleton from "../loading-skeleton/list-skiliton";
import { Link } from "react-router-dom";

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

  if (props?.citiesList?.result) {
    pageCount = Math.ceil(props.citiesList.count / 9);
    return (
      <>
        <div className="container mt-5">
          <div className="underline  my-5">
            <h3>مدن المحافظة</h3>
          </div>
          <div className="row ">
            {props.citiesList.result.map((item) => {
              let pName;
              let newPath;
              if(item.photo != null){
                pName = item.photo;
                newPath  = pName.replaceAll(' ','%20')
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
                    imgHeight='250px'
                    hoverTitle="hoverTitle"
                    divHeight='20rem'
                  />
                </Link>
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
