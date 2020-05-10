import React from "react";
import firebase from "../firebase/base";
import { SpellInput_assignment } from "./add_assignment";
import {Button} from 'react-bootstrap';

class Assignment extends React.Component {

  state = {
    spells: [],
    newSpellName: null
  }
  componentDidMount(){
      const db = firebase.firestore()
      db.doc(this.props.state.userCourse).collection('assignment').get().then(snapshot => {
        const spellsData = []
        snapshot.forEach(doc => spellsData.push({ ...doc.data(), id: doc.id }))
        this.setState({spells: spellsData})
      });
  }


  onCreate = () => {
    const db = firebase.firestore()
    db.doc(this.props.state.userCourse).collection('assignment').add({ name: this.state.newSpellName })
  }

render(){
  console.log(this.props)
  return (
    <div>
      {this.state.spells.map(spell => (
        <div key={spell.name}>
          <SpellInput_assignment spell={spell} state={{userCourse: this.props.state.userCourse}}/>
        </div>
      ))}
    </div>
    )
  }
}

export default Assignment;
