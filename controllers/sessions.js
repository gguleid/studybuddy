// Dependencies
const express = require('express');
const bcrypt = require('bcrypt');
const sessionsRouter = express.Router();
const User = require('../models/user');


// New (Login Page)
sessionsRouter.get('/', (req, res) =>{
    res.send("Login page");
});
    
// Delete (Logout page)
sessionsRouter.delete('/', (req, res) => {
    req.session.destroy((error) => {
        res.redirect('/');
    });
})
// Create (login route)
sessionsRouter.post('/', (req, res) => {
    User.findOne({
        email: req.body.email
    }, (error, foundUser) => {
        if (!foundUser) {
            res.send(`Oops! No user with that email address has been registered.`);
        } else {
            const passwordMatches = bcrypt.compareSync(req.body.password, foundUser.password);
            if (passwordMatches) {
                req.session.currentUser = foundUser;
                res.redirect('/');
            } else {
                res.send('Oops! Invalid credentials.');
            }
        }
    });
});


// Express Sessions Router
module.exports = sessionsRouter;
