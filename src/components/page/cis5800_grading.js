import React, {Component} from 'react';
import {Row,Col,Button,Container} from 'react-bootstrap';
import NavBar from '../Professor/NavBar';
import '../Professor/professor.css';
import '../style_sheet/effect.css';



class CIS5800_grading extends Component {
  render(){
return (
<div className="P_HomeBG">
    <NavBar/>
  <Container>
  <Row className="rowcenter toprow">
  <Col md={12}>
  <h3>CIS 5800</h3>
  </Col>
  </Row>
  <hr/>
  <Row className="rowcenter">
    <Col md={12} className="layoutbg expand">
    <br/>
    <div className="edge">
    <h4>Grading</h4>
    </div>
    <hr/>
    <Container>
      <Row>
        <Col xs={2}md={2}>
          <p>Student Name</p>
        </Col>
        <Col xs={2}md={2}>
        <p>Assignments</p>
        </Col>
        <Col xs={2}md={2}>
        <p>Project</p>
        </Col>
        <Col xs={2}md={2}>
        <p>Quiz</p>
        </Col>
        <Col xs={2}md={2}>
        <p>Exam</p>
        </Col>
        <Col xs={2}md={2}>
        <p>Final Exam</p>
        </Col>
      </Row>

      <Row>
        <Col xs={2}md={2}>
          <p>Jay</p>
        </Col>
        <Col xs={2}md={2}>
          <p></p>
        </Col>
        <Col xs={2}md={2}>
        <p></p>
        </Col>
        <Col xs={2}md={2}>
        <p></p>
        </Col>
        <Col xs={2}md={2}>
        <p></p>
        </Col>
        <Col xs={2}md={2}>
        <p></p>
        </Col>
      </Row>
    </Container>
    </Col>
    </Row>
      </Container>
</div>
);
}
}

export default CIS5800_grading;