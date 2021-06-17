const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
	title: String,
    body: String,
    video: String,
    source: String,
    sourceName: String,
}, { timestamps: true });

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;