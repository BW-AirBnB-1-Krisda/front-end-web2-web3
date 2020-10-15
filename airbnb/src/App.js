import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';

import UserLogin from "./components/UserLogin";
import Listings from "./components/Listings";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/login" component={UserLogin} />
      <PrivateRoute exact path="/listings" component={Listings} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
