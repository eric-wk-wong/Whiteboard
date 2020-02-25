import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Calendar from './Calendar';
import Carousels from './moment';
import CardDeck from 'react-bootstrap/CardDeck';

function Cards() {

return (
<div>
  <Container>
  <Row>
  <Col md={6}>
      <Calendar/>
    </Col>
    <Col md={3}>
      <Button variant="outline-primary" className="icon" href="https://react-bootstrap.github.io/components/buttons/#toggle-button-props" target="_blank"><strong>CIS 5800</strong></Button>
      <Button variant="outline-primary" className="icon" href="https://react-bootstrap.github.io/components/buttons/#toggle-button-props" target="_blank"><strong>CIS 4800</strong></Button>
      <Button variant="outline-primary" className="icon" href="https://react-bootstrap.github.io/components/buttons/#toggle-button-props" target="_blank"><strong>CIS 4160</strong></Button>
      <Button variant="outline-primary" className="icon" href="https://react-bootstrap.github.io/components/buttons/#toggle-button-props" target="_blank"><strong>CIS 4100</strong></Button>
      <Button variant="outline-primary" className="icon" href="https://react-bootstrap.github.io/components/buttons/#toggle-button-props" target="_blank"><strong>CIS 3920</strong></Button>
      </Col>
      <Col md={3}>
        <Accordion >
<Card>
<Card.Header>
<Accordion.Toggle as={Button} variant="link" eventKey="0">
<strong>Homework List</strong>
</Accordion.Toggle>
</Card.Header>
<Accordion.Collapse eventKey="0">
<Card.Body>
<Button variant="outline-primary" className="icon" href="https://react-bootstrap.github.io/components/buttons/#toggle-button-props" target="_blank"><strong>CIS 5800</strong></Button>
<Button variant="outline-primary" className="icon" href="https://react-bootstrap.github.io/components/buttons/#toggle-button-props" target="_blank"><strong>CIS 4800</strong></Button>
<Button variant="outline-primary" className="icon" href="https://react-bootstrap.github.io/components/buttons/#toggle-button-props" target="_blank"><strong>CIS 4160</strong></Button>
<Button variant="outline-primary" className="icon" href="https://react-bootstrap.github.io/components/buttons/#toggle-button-props" target="_blank"><strong>CIS 4100</strong></Button>
<Button variant="outline-primary" className="icon" href="https://react-bootstrap.github.io/components/buttons/#toggle-button-props" target="_blank"><strong>CIS 3920</strong></Button>
</Card.Body>
</Accordion.Collapse>
</Card>
<Card>
<Card.Header>
<Accordion.Toggle as={Button} variant="link" eventKey="1">
<strong>Up-comings</strong>
</Accordion.Toggle>
</Card.Header>
<Accordion.Collapse eventKey="1">
<Card.Body><h6>Nothing is up so far.</h6></Card.Body>
</Accordion.Collapse>
</Card>
</Accordion>
    </Col>
    </Row>

    <Row>
    <Col md={6} className="shrink">
      <Carousels/>
      </Col>

    <Col md={6}>
      <Accordion defaultActiveKey="1">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <strong>Today's News</strong>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                <CardDeck className="card-body">
<Card>
<Card.Img variant="top" src="holder.js/100px160" />
<Card.Body className="card-body">
<Card.Title><h5>hi!</h5></Card.Title>
<Card.Text><h6>
This is a wider card with supporting text below as a natural lead-in to
additional content...</h6>
</Card.Text>
</Card.Body>
<Card.Footer>
<small className="text-muted"><h6>Last updated 3 mins ago</h6></small>
</Card.Footer>
</Card>

<Card>
<Card.Img variant="top" src="holder.js/100px160" />
<Card.Body>
<Card.Title><h5>Card title</h5></Card.Title>
<Card.Text><h6>
This is a wider card with supporting text below as a natural lead-in to
additional content...</h6>
</Card.Text>
</Card.Body>
<Card.Footer>
<small className="text-muted"><h6>Last updated 3 mins ago</h6></small>
</Card.Footer>
</Card>
</CardDeck>
                </Card.Body>
                </Accordion.Collapse>
                  </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="1">
                        <strong>Calendar</strong>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <Calendar/>
                          </Card.Body>
                          </Accordion.Collapse>
                          </Card>
                          </Accordion>
    
    </Col>
    </Row>


    <Row> 
      <Col>
      <Card bg="primary" text="white" style={{ width:"auto", marginTop:"10px"}}>
    <Card.Header><h5>Header</h5></Card.Header>
    <Card.Body>
      <Card.Title><h6>Primary Card Title</h6></Card.Title>
      <Card.Text><h6>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </h6>
        </Card.Text>
        </Card.Body>
        </Card>
      </Col>
      <Col>
      <Card bg="info" text="white" style={{ width:"auto", marginTop:"10px"}}>
    <Card.Header><h5>Header</h5></Card.Header>
    <Card.Body>
      <Card.Title><h6>Primary Card Title</h6></Card.Title>
      <Card.Text><h6>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </h6>
        </Card.Text>
        </Card.Body>
        </Card>
      </Col>
      <Col>
      <Card bg="secondary" text="white" style={{ width:"auto", marginTop:"10px"}}>
    <Card.Header><h5>Header</h5></Card.Header>
    <Card.Body>
      <Card.Title><h6>Primary Card Title</h6></Card.Title>
      <Card.Text><h6>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </h6>
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>
      </Row>
      </Container>
</div>

);
}

export default Cards;