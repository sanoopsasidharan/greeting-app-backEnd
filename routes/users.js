var express = require("express");
const { registerUser, usersList } = require("../controller/userController");
var router = express.Router();

// Registering the user
router.post("/register", registerUser);

// listing all users
router.get("/usersList", usersList);

module.exports = router;
