import React from 'react';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import { Route, Link } from "react-router-dom";
import "./App.css";


function App() {
  return (
      <div className="login">
        <div className="container">
          <Route exact path="/" render={() => <Login />} />  
          <Route exact path="/Register" render={() => <Register />} />
          <nav>
        </nav>
        </div>
      </div>
  );
}

export default App;
