const router = require("express").Router();
const accountRoutes = require("./accounts");

// Register routes
router.use("/accounts", accountRoutes);

module.exports = router;
