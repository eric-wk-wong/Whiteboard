import React, {Component} from 'react';
import NavBar from './NavBar';
import { Container, Row, Col } from 'react-bootstrap';


class Add_Course extends Component {
  render(){
return (
  <div className="HomeBG">
    <NavBar/>
    <div>
        
        <Container>
          <Row className="rowcenter toprow">
            <Col xs={6} md={6} className="expand">
                <h1>Adding Course feature is still Progressing...</h1>
            </Col>

          </Row>
        </Container>
      
        </div>
        </div>
);
}
}

export default Add_Course;