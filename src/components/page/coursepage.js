import React, {Component} from 'react';
import {Row,Col,Button,Container,ListGroup,Tab,Tabs,ButtonGroup} from 'react-bootstrap';
import NavBar from '../Professor/NavBar';
import '../Professor/professor.css';
import '../style_sheet/effect.css';
import Announcement from './Announcement';
import Cis4160_agenda from './cis4160_agenda';
import Assignment from './Assignment';
import {Link} from 'react-router-dom';
import CreateButton from './popwindow';
import EditGrade from './GradingPage';

class Courses extends Component {
  render(){
      console.log(this.props)
return (
<div className="P_HomeBG">
    <NavBar/>
  <Container>
  <Row className="rowcenter toprow">
  <Col md={12}>
  <h3>{this.props.location.state.registeredCourse}</h3>
  </Col>
  </Row>
  <hr/>

  <Tabs defaultActiveKey="assignment" transition={false} id="noanim-tab-example">
    <Tab eventKey="announcement" title="Announcement">
      <div>
      </div>
      <div>
        <br/>
        <div className="edge">
          <h4>Announcement</h4>
          </div>
          <hr/>
          <Announcement state={this.props.location.state}/>
          </div>
          </Tab>

    <Tab eventKey="assignment" title="Assignment">
      <div>
      <br/>
        <div className="edge">
          <h4>Assignment</h4>

          <ButtonGroup size="md">
            <Link className="expand" to={{pathname:'/GradingPage', state:{userCourse: this.props.location.state.userCourse,
                                                                          registererdCourse: this.props.location.state.registeredCourse}}}><Button variant="info"><b>Edit Grade</b></Button></Link>
            <CreateButton state={this.props.location.state}/>
          </ButtonGroup>
          </div>
          <hr/>
          <Assignment state={this.props.location.state}/>
          </div>
          </Tab>

    <Tab eventKey="agenda" title="Agenda">
      <div>
      <br/>
        <div className="edge">
          <h4>Agenda</h4>
          </div>
          <hr/>
          <Cis4160_agenda state={this.props.location.state}/>
          </div>
          </Tab>
</Tabs>
      </Container>



</div>
);
}
}

export default Courses;
