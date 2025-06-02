const db = require("../database/models")

const productController = {
    index: function (req, res) {

        db.Product.findAll({
            include: [
                {association: "coments", 
                include:[{association: "user"}]}
            ]
        })
            .then(function (resultados) {
                
                return res.render("index", { results: resultados, usuario: req.session.user});
            })
            .catch(function (error) {
                return res.send(error)
            })

    },
    detail:function (req,res) {
        db.Product.findByPk(req.params.id, {
            include: [
                {association: "coments", 
                include:[{association: "user"}]}
            ]
        })
            .then(function (resultados) {
                
                return res.render("product", { results: resultados, usuario: req.session.user });
            });

    },
    productAdd: function(req, res) {
        res.render('productAdd', {usuario: req.session.user });
    },
    searchResults: function(req, res) {
        res.render('searchResults', {usuario: req.session.user });
    }
}

module.exports = productController;