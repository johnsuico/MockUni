const router = require('express').Router();
const Student = require('../models/student');
const Book = require('../models/book');
const Classes = require('../models/class');
const mongoose = require('mongoose');

// ROUTE:   /students/
// DESC :   Get all students
// REQ  :   GET
router.route('/').get((req, res) => {
    Student.find({})
        .then( student => res.json(student));
});

// ROUTE:   /students/
// DESC :   Delete all the students from the database
// REQ  :   DELETE
router.route('/').delete((req, res) => {
    Student.deleteMany({})
        .then(res.json({msg: 'All students deleted'}))
        .catch(err => res.send(err));
});

// ROUTE:   /students/
// DESC :   Add a new student to the database
// REQ  :   POST
router.route('/').post((req, res) => {
    const {firstName, lastName, SID} = req.body;

    Student.findOne({SID})
        .then( student => {

            // If the student is already in the database
            // 400 = Bad request
            if(student) return res.status(400).json({msg: 'Student is already in database'});

            // Create New Student
            const newStudent = new Student({firstName, lastName, SID})

            // Save newStudent into DB
            newStudent.save()
                .then(student => {
                    res.json({msg: 'Successfully added student'})
                })
                .catch(err => res.status(400).json('Error: ' + err));
        })
});

// ROUTE:   /students/:id
// DESC :   Get a single student
// REQ  :   GET
router.route('/:id').get((req, res) => {
  const id = req.params.id;

  Student.findById(id)
    .then(student => res.json(student))
    .catch(err => res.send(err));
})

// ROUTE:   /students/:id/class
// DESC :   Update student object to add class to array
// REQ  :   PUT
router.route('/:id/class').put((req, res) => {
  const id = req.params.id;

  const classID = req.body.classID;

  Student.findByIdAndUpdate(id)
    .then(student => {

      student.classes.map(classes => {
        if (classes == classID) {
          res.json('Class is already registered');
        } else {
          student.classes.push(classID);
          student.save();
          res.json(student)

          Classes.findByIdAndUpdate(classID, {$inc : {'numStudents': 1}})
            .then(classes => {
              // classes.numStudents = 0;
              classes.students.push(id);
              classes.save();
              console.log(classes);
            })
        }
      })

    });


});

// ROUTE:   /students/:id
// DESC :   Delete a student from the database
// REQ  :   DELETE
router.route('/:id').delete((req, res) => {
    const id = req.params.id;
    
    Student.findByIdAndDelete(id)
        .then(student => res.send(`Student: ${student.firstName} ${student.lastName} has been deleted`))
        .catch(err => res.send(err));
});

module.exports = router;