const jwt = require("jsonwebtoken");

exports.generateToken = (payload, experied) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: experied,
  });
};
