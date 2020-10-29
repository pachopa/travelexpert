import React from "react";
import { Navbar, Carousel, Footer, TravelItems } from "../components/";
import ConfirmationPage from '../components/ConfirmationPage/ConfirmationPage';

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <TravelItems />
      <Footer />
    </>
  );
}
