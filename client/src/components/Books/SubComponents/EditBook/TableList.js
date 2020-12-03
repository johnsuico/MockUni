import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

function TableList(props) {

  const { id } = useParams();

  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState(false);

  useEffect(() => {
    
    Axios.get(`http://ec2-18-144-75-188.us-west-1.compute.amazonaws.com:5000/books/${id}`)
      .then(res => {
        setBook(res.data.students);
        setLoading(false);
        
        res.data.students.map(selected => {
          if (selected === props.objID) {
            setFound(true);
          }
        });
      });

  }, []);


  function handleAdd() {
    const sendStudent = {
      studentID: props.objID
    };

    Axios.put(`http://ec2-18-144-75-188.us-west-1.compute.amazonaws.com:5000/books/${id}/student`, sendStudent)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    
    setFound(true);
  }

  if (loading) {
    return (
      <tbody className="add-table-body">
        <tr className="add-table-row">
          <td className="add-table-data">Loading</td>
        </tr>
      </tbody>
    )
  }

  if (!loading) {
    return (
      <tbody className="add-table-body">
        <tr className="add-table-row">
          <td className="add-table-data">{props.index}</td>
          <td className="add-table-data">{props.title}</td>
          <td className="add-table-data">{props.author}</td>
          <td className="add-table-data">{props.ISBN}</td>
          <td className="add-table-data">
            {!found ?
              <button className="add-table-btn add-btn-active" onClick={handleAdd}>Add</button>
              :
              <button className="add-table-btn add-btn-disable" onClick={handleAdd}>Done</button>
            }
          </td>
        </tr>
      </tbody>
    )
  }
  
}

export default TableList;