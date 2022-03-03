const mongoose = require('mongoose');
const { stringifyQuery } = require('next/dist/server/server-route-utils');

const BookSchema = new mongoose.Schema({
    name: String,
    tel: String,
		email: String,
		people: Number,
		sending: { type: Date, default: Date.now }, 
		when: Date,
		note: String,
})

module.exports = mongoose.models.Book || mongoose.model('Book', BookSchema);