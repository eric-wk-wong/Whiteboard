import React from "react";
import {Button, ButtonToolbar, Modal,Table,Row,Col} from 'react-bootstrap';
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
            <Table>
                <Row>
                    <Col>Assigns:</Col>
                    <Col>#1</Col>
                    <Col>#2</Col>
                    <Col>#3</Col>
                    <Col>#4</Col>
                    <Col>#5</Col>
                    <Col>#6</Col>
                </Row>
                <Row>
                    <Col>Grades:</Col>
                    <Col>##</Col>
                    <Col>##</Col>
                    <Col>##</Col>
                    <Col>##</Col>
                    <Col>##</Col>
                    <Col>##</Col>
                </Row>
                <Row>
                    <Col>Projects:</Col>
                    <Col>#1</Col>
                    <Col>#2</Col>
                    <Col>#3</Col>
                    <Col>#4</Col>
                    <Col>#5</Col>
                    <Col>#6</Col>
                </Row>
                <Row>
                    <Col>Grades:</Col>
                    <Col>##</Col>
                    <Col>##</Col>
                    <Col>##</Col>
                    <Col>##</Col>
                    <Col>##</Col>
                    <Col>##</Col>
                </Row>
                <Row>
                    <Col>Exams:</Col>
                    <Col>#1</Col>
                    <Col>#2</Col>
                    <Col>#3</Col>
                    <Col>#4</Col>
                    <Col>#5</Col>
                    <Col>#6</Col>
                </Row>
                <Row>
                    <Col>Grades:</Col>
                    <Col>##</Col>
                    <Col>##</Col>
                    <Col>##</Col>
                    <Col>##</Col>
                    <Col>##</Col>
                    <Col>##</Col>
                </Row>
            </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function Viewgrades() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <ButtonToolbar>
        <Button size='sm' className="blogicon expand" variant="primary" onClick={() => setModalShow(true)}>
          <strong>ViewGrades</strong>
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    );
  }
  export default Viewgrades;