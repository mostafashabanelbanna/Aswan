import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { youthEmployment } from "../../../store/actions/advertisment-action";
import { paths } from "../../../paths/paths";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListWithImage from "../../ui/list-with-image";
import moment from "moment";
import "moment/locale/ar";
import SearchSection from "../../ui/search-section";
import PaginationSection from "../../ui/pagination-section";
import ListSkeleton from "../../loading-skeleton/list-skiliton";
import YouthForm from "../../forms/youth-form";
import ReactHtmlParser from "react-html-parser";

const YouthEmp = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [title, setTitle] = useState(null);
  const [flag, setFlag] = useState(0);

  const [show, setShow] = useState(false);
  const [content, setContent] = useState({});

  const onShow = () => {
    setShow(true);
  };

  const renderModal = (content) => {
    return (
      <YouthForm
        content={content}
        showYouthModal={show}
        onHideYouthModal={() => setShow(false)}
      />
    );
  };

  let dataFilled = {
    title,
  };
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault();
    props.youthEmployment(currentPage + 1, data(dataFilled));
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
        ? props.youthEmployment(currentPage + 1)
        : props.youthEmployment(currentPage + 1, data(dataFilled));
    } else {
      props.youthEmployment(currentPage + 1, data(dataFilled));
    }
    setFlag(0);
  }, [currentPage]);

  if (props?.youthemp?.result) {
    pageCount = Math.ceil(props.youthemp.count / 9);
    return (
      <>
        <Container fluid>
          <div className=" container underline  my-5">
            <h3>توظيف الشباب</h3>
          </div>
        </Container>
        <SearchSection
          submit={submitHandler}
          TextFieldOneHandler={titleHandler}
          labelTextFieldOne="العنوان"
          classNameTextFieldOne="col-sm-10 col-12"
          classNameBtn="col-sm-2 col-12"
        />
        {props?.youthemp?.result?.length ? (
          <Container>
            <Row className="my-5">
              {props.youthemp.result.map((item, index) => {
                let pName;
                let newPath;
                if (item.photo != null) {
                  pName = item.photo;
                  newPath = pName.replaceAll(" ", "%20");
                }
                let slicedDesc = item.description;
                if (item.description !== null && item.description.length > 230) {
                  const brief = item.description;
                  slicedDesc = brief.substring(0, 230).concat(" ...");
                }
                return (
                  <Col xl={4} md={6} sm={12} key={item.id} className="mb-4">
                    <div
                      id="link"
                      className="h-100"
                    >
                      <ListWithImage
                        // imgSrc={paths.youth + item.id + "/" + newPath}
                        title={item.title}
                        date={`${moment(new Date(item.startDate)).format(
                          "LL"
                        )} إلى ${moment(new Date(item.endDate)).format("LL")}`}
                        imgHeight="0px"
                        youthButton={true}
                        youthDetails={ReactHtmlParser(slicedDesc)}
                        renderModal={() => {
                          onShow();
                          setContent(item);
                        }}
                        center
                        divHeight="30rem"
                        appliedPeople={item.applicantCount}
                        details={item}
                      />
                    </div>
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
          <div className=" text-center">جاري رفع البيانات</div>
        )}
        {renderModal(content)}
      </>
    );
  }
  return <ListSkeleton></ListSkeleton>;
};
const mapStateToProps = (state) => {
  return {
    youthemp: state.advertismentComponents.youthemp,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ youthEmployment }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(YouthEmp);
