import React from "react";
import firebase from '../firebase/base'
import {Button,ButtonGroup,Table, Row, Col} from 'react-bootstrap';

export const SpellInput_assignment = ({ spell,state }) => {
  const [name, setName] = React.useState(spell.description);

  const onUpdate = () => {
    const db = firebase.firestore()
    db.doc(state.userCourse).collection('assignment').doc(spell.id).set({...spell, name})
    window.location.reload(false);
  }
  const onDelete = () => {
    const db = firebase.firestore()
    db.doc(state.userCourse).collection('assignment').doc(spell.id).delete()
    window.location.reload(false);
  }

  return (
    <>
    {

    }
    <Table>
      <Row className="edge">
        <Col xs={2} md={2}>
        <b><p>Title: {spell.title}</p></b>
        </Col>
        <Col xs={4} md={4}>
        <b><p>Grade Weight: {spell.gradeWeight}</p></b>
        </Col>
        <Col  xs={6} md={6}>
          <b><p>Category:{spell.category}</p></b>
        </Col>
      </Row>
      

      <Row>
      <Col>
        <textarea className="expand todolist" value={name} onChange={e => {setName(e.target.value); }}/>
        <ButtonGroup vertical className="buttonheight">
      <Button size='sm' variant="primary" className="expand" onClick={onUpdate}><strong>Update</strong></Button>
      <Button size='sm' variant="primary" className="expand" onClick={onDelete}><strong>Delete</strong></Button>
      </ButtonGroup>
        </Col>

      </Row>
    </Table>



      <hr/>
    </>
  );
};
