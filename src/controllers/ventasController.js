const e = require("express");

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

        const dataVentas = JSON.parse(req.params.sales);

        dataVentas.map((prod) => {
            console.log(prod);
            const valores = Object.values(prod);
            conn.query('SELECT * FROM stock where descr = ?;', valores[1], (err, producto) => {
                if (err) {
                    res.json(err)
                } else {
                    valores.push(producto[0].code)
                    conn.query("INSERT INTO sales (date, prodDescr, quant, prodPrice, prodCode) VALUES (?); ", [valores]);
                }
            })
            
        });

        res.redirect('/ventas')
    });
}

module.exports = ventasController;