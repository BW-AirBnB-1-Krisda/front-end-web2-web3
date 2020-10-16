import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';

import UserLogin from "./components/UserLogin";
import Register from "./components/Register";
import Listings from "./components/Listings";
import PrivateRoute from "./components/PrivateRoute";

import { connect } from "react-redux";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/login" component={UserLogin} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/listings" component={Listings} />
      </Switch>
    </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings
  }
}

export default connect(mapStateToProps, {})(App)