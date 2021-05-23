const express = require('express');
const router = express.Router();

const Employee = require('../models/Employee')

//@desc Get Employees
//@route GET api/employees
router.get('/', async (req, res) => {

    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;