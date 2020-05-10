import React from "react";
import firebase from '../firebase/base'
import {Button,ButtonGroup} from 'react-bootstrap';


export const SpellInput = ({ spell,state }) => {
  const [name, setName] = React.useState(spell.name);

  const onUpdate = () => {
    const db = firebase.firestore()
    db.doc(state).collection('announcement').doc(spell.id).set({...spell, name})
    window.location.reload(false);
  }

  const onDelete = () => {
    const db = firebase.firestore()
    db.doc(state).collection('announcement').doc(spell.id).delete()
    window.location.reload(false);
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
