//MODULES
const express = require('express')
const router = express.Router()

//CONTROLLERS
const HomeController = require('./HomeController');
const ContactController = require('.Contact/Controller');

//MIDDLEWARES


//ROUTES

router.route('/')
    .get(HomeController.homepage);

router.route('/contact')
    .get(ContactController.contactpage);

module.exports = router