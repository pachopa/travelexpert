import React, { useState } from "react";
import {} from "@material-ui/core";
import { Carousel } from "react-bootstrap";

// images
import carribeanImage from "../../images/carribean.jpg";
import hawaiiImage from "../../images/hawaii.jpg";
import japanImage from "../../images/japan.jpg";
import greeceImage from "../../images/greece.jpg";

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
        <img className="d-block w-100" src={carribeanImage} alt="Carribean cruise" />
        <Carousel.Caption>
          <h3>Cruise the Carribean</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={classes.item}>
        <img className="d-block w-100" src={hawaiiImage} alt="Hawaiian resort" />
        <Carousel.Caption>
          <h3>Relax at a Hawaiian Resort</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={classes.item}>
        <img className="d-block w-100" src={japanImage} alt="Eco-tour of Asia" />
        <Carousel.Caption>
          <h3>Experience the Natural Beauty of Asia</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={classes.item}>
        <img className="d-block w-100" src={greeceImage} alt="Train tour of Europe" />
        <Carousel.Caption>
          <h3>Ride the Rails in Through Europe</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
