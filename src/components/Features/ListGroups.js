import React from 'react';
import {ListGroup,Tab,Col,Row} from 'react-bootstrap';
function ListGroups() {

return (
    <div >
        
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row>
    <Col xs={3} md={2}>
      <ListGroup>
        <ListGroup.Item className="expand list layoutbg" action href="#link1">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item className="expand list layoutbg" action href="#link2">
          Link 2
        </ListGroup.Item>
        <ListGroup.Item  className="expand list layoutbg"action href="#link3">
          Link 3
        </ListGroup.Item>
        <ListGroup.Item className="expand list layoutbg" action href="#link4">
          Link 4
        </ListGroup.Item>
        <ListGroup.Item className="expand list layoutbg" action href="#link5">
          Link 5
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col xs={9} md={10}>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">
        When most I wink, then do mine eyes best see, For all the day they view things unrespected; But when I sleep, in dreams they look on thee, And darkly bright, are bright in dark directed. Then thou, whose shadow shadows doth make bright, How would thy shadow's form form happy show To the clear day with thy much clearer light, When to unseeing eyes thy shade shines so! How would, I say, mine eyes be blessed made By looking on thee in the living day,
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
        When most I wink, then do mine eyes best see, For all the day they view things unrespected; But when I sleep, in dreams they look on thee, And darkly bright, are bright in dark directed. Then thou, whose shadow shadows doth make bright, How would thy shadow's form form happy show To the clear day with thy much clearer light, When to unseeing eyes thy shade shines so! How would, I say, mine eyes be blessed made By looking on thee in the living day,
        </Tab.Pane>
        <Tab.Pane eventKey="#link3">
        When most I wink, then do mine eyes best see, For all the day they view things unrespected; But when I sleep, in dreams they look on thee, And darkly bright, are bright in dark directed. Then thou, whose shadow shadows doth make bright, How would thy shadow's form form happy show To the clear day with thy much clearer light, When to unseeing eyes thy shade shines so! How would, I say, mine eyes be blessed made By looking on thee in the living day,
        </Tab.Pane>
        <Tab.Pane eventKey="#link4">
        When most I wink, then do mine eyes best see, For all the day they view things unrespected; But when I sleep, in dreams they look on thee, And darkly bright, are bright in dark directed. Then thou, whose shadow shadows doth make bright, How would thy shadow's form form happy show To the clear day with thy much clearer light, When to unseeing eyes thy shade shines so! How would, I say, mine eyes be blessed made By looking on thee in the living day,
        </Tab.Pane>
        <Tab.Pane eventKey="#link5">
        When most I wink, then do mine eyes best see, For all the day they view things unrespected; But when I sleep, in dreams they look on thee, And darkly bright, are bright in dark directed. Then thou, whose shadow shadows doth make bright, How would thy shadow's form form happy show To the clear day with thy much clearer light, When to unseeing eyes thy shade shines so! How would, I say, mine eyes be blessed made By looking on thee in the living day,
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</div>

);
}

export default ListGroups;