import React from "react";
import {Button, ButtonToolbar, Modal,Form,Col} from 'react-bootstrap';
import baruch from '../images/baruchlogo.png';
import firebase from '../firebase/base'

function MyVerticallyCenteredModal(props) {
  const [category,setCategory] = React.useState(null)
  const [title, setTitle] = React.useState(null)
  const [gradeWeight, setGradeWeight] = React.useState(null)
  const [description, setDescription] = React.useState(null)
  const [grade, setGrade] = React.useState(null)
  const [id, setId] = React.useState(null)
  const [assignmentId, setAssignmentId] = React.useState(null)
  const onCreate = () =>{
    const db = firebase.firestore()
    db.doc(props.state.userCourse).collection('assignment').add(    {
                                                                      category: category,
                                                                      title: title,
                                                                      gradeWeight: gradeWeight,
                                                                      description: description,
                                                                    }).then(docRef =>{
      db.doc(props.state.userCourse).collection('assignment').doc(docRef.id).set({id: docRef.id}, {merge: true})
      db.collection('user').where('type','==','student').get().then(snapshot =>{
        const students = []
          snapshot.forEach(doc =>{
            console.log('docID:'+doc.id)
            doc.data().course.map(course =>{
              console.log('course:'+course)
              if(course === props.state.userCourse){
                students.push(doc.id)
                console.log('student:'+ students)
              }
            })
          })
          students.map(student=>{
            console.log('student:'+student)
            console.log('docRef:'+docRef.id)
            db.doc(props.state.userCourse).collection('assignment').doc(docRef.id).collection('student').add({
              assignmentId: docRef.id,
              studentid: student,
              grade: 0
            }).then(ref=>{
              db.doc(props.state.userCourse).collection('assignment').doc(docRef.id).collection('student').doc(ref.id).set({
                  id:ref.id
                },{merge:true})
              })
            }
          )
        })
      })
  }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
          <center><img src={baruch} width="30%" align-item="right" alt="baruchlogo"/></center>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group>
            <Form.Label><b>Category</b></Form.Label>
            <Form.Control as="select" value="Choose..." onChange={e => {setCategory(e.target.value)}} >
                <option>Category...</option>
                <option>Assignment</option>
                <option>Project</option>
                <option>Exam</option>
            </Form.Control>
            </Form.Group>
        <Form.Row>
            <Form.Group as={Col} >
            <Form.Label><b>Title</b></Form.Label>
            <Form.Control type="text" placeholder="Enter Title" onChange={e => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col}>
            <Form.Label><b>Grade Weight</b></Form.Label>
            <Form.Control type="text" placeholder="Enter Grade Weight" onChange={e => setGradeWeight(e.target.value)}/>
            </Form.Group>
        </Form.Row>

        <Form.Group>
            <Form.Label><b>Description</b></Form.Label>
            <Form.Control as="textarea" rows="5" placeholder="Enter Description" onChange={e => setDescription(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" onClick={()=>{onCreate(); props.onHide()}}>
            <b>Post</b>
        </Button>
        </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal;
