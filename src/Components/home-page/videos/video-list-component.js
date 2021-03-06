import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getVideosList,
  clearVideosList,
} from "../../../store/actions/News_Action";
import { Container } from "react-bootstrap";
import SearchSection from "../../ui/search-section";
import PaginationSection from "../../ui/pagination-section";
import ListSkeleton from "../../loading-skeleton/list-skiliton";
import ListWithImage from "../../ui/list-with-image";
import { paths } from "../../../paths/paths";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/ar";
import ReactHtmlParser from "react-html-parser";

const VideosList = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flag, setFlag] = useState(1);
  const [title, setTitle] = useState(null);
  const [publishDateFrom, setPublishDateFrom] = useState(null);
  const [publishDateTo, setPublishDateTo] = useState(null);

  let dataFilled = { title, publishDateFrom, publishDateTo };
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault();
    setCurrentPage(0);
    props.getVideosList(currentPage + 1, data(dataFilled));
    setFlag(1);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
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
    props.clearVideosList();
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    if (flag)
      check(dataFilled) == false
        ? props.getVideosList(currentPage + 1)
        : props.getVideosList(currentPage + 1, data(dataFilled));
    else props.getVideosList(currentPage + 1);

    setFlag(1);

    return () => {
      props.clearVideosList();
    };
  }, [currentPage]);

  const render = () => {
    if (props?.videosList?.result) {
      pageCount = Math.ceil(props.videosList.count / 9);
      if (props.videosList.page == currentPage + 1) {
        return (
          <>
            <div className="col-10 mx-auto my-5 d-flex flex-wrap justify-content-around flex-column flex-sm-row">
              {props.videosList.result.map((item, index) => {
                let date = item.publishDate.replace(/\//g, "-").split("-");
                let publishedDate = `${date[2]}-${date[1]}-${date[0]}T00:00:00`;
                return (
                  <div
                    key={item.id}
                    style={{ cursor: "pointer" }}
                    className="mb-4 col-md-6 col-xl-4 col-12 p-3"
                  >
                    <Link
                      id="link"
                      to={`/videodetails/${item.id}`}
                      className="h-100 text-decoration-none"
                    >
                      <ListWithImage
                        imgSrc={
                          "https://img.youtube.com/vi/" +
                          item.youtubeId +
                          "/" +
                          "hqdefault.jpg"
                        }
                        title={item.title}
                        content={ReactHtmlParser(item.content)}
                        date={`${moment(new Date(publishedDate)).format("LL")}`}
                        center="yes"
                        imgHeight="250px"
                        hoverTitle="hoverTitle h-100"
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
            {props.videosList.result.length ? (
              <PaginationSection
                currentPage={currentPage}
                pageCount={pageCount}
                handlePageClick={handlePageClick}
              />
            ) : (
              <div className="text-center my-5">جاري رفع البيانات</div>
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
          <h3>مكتبة الفيديو</h3>
        </div>
      </Container>
      <SearchSection
        submit={submitHandler}
        TextFieldOneHandler={titleHandler}
        labelTextFieldOne="العنوان"
        classNameTextFieldOne="col-md-4 col-sm-6 col-12"
        publishDateFrom={publishDateFrom}
        publishFromHandler={publishFromHandler}
        classNameDPFrom="col-md-3 col-sm-6 col-12 m-md-0"
        publishDateTo={publishDateTo}
        publishToHandler={publishToHandler}
        classNameDPTo="col-md-3 col-sm-6 col-12 m-md-0"
        classNameBtn="col-md-2 col-sm-6 col-12"
      />
      {render()}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    videosList: state.homeComponents.videosList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getVideosList, clearVideosList }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(VideosList);
