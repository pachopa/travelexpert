import React, { useState, useEffect } from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { getTravelPackageByID } from "../../api";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import useStyles from "./styles";

//date-time pickers
import "date-fns";
import { Button } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const ItemIntroduction = () => {
  const [travelItem, setTravelItem] = useState({});
  const params = useParams();
  const classes = useStyles();

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
        <Row className={classes.bookingForm_header}>
          <Col style={{paddingTop: '1rem'}}>
            <h1>Book Your Getaway</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <form>
              <div className={classes.formControl} >
                <label for="firstName" style={{marginRight: '2.7rem'}}>First Name:</label>
                <input type="text" id="firstName" />
              </div>

              <div className={classes.formControl} >
                <label for="lastName" style={{marginRight: '2.8rem'}}>Last Name:</label>
                <input type="text" id="lastName" />
              </div>

              <div className={classes.formControl}>
                <label for="email" style={{marginRight: '5.6rem'}}>Email:</label>
                <input type="email" id="email" />
              </div>

              <div className={classes.formControl}>
                <label for="travelPackage" style={{marginRight: '4rem'}}>Package:</label>
                <input type="text" id="travelPackage" />

              </div>

              <div className={classes.formControl}>
                <label for="tripType" style={{marginRight: '4rem'}}>Trip Type</label>
                <select id="tripType">
                  <option value="B">Business</option>
                  <option value="G">Group</option>
                  <option value="L">Leisure</option>
                </select>
              </div>

              <div className={classes.formControl}>
                <label for="startDate" className={classes.departureLabel}>Departure</label>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="startDate"
                    className={classes.datePicker}
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>

              <div className={classes.formControl}>
                <label for="endDate" className={classes.returnLabel}>Return</label>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="startDate"
                    className={classes.datePicker}
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>

                <Button type="submit" variant="contained" className={classes.bookingButton}>Continue to Book</Button>{" "}
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemIntroduction;