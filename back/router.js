/*
 * Router.js
 * ********* */ 

// MODULES
const express = require('express')
const router = express.Router()

// CONTROLLERS
const HomeController = require('./controllers/HomeController');
const ContactController = require('./controllers/ContactController');

// MIDDLEWARES


// ROUTES
router.route('/')
    .get(HomeController.homepage);

router.route('/contact')
    .get(ContactController.contactpage);

// /ROUTES



// Export de notre router
module.exports = router