import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";
import { paths } from "../../paths/paths";
import { getCityDetails, clearCityDetails } from "../../store/actions/navbar";
import DetailsSkeleton from "../loading-skeleton/Details";
import SliderDetailsModalComponent from "../slider-details-modal-component";
import Slider from "react-slick";

const CityDetails = (props) => {
  let id = props.match.params.id;
  useEffect(() => {
    props.getCityDetails(id);
    return () => {
      props.clearCityDetails();
    };
  }, [id]);

  const [show, setShow] = useState(false);
  const [content, setContent] = useState({});

  const onShow = () => {
    setShow(true);
  };

  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
    swipe: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  let pathName;
  const renderModal = (content) => {
    return (
      <SliderDetailsModalComponent
        content={content}
        show={show}
        onHide={() => setShow(false)}
        pathName={pathName}
      />
    );
  };

  if (props?.cityDetails?.result) {
    let photos = [];
    if (props.cityDetails.result.photos.length > 3) {
      photos = props.cityDetails.result.photos;
      pathName = paths.ProjectPhotos;
    } else if (props.cityDetails.result.photos.length < 3) {
      if (props.cityDetails.result.photos > 0) {
        photos = props.cityDetails.result.photos;
        pathName = paths.ProjectPhotos;
      } else if (props.cityDetails.result.photos.length == 0) {
        photos.push(props.cityDetails.result);
        pathName = paths.NavBarCities;
      }
    }
    return (
      <>
        <div className="underline container my-3">
          <h3>
            {props.cityDetails.result.cityCategoryName}{" "}
            {props.cityDetails.result.name}
          </h3>
        </div>
        {photos.length > 3 ? (
          <div className="my-3 container">
            <Slider {...settings} style={{ width: "100%" }}>
              {photos.map((photo, index) => {
                let pName;
                let newPath;
                if (photo.photo != null) {
                  pName = photo.photo;
                  newPath = pName.replaceAll(" ", "%20");
                }
                let title = photo.title;
                if (photo.title === null) {
                  title = photo.caption;
                }
                return (
                  <div
                    className="mx-auto p-3 hoverTitle"
                    key={photo.id}
                    onClick={() => {
                      onShow();
                      setContent(photo);
                    }}
                  >
                    <div className="holder">
                      <div
                        style={{
                          position: "relative",
                          backgroundImage: `url(${pathName}${photo.id}/${newPath})`,
                        }}
                        className="imageAlbum"
                      ></div>
                    </div>
                    <p className="text-center my-2">{title}</p>
                  </div>
                );
              })}
            </Slider>
          </div>
        ) : (
          <div className="d-flex flex-wrap justify-content-center my-3 container">
            {photos.map((photo, index) => {
              let pName;
              let newPath;
              if (photo.photo != null) {
                pName = photo.photo;
                newPath = pName.replaceAll(" ", "%20");
              }
              let title = photo.name;
              if (photo.name === null) {
                title = photo.caption;
              }
              return (
                <div
                  className="mx-auto col-md-4 col-12 p-3 hoverTitle"
                  key={photo.id}
                  onClick={() => {
                    onShow();
                    setContent(photo);
                  }}
                >
                  <div className="holder">
                    <div
                      style={{
                        position: "relative",
                        backgroundImage: `url(${pathName}${photo.id}/${newPath})`,
                      }}
                      className="imageAlbum"
                    ></div>
                  </div>
                  <p className="text-center my-2">{title}</p>
                </div>
              );
            })}
          </div>
        )}

        <div className="container d-flex flex-md-row flex-column">
          <div className="col-lg-8 my-3 px-md-4 px-1">
            <div className="d-flex justify-content-center">
              <div className="w-50">
                <h5
                  className="text-center "
                  style={{
                    background: "rgb(30, 116, 188)",
                    background:
                      "radial-gradient( circle, #faa74a 0%, #faa74a 25%, #e98718 69%, orange 100%, orange 100%, #faa74a 100% )",
                    color: "#fff",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    padding: "0.5rem",
                    marginBottom: "0",
                  }}
                >
                  النبذة
                </h5>
              </div>
            </div>
            <div
              style={{
                boxShadow: "3px 4px 16px 6px rgb(179 179 179 / 36%)",
                borderRadius: "35px",
              }}
            >
              <div
                className="p-5"
                style={{ lineHeight: "2", fontSize: "1.2rem" }}
              >
                <p>{ReactHtmlParser(props.cityDetails.result.description)}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 my-3 px-md-4 px-1">
            <div className="d-flex justify-content-center">
              <div className="w-50">
                <h5
                  className="text-center "
                  style={{
                    background: "rgb(30, 116, 188)",
                    background:
                      "radial-gradient( circle, #faa74a 0%, #faa74a 25%, #e98718 69%, orange 100%, orange 100%, #faa74a 100% )",
                    color: "#fff",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    padding: "0.5rem",
                    marginBottom: "0",
                  }}
                >
                  البيانات
                </h5>
              </div>
            </div>
            <div
              style={{
                boxShadow: "3px 4px 16px 6px rgb(179 179 179 / 36%)",
                borderRadius: "35px",
              }}
            >
              <div>
                <div className="p-5">
                  {props.cityDetails.result.address ? (
                    <div
                      className="pb-2 mb-4"
                      style={{ borderBottom: "1px solid #e98718" }}
                    >
                      <h5 className="mb-4" style={{ color: "#e98718" }}>
                        عنوان الوحدة المحلية
                      </h5>
                      <h5>{props.cityDetails.result.address}</h5>
                    </div>
                  ) : null}
                  {props.cityDetails.result.telephone ? (
                    <div
                      className="pb-2 mb-4"
                      style={{ borderBottom: "1px solid #e98718" }}
                    >
                      <h5 className="mb-4" style={{ color: "#e98718" }}>
                        التليفون
                      </h5>
                      <h5>{props.cityDetails.result.telephone}</h5>
                    </div>
                  ) : null}
                  {props.cityDetails.result.fax ? (
                    <div
                      className="pb-2 mb-4"
                      style={{ borderBottom: "1px solid #e98718" }}
                    >
                      <h5 className="mb-4" style={{ color: "#e98718" }}>
                        الفاكس
                      </h5>
                      <h5>{props.cityDetails.result.fax}</h5>
                    </div>
                  ) : null}
                  {props.cityDetails.result.president ? (
                    <div
                      className="pb-2 mb-4"
                      style={{ borderBottom: "1px solid #e98718" }}
                    >
                      <h5 className="mb-4" style={{ color: "#e98718" }}>
                        رئيس {props.cityDetails.result.cityCategoryName}
                      </h5>
                      <h5>{props.cityDetails.result.president}</h5>
                    </div>
                  ) : null}
                  {props.cityDetails.result.vicePresident ? (
                    <div
                      className="pb-2 mb-4"
                      style={{ borderBottom: "1px solid #e98718" }}
                    >
                      <h5 className="mb-4" style={{ color: "#e98718" }}>
                        نائب {props.cityDetails.result.cityCategoryName}
                      </h5>
                      <h5>{props.cityDetails.result.president}</h5>
                    </div>
                  ) : null}
                  {props.cityDetails.result.secretary ? (
                    <div
                      className="pb-2 mb-4"
                      style={{ borderBottom: "1px solid #e98718" }}
                    >
                      <h5 className="mb-4" style={{ color: "#e98718" }}>
                        سكرتير {props.cityDetails.result.cityCategoryName}
                      </h5>
                      <h5>{props.cityDetails.result.secretary}</h5>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>

        {props.cityDetails.result.villages ? (
          <div className="container col-12 my-4">
            <div className="d-flex justify-content-center">
              <div className="w-75">
                <h5
                  className="text-center "
                  style={{
                    background: "rgb(30, 116, 188)",
                    background:
                      "radial-gradient( circle, #faa74a 0%, #faa74a 25%, #e98718 69%, orange 100%, orange 100%, #faa74a 100% )",
                    color: "#fff",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    padding: "0.5rem",
                    marginBottom: "0",
                  }}
                >
                  القرى
                </h5>
              </div>
            </div>
            <div className="tab-content ml-1" id="nav-tabContent">
              <div
                className="tab-pane fade row show active"
                role="tabpanel"
                aria-labelledby="nav-2-tab"
              >
                <div className="col-12 p-4 mr-1">
                  <div className="d-flex justify-content-center">
                    {props.cityDetails.result.villages.map((item, index) => {
                      return (
                        <Link
                          className="col-md-4 mb-2 text-dark"
                          to={`/citydetails/${item.id}`}
                          style={{
                            visibility: "visible",
                            animationName: "slideInUp",
                          }}
                        >
                          <div
                            className="w-100 hvr-bob card card-wrapper text-center align-items-center justify-content-center p-4"
                            style={{
                              boxShadow:
                                "3px 4px 16px 6px rgb(179 179 179 / 36%)",
                              borderRadius: "35px",
                              height: "100%",
                              fontSize: "1.125rem",
                            }}
                          >
                            قرية {item.name}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {renderModal(content)}
      </>
    );
  } else {
    return <DetailsSkeleton />;
  }
};

const mapStateToProps = (state) => {
  return {
    cityDetails: state.homeComponents.cityDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getCityDetails, clearCityDetails }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CityDetails);
