import React from "react";
import firebase from '../firebase/base'
import {Button,ButtonGroup,Table, Row, Col} from 'react-bootstrap';

export const SpellInput4160_assignment = ({ spell }) => {
  const [name, setName] = React.useState(spell.name);

  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('cis4160_assignments').doc(spell.id).set({...spell, name})
  }

  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('cis4160_assignments').doc(spell.id).delete()
  }

  return (
    <>
    <Table>
      <Row className="edge">
        <Col xs={2} md={2}>
        <b><p>Title:XXXXX</p></b>
        </Col>
        <Col xs={4} md={4}>
        <b><p>Grade Weight #%</p></b>
        </Col>
        <Col  xs={6} md={6}>
          <b><p>Category:XXXXX</p></b>
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