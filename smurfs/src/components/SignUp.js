import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";

import baruch from './baruchlogo.png';
import Container from 'react-bootstrap/Container';
import {Button,Row} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import{Link} from 'react-router-dom';
import bearcats from './Bearcats.png';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const {email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
    <div className="start">
        <a><img src={baruch} width="200px" className="startpageicon"/></a>
        <Container>
            <Row>
                <Col md={6}>
                <div className="Login">
                <strong><h2>Please Sign Up</h2></strong>
                <hr/>
                <form onSubmit={handleSignUp}>
                  <label>
                    <strong>Email</strong><br/>
                    <input name="email" type="email" placeholder="Email" />
                  </label>
                  <label>
                    <strong>Password</strong><br/>
                    <input name="password" type="password" placeholder="Password" />
                  </label>
                  <hr/>
                  <Button type="submit"><strong>Sign Up</strong></Button>
                  <br/>
                  <Button componentClass={Link} href="/login" to="/">Go Back to Login</Button>
                </form>
              </div>
              <hr/>
                
                </Col>
                <Col md={6}>
                <img src={bearcats} width="100%" className="startpageicon"/>
                <h3><strong>Welcome To Baruch</strong></h3>
                </Col>
            </Row>

        </Container>
        </div>
        </div>
  );
};

export default withRouter(SignUp);
