const router = require('express').Router();
const Classes = require('../models/class');

// ROUTE:   /classes/
// DESC :   Get all classes
// REQ  :   GET
router.route('/').get((req, res) => {
    Classes.find({})
        .then( classes => res.json(classes));
});

// ROUTE:   /classes/
// DESC :   Delete all books from the database
// REQ  :   DELETE
router.route('/').delete((req, res) => {
    Classes.deleteMany({})
        .then(res.json({msg: 'All classes deleted'}))
        .catch(err => res.send(err));
})

// ROUTE:   /classes/
// DESC :   Add a new book to database
// REQ  :   POST
router.route('/').post((req, res) => {
    const { className, instructor, classID } = req.body;

    Classes.findOne({ classID })
        .then( classes => {

            // If the class is already in the database
            // 400 = Bad request
            if(classes) return res.status(400).json({msg: 'Class is already in database'});

            // Create New Book
            const newClass = new Classes({className, instructor, classID})

            // Save newBook into DB
            newClass.save()
                .then(book => {
                    res.json({msg: 'Successfully added class'})
                })
                .catch(err => res.status(400).json('Error: ' + err));
        })
})

// ROUTE:   /books/:id
// DESC :   Delete a book from the database
// REQ  :   DELETE
router.route('/:id').delete((req, res) => {
    const id = req.params.id;
    
    Classes.findByIdAndDelete(id)
        .then( foundClass => res.send(`Class: ${foundClass.className} has been deleted`))
        .catch(err => res.send(err));
});

module.exports = router;