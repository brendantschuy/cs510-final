import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import RankingsPage from './components/RankingsPage';
import TeamsPage from './components/TeamsPage';
import TeamDetails from './components/TeamDetails';
import SchedulePage from './components/SchedulePage';
import HistoricalPage from './components/HistoricalPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/rankings" component={RankingsPage} />
          <Route exact path="/teams" component={TeamsPage} />
          <Route path="/teams/:teamName" component={TeamDetails} />
          <Route path="/schedule" component={SchedulePage} />
          <Route path="/historical" component={HistoricalPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
