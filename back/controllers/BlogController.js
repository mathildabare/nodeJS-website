/*
 * Controller: Blog
 * **************** */ 



// Blog

exports.blogpage = (req, res) => {
    console.log("blog-page");
  
    res.render("blog");
  };


// Blog ID 

exports.blogIDpage = (req, res) => {
  console.log("blogID-page");

  res.render("blogID");
};
