import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getEServices ,clearEServices} from "../../store/actions/E-Services";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {} from "../../Styles/EServices.css";
const EServices = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  let pageCount;

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
    
  };

  useEffect(() => {
    props.getEServices(currentPage + 1);
  }, [currentPage]);

  if (props.services) {
    
    pageCount = Math.ceil(props.services.count / 9);
    console.log(props.services)
    if(props.services.page==currentPage+1){
    return (
      <div>
        <div className=" container my-4 d-flex flex-column flex-md-row justify-content-end align-items-center">
          <div class="form-group col-lg-2 col-md-4 col-6">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="كلمات البحث مثل مدارس"
            />
          </div>
          <div class="form-group col-lg-1 col-md-3 col-4 mx-2 my-2">
            <select class="form-control" id="exampleFormControlSelect1">
              <option selected disabled>
                اختر
              </option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="d-flex justify-content-center col-lg-1">
            {" "}
            <button type="submit" class="btn btn-secondary">
              بحث
            </button>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-around flex-column flex-sm-row">
          {props.services.result.map((item, index) => {
            return (
              <div
                className="text-center my-4 col-lg-3 mx-md-4 col-md-5 mx-0 col-11 p-4  bg-light"
                key={item.id}
              >
                <div className="justify-content-end d-flex my-2 text-muted">
                  {item.name}
                </div>

                <div className=" justify-content-start d-flex my-2">
                  {item.serviceCategoryName}
                </div>
                <div className="d-flex">
                  <div className="mx-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faLink}
                      size={"x2"}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="mx-2">
                    {" "}
                    <a style={{ textDecoration: "none", cursor: "pointer" }}>
                      الرابط
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" justify-content-center d-flex">
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            forcePage={currentPage}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </div>
      </div>
    );}
    else{
      return <div> Loading Two </div>
    }
  }
  return <div>Loading</div>;
};
const mapStateToProps = (state) => {
  return { services: state.EServicesComponents.allServices };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getEServices,clearEServices }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EServices);
