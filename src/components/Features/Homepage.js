import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousels from './moment';
import ListGroups from './ListGroups';
import NavBar from '../NavBar/NavBar';
import HomeWorkList from './hwlist';
import ToDoList from '../ToDoList/ToDoList'
import {Button} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import Class1 from '../Blog/popwindow';

class Homepage extends Component {
  render(){
return (
  <div className="HomeBG">
    <NavBar/>
  <Container>
    <Row className="rowcenter toprow">
      
      <Col md={12} className="layoutbg expand">
      <br/>
        <h5>Total Confirmed Cases: 2500</h5>
        <hr/>
        <div className="announcement">
        <p><strong><a rel="noopener noreferrer" href="https://www.cuny.edu/coronavirus/" target="_blank">CORONAVIRUS UPDATES: </a></strong>
        No on-campus classes from March 12 - 18. Most classes will move to distance learning on March 19 for the remainder of the semester. CUNY schools, dorms, libraries, research facilities, day care centers, and labs remain open. </p>
      </div>
      </Col>
    </Row>
    <hr/>

  <Row className="rowcenter">
    <Col md={7} className="layoutbg expand">
      <Carousels/>
      </Col>
      <Col md={4} className="layoutbg expand">
      <HomeWorkList/>
      </Col>
    </Row>
    <hr/>

    <Row className="rowcenter">
      <Col md={8} className="layoutbg expand">
      <ToDoList/>
      </Col>
      <Col md={3} className="layoutbg expand">
        <br/>
        <h4><strong>Blog:</strong></h4>
        <hr/>
      <Button className="blogicon expand" variant="primary" componentClass={Link} href="/Blogging" to="/"><strong>Baruch Blog</strong></Button>
      <hr/>
      <Class1/>
      <br/>
      </Col>
    </Row>
    <hr/>

    <Row className="scroll"> 
      <Col className="expand">
      <Card bg="primary" text="white" style={{ width:"auto", marginTop:"10px"}}>
    <Card.Header><h6>Baruch College Receives Top Rankings:</h6></Card.Header>
    <Card.Body>
      <Card.Text>
        <div class="cardlist">
        <a href="#">2021 Best Graduate Schools</a>
        </div>
          

        </Card.Text>
        </Card.Body>
        </Card>
      </Col>
      <Col className="expand">
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
      <Col className="expand">
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
        <br/>
      </Row>
      

      </Container>
</div>
);
}
}

export default Homepage;