const mongoose = require('mongoose');
const classSchema = require('./class').schema;

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    SID: Number,
    // Only store the object ID into the array
    classes: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Class'
    }]
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;