import React from 'react';
import Header from './Header';
import './App.css';

function App() {
  return (
    <section>
      <div class="container">
        <Header />
        <div class="row index-body row-md-5">
          <div class="col-md-4"></div>
          <div class="index-body-center col-md-4">
            <input
              type="text"
              class="index-input"
              placeholder="Search for your favorite team.">  
            </input>
          </div>
          <div class="col-md-4"></div>
        </div>

      </div>
    </section>
  );
}

export default App;
