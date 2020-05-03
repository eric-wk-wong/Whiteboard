import React from "react";
import firebase from '../firebase/base'
import {Button,ButtonGroup} from 'react-bootstrap';

export const SpellInput = ({ spell }) => {
  const [name, setName] = React.useState(spell.name);

  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('cis4160_announcements').doc(spell.id).set({...spell, name})
  }

  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('cis4160_announcements').doc(spell.id).delete()
  }

  return (
    <>
      <textarea className="expand todolist"
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
      
      <ButtonGroup vertical className="buttonheight">
      <Button size='sm' variant="primary" className="expand" onClick={onUpdate}><strong>Update</strong></Button>
      <Button size='sm' variant="primary" className="expand" onClick={onDelete}><strong>Delete</strong></Button>
      </ButtonGroup>
      <hr/>
    </>
  );
};