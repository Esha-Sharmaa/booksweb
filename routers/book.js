const express = require("express");
const router = express.Router();

const {
  handleGetBooks,
  handleGetBooksById,
  handleCreateBook,
  handleUpdateBook,
  handleDeleteBook,
} = require("../controllers/book");

router.route("/").get(handleGetBooks).post(handleCreateBook);
router
  .route("/:id")
  .get(handleGetBooksById)
  .patch(handleUpdateBook)
  .delete(handleDeleteBook);

module.exports = router;