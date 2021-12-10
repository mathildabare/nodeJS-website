/*
 * Controller: Authentication
 * **************** */


// Login
exports.loginpage = (req, res) => {
  console.log("login-page");

  res.render("login");
};


// Register
exports.registerpage = (req, res) => {
  console.log("register-page");

  res.render("register");
};


// New Password
exports.newpasswordpage = (req, res) => {
  console.log("newPW-page");

  res.render("newPW");
};


// Forgot Password
exports.forgotpasswordpage = (req, res) => {
  console.log("forgotPW-page");

  res.render("forgotPW");
};