const data = require("../db/index")

const usersController = {
    register: function(req, res) {
        res.render('register');
    },
    login: function(req, res) {
        res.render('login')
    },
    profile: function(req, res) {
        res.render('profile', {products : data.listaProducts})
    }
}

module.exports = usersController;