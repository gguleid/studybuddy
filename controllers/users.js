// Dependencies
const bcrypt = require('bcrypt');
const express = require('express');
const userRouter = express.Router();
const User = require('../models/user')


// Index
userRouter.get('/', (req, res) =>{
    res.render('dashboard')
})
// New (Sign up page)
userRouter.get('/new', (req, res) => {
	res.render('users/new.ejs', {
		currentUser: req.session.currentUser
	});
});

// Create (Sign up page)
userRouter.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(12));

    User.create(req.body, (error, createdUser)=> {
        currentUser: req.session.currentUser
        res.redirect('/');
    });
});

// Export User Router
module.exports = userRouter;