import React, { useEffect, useState } from 'react';
import Axios from 'axios';

// Import CSS File
import './books.css';
import './books-sideOne.css';
import './books-sideTwo.css';

// Import Sidebar Component
import Sidebar from '../Sidebar/Sidebar';
import SideOne from './SubComponents/BookSideOne';
import SideTwo from './SubComponents/BookSideTwo';

function Books() {

  const [selected, setSelected] = useState('');
  const [toggleBook, setToggleBook] = useState(false);

  useEffect(() => {
    Axios.get(`http://localhost:5000/books`)
      .then(res => setSelected(res.data[0]._id))
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
            {/* Books side one */}
            <div className="books-sideOne">
              <div className="sideOne-header">
                <h2>Book Management</h2>
              </div>
              <SideOne getSelected={getSelected} getToggle={getAddBook}/>
            </div>

            {/* Books side two */}
            <div className="books-sideTwo">
              <div className="sideTwo-header">
                <h2>Mock University Name</h2>
              </div>
              <SideTwo selected={selected} toggleAdd={toggleBook} />
            </div>
          </div>
        </div>
    )
}

export default Books;