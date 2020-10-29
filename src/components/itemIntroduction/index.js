import React, { useState, useEffect } from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { getTravelPackageByID } from "../../api";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import useStyles from "./styles";

//date-time pickers
import "date-fns";
import { Grid, Button } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const ItemIntroduction = () => {
  const [travelItem, setTravelItem] = useState({});
  const params = useParams();
  const classes = useStyles();

  console.log("travelItem:", travelItem);
  //date-time picker code
  const [selectedDate, setSelectedDate] = useState(
    new Date("2017-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //get package data
  useEffect(() => {
    const fetchTravelItem = async () => {
      const initialTravelItem = await getTravelPackageByID(params.tripId);
      await setTravelItem(initialTravelItem);
    };

    fetchTravelItem();
  }, [params]);

  return (
    <>
      <Container className={classes.root}>
        <Row>
          <Col xs={12} md={8}>
            xs=12 md=8
          </Col>
          <Col xs={6} md={4}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <Button variant="outline-success">Continue to book</Button>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemIntroduction;
