import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getAdvertisment,
  clearAdvertisement,
  getAllAdvertisment,
  getAllAdvertismentType,
} from "../../../store/actions/advertisment-action";
import { paths } from "../../../paths/paths";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListWithImage from "../../ui/list-with-image";
import moment from "moment";
import "moment/locale/ar";
import SearchSection from "../../ui/search-section";
import PaginationSection from "../../ui/pagination-section";
import ListSkeleton from "../../loading-skeleton/list-skiliton";
import AdvertisementRequire from "../../forms/ads-form";

const AdvertismentList = (props) => {
  let id = props.match.params.id;
  const [currentPage, setCurrentPage] = useState(0);
  const [title, setTitle] = useState(null);
  const [flag, setFlag] = useState(0);
  const [advertismentTypeId, setAdvertismentTypeId] = useState(parseInt(id));
  const [publishDateFrom, setPublishDateFrom] = useState(null);
  const [publishDateTo, setPublishDateTo] = useState(null);

  const [show, setShow] = useState(false);

  const onShow = () => {
    setShow(true);
  };

  const renderModal = () => {
    return (
      <AdvertisementRequire
        showAdvertisementModal={show}
        onHideAdvertisementModal={() => setShow(false)}
      />
    );
  };

  let dataFilled = {
    title,
    publishDateFrom,
    publishDateTo,
    advertismentTypeId,
  };
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault();
    check(dataFilled) == false && advertismentTypeId != null
      ? props.getAllAdvertisment(currentPage + 1)
      : props.getAdvertisment(currentPage + 1, data(dataFilled));

    setFlag(1);
    setCurrentPage(0);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const advertismentTypeHandler = (e) => {
    setAdvertismentTypeId(e.value);
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
    for (let property in a) {
      if (a[property] != null && a[property] != "0") {
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
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    if (flag) {
      check(dataFilled) == false
        ? advertismentTypeId == 0
          ? props.getAllAdvertisment(currentPage + 1)
          : props.getAdvertisment(currentPage + 1)
        : props.getAdvertisment(currentPage + 1, data(dataFilled));
    } else {
      advertismentTypeId == 0
        ? props.getAllAdvertisment(currentPage + 1)
        : props.getAdvertisment(currentPage + 1, data(dataFilled));
    }
    setFlag(0);

    return () => {
      props.clearAdvertisement();
    }
  }, [currentPage]);

  useEffect(() => {
    props.getAllAdvertismentType();
  }, []);

  if (props?.advertisment?.result && props?.advertismentTypes?.result) {
    let adsName = props.advertismentTypes.result.map(({ id, nameA }) => ({
      value: id,
      label: nameA,
    }));
    adsName.unshift({ value: 0, label: "اعلانات ومناقصات" });
    adsName.unshift({ value: null, label: "كل الاعلانات" });
    pageCount = Math.ceil(props.advertisment.count / 9);
    return (
      <>
        <Container fluid>
          <div className=" container underline my-5">
            {advertismentTypeId == 5 ? (
              <h3>منتجات يدوية</h3>
            ) : (
              <h3>اعلانات ومناقصات</h3>
              )}
          </div>
              </Container>
            <SearchSection
              submit={submitHandler}
              TextFieldOneHandler={titleHandler}
              labelTextFieldOne="العنوان"
              classNameTextFieldOne="col-lg-3 col-md-6 mt-4 mb-0 col-12"
              dropdownOneVal={adsName.find(
                (e) => e.value == advertismentTypeId
              )}
              dropdownOneHandler={advertismentTypeHandler}
              dropdownOneName={adsName}
              dropdownOnePlaceholder="النوع"
              classNameDropdownOne="col-lg-3 col-md-6 col-12"
              publishDateFrom={publishDateFrom}
              publishFromHandler={publishFromHandler}
              classNameDPFrom="col-lg-3 col-md-6 col-12"
              publishDateTo={publishDateTo}
              publishToHandler={publishToHandler}
              classNameDPTo="col-lg-3  col-12"
            />
        <Container>
          {advertismentTypeId == 5 ? (
            <div
              className="col-12 d-flex justify-content-end"
              style={{ bottom: 0 }}
              onClick={() => {
                onShow();
              }}
            >
              <button
                type="button"
                className="btn_blue mx-1 my-4"
                style={{ verticalAlign: "middle" }}
              >
                <span style={{color: 'white'}}>طلب إعلان</span>
              </button>
            </div>
          ) : null}
        </Container>
        {props.advertisment.result.length ? (
          <Container>
            <Row className="my-5">
              {props.advertisment.result.map((item, index) => {
                let pName;
                let newPath;
                if (item.photo != null) {
                  pName = item.photo;
                  newPath = pName.replaceAll(" ", "%20");
                }
                return (
                  <Col xl={4} md={6} sm={12} key={item.id} className="mb-4">
                    <Link
                      id="link"
                      to={`/advertisment-details/${item.id}`}
                      className="h-100"
                    >
                      <ListWithImage
                        imgSrc={paths.ads + item.id + "/" + newPath}
                        title={item.title}
                        date={`${moment(new Date(item.publishDate)).format(
                          "LL"
                        )}`}
                        category={item.advertismentTypeName}
                        imgHeight="200px"
                        hoverTitle="hoverTitle"
                        divHeight='25rem'
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
          <div className="text-center my-5">لا يوجد نتائج</div>
        )}
        {renderModal()}
      </>
    );
  }
  return <ListSkeleton />;
};
const mapStateToProps = (state) => {
  return {
    advertisment: state.advertismentComponents.advertisment,
    advertismentTypes: state.advertismentComponents.advertismentTypes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getAdvertisment, getAllAdvertisment, getAllAdvertismentType, clearAdvertisement },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvertismentList);
