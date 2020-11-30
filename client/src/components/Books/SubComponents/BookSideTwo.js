import React from 'react';

import AddBookPage1 from './AddBookPage1';
import BookInfo from "./BookInfo";

function BookSideTwo(props) {

  return (
    <div className="sideTwo-container">
      {!props.toggleAdd ?
        <BookInfo selected={props.selected}/>
        :
        <AddBookPage1 />
      }
    </div>
  )
}

export default BookSideTwo;