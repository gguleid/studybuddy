const express = require('express');
const router = express.Router();
const Card = require('../models/cards');

// Index Route - Cards
router.get('/', (req, res) => {
	res.render('cards/index');
});

// New Route - New index cards
router.get('/new', (req, res) => {
	res.render('cards/new');
});

// Create route - Create Index Cards
router.post('/', (req, res) => {
	Card.create(req.body, (err, createdCard) => {
		res.redirect('/cards');
	});
})


// Show Route
router.get('/', (req, res) => {
	Card.find({}, (err, foundCards) => {
		res.render('cards/index.ejs', {
			cards: foundCards
		});
	});
});

module.exports = router;