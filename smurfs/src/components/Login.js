import React, { useCallback, useContext, Component } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import baruch from './baruchlogo.png';
import {Button, Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import{Link} from 'react-router-dom';
import bearcats from './Bearcats.png';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/"/>;
  }
  return (
    <div className="textOverImage">
    <div className="start">
        <a><img src={baruch} width="200px" className="startpageicon"/></a>
        <Container>
            <Row>
                <Col md={6}>
                <div className="Login">
                    <strong><h2>Please Log in</h2></strong>
                    <hr/>
                    <form onSubmit={handleLogin}>
                        <label>
                        <strong>Email</strong><br/>
                        <input name="email" type="email" placeholder="Email" />
                        </label>
                        <label>
                        <strong>Password</strong> <br/>
                        <input name="password" type="password" placeholder="Password" />
                        </label>
                        <hr/>
                        <Button type="submit"><strong>Login</strong></Button>
                        <br/>
                        <Button componentClass={Link} href="/signup" to="/">Register</Button>
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

export default withRouter(Login);
