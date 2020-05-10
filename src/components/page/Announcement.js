import React from "react";
import firebase from "../firebase/base";
import { SpellInput } from "./Add_Anno";
import {Button} from 'react-bootstrap';

class Announcement extends React.Component {
  state = {
    spell:[],
    newSpellName: null
  }
  componentDidMount(){
      const db = firebase.firestore()
      db.doc(this.props.state.userCourse).collection('announcement').get().then(snapshot => {
        const spellsData = [];
        snapshot.forEach(doc =>
          spellsData.push({ ...doc.data(), id: doc.id })
        )
          this.setState({spell: spellsData})
      })
}
onCreate = () =>{
  const db = firebase.firestore();
  db.doc(this.props.state.userCourse).collection('announcement').add({ name: this.state.newSpellName});
  window.location.reload(false);
}
render(){
  return (
    <div>
      {this.state.spell.map(spell => (
        <div key={spell.name}>
          <SpellInput spell={spell} state={this.props.state.userCourse}/>
        </div>
      ))}

      <textarea
        value={this.state.newSpellName}
        onChange={e => this.setState({newSpellName: e.target.value})}
        className="inputwidth expand"
        placeholder="Enter here..."
      />

      <Button variant="primary" className="addwidth expand" onClick={this.onCreate}><strong>+</strong></Button>
      <br/>
    </div>

  );
}
}

export default Announcement;
