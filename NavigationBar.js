import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import baruch from './baruchlogo.png';
import Login from "./Login";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';


function NavigationBar() {
	return (
	<Navbar bg="light" expand="lg" sticky="top">
		<Navbar.Brand href="#home">
			<img
				src={baruch}  //Nav Bar icon
				width="180"
				className="d-inline-block align-top"
				alt="Baruch Logo"
			/>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<strong ><Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="https://drive.google.com/open?id=1L5wEed1K46xujnURX8a9v2kbRGhaxFRv" target="_blank">Team Site</Nav.Link>
				<Nav.Link href="https://github.com/ew0n/cis-5800" target="_blank">Github</Nav.Link>
				<Nav.Link href="https://www.baruch.cuny.edu"><strong>Baruch</strong></Nav.Link>
			</Nav></strong>
			<Accordion defaultActiveKey="0" className="loginicon">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <strong>Login</strong>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
				<Login/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
		</Navbar.Collapse>
		
	</Navbar>

	);
}
export default NavigationBar;