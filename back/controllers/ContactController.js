/*
 * Controller: Contact
 * **************** */

// PAGES
exports.contactpage = (req, res) => {
  console.log("contact-page");

  res.render("contact");
};

exports.societypage = (req, res) => {
  console.log("society-page");

  res.render("society");
};



// Créer un message dans le Formulaire
exports.createMessage = (req, res) => {
  console.log("je suis le controller create Message", req.body);
  res.render("contact");
};