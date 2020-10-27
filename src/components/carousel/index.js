import React, { useState } from "react";
import {} from "@material-ui/core";
import { Carousel } from "react-bootstrap";
import vanImage from "../../images/van.jpg";

import useStyles from "./styles";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const classes = useStyles();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className={classes.item}>
        <img className="d-block w-100" src={vanImage} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={classes.item}>
        <img className="d-block w-100" src={vanImage} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={classes.item}>
        <img className="d-block w-100" src={vanImage} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
