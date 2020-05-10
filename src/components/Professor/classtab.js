import React,{useEffect} from 'react';
import {ListGroup,Tab,Col,Row,Button, Table} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import './professor.css';
import '../style_sheet/effect.css';
import firebase from '../firebase/base'
class Classtab extends React.Component{
  state={
    userName: null,
    userType: null,
    userEmail: null,
    userCourse: [],
    registeredCourse: [],
    value: null
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var db = firebase.firestore()
        db.collection('user').doc(user.uid)
            .get()
            .then(snapshot => {
                this.setState({userName: snapshot.data().name,
                               userType: snapshot.data().type,
                               userCourse: snapshot.data().course,
                               userEmail: user.email
                                })
                this.state.userCourse.map(course => {
                  db.doc(course).get().then(
                        snapshot => {
                            this.setState({
                                registeredCourse: [...this.state.registeredCourse,snapshot.data().name]
                                })}
                              )
                          })
            }).catch(error => console.log(error))

      } else {

      }})
  }
  render(){
    console.log(this.state.userCourse[0])
    return(
      <div >

          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
    <Row>
      <Col xs={3} md={2}>
        <ListGroup>
        {
          this.state.registeredCourse.map((course) =>{
            return(
              <ListGroup.Item className="expand list layoutbg classmenu" action href={'#' + course}>
              <p>{course}</p>
              </ListGroup.Item>
            )})
          }
      </ListGroup>
      </Col>
      <Col xs={9} md={10}>
        <Tab.Content>
        {
          this.state.registeredCourse.map((course, index) =>{
            const reg = this.state.userCourse[index]
            return(
              <Tab.Pane eventKey={'#' + course}>
                <div className="expand"><Link to={{pathname: '/coursepage', state:{registeredCourse: course,
                                                                                userCourse: reg}}}><Button class="btn primary" >Go to {course}</Button></Link></div>
                <hr/>
                <Table>
                  <Row>
                    <Col md={4} sm={6} xs={6}>
                    <div className="expand"><a href="#"><Button size="sm"class="btn primary" >View Assignments</Button></a></div>
                    <hr/>
                    <div className="expand"><a href="#"><Button size="sm"class="btn primary" >View Annocements</Button></a></div>
                    <hr/>
                    <div className="expand"><a href="#"><Button size="sm"class="btn primary" >View Agenda</Button></a></div>
                    </Col>
                <Col md={8} sm={6} xs={6}>
                <h5>Description</h5>
                <hr/>
                <p>Information Technology Development and Project Management is a CIS capstone course. It focuses on the design and management of systems.</p>
                </Col>

                </Row>
                </Table>
              </Tab.Pane>
            )})
          }
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
  </div>
    )
  }
}
export default Classtab;
