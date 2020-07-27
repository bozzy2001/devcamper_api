const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db')

// load env var

dotenv.config({path : './config/config.env'});

//connect to database
connectDB();

//Route files
const bootcamps = require('./routes/bootcamps');
   
const app = express();

//Body parser
app.use(express.json());

//Dev login middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
};


//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT= process.env.PORT || 5000;

const server = app.listen
(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow));


// Handle Unhandled Promise Rejections
process.on('unhandledRejection', (err,Promise) => {
    console.log(`Error: ${err.message}`.red)
    //close server and exit process
    server.close(() => process.exit(1));
});