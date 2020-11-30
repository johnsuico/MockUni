import React, { useState } from 'react';
import Axios from 'axios';

import './addBook.css'

function AddBook(props) {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [ISBN, setISBN] = useState('')

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleAuthor(e) {
    setAuthor(e.target.value);
  }

  function handleISBN(e) {
    setISBN(e.target.value);
  }

  function handleSubmit(e) {

    const newBook = {
      title,
      author,
      ISBN
    }

    Axios.post('http://localhost:5000/books', newBook)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log('Error: ' + err))


  }

  return(
    <div>
      <div className="add-header-container">
        <h2 className="add-header-title">Add Book</h2>
        <div className="header-caption-container">
          <h3 className="header-caption">Fill out the following fields</h3>
          <h3 className="header-caption">You can add students in edit Book</h3>
        </div>

        <form className="add-book-form">
          <div className="add-book-form-field">
            <label className="book-form-label">Book Title</label>
            <input type="text" className="book-form-input" onChange={handleTitle} value={title} required/>
          </div>

          <div className="add-book-form-field">
            <label className="book-form-label">Author</label>
            <input type="text" className="book-form-input" onChange={handleAuthor} value={author} required/>
          </div>

          <div className="add-book-form-field">
            <label className="book-form-label">ISBN</label>
            <input type="text" className="book-form-input" onChange={handleISBN} value={ISBN} required/>
          </div>

          <div className="add-book-form-btns">
            <input type="submit" className="book-form-submit" value="Add Book" onClick={handleSubmit}/>
            <button className="book-form-cancel">Cancel</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default AddBook;