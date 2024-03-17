const mongoose = require('mongoose');

const bookSchema = new  mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    author: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        require: true
    },
    price: {
        type: Number

    },
    publisher: {
        type: String
    },
    publishedDate: {
        type: String
    }

});
const Book = mongoose.model('book', bookSchema);

module.exports = Book;