import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  DocumentLibraryList,
  getAllDocumentType,
} from "../../store/actions/document-library";
import { paths } from "../../paths/paths";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListWithImage from "../ui/list-with-image";
import moment from "moment";
import "moment/locale/ar";
import SearchSection from "../ui/search-section";
import PaginationSection from "../ui/pagination-section";
import ListSkeleton from "../loading-skeleton/list-skiliton";

const DocumentLibrary = (props) => {
  let id = props.match.params.type;
  const [currentPage, setCurrentPage] = useState(0);
  const [title, setTitle] = useState(null);
  const [flag, setFlag] = useState(0);
  const [documentTypeId, setDocumentTypeId] = useState(parseInt(id));
  const [publishDateFrom, setPublishDateFrom] = useState(null);
  const [publishDateTo, setPublishDateTo] = useState(null);
  // const [catName, setCatName] = useState([]);
  let pageCount;
  let catName = [];
  let dataFilled = {
    title,
    publishDateFrom,
    documentTypeId,
    publishDateTo,
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setCurrentPage(0);
    props.DocumentLibraryList(currentPage + 1, data(dataFilled));
    setFlag(1);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const documentTypeHandler = (e) => {
    setDocumentTypeId(e.value);
  };
  const handlePageClick = ({ selected: selectedPage }) => {
    // props.clearNewsList();
    setCurrentPage(selectedPage);
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
  function check(obj) {
    for (let property in obj) {
      if (obj[property] != null) {
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

  useEffect(() => {
    if (flag)
      check(dataFilled) == false
        ? props.DocumentLibraryList(currentPage + 1)
        : props.DocumentLibraryList(currentPage + 1, data(dataFilled));
    else props.DocumentLibraryList(currentPage + 1, data(dataFilled));
  }, [currentPage]);

  useEffect(() => {
    if (!props.documentLibraryType) props.getAllDocumentType();
  }, []);

  if (props.documentLibraryType) {
    catName = props.documentLibraryType.result.map(({ id, nameA }) => ({
      value: id,
      label: nameA,
    }));

    catName.unshift({ value: null, label: "كل الإصدارات" });
  }

  const render = () => {
    if (props?.documentLibrary?.result) {
      pageCount = Math.ceil(props.documentLibrary.count / 9);
      if (props.documentLibrary.page == currentPage + 1) {
        return (
          <>
            <Container>
              <Row>
                {props.documentLibrary.result.length ? (
                  <>
                    {props.documentLibrary.result.map((item) => {
                      console.log(props.documentLibrary.result);
                      // let date = item.publishDate
                      //   .replace(/\//g, "-")
                      //   .split("-");
                      // let publishedDate = `${date[2]}-${date[1]}-${date[0]}T00:00:00`;
                      let pName;
                      let newPath;
                      if (item.photo != null) {
                        pName = item.photo;
                        newPath = pName.replaceAll(" ", "%20");
                      }
                      return (
                        <Col
                          xl={4}
                          md={6}
                          sm={12}
                          key={item.id}
                          className="my-5"
                        >
                          <Link
                            id="link"
                            to={`/document-library-details/${item.id}`}
                            className="h-100"
                          >
                            <ListWithImage
                              imgSrc={
                                item.photo
                                  ? paths.DocumentLibraryPhotos +
                                    item.id +
                                    "/" +
                                    newPath
                                  : null
                              }
                              title={item.title}
                              date={`${moment(
                                new Date(item.publishDate)
                              ).format("LL")}`}
                              category={item.documentTypeName}
                              imgHeight="200px"
                              hoverTitle="hoverTitle"
                              divHeight="23rem"
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
                  </>
                ) : (
                  <div className="text-center my-5">جاري رفع البيانات</div>
                )}
              </Row>
            </Container>
          </>
        );
      }
    }
    return <ListSkeleton />;
  };

  let pageTitle;

  if (id == "1") {
    pageTitle = "إحصائيات";
  } else if (id == "2") {
    pageTitle = "نشرات شهرية";
  } else if (id == "3") {
    pageTitle = "إحصائيات نشرات سكانية";
  } else if (id == "6") {
    pageTitle = "دراسات جدوى";
  } else {
    pageTitle = "دعم القرار";
  }

  return (
    <div>
      <Container fluid>
        <div className=" container underline mt-5 mb-4">
          <h3>{pageTitle}</h3>
        </div>
      </Container>
      <SearchSection
        submit={submitHandler}
        TextFieldOneHandler={titleHandler}
        labelTextFieldOne="العنوان"
        classNameTextFieldOne="col-md-3 col-sm-6 mt-4 mb-3 col-12 order-0"
        dropdownOneVal={catName.find((e) => e.value == documentTypeId)}
        dropdownOneHandler={documentTypeHandler}
        dropdownOneName={catName}
        dropdownOnePlaceholder="القسم"
        classNameDropdownOne="col-md-3 col-sm-6 mt-4 mb-3 col-12 order-1"
        publishDateFrom={publishDateFrom}
        publishFromHandler={publishFromHandler}
        classNameDPFrom="col-md-3 col-sm-6 col-12 mt-4 mb-3 order-2"
        publishDateTo={publishDateTo}
        publishToHandler={publishToHandler}
        classNameDPTo="col-md-3 col-sm-6 col-12 mt-4 mb-3 order-3"
        classNameBtn="order-4"
      />
      <Container>{render()}</Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    documentLibrary: state.DocumentLibrary.documentLibrary,
    documentLibraryType: state.DocumentLibrary.documentLibraryType,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { DocumentLibraryList, getAllDocumentType },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DocumentLibrary);
