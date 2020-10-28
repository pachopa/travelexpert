import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { getAllTravelPackages } from "../../api";
import TripItem from "./../travelItem";
import useStyles from "./styles";

const TripItems = ({ children }) => {
  const [travelItems, setTravelItems] = useState({});
  const classes = useStyles();

  useEffect(() => {
    const fetchTravelItem = async () => {
      const initialTravelItem = await getAllTravelPackages();
      await setTravelItems(initialTravelItem);
    };

    fetchTravelItem();
  }, []);

  return (
    <>
      <Typography className={classes.title} variant="h2" align="center">
        Package Lists
      </Typography>
      <Grid
        container
        className={classes.cardContainer}
        alignItems="stretch"
        spacing={10}
      >
        {travelItems.data
          ? travelItems.data.map((item, i) => (
              <Grid item style={{ display: "flex" }}>
                <TripItem item={item} i={i} />
              </Grid>
            ))
          : null}
      </Grid>
    </>
  );
};

export default TripItems;
