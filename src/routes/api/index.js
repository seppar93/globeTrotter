const router = require("express").Router();
const usersRoutes = require("./users");

// Book routes
router.use("/books", usersRoutes);

module.exports = router;
