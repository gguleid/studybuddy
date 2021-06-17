const express = require('express');
const router = express.Router();
const Card = require('../models/cards');
const session = require('express-session');



// Index Route - Cards
router.get('/', (req, res) => {
	Card.find({}, (err, cards) => {
        res.render('cards/cards', { cards });
    });
});

// New Route - New index cards
router.get('/new', (req, res) => {
    Card.find({}, (err, cards) => {
        res.render('cards/newcards', { cards });
    });
});


// Delete Route 
router.delete('/:id', (req, res) => {
	Card.findByIdAndDelete(req.params.id, (err, cards) => {
		res.redirect('/cards')
	})
});

// Update Route
router.put('/:id', (req, res) => {
    Card.findByIdAndUpdate(req.params.id, req.body, (err, card) => {
        res.redirect('/cards')
    })
})
// Create route - Create Index Cards
router.post('/', (req, res) => {
	Card.create(req.body, (err, createdCard) => {
		res.redirect('/cards');
	});
})

// Edit Route
router.get('/:id/edit', (req, res) => {
    Card.findById(req.params.id,(err, card) => {
        res.render('cards/editcards', {
            card
        })
    })
})

// Show Route
router.get('/:id', (req, res) => {
	Card.findById(req.params.id, (err, foundCard) => {
		res.render('cards/showcards', {
			card: foundCard
		});
	});
});

module.exports = router;