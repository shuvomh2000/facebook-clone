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
