/*
 * Controller: Home
 * **************** */ 

exports.homepage = (req, res) => {
    console.log('home-page')
  res.render("home");
};

//Formulaire


// Nav Login
exports.logData = (req, res) => {
  console.log("je suis le controller Log Data", req.body);
  res.render("admin");
};

//Edition
exports.createMessage = (req, res) => {
  console.log("je suis le controller Create Message", req.body);
  res.render("admin");
};