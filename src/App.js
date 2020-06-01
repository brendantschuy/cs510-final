import React from 'react';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <section>
      <div className="container">
        <Navbar />
        <div className="row index-body row-md-5">
          <div className="col-md-4"></div>
          <div className="index-body-center col-md-4">
            <input
              type="text"
              className="index-input"
              placeholder="Search for your favorite team.">  
            </input>
          </div>
          <div className="col-md-4"></div>
        </div>

      </div>
    </section>
  );
}

export default App;
