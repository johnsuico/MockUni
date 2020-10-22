import React, {useState} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// Import CSS File
import './dashboard.css';

// Import Sidebar Component
import Sidebar from '../Sidebar/Sidebar';
import OverviewSelect from './SubComponents/OverviewSelect';

function Dashboard() {

  const [overview, setOverview] = useState('Students');
  const [singular, setSingular] = useState('Student');

  function clickStudent() {
    setOverview('Students');
    setSingular('Student');
  }
  function clickClasses() {
    setOverview('Classes');
    setSingular('Class');

  }
  function clickBooks() {
    setOverview('Books');
    setSingular('Book');
  }

  return (
    <div className="dashboard">
      <Sidebar active="dashboard"/>


      <div className="dashboard-container">

        {/* Dashboard Side One */}
        <div className="dashboard-sideOne">
          <div className="sideOne-header">
            <h2>Hello, Admin Name Here</h2>
          </div>
          <div className="sideOne-container">
            <div className="overview-container">
              <h2 className="overview-title">Overview</h2>
              <div className="overview-options">
                <button 
                  className={overview === 'Students' ? 'overview-item-active' : 'overview-item-inactive'} 
                  onClick={clickStudent}>
                    Students
                </button>
                <button 
                  className={overview === 'Classes' ? 'overview-item-active' : 'overview-item-inactive'}
                  onClick={clickClasses}>
                    Classes
                </button>
                <button 
                  className={overview === 'Books' ? 'overview-item-active' : 'overview-item-inactive'} 
                  onClick={clickBooks}>
                    Books
                </button>
              </div>
            </div>
            <OverviewSelect selected={overview} singular={singular}/>
          </div>
        </div>

        {/* Dashboard Side Two */}
        <div className="dashboard-sideTwo">
          <h1>Dashboard Side Two</h1>
        </div>
      </div>


    </div> 
  )
}

export default Dashboard;