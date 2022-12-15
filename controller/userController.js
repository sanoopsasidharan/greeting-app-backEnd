const User = require("../model/user_model");

module.exports = {
  // creating user
  userRegister: async (req, res, next) => {
    try {
      console.log("createing user");
      const { email, name, number, RegisterType } = req.body;
      const doesExist = await User.findOne({ email });
      if (doesExist)
        return res.json({ user: false, msg: `${email} is already registered` });

      const user = new User({ email, name, number, RegisterType });
      const saveUser = await user.save();
      res.json({ saveUser, user: true, msg: "" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};
