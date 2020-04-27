import React, {Component} from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import TimesList from './blog'


class Blogging extends Component {
  render(){
return (
  <div className="HomeBG">
    <NavBar/>
  <Container>
    <Row className="rowcenter toprow">
      <TimesList/>
    </Row>
    
      </Container>


      
</div>
);
}
}

export default Blogging;