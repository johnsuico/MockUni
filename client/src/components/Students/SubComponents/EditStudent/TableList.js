import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

function TableList(props) {
  const {id} = useParams();

  const [pressed, setPressed] = useState(false);

  function handleAdd() {
    console.log(`${props.title}`);
    setPressed(true);
  }

  return(
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
  )
}

export default TableList;