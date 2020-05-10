import React, {Component} from 'react';
import {Navbar,Button,ButtonGroup} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import baruch from '../images/baruchlogo.png';
import SideBar from '../Features/sidebar';
import Spinner from 'react-bootstrap/Spinner';

class NavBar extends Component {
  render(){
return (
    <div>
        <Navbar  id="navbg" bg="clear" fixed="top">
        <SideBar/>
        <a componentClass={Link} href="/P_homepage" className="homepageicon expand"><img src={baruch} width="150px" alt="baruch logo"/></a>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
  <Spinner animation="grow" variant="primary" /> 
    <Navbar.Text>
    <Link id="accicon" className="expand" to="/ProfInfo"><Button variant="primary" >My Account</Button></Link>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
</div>

);
}
}

export default NavBar;