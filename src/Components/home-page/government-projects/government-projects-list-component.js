import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getProjectsList,
  getAllProjectsCategories,
  clearProjectsList,
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
    setCurrentPage(0);
    props.getProjectsList(currentPage + 1, data(dataFilled));
    setFlag(1);
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

  let sectorName = [];
  if (props?.projectsSectors?.result) {
    sectorName = props.projectsSectors.result.map(({ id, nameA }) => ({
      value: id,
      label: nameA,
    }));
    sectorName.unshift({ value: null, label: "كل قطاعات المشروعات" });
  }

  const render = () => {
    if (props?.projectsList?.result) {
      pageCount = Math.ceil(props.projectsList.count / 9);
      if (props.projectsList.page == currentPage + 1) {
        return (
          <>
            <div className="col-10 mx-auto my-5 d-flex flex-wrap justify-content-around flex-column flex-sm-row">
              {props.projectsList.result.map((item, index) => {
                let pName;
                let newPath;
                if (item.photo != null) {
                  pName = item.photo;
                  newPath = pName.replaceAll(" ", "%20");
                }
                return (
                  <div
                    style={{ cursor: "pointer" }}
                    className="mb-4 col-md-6 col-xl-4 col-12 p-3"
                  >
                    <Link
                      id="link"
                      to={`projectDetails/${item.id}`}
                      className="h-100 text-decoration-none"
                    >
                      <ListWithImage
                        imgSrc={paths.ProjectPhoto + item.id + "/" + newPath}
                        title={item.name}
                        category={item.sectorName}
                        center="yes"
                        imgHeight="250px"
                        divHeight="24rem"
                        hoverTitle="hoverTitle h-100"
                        changeRate={item.changeRate}
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
              <div className="text-center mt-5">جاري رفع البيانات</div>
            )}
          </>
        );
      }
    }
    return (
      <>
        <ListSkeleton />
      </>
    );
  };
  return (
    <>
      <Container fluid>
        <div className=" container underline mt-3 mb-5">
          <h3>مشروعات المحافظة</h3>
        </div>
      </Container>
      <SearchSection
        submit={submitHandler}
        TextFieldOneHandler={nameHandler}
        labelTextFieldOne="الاسم"
        classNameTextFieldOne="col-md-5 mt-md-2 mt-3 col-12"
        dropdownOneVal={sectorName.find((e) => e.value == sectorId)}
        dropdownOneHandler={sectorIdHandler}
        dropdownOnePlaceholder="كل قطاعات المشروعات"
        dropdownOneName={sectorName}
        classNameDropdownOne="col-md-5 my-4 col-12"
        classNameBtn="col-md-2 col-12"
      />
      {render()}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    projectsList: state.homeComponents.projectsList,
    projectsSectors: state.homeComponents.projectsSectors,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getProjectsList, getAllProjectsCategories, clearProjectsList },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
