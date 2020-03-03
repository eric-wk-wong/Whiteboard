import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import baruch from './baruchlogo.png';
import baruch1 from './Carousels-images/baruch1.jpg';
import {Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import{Link} from 'react-router-dom';
import app from "./base";

export default props => {
  return (

    <Menu>
      <img
				src={baruch}  //Nav Bar icon
				width="150"
				className="d-inline-block align-top"
				alt="Baruch Logo"
			/>
      <hr/>
      <a componentClass={Link} href="/AccInfo" to="/">
        <Image
        src={baruch1}
        width="140"
        height="140"
        roundedCircle  //Nav Bar icon
        className="d-inline-block align-top"
        alt="Baruch Logo"/>
      </a>
      <br/>
      <a className="menu-item" href="https://drive.google.com/open?id=1L5wEed1K46xujnURX8a9v2kbRGhaxFRv" target="_blank">
        Team
      </a>
      <hr/>

      <a className="menu-item" href="https://github.com/ew0n/cis-5800" target="_blank">
        Github
      </a>
      <hr/>

      <a className="menu-item" href="https://www.baruch.cuny.edu" target="_blank">
        Baruch
      </a>
      <hr/>
      <a className="menu-item" href="https://library.baruch.cuny.edu/" target="_blank">
        Library
      </a>
      <hr/>
      <a className="menu-item" href="https://www.baruch.cuny.edu/bctc/helpdesk/" target="_blank">
        Help Desk
      </a>
      <hr/>
      <a eventKey={2} componentClass={Link} href="/Homepage" to="/">Homepage</a>
      <hr/>
      <a eventKey={3} componentClass={Link} href="/Schedule" to="/">Schedule</a>
      <hr/>   
      <br/>
      <Button componentClass={Link} href="/login" to="/" onClick={() => app.auth().signOut() }><strong>Logout</strong></Button>
      
    </Menu>

  );
};