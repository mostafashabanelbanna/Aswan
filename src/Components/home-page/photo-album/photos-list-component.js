import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getPhotosList, clearPhotosList
} from "../../../store/actions/photos-album-actions";
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

const PhotosList = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flag, setFlag] = useState(1);
  const [title, setTitle] = useState(null);
  const [publishDateFrom, setPublishDateFrom] = useState(null);
  const [publishDateTo, setPublishDateTo] = useState(null);

  let dataFilled = { title, publishDateFrom, publishDateTo };
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault();
    props.getPhotosList(currentPage + 1, data(dataFilled));
    setFlag(1);
    setCurrentPage(0);
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
    props.clearPhotosList();
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    if (flag)
      check(dataFilled) == false
        ? props.getPhotosList(currentPage + 1)
        : props.getPhotosList(currentPage + 1, data(dataFilled));
    else props.getPhotosList(currentPage + 1);

    setFlag(1);

    return () => {
      props.clearPhotosList();
    };
  }, [currentPage]);

  if (props.photosList) {
    pageCount = Math.ceil(props.photosList.count / 9);
    if (props.photosList.page == currentPage + 1) {
      return (
        <>
          <Container fluid>
            <div className=" container underline  my-4">
              <h3>الصور</h3>
            </div>
            <div className=" bg-light p-3">
            <SearchSection
              submit={submitHandler}
              TextFieldOneHandler={titleHandler}
              labelTextFieldOne="العنوان"
              classNameTextFieldOne="col-sm-4 col-12"
              publishDateFrom={publishDateFrom}
              publishFromHandler={publishFromHandler}
              classNameDPFrom="col-sm-4 col-6"
              publishDateTo={publishDateTo}
              publishToHandler={publishToHandler}
              classNameDPTo="col-sm-4 col-6"
            />
            </div>
          </Container>
          <div className="col-10 mx-auto my-4 d-flex flex-wrap justify-content-around flex-column flex-sm-row">
            {props.photosList.result.map((item, index) => {
            let date = item.publishDate.replace(/\//g,'-').split('-');
            let publishedDate = `${date[2]}-${date[1]}-${date[0]}T00:00:00`
            let pName;
            let newPath;
            if(item.photo != null){
            pName = item.photo;
            newPath  = pName.replaceAll(' ','%20')
            }
              return (
                <div style={{cursor:"pointer"}} className="mb-4 col-lg-4 col-sm-6 col-12 p-3">
                    <Link to={`/photodetails/${item.id}`} className="h-100 text-decoration-none">
                        <ListWithImage
                            imgSrc={paths.PhotoLibraryAlbum + item.id + "/" + newPath}
                            title={item.titleA}
                            content={ReactHtmlParser(item.photoCaptionA)}
                            date={`${moment(new Date(publishedDate)).format("LL")}`}
                            center="yes"
                            imgHeight='250px'
                            hoverTitle="hoverTitle"
                        />
                    </Link>
                </div>
              );
            })}
          </div>
          {props.photosList.result.length ? (
            <PaginationSection
              currentPage={currentPage}
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />
          ) : (
            <div className="text-center my-5">لا يوجد نتائج</div>
          )}
        </>
      );
    }
  }
  return <ListSkeleton/>;
};
const mapStateToProps = (state) => {
  return {
    photosList: state.homeComponents.photosList
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPhotosList, clearPhotosList }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosList);
