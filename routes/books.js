const router = require('express').Router();
const Book = require('../models/book');

// ROUTE:   /books/
// DESC :   Get all books
// REQ  :   GET
router.route('/').get((req, res) => {
    Book.find({})
        .then( book => res.json(book));
});

// ROUTE:   /books/
// DESC :   Delete all books from the database
// REQ  :   DELETE
router.route('/').delete((req, res) => {
    Book.deleteMany({})
        .then(res.json({msg: 'All books deleted'}))
        .catch(err => res.send(err));
})

// ROUTE:   /books/:id
// DESC :   Update a book
// REQ  :   PUT
router.route('/:id').put((req, res) => {
    const id = req.params.id;
    const { title, author, ISBN } = req.body;
    
    const update = {
        title, author, ISBN
    }
    
    console.log("Udpate submitted for book edit: ", update);

    Book.findByIdAndUpdate(id, update)
      .then(books => res.json({status: 'ok'}))
      .catch(err => res.json(err));
    
  });
  
// ROUTE:   /books/
// DESC :   Add a new book to database
// REQ  :   POST
router.route('/').post((req, res) => {
    const { title, author, ISBN } = req.body;

    Book.findOne({ ISBN })
        .then( book => {

            // If the book is already in the database
            // 400 = Bad request
            if(book) return res.status(400).json({msg: 'Book is already in database'});

            // Create New Book
            const newBook = new Book({title, author, ISBN})

            // Save newBook into DB
            newBook.save()
                .then(book => {
                    res.json({msg: 'Successfully added book'})
                })
                .catch(err => res.status(400).json('Error: ' + err));
        })
})

// ROUTE:   /books/:id
// DESC :   Get a book from the database
// REQ  :   GET
router.route('/:id').get((req, res) => {
  const id = req.params.id;
  
  Book.findById(id)
      .then(book => res.json(book));
});

// ROUTE:   /books/:id
// DESC :   Delete a book from the database
// REQ  :   DELETE
router.route('/:id').delete((req, res) => {
    const id = req.params.id;
    
    Book.findByIdAndDelete(id)
        .then(res.send(`Book: ${id} has been deleted`))
        .catch(err => res.send(err));
});


module.exports = router;