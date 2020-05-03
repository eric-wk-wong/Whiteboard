import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import baruch from '../images/baruchlogo.png';
import baruch1 from '../Carousels-images/baruch1.jpg';
import {Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import{Link} from 'react-router-dom';
import firebase from "../firebase/base";


export default props => {
  return (

    <Menu>
  
      <img
				src={baruch}  //Nav Bar icon
				width="150"
				className="d-inline-block align-top"
        alt="Baruch Logo"
			/>
      <br/>
      <br/>
      <a rel="noopener noreferrer" componentClass={Link} href="/HelpDesk" to="/">
        <h6 className="menu-item" >HelpDesk</h6>
      </a>

      <a  rel="noopener noreferrer"href="https://www.baruch.cuny.edu" target="_blank">
      <h6 className="menu-item" >Baruch</h6>
      </a>

      <a  rel="noopener noreferrer" href="https://library.baruch.cuny.edu/" target="_blank">
      <h6 className="menu-item" >Library</h6>
      </a>
  
      <a  eventKey={3} componentClass={Link} href="/Schedule" to="/">
      <h6 className="menu-item" >Schedule</h6>
      </a>  
      <br/>
      <Button componentClass={Link} href="/login" to="/" onClick={() => firebase.auth().signOut() }><strong>Logout</strong></Button>
      
    </Menu>

  );
};