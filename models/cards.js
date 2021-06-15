const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
	title: String,
    body: String,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;