const {validateEmail,validateLength,validateUsername} = require("../helpers/validation.js");
const jwt = require("jsonwebtoken")
const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/tokens.js");
const { sendVerificationMail } = require("../helpers/mailing.js");

exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
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
        .json({
          message: "first name minimum charecter 3 & maximum charecter 30",
        });
    }

    if (!validateLength(last_name, 3, 30)) {
      res
        .status(400)
        .json({
          message: "last name minimum charecter 3 & maximum charecter 30",
        });
    }

    if (!validateLength(password, 6, 40)) {
      res.status(400).json({ message: "minimum charecter 6" });
    }

    // password incription
    const cyptedPassword = await bcrypt.hash(password, 12);

    // username genarate
    const tempUsername = first_name + last_name;
    const newUsername = await validateUsername(tempUsername);

    const user = await new User({
      first_name,
      last_name,
      email,
      username: newUsername,
      password: cyptedPassword,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();

    const emailVerificationToken = generateToken({id:user._id},'30m')
    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`
    sendVerificationMail(user.email,user.first_name,url)
    const token = generateToken({id:user._id.toString()},'7d')
    res.send({
      id:user._id,
      username: user.username,
      first_name:user.first_name,
      last_name:user.last_name,
      token: token,
      varified:user.varified,
      message:"Register Success active your email"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.activeAccount = async (req,res) => {
  const {token} = req.body
  const user = jwt.verify(token, process.env.TOKEN_SECRET)
  const check = await User.findById(user.id)
  if(check.varified == true){
    return res.status(400).json({message:"this Account is already activated"})
  }else{
    await User.findByIdAndUpdate(user.id,{varified:true})
    return res.status(200).json({message:"Account has been activated"})
  }
}

exports.login =async (req,res) =>{
    try {
      const {email,password} = req.body
      const user = await User.findOne({email})
      if(!user){
        return res.status(400).json({message:"this email is connected to your account"})
      }
      const check = await bcrypt.compare(password,user.password)
      if(!check){
        return res.status(400).json({message:"invalid password, try again"})
      }

      const token = generateToken({id: user._id},'7d')
      res.send({
        id:user._id,
        username: user.username,
        first_name:user.first_name,
        last_name:user.last_name,
        token: token,
        varified:user.varified,
        message:"Login Succesfull"
        // Register Success active your email
      });

      

    } catch (error) {
      res.status(500).json({message:"error.message"})
    }
}