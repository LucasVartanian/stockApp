const ventasController = {};

ventasController.main = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT descr from stock", (err, data) => {
            if (err) {
                res.json(err)
            } else {
                var hoy = new Date()
                const maxDate = hoy.toISOString().slice(0, 10);
                res.render('ventas', {
                    title: 'Ventas',
                    data: data,
                    maxDate: maxDate
                })
            }
        })
    })
}


ventasController.save = (req, res) => {
    req.getConnection((err, conn) => {

        const nuevaVenta = req.body;
        const dataVentas = [nuevaVenta];
        // console.log(nuevaVenta);

        dataVentas.map((prod) => {
            console.log(prod);
            const valores = Object.values(prod);
            conn.query("INSERT INTO sales (date, prodCode, quant, prodPrice) VALUES (?); ", [valores], (err, rows) => {
                if (err) {
                    res.json(err)
                }else{
                    res.redirect('/ventas');
                }
            });
        });
    });
}

module.exports = ventasController;