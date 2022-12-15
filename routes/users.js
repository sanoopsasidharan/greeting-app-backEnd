var express = require("express");
const { registerUser } = require("../controller/userController");
var router = express.Router();

// Registering the user
router.post("/register", registerUser);

module.exports = router;
