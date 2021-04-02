const express = require('express');
const router = express.Router()

const userController = require('../controllers/userController') 
const ventasController = require('../controllers/ventasController')

<<<<<<< HEAD
//Home
=======
>>>>>>> 3529c942512a8e3eb1633e438063f18aea01d8bc
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

<<<<<<< HEAD

//Ventas
router.get('/ventas', ventasController.main);
=======
router.post('/add', userController.save)
>>>>>>> 3529c942512a8e3eb1633e438063f18aea01d8bc


<<<<<<< HEAD
//Otros
=======
router.post('/ventas', ventasController.save);

>>>>>>> 3529c942512a8e3eb1633e438063f18aea01d8bc
router.get('/soporte', function(req, res){
    res.render("soporte", {
        title: 'Soporte'
    });
});

module.exports = router