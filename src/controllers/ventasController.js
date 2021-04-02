const ventasController = {};

ventasController.main = (req,res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT descr from stock", (err, data) =>{
            if (err){
                res.json(err)
            }else{
                var hoy = new Date()
                const maxDate = hoy.toISOString().slice(0,10);
                res.render('ventas', {title: 'Ventas', data: data, maxDate: maxDate})
            }    
        })
    })
}

module.exports = ventasController

ventasController.save = (req, res) => {
    req.getConnection((err, conn) => {
            const fecha = (req.body.fecha);
            const prod = req.body.prodVenta;
            const cantidad = parseInt(req.body.quantVenta);
            const monto = parseInt(req.body.montoProd);

            const dataVentas = [{
                fecha,
                prod,
                cantidad,
                monto
            }];

            dataVentas.map((prod) => {
                conn.query("INSERT INTO 'sales' (?) VALUES (?); ", (err, rows) => {
                    if (!err) {
                        console.log(dataVentas);
                        res.redirect('/ventas');
                    }
                });
            })
        }

    )
}



module.exports = ventasController;
