const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM stock', (err, stockData) =>{
            if(err){
                res.json(err)
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

controller.delete = (req, res) => {
    req.getConnection((err, conn) => {
        const id = req.params.id
        conn.query('DELETE FROM stock WHERE id = ?',[id], (err, stockData) =>{
            if(err){
                res.json(err)
            }else{
                console.log(stockData);
                res.redirect('/depositos')
            }
        })    
    })
}

controller.edit = (req, res) => {
    req.getConnection((err, conn) => {
        const id = req.params.id
        conn.query('SELECT FROM stock WHERE id = ?',[id], (err, stockProduct) =>{
            if(err){
                res.json(err)
            }else{
                console.log(stockData);
                res.redirect('/depositos')
                //TODO: Interfaz editar producto
            }
        })    
    })
}

controller.save = (req, res) => {
    req.getConnection((err, conn) => {
        const id = ""
        const description = ""
        const quantity = ""
        const data = [id, description, quantity]
        conn.query('INSERT INTO stock set ?',[data], (err, rows) =>{
            if(err){
                res.json(err)
            }else{
                console.log(stockData);
                res.redirect('/depositos')
                //TODO: Interfaz editar producto
            }
        })    
    })
}

module.exports = controller