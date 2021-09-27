import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getProjectsList, getAllProjectsCategories, clearProjectsList
} from "../../../store/actions/government-projects-actions.js";
import { Container } from "react-bootstrap";
import SearchSection from "../../ui/search-section";
import PaginationSection from "../../ui/pagination-section";
import ListSkeleton from "../../loading-skeleton/list-skiliton";
import ListWithImage from "../../ui/list-with-image";
import { paths } from "../../../paths/paths";
import { Link } from "react-router-dom";


const ProjectsList = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flag, setFlag] = useState(1);
  const [name, setName] = useState(null);
  const [sectorId, setSectorId] = useState(null);

  let dataFilled = { name, sectorId };
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault();
    props.getProjectsList(currentPage + 1, data(dataFilled));
    setFlag(1);
    setCurrentPage(0);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const sectorIdHandler = (e) => {
    setSectorId(e.value);
  };

  function data(a) {
    for (let property in a) {
      if (a[property] == null) delete a[property];
    }
    return a;
  }

  function check(a) {
    let flags = 0;
    for (let property in a) {
      if (a[property] != null) {
        flags = 1;
        return true;
      }
    }
    return false;
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    props.clearProjectsList();
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    if (flag)
      check(dataFilled) == false
        ? props.getProjectsList(currentPage + 1)
        : props.getProjectsList(currentPage + 1, data(dataFilled));
    else props.getProjectsList(currentPage + 1);

    if (!props.allCities) props.getAllProjectsCategories();

    setFlag(1);

    return () => {
      props.clearProjectsList();
    };
  }, [currentPage]);

  if (props.projectsList) {
    let sectorName = props.projectsSectors.result.map(({ id, nameA }) => ({
      value: id,
      label: nameA,
    }));
    sectorName.unshift({ value: null, label: "كل قطاعات المشروعات" });
    pageCount = Math.ceil(props.projectsList.count / 9);
    if (props.projectsList.page == currentPage + 1) {
      return (
        <>
          <Container fluid>
            <div className=" container underline  my-5">
              <h3>مشروعات المحافظة</h3>
            </div>
            <div className=" bg-light p-3">
              <SearchSection
                submit={submitHandler}
                TextFieldOneHandler={nameHandler}
                labelTextFieldOne="الاسم"
                classNameTextFieldOne="col-sm-6 col-12"
                dropdownOneVal={sectorName.find((e) => e.value == sectorId)}
                dropdownOneHandler={sectorIdHandler}
                dropdownOnePlaceholder="كل قطاعات المشروعات"
                dropdownOneName={sectorName}
                classNameDropdownOne="col-sm-6 col-12"
              />
            </div>
          </Container>
          <div className="col-10 mx-auto my-5 d-flex flex-wrap justify-content-around flex-column flex-sm-row">
            {props.projectsList.result.map((item, index) => {
                              let pName;
                              let newPath;
                              if(item.photo != null){
                              pName = item.photo;
                              newPath  = pName.replaceAll(' ','%20')
                              }
              return (
                <div style={{cursor:"pointer"}} className="mb-4 col-lg-4 col-sm-6 col-12 p-3">
                    <Link id='link' to={`projectDetails/${item.id}`} className="h-100 text-decoration-none">
                        <ListWithImage
                            imgSrc={paths.ProjectPhoto + item.id + "/" + newPath}
                            title={item.name}
                            category={item.sectorName}
                            center="yes"
                            imgHeight='250px'
                            hoverTitle="hoverTitle"
                        />
                    </Link>
                </div>
              );
            })}
          </div>
          {props.projectsList.result.length ? (
            <PaginationSection
              currentPage={currentPage}
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />
          ) : (
            <div className="text-center mt-5">لا يوجد نتائج</div>
          )}
        </>
      );
    }
  }
  return <ListSkeleton/>;
};
const mapStateToProps = (state) => {
  return {
    projectsList: state.homeComponents.projectsList,
    projectsSectors: state.homeComponents.projectsSectors,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getProjectsList, getAllProjectsCategories, clearProjectsList }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
