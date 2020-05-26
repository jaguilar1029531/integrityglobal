const router = require("express").Router();
const indexroute = require("./index");

// Book routes
router.use("/index", indexroute);

module.exports = router;
