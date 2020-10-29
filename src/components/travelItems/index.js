import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { getAllTravelPackages } from "../../api";
import TripItem from "./../travelItem";
import useStyles from "./styles";
import '../../assets/fonts.css';

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
        Travel Packages
      </Typography>
      <Grid
        container
        className={classes.cardContainer}
        alignItems="center"
        justify="center"
        spacing={8}
        xs={12}
      >
        {travelItems.data
          ? travelItems.data.map((item, i) => (
              <Grid item className={classes.cardGrid}>
                <TripItem item={item} i={i} />
              </Grid>
            ))
          : null}
      </Grid>
      <div style={{marginBottom: '5rem'}}></div>
    </>
  );
};

export default TripItems;
