module.exports = {
    hey: (req, res, next) => {
      console.log(" Hey ! Je suis le middleware !");
      next();
    }
  };