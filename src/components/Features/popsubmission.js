import React from "react";
import {Button, ButtonToolbar, Modal,Form,Col} from 'react-bootstrap';
import baruch from '../images/baruchlogo.png';

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
        <Form>
        <Form.Group>
            <Form.Label><b>Category</b></Form.Label>
            <Form.Control as="select">
                <option selected>Category</option>
                <option value="assignment">Assignment</option>
                <option value="project">Project</option>
                <option value="exam">Exam</option>
            </Form.Control>
            </Form.Group>
            <Form.Group >
            <Form.Label><b>Title</b></Form.Label>
            <Form.Control type="text" placeholder="Enter Title" />
            </Form.Group>

        <Form.Group>
            <Form.Label><b>Comments</b></Form.Label>
            <Form.Control as="textarea" rows="5" placeholder="Enter Comments" />
        </Form.Group>
        <Button variant="primary" type="submit">
            <b>Submit</b>
        </Button>
        </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function PopSubmission() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <ButtonToolbar>
        <Button size='sm' className="blogicon expand" variant="primary" onClick={() => setModalShow(true)}>
          <strong>Submit</strong>
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    );
  }
  export default PopSubmission;