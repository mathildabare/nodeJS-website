/*
 * Server.js
 * Point d'entrée de l'application (Main / Root)
 * ********************************************* */

console.log('Mon app NodeJS');





// Config .env
require('dotenv').config()

// Import Module
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const {engine} = require('express-handlebars')
const port = process.env.PORT || 3003


// Configuration Handlebars
app.set('view engine', 'hbs')
app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main',
    adminLayout: 'adminLayout'
}))
//Method OverRide
app.use(methodOverride('_method'))

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Gestion de la route pour accèder à mes fichiers static
app.use("/assets", express.static('public'));




// Import de notre router/js
const ROUTER = require('./back/router')
app.use('/', ROUTER)

// Lancement de notre application
app.listen(port, () => {
    console.log("le serveur tourne sur le  port :" + port);
})