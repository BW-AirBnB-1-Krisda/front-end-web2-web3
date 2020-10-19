import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import './App.css';

import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import Listings from "./components/Listings";
import PrivateRoute from "./components/PrivateRoute";
import AddListing from './components/AddListing';
import Listing from "./components/Listing";

import logo from "../src/Mock-Logo.png"

import { connect } from "react-redux";


function App() {
  return (
    <Router>
     <div className="login">
        <div className="container">
        <img src={logo}></img>
      <Switch>
      <Route exact path="/login" component={UserLogin} />
      <Route exact path="/register" component={UserRegister} />
      <PrivateRoute exact path="/listings" component={Listings} />
      <PrivateRoute exact path="/add-listing" component={AddListing} />
      <PrivateRoute exact path="/listings/:id" component={Listing} />
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
