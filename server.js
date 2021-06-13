// Dependencies
const express = require('express');
const  mongoose  = require('mongoose');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Set default view engine 
app.set('view engine', 'ejs');

// Database Configuration
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify: false,
    useCreateIndex: true,
});

// Middleware
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get('/', (req, res) => res.render('index.ejs'));

// Routes / Controllers
const userController = require('./controllers/users');
app.use('/users', userController);


// Database Connection Error / Success
const db = mongoose.connection;
db.on('connected', () => console.log('Mongo is connected'));
db.on('disconnected', () => console.log('Mongo is disconnected'));
db.on('error', (err) => console.log(err.message + 'is mongod is not running?'));


// Listener 
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));