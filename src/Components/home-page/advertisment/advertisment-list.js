import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getAdvertisment,
  getAllAdvertisment,
  getAllAdvertismentType
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

const AdvertismentList = (props) => {
    let id = props.match.params.id
  const [currentPage, setCurrentPage] = useState(0);
  const [title, setTitle] = useState(null);
  const [flag, setFlag] = useState(0);
  const [advertismentTypeId, setAdvertismentTypeId] = useState(parseInt(id));
  const [publishDateFrom, setPublishDateFrom] = useState(null);
  const [publishDateTo, setPublishDateTo] = useState(null);

  let dataFilled = {
    title,
    publishDateFrom,
    publishDateTo,
    advertismentTypeId,
  };
  let pageCount;

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(check(dataFilled))
    check(dataFilled)==false&&advertismentTypeId!=null?
    props.getAllAdvertisment(currentPage + 1):
    props.getAdvertisment(currentPage + 1, data(dataFilled));
    
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
      if (a[property] != null&&a[property] != '0') {
          console.log(a[property])
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
      
      console.log(advertismentTypeId , check(dataFilled))
    if (flag){
      check(dataFilled) == false
        ?advertismentTypeId==0?
        props.getAllAdvertisment(currentPage + 1):
        props.getAdvertisment(currentPage + 1)
        : props.getAdvertisment(currentPage + 1, data(dataFilled));}
    
        else {advertismentTypeId==0?props.getAllAdvertisment(currentPage + 1):props.getAdvertisment(currentPage + 1,data(dataFilled));}
        setFlag(0);
  }, [currentPage]);

  useEffect(() => {
    props.getAllAdvertismentType();

  }, [])

  if (props.advertisment && props.advertismentTypes) {
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
          <div className=" container underline  my-4">
            <h3>اعلانات ومناقصات</h3>
          </div>
          <div className=" bg-light p-3">
            <SearchSection 
            submit={submitHandler} 
            TextFieldOneHandler={titleHandler}
            labelTextFieldOne='العنوان'
            classNameTextFieldOne='col-sm-4 col-12'
            dropdownOneVal={adsName.find(e => e.value == advertismentTypeId)}
            dropdownOneHandler={advertismentTypeHandler}
            dropdownOneName={adsName}
            dropdownOnePlaceholder='النوع'
            classNameDropdownOne='col-sm-4 col-12'
            publishDateFrom={publishDateFrom}
            publishFromHandler={publishFromHandler}
            classNameDPFrom='col-sm-2 col-12'
            publishDateTo={publishDateTo}
            publishToHandler={publishToHandler}
            classNameDPTo='col-sm-2 col-12'
            />
          </div>
        </Container>
        {props.advertisment.result.length ? (
          <Container>
            <Row className="my-4">
              {props.advertisment.result.map((item, index) => {
                return (
                  <Col lg={4} md={4} sm={6} key={item.id} className="mb-4">
                    <Link to={`newsdetails/${item.id}`} className="h-100">
                      <ListWithImage
                        imgSrc={paths.ads + item.id + "/" + item.photo}
                        title={item.title}
                        date={`${moment(new Date(item.publishDate)).format("LL")}`}
                        category={item.advertismentTypeName}
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
          <div className="text-center">لا يوجد نتائج</div>
        )}
      </>
    );
  }
  return <ListSkeleton />;
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    advertisment: state.advertismentComponents.advertisment,
    advertismentTypes: state.advertismentComponents.advertismentTypes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {getAdvertisment , getAllAdvertisment , getAllAdvertismentType},
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvertismentList);
