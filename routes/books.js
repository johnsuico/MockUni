const router = require('express').Router();
const Book = require('../models/book');

// ROUTE:   /books/
// DESC :   Return all books
router.route('/').get((req, res) => {
    Book.find({})
        .then( book => res.json(book));
});

// ROUTE:   /books/deleteAll
// DESC :   Delete all books from the database
router.route('/deleteall').delete((req, res) => {
    Book.deleteMany({})
        .then(res.json({msg: 'All books deleted'}))
        .catch(err => res.send(err));
})

// ROUTE:   /books/addbook
// DESC :   Add a new book to database
router.route('/addbook').post((req, res) => {
    const { title, author, ISBN } = req.body;

    Book.findOne({ ISBN })
        .then( book => {

            // If book is already in the database
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

// ROUTE:   /books/delete/:id
// DESC :   Delete a book from the database
router.route('/delete/:id').delete((req, res) => {
    const id = req.params.id;
    
    Book.findByIdAndDelete(id)
        .then(res.send(`Book: ${id} has been deleted`))
        .catch(err => res.send(err));
});


module.exports = router;