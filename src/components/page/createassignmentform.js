import React from 'react';
import {Button,Form,Col} from 'react-bootstrap';
import{Link} from 'react-router-dom';
function CreateAssignment() {

return (
    <Form>
    <Form.Group>
        <Form.Label><b>Category</b></Form.Label>
        <Form.Control as="select" value="Choose...">
            <option>Category...</option>
            <option>Assignment</option>
            <option>Project</option>
            <option>Exam</option>
        </Form.Control>
        </Form.Group>
    <Form.Row>
        <Form.Group as={Col} >
        <Form.Label><b>Title</b></Form.Label>
        <Form.Control type="text" placeholder="Enter Title" />
        </Form.Group>

        <Form.Group as={Col}>
        <Form.Label><b>Grade Weight</b></Form.Label>
        <Form.Control type="text" placeholder="Enter Grade Weight" />
        </Form.Group>
    </Form.Row>

    <Form.Group>
        <Form.Label><b>Description</b></Form.Label>
        <Form.Control as="textarea" rows="5" placeholder="Enter Description" />
    </Form.Group>
    <Button variant="primary" type="submit">
        <b>Post</b>
    </Button>
    </Form>
);
}

export default CreateAssignment;