/*
 * Controller: Blog
 * **************** */ 

const events = require('../../public/db.json').events

// Blog

exports.blogpage = (req, res) => {
    console.log("blog-page");
      res.render("blog");
  };
exports.createArticle = (req, res) => {
  console.log("create article", req.body);
res.render('admin')
}


// Blog ID 

exports.blogIDpage = (req, res) => {
  console.log("blogID-page");
  res.render("blogID");
};

exports.createMessage = (req, res) => {
  console.log("je suis le controller Create Message", req.body);
  res.render("blogID");
};