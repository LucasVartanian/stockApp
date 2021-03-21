const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const _ =  require('lodash');



//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//middlewares: instrucciones que deben ejecutarse antes de las peticiones de los usuarios
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(morgan('dev')); //con el parámetro dev nos muestra por consola las solicitudes que hacemos al servidor
app.use(myConnection(mysql, {
    host: 'localhost',
    user:'',
    password:'',
    port: 3306,
    database: 'stockappdatabase' 
}, 'single'));


//routes
app.listen(3000, function(){
    console.log("server ON");
});

app.get('/', function(req, res){
    res.render("home",
    {title: 'Home'});
});

app.get('/depositos', function(req, res){
    res.render("depositos", {
        title: "Depósitos"
    });
});

app.get('/ventas', function(req, res){
    res.render("ventas");
});

app.get('/soporte', function(req, res){
    res.render("soporte");
});