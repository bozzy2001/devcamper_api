const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');


//load env var
dotenv.config({path : './config/config.env'});

// load models
const Bootcamp = require('./models/Bootcamp');

// Connect to DB
mongoose.connect(db.database,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

//Read JSON files
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'));

//import into DB
const importData = async () => {
    try {
        await Bootcamp.create(bootcamps);

        console.log('Data Imported...'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err)
    }
}

//Delete data
const deleteData = async () => {
    try {
        await Bootcamp.deleteMany();

        console.log('Data Destroyed...'.red.inverse);
        process.exit();
    } catch (err) {
        console.error(err)
    }
}