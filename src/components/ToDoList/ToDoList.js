import React from "react";
import firebase from "../firebase/base";
import { SpellInput } from "./SpellInput";
import {Button} from 'react-bootstrap';

function Blogger() {
  const [spells, setSpells] = React.useState([]);
  const [newSpellName, setNewSpellName] = React.useState();

  React.useEffect(() => {
      const db = firebase.firestore();
      const unsubscribe = db.collection("spells").onSnapshot(snapshot => {
        const spellsData = [];
        snapshot.forEach(doc => spellsData.push({ ...doc.data(), id: doc.id }));
        setSpells(spellsData);
      });
    return unsubscribe
  }, []);

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("spells").add({ name: newSpellName });
  };

  return (
    <div>
    <br/>
    <div>
    <h4>
    <strong>
    To Do List:
    </strong>

    </h4>
    </div>
    <hr/>

    <ol>
      {spells.map(spell => (
        <li key={spell.name}>
          <SpellInput spell={spell}/>
        </li>
      ))}
    </ol>
      <textarea
        value={newSpellName}
        onChange={e => setNewSpellName(e.target.value)}
        className="inputwidth expand"
        placeholder="Enter here..."
      />
      <Button variant="primary" className="addwidth expand" onClick={onCreate}><strong>+</strong></Button>
      <br/>
    </div>
  );
}

export default Blogger;