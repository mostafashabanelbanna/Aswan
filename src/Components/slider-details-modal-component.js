import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
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
        >
          <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter">
            <div className='d-flex'>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={props.onHide}
              style={{cursor: 'pointer'}}
              className="align-self-start my-1 ms-2 text-danger fa-1x"
            />
              {title}
            </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {props.details?<a href={props.details}>
            <img src={`${props.pathName}${props.content.id}/${props.content.photo}`} className="w-100"/>
            </a>:
            <img src={`${props.pathName}${props.content.id}/${props.content.photo}`} className="w-100"/>
            }
          </Modal.Body>
          <Modal.Footer>
            <div>
              <Button style={{backgroundColor: 'orange', borderColor: 'gray'}} onClick={props.onHide}>إغلاق</Button>
            </div>
          </Modal.Footer>
        </Modal>
      );
    }

export default SliderDetailsModalComponent;