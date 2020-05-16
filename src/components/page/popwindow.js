import React from "react";
import {Button, ButtonToolbar} from 'react-bootstrap';
import MyVerticallyCenteredModal from './createassignmentform'


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
