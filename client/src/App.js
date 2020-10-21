import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

// Components
import Dashboard from './components/Dashboard/Dashboard';
import Students from './components/Students/Students';
import Classes from './components/Classes/Classes';
import Books from './components/Books/Books';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path="/students">
            <Students />
          </Route>
          <Route path="/classes">
            <Classes />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
