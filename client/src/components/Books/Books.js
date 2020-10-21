import React from 'react';
import Axios from 'axios';

// Import CSS File
import './books.css';

// Import Sidebar Component
import Sidebar from '../Sidebar/Sidebar';

function Books() {
    return (
        <div className="books">
            <Sidebar active="books" />
            <div className="books-container">
                <div className="books-sideOne">
                    <h1>Book Side One</h1>
                </div>
                <div className="books-sideTwo">
                    <h1>Book Side Two</h1>
                </div>
            </div>
        </div>
    )
}

export default Books;