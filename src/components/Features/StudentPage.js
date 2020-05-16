import React, {Component} from 'react';
import {Table,Row,Col,Container,Tab,Tabs} from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import ViewGrades from './popgrade';
import Submission from './popsubmission';
class StudentPage extends Component {
  render(){
return (
<div className="HomeBG">
    <NavBar/>
  <Container>
  <Row className="rowcenter toprow">
  <Col md={12}>
  <h3>Dummy course ####</h3>
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

      <textarea placeholder="Announcement here" className="expand bglayout inputlist" />
          </div>
          </Tab>

    <Tab eventKey="assignment" title="Assignment">
      <div>
      <br/>
        <div className="edge">
          <h4>Assignment</h4>
          <ViewGrades/>
          </div>
          <hr/>
          <Table>
          <Row className="edge">
            <Col xs={2} md={2}>
            <b><p>Title:XXXXX</p></b>
            </Col>
            <Col xs={4} md={4}>
            <b><p>Grade Weight #%</p></b>
            </Col>
            <Col  xs={3} md={3}>
              <b><p>Category:XXXXX</p></b>

            </Col>
            <Col  xs={3} md={3}>
            <Submission/>

            </Col>


          </Row>
          <Row  className="edge">
          <textarea placeholder="Description here" className="expand bglayout inputlist" />

          </Row>
          </Table>
          </div>
          </Tab>

    <Tab eventKey="agenda" title="Agenda">
      <div>
      <br/>
        <div className="edge">
          <h4>Agenda</h4>
          </div>

          <hr/>

                <textarea placeholder="Agenda here" className="expand bglayout inputlist" />

          </div>
          </Tab>
</Tabs>
      </Container>



</div>
);
}
}

export default StudentPage;
