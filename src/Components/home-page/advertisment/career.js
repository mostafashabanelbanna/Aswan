import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCareer } from "../../../store/actions/advertisment-action";
import { paths } from "../../../paths/paths";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListWithImage from "../../ui/list-with-image";
import moment from "moment";
import "moment/locale/ar";
import SearchSection from "../../ui/search-section";
import PaginationSection from "../../ui/pagination-section";
import ListSkeleton from "../../loading-skeleton/list-skiliton";

const Career = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [title, setTitle] = useState(null);
  const [flag, setFlag] = useState(0);

  let dataFilled = {
    title,
  };
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault();
    props.getCareer(currentPage + 1, data(dataFilled));
    setFlag(1);
    setCurrentPage(0);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  function check(a) {
    for (let property in a) {
      if (a[property] != null) {
        return true;
      }
    }
    return false;
  }

  function data(a) {
    for (let property in a) {
      if (a[property] == null || a[property] == "") delete a[property];
    }
    return a;
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    if (flag) {
      check(dataFilled) == false
        ? props.getCareer(currentPage + 1)
        : props.getCareer(currentPage + 1, data(dataFilled));
    } else {
      props.getCareer(currentPage + 1, data(dataFilled));
    }
    setFlag(0);
  }, [currentPage]);

  if (props.career) {
    pageCount = Math.ceil(props.career.count / 2);
    return (
      <>
        <Container fluid>
          <div className=" container underline  my-4">
            <h3> وظائف شاغرة</h3>
          </div>
          <div className=" bg-light p-3">
            <SearchSection
              submit={submitHandler}
              TextFieldOneHandler={titleHandler}
              labelTextFieldOne="العنوان"
              classNameTextFieldOne="col-12"
            />
          </div>
        </Container>
        {props.career.result.length ? (
          <Container>
            <Row className="my-4">
              {props.career.result.map((item, index) => {
                let pName = item.photo;
                let newPath  = pName.replaceAll(' ','%20')
                return (
                  <Col lg={4} md={4} sm={6} key={item.id} className="mb-4">
                    <Link
                      to={`/advertisment-details/${item.id}`}
                      className="h-100"
                    >
                      <ListWithImage
                        imgSrc={paths.ads + item.id + "/" + newPath}
                        title={item.title}
                        imgHeight="200px"
                      />
                    </Link>
                  </Col>
                );
              })}
              <Col xs={12}>
                <PaginationSection
                  currentPage={currentPage}
                  pageCount={pageCount}
                  handlePageClick={handlePageClick}
                />
              </Col>
            </Row>
          </Container>
        ) : (
          <div className=" text-center">لا يوجد نتائج</div>
        )}
      </>
    );
  }
  return <ListSkeleton></ListSkeleton>;
};
const mapStateToProps = (state) => {
  return {
    career: state.advertismentComponents.career,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getCareer }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Career);
