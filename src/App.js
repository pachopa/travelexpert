import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, TripIntroduction, Confirmation, Signin, Profile } from "./pages";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/trip/:tripId" component={TripIntroduction} />
        <Route path="/confirmation" component={Confirmation} />
        <Route path="/signin" component={Signin} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}
