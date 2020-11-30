import React from 'react';

import BookInfo from './BookInfo';
import AddBook from './AddBook';

function BookSideTwo(props) {

  return (
    <div className="sideTwo-container">
      {!props.toggleAdd ?
        <BookInfo selected={props.selected} />
        :
        <AddBook />
      }
    </div>
  )

}

export default BookSideTwo;