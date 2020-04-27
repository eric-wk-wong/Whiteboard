import React from "react";
import {Button, ButtonToolbar, Modal} from 'react-bootstrap';
import baruch from '../images/baruchlogo.png';
import AddTimeEntryForm from './add-blog'

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
          
          <AddTimeEntryForm/>
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
        <Button size='sm' className="blogicon expand" variant="primary" onClick={() => setModalShow(true)}>
          <strong>+ Blog</strong>
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    );
  }
  export default Class1;