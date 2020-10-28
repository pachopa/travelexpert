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
          <p>Enjoy a relaxing cruise to a beautiful carribean island.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={classes.item}>
        <img className="d-block w-100" src={hawaiiImage} alt="Hawaiian resort" />
        <Carousel.Caption>
          <h3>Relax at a Hawaiian Resort</h3>
          <p>Lounge on the beach at an exclusive Hawaiian resort.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={classes.item}>
        <img className="d-block w-100" src={japanImage} alt="Eco-tour of Asia" />
        <Carousel.Caption>
          <h3>Experience the Natural Beauty of Asia</h3>
          <p>Explore the unique flora and fauna of China, Japan and Korea.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={classes.item}>
        <img className="d-block w-100" src={greeceImage} alt="Train tour of Europe" />
        <Carousel.Caption>
          <h3>Ride the Rails Through Europe</h3>
          <p>Traverse the vast and diverse continent of Europe on their first-class rail system.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
