import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  newsList,
  clearNewsList,
  getNewsCategory,
  getNewsSectors,
} from "../../../store/actions/News_Action";
import { bindActionCreators } from "redux";
import PaginationSection from "../../ui/pagination-section";
import ListWithImage from "../../ui/list-with-image";
import { paths } from "../../../paths/paths";
import ListSkeleton from "../../loading-skeleton/list-skiliton";
import { Col, Container, Row } from "react-bootstrap";
import moment from "moment";
import "moment/locale/ar";
import SearchSection from "../../ui/search-section";
import SearchSkeleton from "../../loading-skeleton/search-skeleton";
const FilterNews = (props) => {
  const info = props.match.params.info.split("&&");
  const [currentPage, setCurrentPage] = useState(0);
  const [title, setTitle] = useState(null);
  const [sectorSourceId, setSector] = useState(parseInt(info[0]));
  const [flag, setFlag] = useState(0);
  const [newsCategoryId, setNewsCategoryId] = useState(null);
  const [publishDateFrom, setPublishDateFrom] = useState(null);
  const [publishDateTo, setPublishDateTo] = useState(null);

  let dataFilled = {
    title,
    publishDateFrom,
    sectorSourceId,
    publishDateTo,
    newsCategoryId,
  };

  let pageCount;
  useEffect(() => {
    info[2] == "sector"
      ? props.newsList(currentPage + 1, { sectorSourceId: parseInt(info[0]) })
      : props.newsList(currentPage + 1, { newsCategoryId: parseInt(info[0]) });

    if (!props.categories) props.getNewsCategory();
    if (!props.sectors) props.getNewsSectors();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    setCurrentPage(0);
    props.newsList(currentPage + 1, data(dataFilled));
    setFlag(1);
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
  if (props?.data?.result) {
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
    pageCount = Math.ceil(props.data.count / 9);
    return (
      <>
        <Container fluid>
          <div className=" container underline  my-5">
            <h3>الأخبار</h3>
          </div>
        </Container>
        <SearchSection
          submit={submitHandler}
          TextFieldOneHandler={titleHandler}
          labelTextFieldOne="العنوان"
          classNameTextFieldOne="col-sm-4 col-12"
          dropdownOneVal={catName.find((e) => e.value == newsCategoryId)}
          dropdownOneHandler={catHandler}
          dropdownOneName={catName}
          dropdownOnePlaceholder="القسم"
          classNameDropdownOne="col-sm-4 col-12"
          dropdownTwoVal={sectorsName.find((e) => e.value == sectorSourceId)}
          dropdownTwoHandler={sectorHandler}
          dropdownTwoPlaceholder="القطاع"
          dropdownTwoName={sectorsName}
          classNameDropdownTwo="col-sm-4 col-12"
          publishDateFrom={publishDateFrom}
          publishFromHandler={publishFromHandler}
          classNameDPFrom="col-sm-4 col-12"
          publishDateTo={publishDateTo}
          publishToHandler={publishToHandler}
          classNameDPTo="col-sm-4 col-12"
          classNameBtn="col-sm-4 col-12"
        />
        <div className="container mt-5">
          <div className="row ">
            {props.data.result ? (
              props.data.result.map((item) => {
                // let date = item.publishDate.replace(/\//g,'-').split('-');
                // let publishedDate = `${date[2]}-${date[1]}-${date[0]}T00:00:00`
                let pName;
                let newPath;
                if (item.photo != null) {
                  pName = item.photo;
                  newPath = pName.replaceAll(" ", "%20");
                }
                return (
                  <div className="mb-4 col-md-6 col-xl-4 col-12">
                    <Link
                      id="link"
                      to={`/newsdetails/${item.id}`}
                      className="h-100"
                    >
                      <ListWithImage
                        imgSrc={paths.NewsPhotos + item.id + "/" + newPath}
                        title={item.title}
                        date={`${moment(new Date(item.publishDate)).format(
                          "LL"
                        )}`}
                        category={item.newsCategoryName}
                        imgHeight="200px"
                        hoverTitle="hoverTitle h-100"
                      />
                    </Link>
                  </div>
                );
              })
            ) : (
              <div className="text-center my-5">جاري رفع البيانات</div>
            )}
          </div>
        </div>

        <PaginationSection
          currentPage={currentPage}
          pageCount={pageCount}
          handlePageClick={handlePageClick}
        />
      </>
    );
  }
  return (
    <>
      <SearchSkeleton />
      <ListSkeleton />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.homeComponents.newslist,
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterNews);
