import React, {useState} from 'react';

// Import CSS File
import './dashboard.css';
import './dashboard-sideOne.css';
import './dashboard-sideTwo.css';

// Import Sidebar Component
import Sidebar from '../Sidebar/Sidebar';
import OverviewSelect from './SubComponents/OverviewSelect';
import Bargraph from './SubComponents/Bargraph';

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
          <div className="sideTwo-header">
            <h2>Mock University Name</h2>
          </div>
          <div className="sideTwo-container">
            <div className="quick-analytics-container">
              <h2 className="quick-analytics-title">Quick Analytics</h2>
              <h3 className="quick-analytics-description">A quick overview of class enrollment and book demand.</h3>

              <div className="barGraph">
                <Bargraph selected='Classes'/>
              </div>

              <div className="barGraph">
                <Bargraph selected='Books'/>
              </div>

            </div>
          </div>
        </div>
      </div>


    </div> 
  )
}

export default Dashboard;