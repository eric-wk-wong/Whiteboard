import React, {Component} from 'react';
import Acc from './Acc';
import Class1 from './class1';

import Container from 'react-bootstrap/Container';
import {Row,Button} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

class myclass extends Component {
  render(){
return (
    <div className=" myclassbg">
    <div className="container-fluid-center">
                <div className="toprow">
            <h2>Welcome To CIS 5800</h2>
            <hr/>
        </div>
        <Acc/>
        <Container-fluid>
            <Row className="toprow">
                <Col  className="myclasscard" md={12}>
                <br/>
                <h4>
                    MyAccouncement:
                </h4>
                <hr/>
                <p>
                    Nothing is up so far.
                </p>
                </Col>
            </Row>

            <Row>
            <Col  className="myclasscard" xs={7} md={7}>
            <br/>
                <h5>
                    HomeWorks:
                </h5>
                <hr/>
                <p>
                    Nothing is up so far.
                </p>

                </Col>

                <Col></Col>

                <Col  className="myclasscard" xs={4} md={4}>
                <br/>
                <h5>
                    Feedbacks:
                </h5>
                <hr/>
                <p>
                    Nothing is up so far.
                </p>
                </Col>
            </Row>
            <Row>
                <Col className="myclasscard" xs={7} md={2}>
                    <br/>
                    <h5>
                        Tools:
                        </h5>
                        <hr/>
                        <Button>Add Note</Button>
                        <br/>
                        <br/>
                        <Class1/>
                </Col>
                
                <Col xs={5} md={1}>

                </Col>

                <Col className="myclasscard" md={9}>
                <br/>
                    <h5>
                        Project:
                    </h5>
                    <hr/>
                    <p>
                        ...
                    </p>
                </Col>
            </Row>

        </Container-fluid>

        </div>
        </div>

);
}
}
export default myclass;