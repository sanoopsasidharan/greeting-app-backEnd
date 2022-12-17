var express = require("express");
const {
  registerUser,
  usersList,
  deleteTheUser,
} = require("../controller/userController");
var router = express.Router();

// Registering the user
router.post("/register", registerUser);

// listing all users
router.get("/usersList", usersList);

// deleting the user
router.delete("/:id", deleteTheUser);
// router.delete("/:id", (req, res) => {
//   console.log(req.params);
// });

module.exports = router;
