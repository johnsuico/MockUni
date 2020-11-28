import React, { useState } from 'react';

function TableRow(props) {

  function onClick() {
    props.onClickParent(props.ID)
  }

  return (
    <tr className={props.selected === props.ID ? "tableRow-selected" : "tableRow"} onClick={onClick}>
      <td className="tableData">{props.title}</td>
        <td className="tableData">{props.author}</td>
        <td className="tableData">{props.ISBN}</td>

    </tr>  
  )
}

export default TableRow;