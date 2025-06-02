const db = require("../database/models")

const indexController = {
    index: function(req, res) {
        let association ={
            include: [
                {association: "coments", 
                include:[{association: "user"}]}
            ]
        }
        db.Product.findAll(association)
            .then(function (resultados) {
                //return res.send(resultados)
                return res.render("index", { results: resultados, usuario: req.session.user});
            })
            .catch(function (error) {
                return res.send(error)
            })
        
    }
}

module.exports = indexController;