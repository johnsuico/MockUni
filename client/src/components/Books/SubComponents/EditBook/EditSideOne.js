import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function EditSideOne() {

  let { id } = useParams();
  const [book, setBook] = useState();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [ISBN, setISBN] = useState('');

  let history = useHistory();

  useEffect(() => {
    Axios.get(`http://ec2-18-144-75-188.us-west-1.compute.amazonaws.com:5000/books/${id}`)
      .then(res => {
        setBook(res.data);
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setISBN(res.data.ISBN);
        setLoading(false);
      })
  }, [id])

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleAuthor(e) {
    setAuthor(e.target.value);
  }
  
  function handleISBN(e){
    setISBN(e.target.value);
  }

  function onSubmitUpdate(e) {
    e.preventDefault();
    const update = {
      title,
      author,
      ISBN
    }
    Axios.put(`http://ec2-18-144-75-188.us-west-1.compute.amazonaws.com:5000/books/${id}`, update)
      .then(res => {
        console.log(res.data.status);
        history.go(0);
      })
      .catch(err => console.log(err));
  }

  if (loading) {
    return(
      <div className="sideOne-container">
        <div className="book-content-container">
          <div className="content-header-title-container">
            <h2>Loading...</h2>
          </div>
        </div>
      </div>
    )
  }

  else {
    return (
      <div className="sideOne-container">
        <div className="book-content-container">

          <div className="content-header-container">
            <div className="content-header-title-container">
              <h2>Update Book: <span className="class-title-container">{book.title} ISBN: {book.ISBN}</span></h2>
            </div>
            <div className="content-header-desc">
              <h3>Here you can change book information</h3>
              <h3>Save your changes by clicking on the button below</h3>
            </div>
          </div>

          <form className="edit-book-form">
            <div className="edit-book-form-field">
              <label className="edit-book-form-label">Title</label>
              <input type="text" className="edit-book-form-input" onChange={handleTitle} value={title}/>
            </div>
            <div className="edit-book-form-field">
              <label className="edit-book-form-label">Author</label>
              <input type="text" className="edit-book-form-input" onChange={handleAuthor} value={author}/>
            </div>
            <div className="edit-book-form-field">
              <label className="edit-book-form-label">ISBN</label>
              <input type="text" className="edit-book-form-input" onChange={handleISBN} value={ISBN}/>
            </div>
            <div className="edit-book-form-submit-container">
              <input type="submit" className="edit-book-form-submit-btn" value="Update Book" onClick={onSubmitUpdate}/>
            </div>
          </form>

        </div>
      </div>
    )
  }
}

export default EditSideOne;