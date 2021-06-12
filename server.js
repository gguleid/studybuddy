// Dependencies
const express = require('express');
const  mongoose  = require('mongoose');
const app = express();
require('dotenv').config();

// Database Configuration
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify: false,
    useCreateIndex: true,
});

// Database Connection Error / Success
const db = mongoose.connection;
db.on('connected', () => console.log('Mongo is connected'));
db.on('disconnected', () => console.log('Mongo is disconnected'));
db.on('error', (err) => console.log(err.message + 'is mongod is not running?'));


// Listener 
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));