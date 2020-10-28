import React, { useState, useEffect, useStyles } from "react";
import { useParams } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { getTravelPackageByID } from "../../api";

const ItemIntroduction = () => {
  const [travelItem, setTravelItem] = useState({});
  const { urlId } = useParams();
  const classes = useStyles();

  useEffect(() => {
    const fetchTravelItem = async () => {
      const initialTravelItem = await getTravelPackageByID(urlId);
      console.log("initialTravelItem:", initialTravelItem);
      await setTravelItem(initialTravelItem);
    };

    fetchTravelItem();
  }, [urlId]);
  return <></>;
};

export default ItemIntroduction;
