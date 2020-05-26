const router = require("express").Router();
//const booksController = require("../../controllers/booksController");
const mainpageController = require("../../controllers/bookController");

// Matches with "/api/books"

// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// Matches with "/api/index"
router.route("/")
  .get(mainpageController.findAll)
  .post(mainpageController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

// Matches with "/api/index/:id"
router
  .route("/:id")
  .get(mainpageController.findById)
  .put(mainpageController.update)
  .delete(mainpageController.remove);

module.exports = router;
