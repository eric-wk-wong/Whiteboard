import React, {Component} from 'react';
import {Row,Col,Button,Container,ListGroup,Tab,Tabs,ButtonGroup,Table} from 'react-bootstrap';
import NavBar from '../Professor/NavBar';
import '../Professor/professor.css';
import '../style_sheet/effect.css';
import CisAnno from './cis4160_anno';
import Cis4160_agenda from './cis4160_agenda';
import Cis4160_assignment from './cis4160_assignment';
import{Link} from 'react-router-dom';
import CreateButton from './popwindow';

class GradingPage extends Component {
  render(){
return (
<div className="P_HomeBG">
    <NavBar/>
  <Container>
  <Row className="rowcenter toprow">
  <Col md={12}>
  <h3>Dummy Grading </h3>
  </Col>
  </Row>
  <hr/>
  <Row>
  <Tab.Container defaultActiveKey="#Assignments">
  <Row>
    <Col xs={3} md={2}>
      <ListGroup>
        <ListGroup.Item className="expand list layoutbg classmenu" action href="#Assignments">
          <p>Assignments</p>
        </ListGroup.Item>
        <ListGroup.Item className="expand list layoutbg classmenu" action href="#Projects">
          <p>Projects</p>
        </ListGroup.Item>
        <ListGroup.Item className="expand list layoutbg classmenu" action href="#Exams">
          <p>Exams</p>
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col xs={9} md={10}>
      <Tab.Content>
        <Tab.Pane eventKey="#Assignments">
        <Table>
            <Row className="maxi">
              <Col xs={2} sm={2} md={2}><p>Name</p></Col>
              <Col xs={1} sm={1} md={1}><p>1fwih</p></Col>
              <Col xs={1} sm={1} md={1}><p>egniwengf</p></Col>
              <Col xs={1} sm={1} md={1}><p>ihfiwe</p></Col>
              <Col xs={1} sm={1} md={1}><p>qwfi</p></Col>
              <Col xs={1} sm={1} md={1}><p>ewgfinwe</p></Col>
              <Col xs={1} sm={1} md={1}><p>qwfibiqw</p></Col>
              <Col xs={1} sm={1} md={1}><p>wfbibeq</p></Col>
              <Col xs={1} sm={1} md={1}><p>wqfih</p></Col>
              <Col xs={1} sm={1} md={1}><p>wqfdf</p></Col>
              <Col xs={1} sm={1} md={1}><p>#wqfugq</p></Col>
            </Row>
            <Row className="maxi">
              <Col sm={2} md={2}><p>asbfjbsf</p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
            </Row>
          </Table>
        </Tab.Pane>
        <Tab.Pane eventKey="#Projects">
        <Table>
            <Row>
              <Col xs={2}sm={2} md={2}><p>Name</p></Col>
              <Col xs={1} sm={1} md={1}><p>#1</p></Col>
              <Col xs={1} sm={1} md={1}><p>#2</p></Col>
              <Col xs={1} sm={1} md={1}><p>#3</p></Col>
              <Col xs={1} sm={1} md={1}><p>#4</p></Col>
              <Col xs={1} sm={1} md={1}><p>#5</p></Col>
              <Col xs={1} sm={1} md={1}><p>#6</p></Col>
              <Col xs={1} sm={1} md={1}><p>#7</p></Col>
              <Col xs={1} sm={1} md={1}><p>#8</p></Col>
              <Col xs={1} sm={1} md={1}><p>#9</p></Col>
              <Col xs={1} sm={1} md={1}><p>#10</p></Col>
            </Row>
            <Row>
              <Col sm={2} md={2}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
            </Row>
          </Table>
          
        </Tab.Pane>
        <Tab.Pane eventKey="#Exams">
        <Table  >
            <Row>
              <Col xs={2}sm={2} md={2}><p>Name</p></Col>
              <Col xs={1} sm={1} md={1}><p>#1</p></Col>
              <Col xs={1} sm={1} md={1}><p>#2</p></Col>
              <Col xs={1} sm={1} md={1}><p>#3</p></Col>
              <Col xs={1} sm={1} md={1}><p>#4</p></Col>
              <Col xs={1} sm={1} md={1}><p>#5</p></Col>
              <Col xs={1} sm={1} md={1}><p>#6</p></Col>
              <Col xs={1} sm={1} md={1}><p>#7</p></Col>
              <Col xs={1} sm={1} md={1}><p>#8</p></Col>
              <Col xs={1} sm={1} md={1}><p>#9</p></Col>
              <Col xs={1} sm={1} md={1}><p>#10</p></Col>
            </Row>
            <Row>
              <Col sm={2} md={2}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
              <Col xs={1} sm={1} md={1}><p></p></Col>
            </Row>
          </Table>
          
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
  </Row>
      </Container>
      


</div>
);
}
}

export default GradingPage;