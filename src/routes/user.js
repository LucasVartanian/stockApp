const express = require('express');
const router = express.Router()

const userController = require('../controllers/userController') 
const ventasController = require('../controllers/ventasController')

//Home
router.get('/', function(req, res){
    res.render("home",
    {title: 'Home'});
});

//Home
router.get('/depositos', userController.list);
router.get('/delete/:id', userController.delete);
router.get('/edit/:id', userController.edit);
router.post('/edit/:id', userController.update);
router.post('/add', userController.save)


//Ventas
router.get('/ventas/', ventasController.main);
router.post('/add/', userController.save)


//Otros
router.post('/ventas/:sales', ventasController.save);

router.get('/soporte', function(req, res){
    res.render("soporte", {
        title: 'Soporte'
    });
});

module.exports = router