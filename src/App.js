import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/rankings">

          </Route>
          <Route path="/teams">

          </Route>
          <Route path="/schedule">

          </Route>
          <Route path="/historical">

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
