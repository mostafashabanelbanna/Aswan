import { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllProjects } from "../../store/actions/government-projects-actions";
import { paths } from "../../paths/paths";
import ReactHtmlParser from "react-html-parser";
import React from "react";
import RBCarousel from "react-bootstrap-carousel";
import { Row, Col } from "react-bootstrap";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import '../../Styles/government-projects-style.css'

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

  const _onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  const _visiableOnSelect = (active) => {
    console.log(`visiable onSelect active=${active}`);
  };
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

  if (props.projects) {
    if (props.projects.result.length) {
      console.log(props.projects.result);
      let projects = props.projects.result;
      return (
        <div className="custom_contanier">
          <div className="d-flex my-2 ">
            <img
              src="./images/icons/projects_titel-0٢.png"
              alt=""
              width="80px"
            />
            <h3 className="mt-4 me-2 text-secondary">مشروعات المحافظة</h3>
          </div>

          <Row>
            <Col span={12} style={{ marginTop: 20 }}>
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
                {projects.map((project, index) => {

                  let slicedBrief = project.brief;
                  if(project.brief !== null && project.brief.length > 750){
                    const brief = project.brief;
                    slicedBrief = brief.substring(0, 740).concat(' ...');
                  }

                  return (
                    <div className="d-flex justify-content-around projectsDiv">
                      <div className="d-flex h-100 w-100 flex-md-row flex-column-reverse mx-auto align-items-center align-items-md-stretch">
                        <div className="w-100 ContainerDiv mx-3 p-4 pb-5">
                          <h3 className="titles overflow-hidden">
                            {ReactHtmlParser(project.name)}
                          </h3>
                          <p className="content overflow-hidden">
                            {ReactHtmlParser(slicedBrief)}
                          </p>
                          <div className="projectsButtons">
                            <button
                              className="btn btn-secondary mx-1 mb-2 mb-sm-0"
                              onClick={() => {
                                props.history.push(
                                  `/projectDetails/${project.id}`
                                );
                              }}
                            >
                              عرض التفاصيل
                            </button>
                            <button className="btn btn-secondary mx-1 mb-2 mb-sm-0">
                              مزيد من المشروعات
                            </button>
                          </div>
                        </div>
                        <div
                          className="w-100 mx-3 mb-5 mb-lg-0 mt-md-0 imageDiv"
                          style={{
                            backgroundImage: `url(${paths.ProjectPhoto}${project.id}/${project.photo})`,
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </RBCarousel>
            </Col>
          </Row>
          <div className="line my-5 w-100"></div>
        </div>
      );
    }
  }
  return <div>Loading</div>;
};

export default connect(
  (state) => {
    return {
      projects: state.homeComponents.projectsList,
    };
  },
  (dispatch) => {
    return bindActionCreators({ getAllProjects }, dispatch);
  }
)(GovernmentProjects);
