import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/trip/:tripURL" component={() => <h1>hello</h1>} />
      </Switch>
    </Router>
  );
}
