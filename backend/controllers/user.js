const { validateEmail, validateLength } = require("../helpers/validation.js");
const User = require("../models/User.js");
const bcrypt = require('bcrypt')

exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      username,
      password,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;

    // email validation
    if (!validateEmail(email)) {
      res.status(400).json({ message: "invalid Email Adress" });
    }
    // user validation if user exits or not
    const check = await User.findOne({ email });
    if (check) {
      return res
        .status(400)
        .json({ message: "Email Already Exits, Try Another" });
    }

    // text length(first_name,lastname,password)
    if (!validateLength(first_name, 3, 30)) {
      res
        .status(400)
        .json({ message: "first name minimum charecter 3 & maximum charecter 30" });
    }

    if (!validateLength(last_name, 3, 30)) {
      res
        .status(400)
        .json({ message: "last name minimum charecter 3 & maximum charecter 30" });
    }

    if (!validateLength(password, 6, 40)) {
      res.status(400).json({ message: "minimum charecter 6" });
    }

    // password incription
    const cyptedPassword = await bcrypt.hash(password,12)

    return;

    const user = await new User({
      first_name,
      last_name,
      email,
      username,
      password:cyptedPassword,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
