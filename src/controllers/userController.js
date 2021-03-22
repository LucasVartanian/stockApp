const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM stock', (err, stockData) =>{
            if(err){
                res.send("Error")
            }else{
                console.log(stockData);
                res.render('depositos', {
                    title: 'Deposito',
                    data: stockData
                })
            }
        })    
    })
}


module.exports = controller