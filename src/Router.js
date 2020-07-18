import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages";
import About from "pages/About";
import Users from "pages/Users";
import Reps from "pages/Reps";
import Lawyers from "pages/Lawyers";
import Applicants from "pages/Applicants";
import Drafts from "pages/Drafts";
import Settings from "pages/Settings";
import Reports from "pages/reports";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/reps">
          <Reps />
        </Route>
        <Route path="/lawyers">
          <Lawyers />
        </Route>
        <Route path="/applicants">
          <Applicants />
        </Route>
        <Route path="/draft">
          <Drafts />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/reports">
          <Reports />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
