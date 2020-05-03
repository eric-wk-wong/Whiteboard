import React, {Component} from 'react';
import {Container,Row} from 'react-bootstrap';
import NavBar from './NavBar';
import TimesList from '../Blog/blog'


class P_Blogging extends Component {
  render(){
return (
  <div className="P_HomeBG">
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

export default P_Blogging;