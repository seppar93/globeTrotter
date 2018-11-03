const router = require("express").Router();
const accountsController = require("../../../src/controllers/accountsController");

// Matches with "/api/books"
router.route("/")
.post(accountsController.create);

module.exports = router;