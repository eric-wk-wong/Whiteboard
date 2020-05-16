import React from 'react';
import NavBar from './NavBar';
import { Button,Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'
import{Link} from 'react-router-dom';
import firebase from '../firebase/base';



class AccInfo extends React.Component {
  state = {
    userName: null,
    userType: null,
    userEmail: null,
    userCourse: [],
    registeredCourse: []
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


  render() {

    //{console.log(this.state.registeredCourse)}
    {console.log(this.state.registeredCourse)}
    {console.log(this.state.userEmail)}
    {console.log(this.state.userCourse)}
    return(
        <div className="HomeBG">
          <NavBar/>
        <div>
        <Container>
          <Row className="rowcenter toprow">
            <Col xs={6} md={6} className="expand">
              <div className="blog">
            <strong><h3>Personal Infomation</h3></strong><hr/>
            <Button className="expand" variant="primary" componentClass={Link} href="/Edit_AccInfo" to="/">Edit</Button>
            </div>
            <hr/>
            <div className="courseinfo">
            <h5><strong>School: </strong> Baruch College</h5>
            <h5><strong>Name: </strong> { this.state.userName } </h5>
            <h5><strong>School Email: </strong> { this.state.userEmail } </h5>

            </div>
            </Col>

            <Col xs={1} md={1}>
            </Col>

            <Col xs={5} md={5} className="expand">
              <div className="blog">
            <strong><h3>Courses</h3></strong>
            <Button className="expand" variant="primary" componentClass={Link} href="/Add_Course" to="/">Edit</Button>
            </div>
            <hr/>
            {
              this.state.registeredCourse.map(course =>{return(
              <div className="courses">
                <Button variant="primary" className="icon expand" href="https://react-bootstrap.github.io/components/buttons/#toggle-button-props" target="_blank"><strong>{course}</strong></Button>
              </div>
              )})
            }

            </Col>
          </Row>
          <hr/>
          <br/>
          <h2>My Courses Overview</h2>
          <hr/>
          <Row>
          {
            this.state.registeredCourse.map(course =>{return(
            <Col xs md={4} className="expand">
            <div id="progress">
            <strong><h3>{course}</h3></strong>
            <hr/>
              <p>Homework:</p>
              <ProgressBar variant="success" className="expand" animated now={40}/>
              <p>Project#1</p>
              <ProgressBar variant="info" className="expand" animated now={100} />
              <p>Project#2</p>
              <ProgressBar variant="warning" className="expand" animated now={80} />
              <p>Project#3</p>
              <ProgressBar variant="danger" className="expand" animated now={30} />
            </div>
            </Col>)})
          }
          </Row>

        </Container>

        </div>
        </div>
      )}}

export default AccInfo;
