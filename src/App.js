import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, TripIntroduction } from "./pages";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/trip/:tripId" component={TripIntroduction} />
      </Switch>
    </Router>
  );
}
