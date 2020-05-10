import React, {Component} from 'react';
import {Row,Col,Button,Container,ListGroup,Tab,Tabs,ButtonGroup} from 'react-bootstrap';
import NavBar from '../Professor/NavBar';
import '../Professor/professor.css';
import '../style_sheet/effect.css';
import CisAnno from './cis4160_anno';
import Cis4160_agenda from './cis4160_agenda';
import Cis4160_assignment from './cis4160_assignment';
import{Link} from 'react-router-dom';
import CreateButton from './popwindow';

class CIS4160 extends Component {
  render(){
return (
<div className="P_HomeBG">
    <NavBar/>
  <Container>
  <Row className="rowcenter toprow">
  <Col md={12}>
  <h3>Dummy course ####</h3>
  </Col>
  </Row>
  <hr/>

  <Tabs defaultActiveKey="assignment" transition={false} id="noanim-tab-example">
    <Tab eventKey="announcement" title="Announcement">
      <div>
      </div>
      <div>
        <br/>
        <div className="edge">
          <h4>Announcement</h4>
          </div>
          <hr/>
          <CisAnno/>
          </div>  
          </Tab>

    <Tab eventKey="assignment" title="Assignment">
      <div>
      <br/>
        <div className="edge">
          <h4>Assignment</h4>

          <ButtonGroup size="md">
            <Link className="expand" to="/GradingPage"><Button variant="info"><b>Edit Grade</b></Button></Link>
            <CreateButton/>
          </ButtonGroup>
          </div>
          <hr/>
          <Cis4160_assignment/>
          </div>  
          </Tab>
    
    <Tab eventKey="agenda" title="Agenda">
      <div>
      <br/>
        <div className="edge">
          <h4>Agenda</h4>
          </div>
          <hr/>
          <Cis4160_agenda/>
          </div>  
          </Tab>   
</Tabs>
      </Container>
      


</div>
);
}
}

export default CIS4160;