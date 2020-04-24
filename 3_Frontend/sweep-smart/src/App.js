import React from 'react';
import './App.css';
import Sidebar from './Sidebar'
import Main from './Main'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Sidebar/>
      </div>
      <div className='main-content'>
        <div className='inner'>
          <Switch>
            <Route path="/operator">
              <Operator />
            </Route>
            <Route path="/vehicle">
              <Vehicle/>
            </Route>
            <Route path="/performance">
              <Performance/>
            </Route>
            <Route path="/">
              <Schedule />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}
export default App;


class Schedule extends React.Component {
  render() {
    let buttons = ["Day Shift", "Night Shift"];
    return <Main buttons={buttons} pageName="Schedule" viewType="week"/>;
  }
}

class Operator extends React.Component {
  render() {
    let buttons = ["Day Shift", "Night Shift"];
    return <Main buttons={buttons} pageName="Operators" viewType="day"/>;
  }
}

class Vehicle extends React.Component {
  render() {
    let buttons = ["Day Shift", "Night Shift"];
    return <Main buttons={buttons} pageName="Vehicles" viewType="week"/>;
  }
}

class Performance extends React.Component {
  render() {
    let buttons = ["Completion", "Vacation"];
    return <Main buttons={buttons} pageName="Performance" viewType="week"/>;
  }
}