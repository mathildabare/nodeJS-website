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
const mdl = require('./controllers/middleware/hey.js')

/** ROUTES **/

// HOME
router.route('/')
    .get(HomeController.homepage);


/*  ********************  */

// SOCIETY
router.route('/society')
    .get(ContactController.societypage);

router.route('/contact')
    .get(ContactController.contactpage);


/*  ********************  */

// BLOG
router.route('/blog')
    .get(BlogController.blogpage);

router.route('/blogID')
    .get(BlogController.blogIDpage);


/*  ********************  */

// AUTHENTICATION
router.route('/login')
    .get(LogController.loginpage);

router.route('/register')
    .get(LogController.registerpage);

router.route('/newPW')
    .get(LogController.newpasswordpage);

router.route('/forgotPW')
    .get(LogController.forgotpasswordpage);


/*  ********************  */

// ADMIN
router.route('/admin')
    .get(AdminController.get);

/** /ROUTES **/


// Export de notre router
module.exports = router;