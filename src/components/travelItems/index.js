import React, { useState, useEffect } from "react";
import {} from "@material-ui/core";
import { getAllTravelPackages } from "../../api";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavigationBar = ({ children }) => {
  const [travelItem, setTravelItem] = useState({});

  useEffect(() => {
    const fetchTravelItem = async () => {
      const initialTravelItem = await getAllTravelPackages();
      console.log("initialTravelItem:", initialTravelItem);
      setTravelItem(initialTravelItem);
    };
  });

  return <></>;
};

export default NavigationBar;
