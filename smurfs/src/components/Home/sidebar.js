import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import baruch from './baruchlogo.png';
import baruch1 from './Carousels-images/baruch1.jpg';
import Login from "../Login";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Class1 from '../class1';
import{Link} from 'react-router-dom';

export default props => {
  return (
    <Menu>
      <a href="#home">
      <img
				src={baruch}  //Nav Bar icon
				width="180"
				className="d-inline-block align-top"
				alt="Baruch Logo"
			/>
      </a>
      <br/>
      <a>
        <Image
        src={baruch1}
        width="160"
        height="160"
        roundedCircle  //Nav Bar icon
        className="d-inline-block align-top"
        alt="Baruch Logo"
        
        />
      </a>
      <br/>
      <a className="menu-item" href="https://drive.google.com/open?id=1L5wEed1K46xujnURX8a9v2kbRGhaxFRv" target="_blank">
        Team
      </a>

      <a className="menu-item" href="https://github.com/ew0n/cis-5800">
        Github
      </a>

      <a className="menu-item" href="https://www.baruch.cuny.edu">
        Baruch
      </a>
      <a eventKey={1} componentClass={Link} href="/Start" to="/">Start</a>
      <a eventKey={2} componentClass={Link} href="/Cards" to="/">Cards</a>
      <br/>

      <Accordion defaultActiveKey="0" className="loginicon">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link"eventKey="1">
              <strong><h5>Login</h5></strong>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
				<Login/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Class1/>
    </Menu>
  );
};