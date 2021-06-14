// Dependencies
const bcrypt = require('bcrypt');
const express = require('express');
const userRouter = express.Router();
const User = require('../models/user')


// New (Sign up page)

// Create (Sign up page)
userRouter.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(12));

    User.create(req.body, (error, createdUser)=> {
        res.redirect('/');
    });
});

// Export User Router
module.exports = userRouter;