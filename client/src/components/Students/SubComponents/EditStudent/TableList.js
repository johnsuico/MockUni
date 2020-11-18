import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

function TableList(props) {

  const { id } = useParams();

  const [pressed, setPressed] = useState(false);
  const [student, setStudent] = useState([]);


  useEffect(() => {
    if (props.selected === "books") {
      Axios.get(`http://localhost:5000/students/${id}`)
        .then(res => setStudent(res.data.books));

      student.map(selected => {
        if (selected === props.objID) {
          setPressed(true);
        }
      })
    }

    if (props.selected === "classes") {
      Axios.get(`http://localhost:5000/students/${id}`)
        .then(res => setStudent(res.data.classes));

      student.map(selected => {
        if (selected === props.objID) {
          setPressed(true);
        }
      }) 
    }
  });

  function handleAdd() {

    const sendClass = {
      classID: props.objID
    };

    Axios.put(`http://localhost:5000/students/${id}/class`, sendClass)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    setPressed(true);
  }

  return(
    <tbody className="add-table-body">
      <tr className="add-table-row">
        <td className="add-table-data">{props.index}</td>
        <td className="add-table-data">{props.title}</td>
        <td className="add-table-data">{props.instructor}</td>
        <td className="add-table-data">{props.ID}</td>
        <td className="add-table-data">
          {!pressed ?
            <button className="add-table-btn add-btn-active" onClick={handleAdd}>Add</button>
            :
            <button className="add-table-btn add-btn-disable" onClick={handleAdd} disabled>Done</button>
          }
        </td>
      </tr>
    </tbody>
  )
}

export default TableList;