import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

function TableList(props) {

  const { id } = useParams();

  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState(false);

  useEffect(() => {
    
    if (props.selected === 'classes') {
      Axios.get(`https://mockuni-api.herokuapp.com/students/${id}`)
        .then(res => {
          setStudent(res.data.classes);
          setLoading(false);
          
          res.data.classes.map(selected => {
            if (selected === props.objID) {
              setFound(true);
            }
          });

        });
      console.log('class');
    } 

    if (props.selected === 'books') {
      Axios.get(`https://mockuni-api.herokuapp.com/students/${id}`)
        .then(res => {
          setStudent(res.data.books);
          setLoading(false);

          res.data.books.map(selected => {
            if (selected === props.objID) {
              setFound(true);
            }
          });
        });
      console.log('book')
    }
  }, []);

  function handleAdd() {

    if (props.selected === 'classes') {
      const sendClass = {
        classID: props.objID
      };
  
      Axios.put(`http://ec2-18-144-75-188.us-west-1.compute.amazonaws.com:5000/students/${id}/class`, sendClass)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
  
      setFound(true);
    }

    if (props.selected === 'books') {
      const sendBook = {
        bookID: props.objID
      };

      Axios.put(`http://ec2-18-144-75-188.us-west-1.compute.amazonaws.com:5000/students/${id}/book`, sendBook)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));

      setFound(true);
    }
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
    return(
      <tbody className="add-table-body">
        <tr className="add-table-row">
          <td className="add-table-data">{props.index}</td>
          <td className="add-table-data">{props.title}</td>
          <td className="add-table-data">{props.instructor}</td>
          <td className="add-table-data">{props.ID}</td>
          <td className="add-table-data">
            {!found ?
              <button className="add-table-btn add-btn-active" onClick={handleAdd}>Add</button>
              :
              <button className="add-table-btn add-btn-disable" onClick={handleAdd} disabled>Done</button>
            }
          </td>
        </tr>
      </tbody>
    )
  }
}

export default TableList;