const ventasController = {}

ventasController.main = (req,res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT descr from stock", (err, data) =>{
            if (err){
                res.json(err)
            }else{
                console.log(data)
                res.render('ventas', {title: 'Ventas', data: data})
            }    
        })
    })
}

module.exports = ventasController