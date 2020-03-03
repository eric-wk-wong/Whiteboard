import React, { useState } from "react";
import {Button, ButtonToolbar, Modal} from 'react-bootstrap';
import Accinfo from './AccInfo';
import baruch from './baruchlogo.png';
import Schedules from './Schedule'

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
            Welcome To <strong>Baruch</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center><img src={baruch} width="30%"/></center>
          <Schedules/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function Class1() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <ButtonToolbar>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          <strong>Login</strong>
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    );
  }
  export default Class1;