import React, {Component} from 'react';
import {Navbar,Button,ButtonGroup} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import baruch from '../images/baruchlogo.png';
import SideBar from '../Features/sidebar';

class NavBar extends Component {
  render(){
return (
    <div>
        <Navbar  id="navbg" bg="clear" fixed="top">
        <SideBar/>
        <a componentClass={Link} href="/" className="homepageicon expand"><img src={baruch} width="150px" alt="baruch logo"/></a>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <Spinner animation="grow" variant="primary" /> 
    <ButtonGroup>
    <Button id="accicon" className="expand" variant="primary" componentClass={Link} href="/AccInfo" to="/">My Account</Button>
    </ButtonGroup>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
</div>

);
}
}

export default NavBar;