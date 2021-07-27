import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllProjects } from "../actions/government-projects-actions";

const GovernmentProjects = (props) => {

  let projects = [];

  // useEffect(() => {
  //   projects = props.projects;
  // }, [props.projects])

  useEffect(() => {
      props.getAllProjects();
    // props.getAllProjects();
    
  }, [])
  // console.log(props.projects)
  const titles = ["مشروعات", "المحافظة"];
  const contents = [
    "By for this spent ancient light thou adversity did. It they from joyless childe most in say to and, high soul departed so loathed his weary into fondly. Loved pilgrimage but known brow each talethis did ah. Blast mighty satiety nor albions where. Be way to birth it revel in sad venerable whom. The with upon into few to. His cheer monks present a festal. In feere nor now run him are he be. For childe would favour a pollution was had power, but left love since sins evil. Which as worse knew chill save. Flee ear sun was feere.",
    "Dolor vero rebum voluptua dolor ut dolores justo vero, ut est diam gubergren takimata amet magna ipsum. No takimata tempor at dolor sit sit sit elitr ea, et erat takimata sit vero tempor sea takimata nonumy. Dolores et accusam eos et ut diam sed sit, nonumy sea sadipscing ipsum dolores."];
  const images = ["./assets/m.jpg","./assets/m.jpg", "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"]

  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(images[0]);


  const onRightClickHandler = () => {
    if(counter < props.projects.result.length -1){
      setCounter(()=>counter+1)
    }
    else {
      setCounter(0)
    }
    setImage(images[counter])
  }

  const onLeftClickHandler = () => {
    if(counter <= 0){
      setCounter(()=>props.projects.result.length - 1)
    }
    else if(counter ) {
      setCounter(()=>counter-1)
    }
    setImage(images[counter])
  }

if(props.projects){
  if(props.projects.result.length){
  console.log(props.projects.result)
  return (
    <div className="container-fluid col-12">
      <div className="d-flex mb-3 justify-content-center justify-content-md-start">
        <FontAwesomeIcon icon={faCogs} className="titleIcon me-md-5" />
        <p className="titles mb-1">مشروعات المحافظة</p>
      </div>
      <div className="d-flex justify-content-around">
        <FontAwesomeIcon
          icon={faChevronRight}
          className="fa-5x rightIcon"
          onClick={onRightClickHandler}
        />
        <div className="d-flex h-100 flex-md-row flex-column mx-auto align-items-center align-items-md-stretch">
          <div className="w-75 ContainerDiv mx-3 p-4 pb-5">
            <p className="titles">{props.projects.result[counter].name}</p>
            <p className="content">{props.projects.result[counter].brief}</p>
          </div>
          <div className="w-75 mx-3 mt-5 mt-md-0">
            <img
              src={image}
              className="col-12 h-100 img-fluid imageAlbum"
              alt=""
            />
          </div>
        </div>
        <FontAwesomeIcon icon={faChevronLeft} className="fa-5x leftIcon" onClick={onLeftClickHandler} />
      </div>
      <div className="line my-5 mx-auto"></div>
    </div>
  );}}
  return (<div>
    Loading
  </div>);
};

export default connect(
  (state) => {
    return{
      projects:state.homeComponents.projectsList
    }
  },
  (dispatch) => {
    return bindActionCreators({getAllProjects}, dispatch)
  }
)(GovernmentProjects);
