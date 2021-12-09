console.log('Mon app NodeJS');


const express = require('express')
const app = express()
const {engine} = require('express-handlebars')
const port = process.env.PORT || 3003


app.set('view engine', 'hbs')

app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main'
}))


app.use("/assets", express.static('public'));


app.get('/', function (req, res) {
    res.render('home')
  })
 
app.get('/Contact', function(req,res){
    res.render('contact')
})


// const ROUTER = require('./back/router')
// app.use('/', ROUTER)

app.listen(port, () => { console.log("le serveur tourne sur le port :" + port);})