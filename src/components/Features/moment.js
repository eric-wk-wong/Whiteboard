import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import baruch4 from '../Carousels-images/baruch4.gif';

export default function Carousels(props) {
  return (
<Carousel className="Carousels">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={baruch4}
      alt="First slide"
    />
    <Carousel.Caption>
      <strong><h1>Welcome to Baruch</h1></strong>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={baruch4}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={baruch4}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}