import React, { useState } from 'react';

function ClassRow(props) {

  return (
    <tr className="classData-row">
      <td className="classData">Test Class</td>
      <td className="classData">Test Instructor</td>
      <td className="classData">Test ID</td>
    </tr>
  )
}

export default ClassRow;