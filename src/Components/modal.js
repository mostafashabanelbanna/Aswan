import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function MyModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
              
           {props.dialogClassName=='danger'?"yeeeeeeees":'nooooooooooooooo'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.dialogClassName=='danger'?"yeeeeeeees":'nooooooooooooooo'}</h4>
          <p>
          {props.dialogClassName=='danger'?"yeeeeeeees":'nooooooooooooooo'}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyModal;