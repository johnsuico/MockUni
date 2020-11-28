import React, { useEffect, useState } from 'react';

import Axios from 'axios';

// Import CSS File
import './books.css';

// Import Sidebar Component
import Sidebar from '../Sidebar/Sidebar';
import SideOne from './SubComponents/BookSideOne';
import SideTwo from './SubComponents/BookSideTwo';

function Books() {

    const [selected, setSelected] = useState('');
  const [toggleBook, setToggleBook] = useState(false);

  useEffect(() => {
    Axios.get('http://localhost:5000/books')
      .then(response => setSelected(response.data[0]._id))
  }, [])

  function getSelected(selected) {
    setSelected(selected);
  }

  function getAddBook(toggle) {
    setToggleBook(toggle);
  }

    return (

        <div className="books">
            <Sidebar active="books" />
            <div className="books-container">
                <div className="books-sideOne">
                    <div className="sideOne-header">
            <h2>Book Management</h2>
          </div>
          <SideOne getSelected={getSelected} getToggle={getAddBook}/>
                </div>
                <div className="books-sideTwo">
                <div className="sideTwo-header">
            <h2>Mock University Name</h2>
          </div>
          <SideTwo selected={selected} toggleAdd={toggleBook}/>
                </div>
            </div>
        </div>
    )
}

export default Books;