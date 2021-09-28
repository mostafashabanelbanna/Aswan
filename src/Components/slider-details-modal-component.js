import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { paths } from "../paths/paths";

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
              {title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={`${props.pathName}${props.content.id}/${props.content.photo}`} className="w-100"/>
          </Modal.Body>
          <Modal.Footer>
            {props.details?<a href={props.details} className='col d-flex'>
              <Button style={{backgroundColor: 'orange', borderColor: 'gray'}} onClick={props.onHide}>عرض التفاصيل</Button>
            </a>:null}
            <div className='d-flex'>
              <Button style={{backgroundColor: 'orange', borderColor: 'gray'}} onClick={props.onHide}>إغلاق</Button>
            </div>
          </Modal.Footer>
        </Modal>
      );
    }

export default SliderDetailsModalComponent;