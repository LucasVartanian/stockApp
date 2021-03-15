const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const _ =  require('lodash')

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.listen(3000, function(){
    console.log("server ON");
})

app.get('/', function(req, res){
    res.render("home");
});

app.get('/depositos', function(req, res){
    res.render("depositos");
});

app.get('/ventas', function(req, res){
    res.render("ventas");
});

app.get('/soporte', function(req, res){
    res.render("soporte");
});