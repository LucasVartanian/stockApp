const ventasController = {};

ventasController.save = (req, res) => {
    req.getConnection((err, conn) =>{
        const fecha = parseInt(req.body.fecha);
        const prod = req.body.prodVenta;
        const cantidad = parseInt(req.body.quantVenta);
        const monto = parseInt(req.body.montoProd);
        const dataVentas = [fecha, prod, cantidad, monto];

        
        if(!err){
            console.log(dataVentas);
            res.redirect('/ventas');
        }
    })   
}


module.exports = ventasController;