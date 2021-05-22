const express = require('express');
const connectDB = require('./config/db')
const morgan = require('morgan')
const path = require('path');

const app = express();

//Connect Database
connectDB();

//Middleware
if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');
}

//Define Routes
app.use('/api/employees', require('./routes/employees'));

 //Serve static assets in production
 if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client' , 'build' , 'index.html')));
 }



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))