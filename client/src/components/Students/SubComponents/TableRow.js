import React from 'react';

function TableRow(props) {
  return (
    <tr className="tableRow">
      <td className="tableData">{props.index}</td>
      <td className="tableData">{props.firstName}</td>
      <td className="tableData">{props.lastName}</td>
      <td className="tableData">{props.SID}</td>
    </tr>
  )
}

export default TableRow;