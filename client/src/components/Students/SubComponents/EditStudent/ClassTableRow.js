import React from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

function ClassTableRow(props) {

  let { id } = useParams();

  function handleAdd() {

    const addClass = {
      classID: props.id
    }

    Axios.put(`http://localhost:5000/students/${id}/class`, addClass)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  }

  return (
    <tr className="addClassRow">
      <td className="classDataRow">{props.classTitle}</td>
      <td className="classDataRow">{props.classInstructor}</td>
      <td className="classDataRow">{props.classID}</td>
      <td className="classDataRow" id="addClass-btn" onClick={handleAdd}>Add Class</td>
    </tr>
  )
}

export default ClassTableRow;