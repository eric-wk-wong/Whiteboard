import React from "react";
import firebase from "../firebase/base";
import { SpellInput4160_assignment } from "../page/cis4160_add_assignment";

function CIS4160_course() {
  const [spells, setSpells] = React.useState([]);
  const [newSpellName, setNewSpellName] = React.useState();

  React.useEffect(() => {
      const db = firebase.firestore();
      const unsubscribe = db.collection("cis4160_assignments").onSnapshot(snapshot => {
        const spellsData = [];
        snapshot.forEach(doc => spellsData.push({ ...doc.data(), id: doc.id }));
        setSpells(spellsData);
      });
    return unsubscribe
  }, []);

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("cis4160_assignments").add({ name: newSpellName });
  };

  return (
    <div>
      {spells.map(spell => (
        <div key={spell.name}>
          <SpellInput4160_assignment spell={spell}/>
        </div>
      ))}
    </div>
  );
}

export default CIS4160_course;