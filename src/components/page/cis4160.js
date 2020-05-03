import React, {Component} from 'react';
import {Row,Col,Button,Container} from 'react-bootstrap';
import NavBar from '../Professor/NavBar';
import '../Professor/professor.css';
import '../style_sheet/effect.css';
import CisAnno from './cis4160_anno';
import Cis4160_agenda from './cis4160_agenda';
import Cis4160_assignment from './cis4160_assignment';
import{Link} from 'react-router-dom';

class CIS4160 extends Component {
  render(){
return (
<div className="P_HomeBG">
    <NavBar/>
  <Container>
  <Row className="rowcenter toprow">
  <Col md={12}>
  <h3>CIS 4160</h3>
  </Col>
  </Row>
  <hr/>
  <Row className="rowcenter">
    <Col md={12} className="layoutbg expand">
    <br/>
    <div className="edge">
    <h4>Announcement</h4>
    </div>
    <hr/>
    <CisAnno/>
    </Col>
    <Col md={12} className="layoutbg expand">
      <br/>
      <div className="edge">
      <h4>Agenda</h4>
      </div>
      <hr/>
      <Cis4160_agenda/>
      </Col>
    </Row>
    <hr/>

    <Row className="rowcenter">
      <Col md={12} className="layoutbg expand">
      <br/>
      <div className="edge">
      <h4>Assignment</h4>
      <div className="expand"><Button size="sm" className="btn primary" componentClass={Link} href="/CIS4160_grading" to="/">Edit Grade</Button></div>
      </div>
      <hr/>
      <Cis4160_assignment/>
      </Col>
    </Row>
      </Container>
</div>
);
}
}

export default CIS4160;