import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomepageLayout from "./home";
import Broadcast from "./Broadcast";


const AppRouter = () => (
  <Router>
    <div>
      <Route path="/home" exact component={HomepageLayout} />
      <Route path="/broadcast" exact component={Broadcast} />
    </div>
  </Router>
);

export default AppRouter;