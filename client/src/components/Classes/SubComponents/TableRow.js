import React, { useState } from 'react';

function TableRow(props) {

  function onClick() {
    props.onClickParent(props.ID)
  }

  return (
    <tr className={props.selected === props.ID ? "tableRow-selected" : "tableRow"} onClick={onClick}>
      <td className="tableData">{props.index}</td>
      <td className="tableData">{props.classTitle}</td>
      <td className="tableData">{props.instructor}</td>
      <td className="tableData">{props.classID}</td>
    </tr>
  )
}

export default TableRow;