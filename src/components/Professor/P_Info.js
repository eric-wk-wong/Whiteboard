import React, {Component} from 'react';
import NavBar from './NavBar';
import { Button,Container, Row, Col } from 'react-bootstrap';
import Courses from '../Features/Courses';
import ProgressBar from 'react-bootstrap/ProgressBar'
import{Link} from 'react-router-dom';


class ProfInfo extends Component {
  render(){
return (
  <div className="P_HomeBG">
    <NavBar/>
    <div>
        
        <Container>
          <Row className="rowcenter toprow">
            <Col xs={6} md={6} className="expand">
              <div className="blog">
            <strong><h3>Personal Infomation</h3></strong><hr/>
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
            </div>
            <hr/>
            <Courses/>
            
            </Col>
          </Row>
        </Container>
      
        </div>
        </div>
);
}
}

export default ProfInfo;
