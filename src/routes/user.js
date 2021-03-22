const express = require('express');
const router = express.Router()

const userController = require('../controllers/userController') 


router.get('/', function(req, res){
    res.render("home",
    {title: 'Home'});
});

router.get('/depositos', userController.list);

router.get('/ventas', function(req, res){
    res.render("ventas", {
        title: 'Ventas'
    });
});

router.get('/soporte', function(req, res){
    res.render("soporte", {
        title: 'Soporte'
    });
});

module.exports = router