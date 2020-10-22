import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// Icon Imports
import { FaUserGraduate } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

function OverviewStudent(props) {

  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.selected === 'Students') {
      Axios.get('http://localhost:5000/students')
        .then( response => {
          setData(response.data)
        })
    }
    if (props.selected === 'Classes') {
      Axios.get('http://localhost:5000/classes')
        .then( response => {
          setData(response.data)
        })
    }
    if (props.selected === 'Books') {
      Axios.get('http://localhost:5000/books')
        .then( response => {
          setData(response.data)
        })
    }
  }, [props.selected])

  return(
    <div>
      <div className="overview-container">
        <div className="overview-card-container">
          <div className="overview-card">
            {props.selected === 'Students' ? <FaUserGraduate className="overview-card-icon"/> : null}
            {props.selected === 'Classes' ? <FaPencilAlt className="overview-card-icon"/> : null}
            {props.selected === 'Books' ? <FaBook className="overview-card-icon"/> : null}
            <div className="overview-card-info">
              <h4 className="card-title">Total {props.selected}</h4>
              <h4 className="card-number">{data.length}</h4>
            </div>
          </div>
        </div>
        <Link to={'/' + props.selected} className="dashboard-link">
          <div className="dashboard-button">
            View {props.selected}
          </div>
        </Link>
      </div>

      <div className="quick-functions-container">
        <h2 className="quick-title">{props.singular} Quick Functions</h2>
        <Link to={'/' + props.selected} className="dashboard-link">
          <div className="dashboard-button">
            Add {props.selected}
          </div>
        </Link>
        <Link to={'/' + props.selected} className="dashboard-link">
          <div className="dashboard-button">
            {props.singular} Analytics
          </div>
        </Link>
      </div>

    </div>
  )
}

export default OverviewStudent;