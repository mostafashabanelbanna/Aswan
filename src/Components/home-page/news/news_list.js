import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  newsList,
  clearNewsList,
  getNewsCategory,
  getNewsSectors,
} from "../../../store/actions/News_Action";
import { paths } from "../../../paths/paths";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListWithImage from "../../ui/list-with-image";
import moment from "moment";
import "moment/locale/ar";
import SearchSection from "../../ui/search-section";
import PaginationSection from "../../ui/pagination-section";
import ListSkeleton from "../../loading-skeleton/list-skiliton";
import { getSenate } from "../../../store/actions/local-leaders-actions";

const NewsList = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [title, setTitle] = useState(null);
  const [sector, setSector] = useState(null);
  const [flag, setFlag] = useState(0);
  const [newsCategoryId, setNewsCategoryId] = useState(null);
  const [publishDateFrom, setPublishDateFrom] = useState(null);
  const [publishDateTo, setPublishDateTo] = useState(null);

  let dataFilled = {
    title,
    publishDateFrom,
    sector,
    publishDateTo,
    newsCategoryId,
  };
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault();
    props.newsList(currentPage + 1, data(dataFilled));
    setFlag(1);
    setCurrentPage(0);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const catHandler = (e) => {
    setNewsCategoryId(e.value);
  };
  const sectorHandler = (e) => {
    setSector(e.value);
  };
  const publishFromHandler = (dateChanged) =>
    setPublishDateFrom(
      moment(new Date(dateChanged._d).toLocaleDateString(), "MM-DD-YYYY")
        .format("YYYY-MM-DD")
        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    );
  const publishToHandler = (dateChanged) =>
    setPublishDateTo(
      moment(new Date(dateChanged._d).toLocaleDateString(), "MM-DD-YYYY")
        .format("YYYY-MM-DD")
        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    );
  function check(a) {
    let flag = 0;
    for (let property in a) {
      if (a[property] != null) {
        flag = 1;
        return true;
      }
    }
    return false;
  }

  function data(a) {
    for (let property in a) {
      if (a[property] == null) delete a[property];
    }
    return a;
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    props.clearNewsList();
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    if (flag)
      check(dataFilled) == false
        ? props.newsList(currentPage + 1)
        : props.newsList(currentPage + 1, data(dataFilled));
    else props.newsList(currentPage + 1);

    if (!props.categories) props.getNewsCategory();
    if (!props.sectors) props.getNewsSectors();

    // return () => {
    //   props.clearNewsList();
    // }
  }, [currentPage]);

  if (props.newslist && props.categories && props.sectors) {
    console.log("sdsdsd",props.newslist)
    let catName = props.categories.result.map(({ id, nameA }) => ({
      value: id,
      label: nameA,
    }));
    let sectorsName = props.sectors.result.map(({ id, nameA }) => ({
      value: id,
      label: nameA,
    }));
    catName.unshift({ value: null, label: "كل الاقسام" });
    sectorsName.unshift({ value: null, label: "كل القطاعات" });
    pageCount = Math.ceil(props.newslist.count / 9);
    return (
      <>
        <Container fluid>
          <div className=" container underline  my-4">
            <h3>الاخبار</h3>
          </div>
          <div className=" bg-light p-3">
            <SearchSection 
            submit={submitHandler} 
            TextFieldOneHandler={titleHandler}
            labelTextFieldOne='العنوان'
            classNameTextFieldOne='col-sm-4 col-12'
            dropdownOneVal={catName.find(e => e.value == newsCategoryId)}
            dropdownOneHandler={catHandler}
            dropdownOneName={catName}
            dropdownOnePlaceholder='القسم'
            classNameDropdownOne='col-sm-4 col-12'
            dropdownTwoVal={sectorsName.find(e => e.value == sector)}
            dropdownTwoHandler={sectorHandler}
            dropdownTwoPlaceholder='القطاع'
            dropdownTwoName={sectorsName}
            classNameDropdownTwo='col-sm-4 col-12'
            publishDateFrom={publishDateFrom}
            publishFromHandler={publishFromHandler}
            classNameDPFrom='col-4'
            publishDateTo={publishDateTo}
            publishToHandler={publishToHandler}
            classNameDPTo='col-4'
            />
          </div>
        </Container>
        {props.newslist.result.length ? (
          <Container>
            <Row className="my-4">
              {props.newslist.result.map((item, index) => {
                let date = item.publishDate.replace(/\//g,'-').split('-');
                let publishedDate = `${date[2]}-${date[1]}-${date[0]}T00:00:00`
                return (
                  <Col lg={4} md={4} sm={6} key={item.id} className="mb-4">
                    <Link to={`/newsdetails/${item.id}`} className="h-100">
                      <ListWithImage
                        imgSrc={paths.NewsPhotos + item.id + "/" + item.photo}
                        title={item.title}
                        date={`${moment(new Date(publishedDate)).format("LL")}`}
                        category={item.newsCategoryName}
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
  return <ListSkeleton/>;
};
const mapStateToProps = (state) => {
  return {
    newslist: state.homeComponents.newslist,
    categories: state.homeComponents.categories,
    sectors: state.homeComponents.sectors,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { newsList, clearNewsList, getNewsCategory, getNewsSectors },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
