const data = require("../db/index")

const productController = {
    index: function(req, res) {
        let id = req.params.id;
        let producto = {};
        for (let i = 0; i < data.listaProducts.length; i++) {
            const element = data.listaProducts[i];
            if (id == element.id) {
                producto = element
                
            }
            
        }
        return res.render('product', {producto : producto})
        
    },
    productAdd: function(req, res) {
        res.render('productAdd');
    },
    searchResults: function(req, res) {
        res.render('searchResults');
    }
}

module.exports = productController;