import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';

import UserLogin from "./components/UserLogin";
import Register from "./components/Register";
import Listings from "./components/Listings";
import PrivateRoute from "./components/PrivateRoute";
import EditListing from "./components/EditListing";

import logo from "../src/Mock-Logo.png"

import { connect } from "react-redux";

function App() {
  return (
    <Router>
     <div className="App">
        <div className="container">
        <img src={logo} alt="logo"></img>
      <Switch>
      <Route exact path="/login" component={UserLogin} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/editlisting" component={EditListing} />
      <PrivateRoute exact path="/listings" component={Listings} />
      </Switch>
      <nav>
        </nav>
        </div>
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
