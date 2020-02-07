import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar() {

	return (
	<Navbar bg="light" expand="lg" sticky="top">
		<Navbar.Brand href="#home">
			{/*will need to change to local link*/}
			<img
				src="https://seeklogo.com/images/S/Smurf-logo-06F3C56266-seeklogo.com.png"
				width="60"
				className="d-inline-block align-top"
				alt="Smurf Logo"
			/>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="https://drive.google.com/open?id=1L5wEed1K46xujnURX8a9v2kbRGhaxFRv" target="_blank">Team Site</Nav.Link>
				<Nav.Link href="https://github.com/ew0n/cis-5800" target="_blank">Github</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>

	);
}

export default NavigationBar;