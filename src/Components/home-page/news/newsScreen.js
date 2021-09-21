import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../Styles/news.css";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { mainNews, sliderNews } from "../../../store/actions/News_Action";
import ReactHtmlParser from "react-html-parser";
import { paths } from "../../../paths/paths";
import { Link } from "react-router-dom";
import GeneralThreeOthersSkeletons from "../../loading-skeleton/General-ThreeOthers";

const News = (props) => {
  useEffect(() => {
    props.sliderNews();
    props.mainNews();
  }, []);

  var settings = {
    dots: false,
    // autoplay:true,
    // autoplaySpeed:1000,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true
        },
      },
    ],
  };
  if (props.mainews && props.news) {
    return (
      <div className="container fluid mb-4 px-0">
        <div className="container p-0">
          <div className="my-3 d-flex">
            <img src="/images/icons/news_titel-0١.png" width="80px" />
            <div className="  underline">
              <h3 className="mt-4 me-2 text-secondary"> اخبار المحافظة </h3>
            </div>
          </div>
          {/*  */}
          <div>
            <h4 className="mb-3">
              {props.mainews.result.value.result[0].title}
            </h4>
          </div>
          <Link
            to={`/NewsDetails/${props.mainews.result.value.result[0].id}`}
            className="text-muted"
          >
            <div className="d-flex flex-md-row flex-column-reverse">
              <div className="col-md-6 col-12">
                <div id="newscontent" className='p-3 py-md-0 px-md-2' style={{textAlign:'justify'}}>
                  {" "}
                  {ReactHtmlParser(
                    props.mainews.result.value.result[0].content
                  )}
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="holder">
                  <img
                    style={{ borderRadius: "10px", maxWidth: "100%" }}
                    className="img-fluid h-100 w-100"
                    src={
                      paths.NewsPhotos +
                      props.mainews.result.value.result[0].id +
                      "/" +
                      props.mainews.result.value.result[0].photo
                    }
                    alt={props.mainews.result.value.result[0].title}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <div className="container p-0">
            <Slider {...settings}>
              {props.news.result.map((item, index) => {
                return (
                  <Link
                    to={`/NewsDetails/${item.id}`}
                    className="col-sm-3 text-decoration-none text-muted col-12 mt-5 text-center px-3 "
                  >
                    <div className="hoverTitle">
                      <div
                        key={item.id}
                        className=""
                        style={{ borderRadius: "0px" }}
                      >
                        <img
                          className="rounded-3"
                          width="100%"
                          height="205px"
                          src={paths.NewsPhotos + +item.id + "/" + item.photo}
                          alt={item.caption}
                        />
                        <div className="mt-4  container p-2">{item.title}</div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
  return <GeneralThreeOthersSkeletons />;
};

const mapStateToProps = (state) => {
  return {
    news: state.homeComponents.slidernews,
    mainews: state.homeComponents.mainews,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ sliderNews, mainNews }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
