import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Bar } from 'react-chartjs-2';

function Bargraph(props) {

  const [data, setData] = useState([]);

  useEffect(() => {
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
  }, [])

  const classState = {
    labels: data.map(labels => labels.className),
    datasets: [
      {
        label: 'Class Student Enrollment',
        backgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 2,
        data: data.map(x => x.students.length)
      }
    ]
  }

  const bookState = {
    labels: data.map(labels => labels.title),
    datasets: [
      {
        label: 'Book Checked Out',
        backgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 2,
        data: data.map(x => x.students.length)
      }
    ]
  }

  return (
    <div>
      {props.selected === 'Classes' ? 
        <Bar 
          data = {classState}
          options = {{
            title: {
              display: true,
              text: 'Class Analytics',
              fontSize: 20
            },
            legend: {
              display: false,
              position: 'right'
            }
          }}
        />
      :
        <Bar 
          data = {bookState}
          options = {{
            title: {
              display: true,
              text: 'Book Analytics',
              fontSize: 20
            },
            legend: {
              display: false,
              position: 'right'
            }
          }}
        />
      }
    </div>
  )
}

export default Bargraph;