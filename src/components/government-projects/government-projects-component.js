import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllProjects } from "../../store/actions/government-projects-actions";
import { paths } from "../../paths/paths";
import ReactHtmlParser from "react-html-parser";
import "../../Styles/government-projects-style.css";

const GovernmentProjects = (props) => {
  useEffect(() => {
    props.getAllProjects();
  }, []);

  const [counter, setCounter] = useState(0);

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

  if (props.projects) {
    if (props.projects.result.length) {
      // console.log(props);
      let projects = Object.assign({}, props.projects.result);
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
          <div className="d-flex justify-content-around">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="fa-5x rightIcon"
              onClick={onRightClickHandler}
            />
            <div className="d-flex h-100 w-100 flex-md-row flex-column-reverse mx-auto align-items-center align-items-md-stretch">
              <div className="w-100 ContainerDiv mx-3 p-4 pb-5">
                <h3 className="titles overflow-hidden">
                  {ReactHtmlParser(projects[counter].name)}
                </h3>
                <p className="content overflow-hidden">
                  {ReactHtmlParser(projects[counter].brief)}
                </p>
                <div className="projectsButtons">
                  <button
                    className="btn btn-secondary mx-1"
                    onClick={() => {
                      props.history.push(
                        `/projectDetails/${projects[counter].id}`
                      );
                    }}
                  >
                    عرض التفاصيل
                  </button>
                  <button className="btn btn-secondary mx-1">
                    مزيد من المشروعات
                  </button>
                </div>
              </div>
              <div
                className="w-100 mx-3 mb-5 mt-md-0 imageAlbum"
                style={{
                  backgroundImage: `url(${paths.ProjectPhoto}${projects[counter].id}/${projects[counter].photo})`,
                }}
              ></div>
            </div>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="fa-5x leftIcon"
              onClick={onLeftClickHandler}
            />
          </div>
          <div className="line my-5 mx-auto"></div>
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
