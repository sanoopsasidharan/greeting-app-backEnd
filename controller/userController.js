const User = require("../model/userModel");
// var objectId = require("mongoose").ObjectId;
var mongoose = require("mongoose");
// const query  = {"_id":ObjectId(req.params.productId)}

module.exports = {
  // creating the user
  registerUser: async (req, res, next) => {
    try {
      console.log("createing user");
      const { email, name, number, age, place } = req.body;
      const doesExist = await User.findOne({ email });
      if (doesExist)
        return res.json({ user: false, msg: `${email} is already registered` });

      const user = new User({ email, name, number, age, place });
      const saveUser = await user.save();
      res.json({ saveUser, user: true, msg: "" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  // lising all users
  usersList: async (req, res, next) => {
    try {
      const users = await User.find();
      console.log(users);
      if (users.length > 0) res.json({ users, meg: "user list" });
      else res.json({ msg: "no users" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  // deleting the user
  deleteTheUser: async (req, res, next) => {
    try {
      let id = req.params;
      id = mongoose.Types.ObjectId(id);
      console.log(id);
      const user = await User.deleteOne({ _id: id });
      if (user.deletedCount === 1) {
        res.json({ msg: "user deleted", status: true });
      }
      res.json({ msg: "user not deleted", status: false });
      console.log(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};
