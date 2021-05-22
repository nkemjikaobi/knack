const mongoose = require('mongoose');
const EmployeeSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: false
    }
})

const Employee = mongoose.model('employee', EmployeeSchema);

module.exports = Employee;