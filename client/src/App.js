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
import EditStudent from './components/Students/SubComponents/EditStudent/EditStudent';
import EditClass from './components/Classes/SubComponents/EditClass/EditClass';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route exact path="/students">
            <Students />
          </Route>
          <Route path="/classes">
            <Classes />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/students/edit/:id">
            <EditStudent />
          </Route>
          <Route path="/classes/edit/:id">
            <EditClass />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
