var express = require("express");
const { sendingMail } = require("../controller/mailController");
const { registerUser, usersList } = require("../controller/userController");
var router = express.Router();

// Registering the user
router.post("/register", registerUser);

// listing all users
router.get("/usersList", usersList);

router.post("/sendEmail", sendingMail);

module.exports = router;
