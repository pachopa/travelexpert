import React, { useState, useEffect, useRef } from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { getTravelPackageByID, postTravelPackage } from "../../api";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import useStyles from "./styles";
import axios from "axios";

//date-time pickers
import "date-fns";
import { Button } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export const generateID = () => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const length = characters.length;
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * length));
  }
  return result;
};

const ItemIntroduction = () => {
  const [travelItem, setTravelItem] = useState({});
  const params = useParams();
  const classes = useStyles();
  const [travelerCount, setTravelerCount] = useState("");
  const [tripType, setTripType] = useState("B");

  // const  = useRef(initialValue)

  const currentUser = localStorage.getItem("USER_INFO");
  const {
    customerId,
    custEmail,
    custFirstName,
    custLastName,
    custAddress,
    custBusPhone,
    custCity,
    custCountry,
    custPostal,
    custProv,
  } = JSON.parse(currentUser);

  //get package data
  useEffect(() => {
    const fetchTravelItem = async () => {
      const initialTravelItem = await getTravelPackageByID(params.tripId);
      await setTravelItem(initialTravelItem);
    };

    fetchTravelItem();

    return () => {};
  }, [params]);

  const handleBooking = (event) => {
    event.preventDefault();

    const currentTime = new Date();
    const bookingNumber = generateID();

    const booking = {
      bookingDate: new Date(),
      bookingNo: bookingNumber,
      customerId: customerId,
      packageId: travelItem.data.packageId,
      travelerCount: parseInt(travelerCount),
      tripTypeId: tripType,
    };

    const postBookingResult = postTravelPackage(booking);
    console.log("postBookingResult:", postBookingResult);
  };

  console.log("travelItem:", travelItem.data);

  return (
    <>
      <Container className={classes.root}>
        <Row className={classes.bookingForm_header}>
          <Col style={{ paddingTop: "1rem" }}>
            <h1>Book Your Getaway</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <form onSubmit={handleBooking}>
              <div className={classes.formControl}>
                <label for="firstName" style={{ marginRight: "2.7rem" }}>
                  First Name:
                </label>
                <label for="firstName" style={{ marginRight: "2.7rem" }}>
                  {custFirstName}
                </label>
              </div>

              <div className={classes.formControl}>
                <label for="lastName" style={{ marginRight: "2.8rem" }}>
                  Last Name:
                </label>
                <label for="lastName" style={{ marginRight: "2.8rem" }}>
                  {custLastName}
                </label>
              </div>

              <div className={classes.formControl}>
                <label for="email" style={{ marginRight: "5.6rem" }}>
                  Email:
                </label>
                <label for="lastName" style={{ marginRight: "2.8rem" }}>
                  {custEmail.replace(/\s/g, "")}
                </label>
              </div>

              {/* <div className={classes.formControl}>
                <label for="travelPackage" style={{ marginRight: "4rem" }}>
                  Booking Number:
                </label>
                <label for="travelPackage" style={{ marginRight: "4rem" }}>
                  {generateID()}
                </label>
              </div> */}

              <div className={classes.formControl}>
                <label for="lastName" style={{ marginRight: "2.8rem" }}>
                  Traveler Number:
                </label>
                <input
                  type="text"
                  name="travelCount"
                  id="travelerCount"
                  value={travelerCount}
                  onChange={({ target }) => setTravelerCount(target.value)}
                />
              </div>

              <div className={classes.formControl}>
                <label for="tripType" style={{ marginRight: "4rem" }}>
                  Trip Type
                </label>
                <select
                  id="tripType"
                  onChange={({ target }) => setTripType(target.value)}
                >
                  <option value="B">Business</option>
                  <option value="G">Group</option>
                  <option value="L">Leisure</option>
                </select>
              </div>

              <div className={classes.formControl}>
                <label for="startDate" className={classes.departureLabel}>
                  Departure
                </label>
                <label for="travelPackage" style={{ marginRight: "4rem" }}>
                  {travelItem.data ? travelItem.data.pkgStartDate : null}
                </label>
              </div>

              <div className={classes.formControl}>
                <label for="endDate" className={classes.returnLabel}>
                  Return
                </label>
                <label for="travelPackage" style={{ marginRight: "4rem" }}>
                  {travelItem.data ? travelItem.data.pkgEndDate : null}
                </label>
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.bookingButton}
                >
                  Continue to Book
                </Button>{" "}
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemIntroduction;
