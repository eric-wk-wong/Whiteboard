import React from "react";
import {Button, ButtonToolbar, Modal,Form,Col} from 'react-bootstrap';
import baruch from '../images/baruchlogo.png';
import firebase from '../firebase/base'
import MyVerticallyCenteredModal from './createAssignmentForm'


function PopWindow(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <ButtonToolbar>
        <Button size='sm' className="blogicon expand" variant="primary" onClick={() => setModalShow(true)}>
          <strong>Create</strong>
        </Button>

        <MyVerticallyCenteredModal
          state={props.state}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    );
  }
  export default PopWindow;
