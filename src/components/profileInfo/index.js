import React, { useState, useEffect, useContext } from "react";
import { UserInfoContext } from "../form";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";

const ProfileInfo = ({ children }) => {
  //useContext
  const test = useContext(UserInfoContext);

  const classes = useStyles();

  const currentUser = localStorage.getItem("USER_INFO");
  const { customerId, custEmail, custFirstName, custLastName } = JSON.parse(
    currentUser
  );
  console.log("currentUser:", customerId, customerId);

  return (
    <>
      <Container fluid className={classes.root}>
        <Row>
          <Col className={classes.colBorder}>
            <Alert variant="primary" className={classes.userName}>
              {custFirstName + " " + custLastName}
            </Alert>
            <Row>
              <Col xs={5} md={4}>
                <Typography variant="body1" align="left">
                  Package Lists
                </Typography>
              </Col>
              <Col xs={13} md={8}>
                test
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfileInfo;
