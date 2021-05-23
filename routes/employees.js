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

//@route   PUT api/employees/:id
//@desc    Schedule a meeting[Change isAvailable to false]
router.put('/:id', async (req, res) => {
    //const { isAvailable } = req.body;

    const isAvailable = false;

    //Build Employee Object
    const contactFields = {};
    
    if(isAvailable) contactFields.isAvailable = isAvailable;

    try{
        let employee = await Employee.findById(req.params.id);
       
        //Update the employee
        employee = await Employee.findByIdAndUpdate(req.params.id,
           { $set: contactFields },
           { new: true } 
            );
            res.json(employee);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})






module.exports = router;