import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import "./Login.css";
import baruch1 from './Carousels-images/baruch1.jpg';
import baruch2 from './Carousels-images/baruch2.jpg';
import baruch3 from './Carousels-images/baruch3.jpg';
import baruch4 from './Carousels-images/baruch4.gif';

export default function Carousels(props) {
  return (
<Carousel>
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
      src={baruch2}
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
      src={baruch2}
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