import React, { useState, useEffect, useContext } from "react";
import { UserInfoContext } from "../form";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";
import '../../assets/fonts.css';

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
  console.log("currentUser:", customerId, customerId);

  return (
    <>
    <div className={classes.container}>
      <Container fluid className={classes.root}>
        <Row>
          <Col className={classes.colBorder}>
            <Alert variant="primary" className={classes.colHeader}>
              Your Account:
            </Alert>
            <hr style={{marginTop: 0, marginBottom: '1.5rem'}} />

            <Row style={{ padding: "0 20px" }}>
              <Col xs={5} md={3}>
                <Typography variant="body1" align="right" className={classes.label}>
                  Name:
                </Typography>
                <Typography variant="body1" align="right" className={classes.label}>
                  Email:
                </Typography>
                <Typography variant="body1" align="right" className={classes.label}>
                  Phone#:
                </Typography>
                <Typography variant="body1" align="right" className={classes.label}>
                  Address:
                </Typography>
              </Col>
              <Col xs={13} md={9}>
                <Typography variant="body1" align="left" className={classes.data}>
                  {custFirstName + " " + custLastName}
                </Typography>
                <Typography variant="body1" align="left" className={classes.data}>
                  {custEmail}
                </Typography>
                <Typography variant="body1" align="left" className={classes.data}>
                  {custBusPhone}
                </Typography>
                <Typography variant="body1" align="left" className={classes.data}>
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
            <hr style={{marginTop: '1rem', marginBottom: 0}} />

            <Alert variant="primary" className={classes.colHeader}>
              Your Reservations
            </Alert>

            <hr style={{marginTop: 0, marginBottom: '2rem'}} />
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default ProfileInfo;

/*


*/