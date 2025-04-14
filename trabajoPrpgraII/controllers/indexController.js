const data = require("../db/index")

const indexController = {
    index: function(req, res) {
        res.render('index', {products : data.listaProducts});
    }
}

module.exports = indexController;