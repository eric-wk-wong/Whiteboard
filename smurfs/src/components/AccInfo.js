import React, {Component} from 'react';
import{Link} from 'react-router-dom';
import Acc from './Acc';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import Courses from './Courses';
import {Container, Row} from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'


class AccInfo extends Component {
  render(){
return (
  <div >
    <Acc/>
    <div>
        
        <Container>
          <Row className="toprow">
            <Col xs={6} md={6}>
            <strong><h3>Account Infomation</h3></strong><hr/>
            <div className="courseinfo">
            <h5><strong>School: </strong> Baruch College</h5>
            <h5><strong>Name: </strong> Zhengjian.Liu </h5>
            <h5><strong>Personal Email: </strong> comezheng@gmail.com </h5>
            <h5><strong>School Email: </strong> zhengjian.liu@baruchmail.cuny.edu </h5>
            <h5><strong>Cell: </strong> (000)-000-0000 </h5>
            <h5><strong>Address: </strong> 90-90 spam st spam, spam,11020</h5>
            
            </div>
            </Col>

            <Col xs={1} md={1}>
            </Col>

            <Col xs={5} md={5}>
            <strong><h3>Courses</h3></strong><hr/>
            <Courses/>
            
            </Col>
          </Row>
          <hr/>
          <br/>
          <h2>My Courses</h2>
          <hr/>
          <Row>
            
            <Col xs md={4}>
            <div id="progress">
            <strong><h3>CIS 5800</h3></strong>
            <hr/>
              <p>Homework:</p>
              <ProgressBar variant="success" animated now={40}/>
              <p>Project#1</p>
              <ProgressBar variant="info" animated now={100} />
              <p>Project#2</p>
              <ProgressBar variant="warning" animated now={80} />
              <p>Project#3</p>
              <ProgressBar variant="danger" animated now={30} />
            </div>
            </Col>
            <Col xs md={4}>
            <div id="progress">
              <strong><h3>CIS 4800</h3></strong>
              <hr/>
              <p>Homework:</p>
              <ProgressBar variant="success" animated now={40}/>
              <p>Project#1</p>
              <ProgressBar variant="info" animated now={100} />
              <p>Project#2</p>
              <ProgressBar variant="warning" animated now={80} />
              <p>Project#3</p>
              <ProgressBar variant="danger" animated now={30} />
            </div>

            </Col>
            <Col xs md={4}>
            <div id="progress">
              <strong><h3>CIS 4140</h3></strong>
              <hr/>
              <p>Homework:</p>
              <ProgressBar variant="success" animated now={40}/>
              <p>Project#1</p>
              <ProgressBar variant="info" animated now={100} />
              <p>Project#2</p>
              <ProgressBar variant="warning" animated now={80} />
              <p>Project#3</p>
              <ProgressBar variant="danger" animated now={30} />
            </div>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col md={12}>
              <Button variant="primary" componentClass={Link} href="/Homepage" to="/"><strong>Home</strong></Button>
              </Col>
          </Row>
          
        </Container>
      
        </div>
        </div>
);
}
}

export default AccInfo;