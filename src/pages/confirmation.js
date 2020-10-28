import React from "react";
import { Navbar, Footer } from "../components/";
import ConfirmationPage from '../components/ConfirmationPage/ConfirmationPage';

export default function Confirmation() {
  return (
    <>
      <Navbar />
      <ConfirmationPage />
      <Footer />
    </>
  );
}