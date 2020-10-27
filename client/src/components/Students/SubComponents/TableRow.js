import React, { useState } from 'react';

function TableRow(props) {

  const [SID, setSID] = useState(props.SID);
  const [ID, setID] = useState(props.ID);

  function onClick() {
    props.onClickParent(ID)
  }

  return (
    <tr className={props.selected === props.ID ? "tableRow-selected" : "tableRow"} onClick={onClick}>
      <td className="tableData">{props.index}</td>
      <td className="tableData">{props.firstName}</td>
      <td className="tableData">{props.lastName}</td>
      <td className="tableData">{props.SID}</td>
    </tr>
  )
}

export default TableRow;