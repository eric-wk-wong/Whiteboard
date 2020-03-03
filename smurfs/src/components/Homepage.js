import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Calendar from './Calendar';
import Carousels from './moment';
import Section from './section';
import Courses from './Courses';
import baruch from './baruchlogo.png';
import ListGroups from './ListGroups';
import Acc from './Acc';

class Homepage extends Component {
  render(){
return (
  <div>
    <Acc/>
<div id="center">
  <Container-fluid >
    <Row className="toprow">
    <Col md={7} className="shrink">
      <Carousels/>
      </Col>

    <Col md={5}>
      <Section/>
    </Col>
    </Row>
    <hr/>
    <Row>
  <Col xs={7} md={5}>
      <Calendar />
    </Col>
    <Col xs={5} md={4}>
      <Courses/>
      </Col>
      <Col md={3}>
        <div className="Notification">
        <Accordion >
<Card>
<Card.Header>
<Accordion.Toggle as={Button} variant="link" eventKey="0">
<strong>Homework List</strong>
</Accordion.Toggle>
</Card.Header>
<Accordion.Collapse eventKey="0">
<Card.Body>
<Courses/>
</Card.Body>
</Accordion.Collapse>
</Card>
<Card>
<Card.Header>
<Accordion.Toggle as={Button} variant="link" eventKey="1">
<strong>Up-comings</strong>
</Accordion.Toggle>
</Card.Header>
<Accordion.Collapse eventKey="1">
<Card.Body><h6>Nothing is up so far.</h6></Card.Body>
</Accordion.Collapse>
</Card>
</Accordion>
</div>
    </Col>
    </Row>
    <hr/>
    <Row className="scroll"> 
      <Col>
      <Card bg="primary" text="white" style={{ width:"auto", marginTop:"10px"}}>
    <Card.Header><h5>Header</h5></Card.Header>
    <Card.Body>
      <Card.Title><h6>Primary Card Title</h6></Card.Title>
      <Card.Text><h6>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </h6>
        </Card.Text>
        </Card.Body>
        </Card>
      </Col>
      <Col>
      <Card bg="info" text="white" style={{ width:"auto", marginTop:"10px"}}>
    <Card.Header><h5>Header</h5></Card.Header>
    <Card.Body>
      <Card.Title><h6>Primary Card Title</h6></Card.Title>
      <Card.Text><h6>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </h6>
        </Card.Text>
        </Card.Body>
        </Card>
      </Col>
      <Col>
      <Card bg="secondary" text="white" style={{ width:"auto", marginTop:"10px"}}>
    <Card.Header><h5>Header</h5></Card.Header>
    <Card.Body>
      <Card.Title><h6>Primary Card Title</h6></Card.Title>
      <Card.Text><h6>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </h6>
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>
      </Row>
      <hr/>
      <Row>
        <ListGroups/>
      </Row>

      </Container-fluid>
</div>
</div>

);
}
}

export default Homepage;