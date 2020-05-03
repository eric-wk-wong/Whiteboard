import React, {Component} from 'react';
import NavBar from './NavBar';
import { Button,Container, Row, Col } from 'react-bootstrap';
import Courses from '../Features/Courses';
import ProgressBar from 'react-bootstrap/ProgressBar'
import{Link} from 'react-router-dom';


class AccInfo extends Component {
  render(){
return (
  <div className="HomeBG">
    <NavBar/>
    <div>
        
        <Container>
          <Row className="rowcenter toprow">
            <Col xs={6} md={6} className="expand">
              <div className="blog">
            <strong><h3>Personal Infomation</h3></strong><hr/>
            <Button className="expand" variant="primary" componentClass={Link} href="/Edit_AccInfo" to="/">Edit</Button>
            </div>
            <hr/>
            <div className="courseinfo">
            <h5><strong>School: </strong> Baruch College</h5>
            <h5><strong>Name: </strong> Span.Span </h5>
            <h5><strong>Personal Email: </strong> Testing@gmail.com </h5>
            <h5><strong>School Email: </strong> testing@baruchmail.cuny.edu </h5>
            <h5><strong>Cell: </strong> (000)-000-0000 </h5>
            <h5><strong>Address: </strong> 90-90 spam st spam, spam,11020</h5>
            
            </div>
            </Col>

            <Col xs={1} md={1}>
            </Col>

            <Col xs={5} md={5} className="expand">
              <div className="separator">
            <strong><h3>Courses</h3></strong>
            <Button className="expand" variant="primary" componentClass={Link} href="/Add_Course" to="/">Edit</Button>
            </div>
            <hr/>
            <Courses/>
            
            </Col>
          </Row>
          <hr/>
          <br/>
          <h2>My Courses Overview</h2>
          <hr/>
          <Row>
            
            <Col xs md={4} className="expand">
            <div id="progress">
            <strong><h3>CIS 5800</h3></strong>
            <hr/>
              <p>Homework:</p>
              <ProgressBar variant="success" className="expand" animated now={40}/>
              <p>Project#1</p>
              <ProgressBar variant="info" className="expand" animated now={100} />
              <p>Project#2</p>
              <ProgressBar variant="warning" className="expand" animated now={80} />
              <p>Project#3</p>
              <ProgressBar variant="danger" className="expand" animated now={30} />
            </div>
            </Col>
            <Col xs md={4} className="expand">
            <div id="progress">
              <strong><h3>CIS 4800</h3></strong>
              <hr/>
              <p>Homework:</p>
              <ProgressBar variant="success" className="expand" animated now={40}/>
              <p>Project#1</p>
              <ProgressBar variant="info" className="expand" animated now={100} />
              <p>Project#2</p>
              <ProgressBar variant="warning" className="expand" animated now={80} />
              <p>Project#3</p>
              <ProgressBar variant="danger" className="expand" animated now={30} />
            </div>

            </Col>
            <Col xs md={4} className="expand">
            <div id="progress">
              <strong><h3>CIS 4140</h3></strong>
              <hr/>
              <p>Homework:</p>
              <ProgressBar variant="success" className="expand" animated now={40}/>
              <p>Project#1</p>
              <ProgressBar variant="info" className="expand" animated now={100} />
              <p>Project#2</p>
              <ProgressBar variant="warning" className="expand" animated now={80} />
              <p>Project#3</p>
              <ProgressBar variant="danger" className="expand" animated now={30} />
            </div>
            </Col>
          </Row>
          
        </Container>
      
        </div>
        </div>
);
}
}

export default AccInfo;
