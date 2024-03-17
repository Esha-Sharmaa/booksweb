const mongoose = require('mongoose');
const database = 'mongodb+srv://esha:esha22sharma@cluster0.qxyneya.mongodb.net/books';

function connectDB() {
    return mongoose.connect(database)
}
module.exports = connectDB;