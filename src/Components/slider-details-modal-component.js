import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { paths } from "../paths/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SliderDetailsModalComponent = (props) => {
  let title = props.content.title;
  if (props.content.title === null) {
    title = props.content.caption;
  }
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
      backdrop="static"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.details ? (
            <a href={props.details} className='text-dark'>
              <div className="d-flex">{title}</div>
            </a>
          ) : (
            <div className="d-flex">{title}</div>
          )}
        </Modal.Title>
        <FontAwesomeIcon
          icon={faTimes}
          onClick={props.onHide}
          style={{ cursor: "pointer", fontSize: "22px" }}
          className="align-self-start my-1 ms-2 text-danger"
        />
      </Modal.Header>
      <Modal.Body>
        {props.details ? (
          <a href={props.details}>
            <img
              src={`${props.pathName}${props.content.id}/${props.content.photo}`}
              style={{ height: "400px" }}
              className="w-100"
            />
          </a>
        ) : (
          <img
            src={`${props.pathName}${props.content.id}/${props.content.photo}`}
            style={{ height: "500px" }}
            className="w-100"
          />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default SliderDetailsModalComponent;
