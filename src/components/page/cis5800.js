import React, {Component} from 'react';
import {Row,Col,Button,Container} from 'react-bootstrap';
import NavBar from '../Professor/NavBar';
import '../Professor/professor.css';
import '../style_sheet/effect.css';
import CisAgenda_5800 from './cis5800_agenda';
import CisAnno_5800 from './cis5800_anno';
import CisAssignment_5800 from './cis5800_assignment';
import{Link} from 'react-router-dom';

class CIS5800 extends Component {
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
    <h4>Announcement</h4>
    </div>
    <hr/>
    <CisAnno_5800/>
    
    </Col>
    <Col md={12} className="layoutbg expand">
      <br/>
      <div className="edge">
      <h4>Agenda</h4>
      </div>
      <hr/>
      <CisAgenda_5800/>
      </Col>
    </Row>
    <hr/>

    <Row className="rowcenter">
      <Col md={12} className="layoutbg expand">
      <br/>
      <div className="edge">
      <h4>Assignment</h4>
      <div className="expand"><Button size="sm" className="btn primary" componentClass={Link} href="/CIS5800_grading" to="/">Edit Grade</Button></div>
      </div>
      <hr/>
      <CisAssignment_5800/>
      </Col>
    </Row>
      </Container>
</div>
);
}
}

export default CIS5800;