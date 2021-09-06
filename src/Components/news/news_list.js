import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { newsList, clearNewsList } from "../../store/actions/News_Action";
import ReactPaginate from "react-paginate";
import { paths } from "../../paths/paths";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListWithImage from "../ui/list-with-image";

const NewsList = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  let pageCount;

  const handlePageClick = ({ selected: selectedPage }) => {
    props.clearNewsList();
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    props.newsList(currentPage + 1);
  }, [currentPage]);

  if (props.newslist) {
    pageCount = Math.ceil(props.newslist.count / 10);
    return (
      <Container>
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between mt-4">
        <div className="underline col-md-4 col-12 my-2 "><h3>الاخبار</h3></div>
        <div className=" col-md-8 col-12 d-flex flex-column align-items-center flex-md-row justify-content-md-end justify-content-center ">
          <div class="form-group mx-2 my-2 col-md-4 col-6">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="كلمات البحث مثل مدارس"
            />
          </div>
          <div class="form-group col-lg-1 col-md-3 col-4 mx-2 my-2">
            <select class="form-control" id="exampleFormControlSelect1">
              <option selected disabled>
                اختر
              </option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="d-flex justify-content-center col-lg-1">
            {" "}
            <button type="submit" class="btn btn-secondary">
              بحث
            </button>
          </div>
        </div>
        </div>
        {/* <div className="container d-flex justify-content-end">
        <div className=" text-center text-muted  fa-1x py-3  detailsSectorName">
                        يسي يسي
                    </div>
                    </div> */}
        <Row className="my-4">
          {props.newslist.result.map((item, index) => {
            return (
              <Col lg={4} md={4} sm={6} key={item.id} className="mb-4">
                <Link to={`newsdetails/${item.id}`} className="h-100">
                  <ListWithImage
                    imgSrc={paths.NewsPhotos + item.id + "/" + item.photo}
                    title={item.title}
                    date={"1/1/2022"}
                    category={item.newsCategoryName}
                    imgHeight="200px"
                  />
                </Link>
              </Col>
            );
          })}
          <Col xs={12}>
            <div className=" justify-content-center d-flex">
              <ReactPaginate
                previousLabel={"<<"}
                nextLabel={">>"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  return <div>Loading</div>;
};
const mapStateToProps = (state) => {
  return { newslist: state.homeComponents.newslist };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ newsList, clearNewsList }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
