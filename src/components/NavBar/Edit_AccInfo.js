import React, {Component} from 'react';
import NavBar from './NavBar';
import { Container, Row, Col } from 'react-bootstrap';




class Edit_AccInfo extends Component {
  render(){
return (
  <div className="HomeBG">
    <NavBar/>
    <div>
        <Container>
          <Row className="rowcenter toprow">
            <Col xs={12} md={12} className="expand">
            <div className="blog">
            <h5>First row.</h5>
            </div>
            </Col>

          </Row>
          <hr/>

          <Row className="rowcenter">
            <Col xs={5} md={5} className="expand">
            <div className="blog">
            <h5>second row.</h5>
            </div>
            </Col>
            <Col xs={6} md={6} className="expand">
            <div className="blog">
            <h5>second row.</h5>
            </div>
            </Col>

          </Row>

          <Row className="rowcenter">
            <Col xs={5} md={5} className="expand">
            <div className="blog">
            <h5>second row.</h5>
            </div>
            </Col>
            <Col xs={6} md={6} className="expand">
            <div className="blog">
            <h5>second row.</h5>
            </div>
            </Col>

          </Row>

        </Container>
      
        </div>
        </div>
);
}
}

export default Edit_AccInfo;