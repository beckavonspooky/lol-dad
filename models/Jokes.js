const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jokeSchema = new Schema ({
    saveJokes: [],
    userId: []
});

const Joke = mongoose.model('User', jokeSchema);

module.exports = Joke;