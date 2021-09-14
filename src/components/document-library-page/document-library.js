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
    props.DocumentLibraryList(currentPage + 1, data(dataFilled));
    setFlag(1);
    setCurrentPage(0);
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
    // props.DocumentLibraryList(currentPage + 1);
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
    if (props.documentLibrary) {
      pageCount = Math.ceil(props.documentLibrary.count / 2);
      return (
        <>
          <Container>
            <Row>
              {props.documentLibrary.result.length ? (
                <>
                  {props.documentLibrary.result.map((item) => {
                    return (
                      <Col lg={4} md={4} sm={6} key={item.id} className="my-4">
                        <Link
                          to={`/document-library-details/${item.id}`}
                          className="h-100"
                        >
                          <ListWithImage
                            imgSrc={
                              paths.DocumentLibraryPhotos +
                              item.id +
                              "/" +
                              item.photo
                            }
                            title={item.title}
                            date={item.publishDate}
                            category={item.documentTypeName}
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
                </>
              ) : (
                <div>لا توجد نتائج</div>
              )}
            </Row>
          </Container>
        </>
      );
    }
    return (
      <Container fluid>
        <div className=" d-flex justify-content-center align-items-center">
          Loading
        </div>
      </Container>
    );
  };
  return (
    <div>
      <Container fluid>
        <div className=" container underline  my-4">
          <h3>الإصدارات</h3>
        </div>
        <div className=" bg-light p-3">
          <SearchSection
            submit={submitHandler}
            TextFieldOneHandler={titleHandler}
            labelTextFieldOne="العنوان"
            classNameTextFieldOne="col-sm-6 col-12 order-1"
            dropdownOneVal={catName.find((e) => e.value == documentTypeId)}
            dropdownOneHandler={documentTypeHandler}
            dropdownOneName={catName}
            dropdownOnePlaceholder="القسم"
            classNameDropdownOne="col-sm-6 col-12 order-0"
            publishDateFrom={publishDateFrom}
            publishFromHandler={publishFromHandler}
            classNameDPFrom="col-sm-3 col-12 order-2"
            publishDateTo={publishDateTo}
            publishToHandler={publishToHandler}
            classNameDPTo="col-sm-3 col-12 order-3"
            classNameBtn="order-4"
          />
        </div>

        {render()}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
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
