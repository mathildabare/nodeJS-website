/*
 * Router.js
 * ********* */

/** MODULES **/
const express = require('express')
const router = express.Router()

/** CONTROLLERS **/
const HomeController = require('./controllers/HomeController');
const ContactController = require('./controllers/ContactController');
const BlogController = require('./controllers/BlogController');
const LogController = require('./controllers/LogController')
const AdminController = require('./controllers/AdminController')

/** MIDDLEWARES **/

/** ROUTES **/
// HOME
router.route('/')
    .get(HomeController.homepage)

router
    .route("/home")
    .post(HomeController.createMessage)

    .post(HomeController.logData)

/*  ********************  */


// SOCIETY
router.route('/society')
    .get(ContactController.societypage);

router.route('/contact')
    .get(ContactController.contactpage)
    .post(ContactController.createMessage);


/*  ********************  */



// BLOG
router.route('/blog')
    .get(BlogController.blogpage)
    .post(BlogController.createArticle)


router.route('/blogID')
    .get(BlogController.blogIDpage)
    .post(BlogController.createMessage)


/*  ********************  */



// AUTHENTICATION
router.route('/login')
    .get(LogController.loginpage);


router.route('/register')
    .get(LogController.registerpage)
    .post(LogController.createAccount)

router.route('/newPW')
    .get(LogController.newpasswordpage)
    .post(LogController.resetPassword)

router.route('/forgotPW')
    .get(LogController.forgotpasswordpage)
    .post(LogController.forgotPassword)




/*  ********************  */



// ADMIN
router.route('/admin')
    .get(AdminController.get)


/** /ROUTES **/


// Export de notre router
module.exports = router;