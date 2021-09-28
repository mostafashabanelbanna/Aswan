import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function ContactUsModal(props) {
  // {props.dialogClassName != "danger"
  // ? Swal.fire("Good job!", "You clicked the button!", "success")
  // : Swal.fire("bad job!", "You clicked the button!", "success")
  // }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
           {props.dialogClassName=='danger'?"yeeeeeeees":'nooooooooooooooo'}
          </Modal.Title>
        </Modal.Header> */}
      <Modal.Body>
        {props.dialogClassName != "danger" ? (
          <div className='d-flex flex-column align-items-center'>
            <FontAwesomeIcon
              icon={faCheck}
              className="align-self-center text-success my-5 fa-3x"
            />
            <h4>تم إرسال رأيك بنجاح</h4>
          </div>
        ) : (
          <div className='d-flex flex-column align-items-center'>
            <FontAwesomeIcon
              icon={faTimes}
              className="align-self-center text-danger my-5 fa-3x"
            />
            <h4>لم يتم الإرسال أعد المحاول مرة اخرى</h4>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ backgroundColor: "orange", borderColor: "gray" }}
          onClick={props.onHide}
        >
          إغلاق
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ContactUsModal;
