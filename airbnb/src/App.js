import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';

import UserLogin from "./components/UserLogin";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/login" component={UserLogin} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
