import React, {Component} from 'react';
import {Navbar,Button} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import baruch from './baruchlogo.png';
import SideBar from './sidebar';

class Acc extends Component {
  render(){

return (
    <div>
        <Navbar id="navbg" bg="clear" fixed="top">
        <SideBar/>
        <a componentClass={Link} href="/Homepage" className="homepageicon"><img src={baruch} width="160px"/></a>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <Spinner animation="grow" variant="primary" /> <Button id="accicon" variant="primary" componentClass={Link} href="/AccInfo" to="/">Jay</Button>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
</div>

);
}
}

export default Acc;