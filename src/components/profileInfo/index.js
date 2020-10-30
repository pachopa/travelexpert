import React, { useState, useEffect, useContext } from "react";
import { UserInfoContext } from "../form";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";
import { getAllBookings } from "../../api";

const ProfileInfo = ({ children }) => {
  //useContext
  const test = useContext(UserInfoContext);
  const classes = useStyles();

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

  //getbookings

  useEffect(() => {
    const fetchAllBookings = async () => {
      const allbookings = await getAllBookings();

      const bookingWithCustId = await allbookings.data.filter(
        (data) =>
          // data.custEmail.replace(/\s/g, "") ===
          //   emailAddress.replace(/\s/g, "") &&
          // data.custPassword.replace(/\s/g, "") === password.replace(/\s/g, "")
          // console.log(customerId, data.bookingId, "hel")
          customerId === data.customerId
      );

      console.log("bookingWithCustId:", bookingWithCustId);
    };

    fetchAllBookings();
  }, []);

  return (
    <>
      <Container fluid className={classes.root}>
        <Row>
          <Col className={classes.colBorder}>
            <Alert variant="primary" className={classes.colHeader}>
              General Information
            </Alert>
            <Row style={{ padding: "0 20px" }}>
              <Col xs={5} md={4}>
                <Typography variant="body1" align="left">
                  Name :
                </Typography>
                <Typography variant="body1" align="left">
                  Email :
                </Typography>
                <Typography variant="body1" align="left">
                  Phone Number :
                </Typography>
                <Typography variant="body1" align="left">
                  Addrss :
                </Typography>
              </Col>
              <Col xs={13} md={8}>
                <Typography variant="body1" align="left">
                  {custFirstName + " " + custLastName}
                </Typography>
                <Typography variant="body1" align="left">
                  {custEmail}
                </Typography>
                <Typography variant="body1" align="left">
                  {custBusPhone}
                </Typography>
                <Typography variant="body1" align="left">
                  {custAddress +
                    " " +
                    custCity +
                    " " +
                    custProv +
                    " " +
                    custPostal +
                    " " +
                    custCountry}
                </Typography>
              </Col>
            </Row>
            <Alert variant="primary" className={classes.colHeader}>
              Trip Reservation
            </Alert>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfileInfo;
