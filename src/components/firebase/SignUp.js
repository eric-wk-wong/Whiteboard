import React, { useCallback } from "react";
import { withRouter } from "react-router";
import firebase from "./base";
import baruch from '../images/baruchlogo.png';
import {Button,Row,ButtonGroup,Col,Container} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import bearcats from '../images/Bearcats.png';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
    <div className="P_HomeBG">
        <center><img src={baruch} width="200px" alt="baruch logo" className="startpageicon"/></center>
        <Container>
            <Row>
                <Col md={6}>
                <div className="Login">
                <strong><h2>Please Sign Up</h2></strong>
                <hr/>
                <form onSubmit={handleSignUp}>
                  <label className="expand">
                    <strong>Email</strong><br/>
                    <input name="email" type="email" placeholder="Email" />
                  </label>
                  <label className="expand">
                    <strong>Password</strong><br/>
                    <input name="password" type="password" placeholder="Password" />
                  </label>
                  <hr/>
                  <ButtonGroup vertical>
                  <Button size='lg' type="submit"><strong>Sign Up</strong></Button>
                  <Button size='sm' variant="info" componentClass={Link} href="/login" to="/"><strong>Go Back</strong></Button>
                  </ButtonGroup>
                </form>
              </div>
                
                </Col>
                <Col md={6}>
                <img src={bearcats} width="100%" alt="bearcats" className="startpageicon"/>
                <h3><strong>Welcome To Baruch</strong></h3>
                </Col>
            </Row>

        </Container>
        </div>
        </div>
  );
};

export default withRouter(SignUp);
