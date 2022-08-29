const User = require("../models/User.js");

// Email validtion
exports.validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};

// Name validtion
exports.validateLength = (text, min, max) => {
  if (text.length < min || text.length > max) {
    return false;
  }
  return true;
};

// validation username
exports.validateUsername = async (username) => {
    let a = false
    do{
        let check = await User.findOne({username})
        if(check){
            username += (new Date()*Math.random().toString().substring(0,2))
            a = true
        }else{
            a = false
        }
    }while (a)
    return username
}