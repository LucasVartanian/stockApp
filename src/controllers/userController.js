const { update } = require("lodash")

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
        const id = parseInt(req.params.id)
        conn.query('SELECT * FROM stock WHERE id = ?', id, (err, stockProduct) =>{
            if(err){
                res.json(err)
            }else{
                res.render('edit', {
                    data: stockProduct,
                    title: 'Editar ID = ' + id
                })
            }
        })
    })
}

controller.update = (req, res) => {
    const id = parseInt(req.params.id);
    const newProduct = req.body;
    const updateSQL = {
        code: newProduct.codeProducto,
        descr: newProduct.descProducto,
        quant: newProduct.cantProducto
    }
    console.log(updateSQL);
    req.getConnection((err, conn) => {
        conn.query('UPDATE stock set ? WHERE id = ?', [updateSQL, id], (err, rows)=>{
            res.redirect('/depositos');
        });
    });
};


controller.save = (req, res) => {
    req.getConnection((err, conn) => {
        console.log(req.body);
        const code = req.body.codeProducto
        const description = req.body.descProducto
        const quantity = parseInt(req.body.cantProducto)
        const data = [code, description, quantity]
        console.log(data);
        conn.query( "INSERT INTO `stock` (`code`, `descr`, `quant`) VALUES (?); " ,[data], (err, rows) =>{
            if(err){
                res.json(err)
            }else{
                res.redirect('/depositos')
            }
        })    
    })
}

module.exports = controller