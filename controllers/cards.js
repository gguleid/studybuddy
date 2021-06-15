const express = require('express');
const router = express.Router();
const Card = require('../models/cards');
const User = require('../models/user');
const session = require('express-session');



// Index Route - Cards
router.get('/dashboard', (req, res) => {
	Card.find({}, (err, cards) => {
        res.render('cards/dashboard', { cards });
    });
});

// New Route - New index cards
router.get('/new', (req, res) => {
	User.find({}, (err, Users) => {
    Card.find({}, (err, users) => {
        res.render('cards/new', { users });
    });
});
});

// Create route - Create Index Cards
router.post('/', (req, res) => {
	Card.create(req.body, (err, createdCard) => {
		const createdBy = session.currentUser ;
		res.redirect('/cards');
	});
})

// Delete Route 
router.delete('/:id', (req, res) => {
	Card.findByIdAndDelete(req.params.id, (err, cards) => {
		res.redirect('/cards')
	})
});

// Update Route


// Show Route
router.get('/:id', (req, res) => {
	Card.findById(req.params.id, (err, foundCard) => {
		res.render('cards/show.ejs', {
			card: foundCard
		});
	});
});

module.exports = router;