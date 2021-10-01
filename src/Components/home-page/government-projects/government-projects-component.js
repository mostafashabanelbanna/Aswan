import { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllProjects } from "../../../store/actions/government-projects-actions";
import { paths } from "../../../paths/paths";
import ReactHtmlParser from "react-html-parser";
import React from "react";
import RBCarousel from "react-bootstrap-carousel";
import { Row, Col } from "react-bootstrap";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "../../../Styles/government-projects-style.css";
import { Link } from "react-router-dom";
import OnePieaceSkeleton from "../../loading-skeleton/one-pieace";
import Slider from "react-slick";

const styles = { height: 400, width: "100%" };
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;

const GovernmentProjects = (props) => {
  useEffect(() => {
    props.getAllProjects();
  }, []);

  const [autoplay, setAutoPlay] = useState(true);
  const [counter, setCounter] = useState(0);
  const [leftIcon, setLeftIcon] = useState();
  const [rightIcon, setRightIcon] = useState();

  const slider = useRef();

  const onRightClickHandler = () => {
    if (counter < props.projects.result.length - 1) {
      setCounter(() => counter + 1);
    } else {
      setCounter(0);
    }
  };

  const onLeftClickHandler = () => {
    if (counter <= 0) {
      setCounter(() => props.projects.result.length - 1);
    } else if (counter) {
      setCounter(() => counter - 1);
    }
  };
  const colors = ["#e54648", "#5677b3", "#90c478", "#f1e850"];
  const [colorCount, setColorCount] = useState(1);
  const [color, setColor] = useState(colors[0]);

  const _onSelect = (active, direction) => {
    if (colorCount < colors.length - 1) {
      setColorCount(colorCount + 1);
      setColor(colors[colorCount]);
    } else {
      setColorCount(0);
      setColor(colors[colorCount]);
    }
  };
  const _visiableOnSelect = (active) => {};
  const _slideNext = () => {
    slider.current.slideNext();
  };
  const _slidePrev = () => {
    slider.current.slidePrev();
  };
  const _goToSlide = () => {
    slider.current.goToSlide(1);
  };
  const _autoplay = () => {
    setAutoPlay(!autoplay);
  };
  const _changeIcon = () => {
    leftIcon = leftIcon ? undefined : icon_glass;
    rightIcon = rightIcon ? undefined : icon_music;
    setLeftIcon(leftIcon);
    setRightIcon(rightIcon);
  };

  if (props?.projects?.result) {
    if (props.projects.result.length) {
      let projects = props.projects.result;
      return (
        <div style={{ backgroundColor: color }}>
          <div className="container py-5 p-0">
            <div className="d-flex align-items-end mb-4 ">
              <img
                src="./images/icons_black/projects_titel-0٢.png"
                alt=""
                height="50px"
              />
              <div className="underline">
                {console.log(color)}
                <h3 className="mt-4 me-2 text-dark">مشروعات المحافظة</h3>
              </div>
            </div>

            <RBCarousel
              animation={true}
              autoplay={autoplay}
              slideshowSpeed={4000}
              defaultActiveIndex={0}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={_onSelect}
              ref={slider}
              version={4}
              className="carousel-fade"
            >
              {/* <Slider {...settings}> */}
              {projects.map((project, index) => {
                let pName;
                let newPath;
                if (project.photo != null) {
                  pName = project.photo;
                  newPath = pName.replaceAll(" ", "%20");
                }
                let slicedBrief = project.brief;
                if (project.brief !== null && project.brief.length > 750) {
                  const brief = project.brief;
                  slicedBrief = brief.substring(0, 740).concat(" ...");
                }

                return (
                  <div className=" d-flex justify-content-around projectsDiv">
                    <div className="d-flex h-100 w-100 flex-lg-row flex-column-reverse mx-auto align-items-center align-items-md-stretch">
                      <div className="ContainerDiv mb-2 mx-3 p-4 pb-5 custom_bg_light">
                        <h3 className="titles mb-2">
                          {ReactHtmlParser(project.name)}
                        </h3>
                        <p className="content overflow-hidden">
                          {ReactHtmlParser(slicedBrief)}
                        </p>
                        <div className="projectsButtons d-flex flex-sm-row flex-column">
                          <Link id="link" to={`/projectDetails/${project.id}`}>
                            <button
                              className="btn_orange mx-1 mb-2 mb-sm-0"
                              // onClick={() => {
                              //   props.history.push(
                              //     `/projectDetails/${project.id}`
                              //   );
                              // }}
                              style={{ verticalAlign: "middle" }}
                            >
                              <span>عرض التفاصيل</span>
                            </button>
                          </Link>
                          <Link id="link" to={`/projectslist`}>
                            <button
                              className="btn_blue mx-1 mb-2 mb-sm-0"
                              style={{ verticalAlign: "middle" }}
                            >
                              <span>مزيد من المشروعات</span>
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div
                        className="mx-3 mb-5 mb-lg-0 mt-md-0 imageDiv"
                        style={{
                          backgroundImage: `url(${paths.ProjectPhoto}${project.id}/${newPath})`,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
              {/* </Slider> */}
            </RBCarousel>
          </div>
        </div>
      );
    }
  }
  return <OnePieaceSkeleton />;
};

export default connect(
  (state) => {
    return {
      projects: state.homeComponents.projectsSlider,
    };
  },
  (dispatch) => {
    return bindActionCreators({ getAllProjects }, dispatch);
  }
)(GovernmentProjects);
