import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousels from '../Features/moment';
import NavBar from './NavBar';
import HomeWorkList from './hwlist';
import ToDoList from '../ToDoList/ToDoList'
import {Button} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import Class1 from '../Blog/popwindow';
import ClassTab from './classtab';
import './professor.css';
import '../style_sheet/effect.css';

class P_pomepage extends Component {
  render(){
return (
  <div className="P_HomeBG">
    <NavBar/>
  <Container>

  <Row className="rowcenter toprow">
    <Col md={6} className="layoutbg expand">
      <Carousels/>
      </Col>
      <Col md={5} className="layoutbg expand">
      <HomeWorkList/>
      </Col>
    </Row>
    <hr/>
    <Row className="rowcenter">

      <Col md={12} className="layoutbg expand">
      <br/>
      <ClassTab />
      </Col>
    </Row>
    <hr/>



    <Row className="rowcenter">
      <Col md={8} className="layoutbg expand">
      <ToDoList/>
      </Col>
      <Col md={3} className="layoutbg expand">
        <br/>
        <h4><strong> School Blog:</strong></h4>
        <hr/>
      <Button className="blogicon expand" variant="primary" componentClass={Link} href="/P_Blogging" to="/"><strong>Baruch Blog</strong></Button>
      <hr/>
      <Class1/>
      <br/>
      </Col>
    </Row>
      </Container>
</div>
);
}
}

export default P_pomepage;
