import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import TableRow from './TableRow'

function BookSideOne(props) {
  const [books, setBooks] = useState([]);
  const [selectBook, setSelectBook] = useState([]);
  const [addBook, setAddBook] = useState(true);

  useEffect(() => {
    Axios.get('http://localhost:5000/books')
      .then(response => {
          setBooks(response.data)
          setSelectBook(response.data[0]._id)
      });
  }, [])

  function onClick(selected) {
    setSelectBook(selected);
    props.getSelected(selected);
  }

  function toggleAdd() {
    setAddBook(!addBook);
    props.getToggle(addBook);
  }

  return(
    <div className="sideOne-container">
      <div className="book-content-container">
        <div className="content-header-container">
          <div className="content-header-title-container">
            <h2>List of Books</h2>
            <button onClick={toggleAdd}>Add Book</button>
          </div>
          <div className="content-header-desc">
            <h3>Click on a book for more information</h3>
          </div>
        </div>
      </div>

      <table className="book-list-table">
        <thead>
          <tr>
            <th className="tableHeader">#</th>
            <th className="tableHeader">Book Name</th>
            <th className="tableHeader">Author</th>
            <th className="tableHeader">Book ID</th>
          </tr>
        </thead>
        <tbody>


          {books.map((book, index) => (
            <TableRow 
              index={index+1} 
              title={book.title} 
              author={book.author} 
              ISBN={book.ISBN} 
              ID={book._id}
              key={book._id} 
              onClickParent={onClick} 
              selected={selectBook}/>
          ))}
        </tbody>
      </table>
    
    </div>
  )
}

export default BookSideOne;