import React, {Component} from 'react';
import {Row,Col,Button,Container,ListGroup,Tab,Tabs,ButtonGroup,Table} from 'react-bootstrap';
import NavBar from '../Professor/NavBar';
import '../Professor/professor.css';
import '../style_sheet/effect.css';
import Announcement from './Announcement';
import Cis4160_agenda from './cis4160_agenda';
import Assignment from './Assignment';
import{Link} from 'react-router-dom';
import CreateButton from './popwindow';
import firebase from '../firebase/base';

class GradingPage extends React.Component {
  state={
    allStudent: [],
    allAssignment: [],
    allProject: [],
    allExam: [],
    studentAssignment: [],
    studentProject:[],
    studentExam:[],
  }


  componentDidMount(){
      var course = false
      var db = firebase.firestore()
      db.doc(this.props.location.state.userCourse).collection('assignment').get().then( snapshot =>{
          snapshot.forEach(doc=>{
            if(doc.data().category == "Assignment"){
              this.setState({allAssignment: [...this.state.allAssignment, doc.data()]})
          }else if(doc.data().category == "Project"){
            this.setState({allProject: [...this.state.allProject, doc.data()]})
        }else if(doc.data().category == "Exam"){
          this.setState({allExam: [...this.state.allExam, doc.data()]})}
        })
      })
      db.collection('user').get().then(snapshot=>{
        snapshot.forEach( user => {
          user.data().course.map(sCourse=>{
           if(sCourse = this.props.location.state.userCourse){
             course = true
           }
          })
          if(course == true && user.data().type == 'student'){
            this.setState({allStudent:[...this.state.allStudent, {id: user.data().id, name: user.data().name}]})
          }
        });
        this.state.allStudent.map(student => {
          const arrA = []
          const arrP = []
          const arrE = []
          arrA.push(student.name)
          arrP.push(student.name)
          arrE.push(student.name)
          db.doc(this.props.location.state.userCourse).collection('assignment').get().then( snapshot =>{
              snapshot.forEach(doc=>{
                db.doc(this.props.location.state.userCourse).collection('assignment').doc(doc.id).collection('student').get().then(query=>{
                  query.forEach(querysnapshot=>{
                    if(querysnapshot.data().studentid == student.id && doc.data().category == 'Assignment'){
                      arrA.push(querysnapshot.data().grade)
                    }else if(querysnapshot.data().studentid == student.id && doc.data().category == 'Project'){
                      arrP.push(querysnapshot.data().grade)
                    }else if(querysnapshot.data().studentid == student.id && doc.data().category == 'Exam'){
                      arrE.push(querysnapshot.data().grade)
                    }
                  })
                })
              })
              this.setState({studentAssignment: [...this.state.studentAssignment, arrA]})
              this.setState({studentProject: [...this.state.studentProject, arrP]})
              this.setState({studentExam: [...this.state.studentExam, arrE]})
              this.state.studentAssignment.forEach(s=>{
                console.log(s);
                s.map(a=>{
                  console.log(a);
                })
              })
          })
          //this.setState({assvgrade: [...this.state.assvgrade,arr]})
        })
      })
  }
  render(){
    console.log(this.state.allAssignment)
    console.log(this.state.allProject)
    console.log(this.state.allExam)
    console.log(this.state.studentAssignment)
    console.log(this.state.studentProject)
    console.log(this.state.studentExam)
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
  <Row>
  <Tab.Container defaultActiveKey="#Assignments">
  <Row>
    <Col xs={3} md={2}>
      <ListGroup>
        <ListGroup.Item className="expand list layoutbg classmenu" action href="#Assignments">
          <p>Assignments</p>
        </ListGroup.Item>
        <ListGroup.Item className="expand list layoutbg classmenu" action href="#Projects">
          <p>Projects</p>
        </ListGroup.Item>
        <ListGroup.Item className="expand list layoutbg classmenu" action href="#Exams">
          <p>Exams</p>
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col xs={9} md={10}>
      <Tab.Content>
        <Tab.Pane eventKey="#Assignments">
          <Table striped bordered hover>
          <Row className='maxi'>
            <Col sm={2} md={2}>Name</Col>
            {
              this.state.allAssignment.map(assignment=>{
              if(assignment.category = 'Assignment'){
                return <Col sm={1} md={1}>{assignment.title}</Col>
              }
            })
            }
          </Row>
            {
              this.state.studentAssignment.map((student, index)=>{
                return(<Row className="maxi" key={index}>
                  {
                    student.map((s, i)=>{
                      return(
                        <Col sm={1} md={2} key={i}>{s}</Col>
                      )
                    })
                  }
                  </Row>
                )
              })
            }

            <Row>
              <Col sm={2} md={2}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
            </Row>
          </Table>
        </Tab.Pane>
        <Tab.Pane eventKey="#Projects">
        <Table striped bordered hover>
            <Row>
              <Col xs={2}sm={2} md={2}><p>Name</p></Col>

                <Col sm={1} md={1}>a</Col>

            </Row>
            <Row>
              <Col sm={2} md={2}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
            </Row>
          </Table>

        </Tab.Pane>
        <Tab.Pane eventKey="#Exams">
        <Table striped bordered hover>
            <Row>
              <Col sm={2} md={2}>Name</Col>

            </Row>
            <Row>
              <Col sm={2} md={2}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
              <Col sm={1} md={1}></Col>
            </Row>
          </Table>

        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
  </Row>
      </Container>



</div>
);
}
}

export default GradingPage;
