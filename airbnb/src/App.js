import React from 'react';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import { Route, Link } from "react-router-dom";
import logo from "../src/Mock-Logo.png"
import "./App.css";


function App() {
  return (
      <div className="login">
        <div className="container">
        <img src={logo}></img>
          <Route exact path="/" render={() => <Login />} />  
          <Route exact path="/Register" render={() => <Register />} />
          <nav>
        </nav>
        </div>
      </div>
  );
}

export default App;
