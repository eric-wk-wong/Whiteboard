import React from 'react';
import {ListGroup,Tab,Col,Row,Button, Table,ButtonGroup } from 'react-bootstrap';
import{Link} from 'react-router-dom';
import './professor.css';
import '../style_sheet/effect.css';
function classtab() {

return (
    <div >
        
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row>
    <Col xs={3} md={2}>
      <ListGroup>
        <ListGroup.Item className="expand list layoutbg classmenu" action href="#link1">
          <p>CIS5800</p>
        </ListGroup.Item>
        <ListGroup.Item className="expand list layoutbg classmenu" action href="#link2">
          <p>CIS4160</p>
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col xs={9} md={10}>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">
          <div className="expand"><a componentClass={Link} href="/CIS5800" to="/"><Button class="btn primary" >Go to CIS-5800</Button></a></div>
          <hr/>
          <Table>
            <Row>
              <Col md={4} sm={6} xs={6}>
              <div className="expand"><a href="#"><Button size="sm"class="btn primary" >View Assignments</Button></a></div>
              <hr/>
              <div className="expand"><a href="#"><Button size="sm"class="btn primary" >View Annocements</Button></a></div>
              <hr/>
              <div className="expand"><a href="#"><Button size="sm"class="btn primary" >View Agenda</Button></a></div>
              </Col>
          <Col md={8} sm={6} xs={6}>
          <h5>Description</h5>
          <hr/>
          <p>Information Technology Development and Project Management is a CIS capstone course. It focuses on the design and management of systems.</p>
          </Col>
          
          </Row>
          </Table>
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
          <div className="expand"><a componentClass={Link} href="/CIS4160" to="/"><Button class="btn primary" >Go to CIS-4160</Button></a></div>
          <hr/>
          <Table>
            <Row>
              <Col md={4} sm={6} xs={6}>
              <div className="expand"><a href="#"><Button size="sm"class="btn primary" >View Assignments</Button></a></div>
              <hr/>
              <div className="expand"><a href="#"><Button size="sm"class="btn primary" >View Annocements</Button></a></div>
              <hr/>
              <div className="expand"><a href="#"><Button size="sm"class="btn primary" >View Agenda</Button></a></div>
              </Col>
          <Col md={8} sm={6} xs={6}>
          <h5>Description</h5>
          <hr/>
          <p>Description
This course is an introduction to N-Tiered Web Development with HTML, CSS, JavaScript, and Object-Oriented (OO) Programming.</p>
          </Col>
          
          </Row>
          </Table>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</div>

);
}

export default classtab;