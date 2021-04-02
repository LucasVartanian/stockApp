const ventasController = {}

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