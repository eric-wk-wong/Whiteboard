import React from 'react';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion';
import Calendar from './Calendar';
import CardDeck from 'react-bootstrap/CardDeck';

function Section() {

return (
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

);
}

export default Section;