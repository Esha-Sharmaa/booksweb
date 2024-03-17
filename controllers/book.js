const Book = require("../models/book.js");

async function handleGetBooks(req, res) {
    const DBbooks = await Book.find({});
    // res.send(DBbooks);
    res.render("home", {
        books:DBbooks
    });
}
async function handleGetBooksById (req, res) {
    const book = await Book.findById(req.params.id);
    console.log(book);
    res.send(book);
}
async function handleCreateBook (req, res)  {
    console.log(req.body);
    const result = await Book.create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        publisher: req.body.publisher,
        publishDate: req.body.publishDate,
    });
    console.log("result", result);
    res.status(201).json(result);
}
async function handleUpdateBook(req, res) {
    console.log(req.body);
    await Book.findByIdAndUpdate(req.params.id, { ...req.body });

    res.send("success");
}
async function handleDeleteBook (req, res)  {
    await Book.findByIdAndDelete(req.body.id);
}
module.exports = {
    handleGetBooks,
    handleGetBooksById,
    handleCreateBook,
    handleUpdateBook,
    handleDeleteBook
}