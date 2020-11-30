import React, { useState } from 'react';

function StudentRow(props) {

  function onClick() {
    props.onClickParent(props.ID)
  }

  return (
    <tr className="studentRow" onClick={onClick}>

      <td className="tableData">{props.index}</td>
      <td className="tableData">{props.firstName}</td>
        <td className="tableData">{props.lastName}</td>
        <td className="tableData">{props.SID}</td>

    </tr>  
  )
}

export default StudentRow;