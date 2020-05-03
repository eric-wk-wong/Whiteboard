import React from "react";
import firebase from "../firebase/base";
import { SpellInput_5800 } from "./cis5800_add_anno";
import {Button} from 'react-bootstrap';

function CisAnno_5800() {
  const [spells, setSpells] = React.useState([]);
  const [newSpellName, setNewSpellName] = React.useState();

  React.useEffect(() => {
      const db = firebase.firestore();
      const unsubscribe = db.collection("cis5800_announcements").onSnapshot(snapshot => {
        const spellsData = [];
        snapshot.forEach(doc => spellsData.push({ ...doc.data(), id: doc.id }));
        setSpells(spellsData);
      });
    return unsubscribe
  }, []);

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("cis5800_announcements").add({ name: newSpellName });
  };

  return (
    <div>

      {spells.map(spell => (
        <div key={spell.name}>
          <SpellInput_5800 spell={spell}/>
        </div>
      ))}

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

export default CisAnno_5800;