const mongoose = require('mongoose');
const studentSchema = require('./student').schema;

const classSchema = new mongoose.Schema({
    className: String,
    instructor: String,
    numStudents: Number,
    // Only store the object ID into the array
    students: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Student'
    }]
})

const Class = mongoose.model('Class', classSchema);

module.exports = Class;