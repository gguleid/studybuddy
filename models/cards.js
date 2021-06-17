const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
	title: String,
    body: String,
    video: String,
    source: String,
    nameOfSource: String,
}, { timestamps: true });

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;