import React from "react";
import {Button, ButtonToolbar, Modal,Form,Col} from 'react-bootstrap';
import baruch from '../images/baruchlogo.png';
import AssignmentForm from './createassignmentform';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
          <center><img src={baruch} width="30%" align-item="right" alt="baruchlogo"/></center>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AssignmentForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function PopWindow() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <ButtonToolbar>
        <Button size='sm' className="blogicon expand" variant="primary" onClick={() => setModalShow(true)}>
          <strong>Create</strong>
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    );
  }
  export default PopWindow;