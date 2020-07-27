const mongoose = require('mongoose');
const db = require('./db_config');
const colors =require('colors')

const connectDB = async() => {
    const conn = await mongoose.connect(db.database,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;                     