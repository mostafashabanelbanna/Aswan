import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { newsList, clearNewsList } from "../../../store/actions/News_Action";
import ReactPaginate from "react-paginate";
import { paths } from "../../../paths/paths";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListWithImage from "../../ui/list-with-image";

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
        <Row className="my-4">
          {props.newslist.result.map((item, index) => {
            return (
              <Col lg={3} md={4} sm={6} key={item.id} className="mb-4">
                <Link className="h-100">
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
