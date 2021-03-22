const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');


//importing routes
const userRoutes = require('./routes/user');
const { dirname } = require('path');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//middlewares: instrucciones que deben ejecutarse antes de las peticiones de los usuarios
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev')); //con el parámetro dev nos muestra por consola las solicitudes que hacemos al servidor
app.use(myConnection(mysql, {
    host: 'localhost',
    user:'stockapp',
    password:'password',
    port: 3306,
    database: 'stockappdatabase' 
}, 'single'));

//routes
app.use('/', userRoutes); 

//static files
app.use(express.static(path.join(__dirname, 'public')));

//listening server
app.listen(3000, function(){
    console.log("server ON");
});
