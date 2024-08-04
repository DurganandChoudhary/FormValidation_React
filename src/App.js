import React from "react";
import RegistrationForm from "./RegistrationForm";
import Success from "./Success";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={RegistrationForm} />
        <Route path="/success" component={Success} />
      </Switch>
    </Router>
  );
};

export default App;
