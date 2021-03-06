import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import RankingsPage from './components/RankingsPage';
import TeamsPage from './components/TeamsPage';
import TeamDetails from './components/TeamDetails';
import SchedulePage from './components/SchedulePage';
import ConferencesPage from './components/ConferencesPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './styles/App.css';

function App() {

  const [teamColors, setTeamColors] = useState([]);

  return (
    <div className="main" style={{backgroundColor: `${teamColors[1]}`}}>
      <Router>
        <Navbar teamColors={teamColors} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/rankings" component={RankingsPage} />
          <Route exact path="/teams" component={TeamsPage} />
          <Route 
            path="/teams/:teamName"
            render={props => <TeamDetails {...props} colorPalette={setTeamColors}/>} />
          <Route path="/schedule" component={SchedulePage} />
          <Route path="/conferences" component={ConferencesPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
