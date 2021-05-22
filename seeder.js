const mongoose = require('mongoose')
const dotenv = require('dotenv')
const colors = require('colors')
const employees = require('./data/employees')
const Employee = require('./models/Employee')
const connectDB = require('./config/db')

dotenv.config()

connectDB()

const importData = async () => {
    try {
    
        await Employee.deleteMany()

       const createdEmployees =  await Employee.insertMany(employees)
   
       console.log('Data Imported'.green.inverse)
       process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        
        await Employee.deleteMany()
        
       console.log('Data Destroyed'.red.inverse)
       process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
}
else{
    importData()
}