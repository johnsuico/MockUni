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
    const { classTitle, instructor, classID } = req.body;

    Classes.findOne({ classID })
        .then( classes => {

            // If the class is already in the database
            // 400 = Bad request
            if(classes) return res.status(400).json({msg: 'Class is already in database'});

            // Create New Class
            const newClass = new Classes({classTitle, instructor, classID})

            // Save newClass into DB
            newClass.save()
                .then(book => {
                    res.json({msg: 'Successfully added class'})
                })
                .catch(err => res.status(400).json('Error: ' + err));
        })
})

// ROUTE:   /classes/:id
// DESC :   Get a specific class
// REQ  :   GET
router.route('/:id').get((req, res) => {
  const { id } = req.params;

  Classes.findById(id)
    .then ( (err, foundClass) => {
      if (err) res.send(err);
      res.json(foundClass);
    })
});

// ROUTE:   /classes/:id
// DESC :   Delete a class from the database
// REQ  :   DELETE
router.route('/:id').delete((req, res) => {
    const id = req.params.id;
    
    Classes.findByIdAndDelete(id)
        .then( foundClass => res.send(`Class: ${foundClass.className} has been deleted`))
        .catch(err => res.send(err));
});

module.exports = router;