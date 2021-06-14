const express = require('express');
const router = express.Router();

// Index Route - Cards
router.get('/', (req, res) => {
	res.render('cards/index');
});
// New Route - New index cards
router.get('/new', (req, res) => {
	res.render('cards/new');
});
module.exports = router;