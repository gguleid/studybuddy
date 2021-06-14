const express = require('express');
const router = express.Router();
const Card = require('../models/cards');
const User = require('../models/user');


// Index Route - Cards
router.get('/', (req, res) => {
	Card.find({}, (err, cards) => {
        res.render('cards/index', { cards });
    });
});

// New Route - New index cards
router.get('/new', (req, res) => {
    Card.find({}, (err, cards) => {
        res.render('cards/new', { cards });
    });
});

// Create route - Create Index Cards
router.post('/', (req, res) => {
	Card.create(req.body, (err, createdCard) => {
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