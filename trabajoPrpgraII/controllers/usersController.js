const { where } = require("sequelize");
const db = require("../database/models")
const bcrypt = require('bcryptjs')

const usersController = {
    register: function (req, res) {
        res.render('register');
    },
    login: function (req, res) {
        res.render('login')
    },
    profile: function (req, res) {
        res.render('profile', { products: data.listaProducts })
    },
    create: function (req, res) {

        let username = req.body.username;
        let email = req.body.email;
        let password = req.body.password;
        let birthdate = req.body.birthdate;

        let usuario = {
            username: username,
            email: email,
            contrasennia: bcrypt.hashSync(password, 10),
            birthdate: birthdate,
        }

        db.User.create(usuario)
            .then(function (results) {
                return res.redirect("/")
            })
            .catch(function (err) {
                return res.send(err)
            })
    },

    processLogin: function (req, res) {
        let userInfo = {
            email: req.body.email,
            contrasennia: req.body.password,
            recordarme: req.body.recordarme
        }

        

        db.User.findOne({
            where: [{ email: userInfo.email }]
        })
            .then(function (results) {
                if (bcrypt.compareSync(userInfo.contrasennia, results.contrasennia)) {


                    req.session.user = results;
                    return res.send(results)


                    return res.redirect("/")

                } else {
                    return res.send("no, las contraseñas son distinas")

                }
               

            })
            .catch(function (err) {
                return res.send(err)
            })


        //Si existe el usuario en la db chequeá que la contraseña sea la que tenemos registrada en la db. Deberás comparar lo que se recibe por el form vs lo que está en base de datos. Revisá los métodos de bcrypt. Hay uno que hace todo y retorna un booleano.
        //Si todo sale bien poné los datos del usuario en session.
        //Si además el usuario tildó "recordame" entonces también creamos una cookie con los datos del usuario.

    },
}

module.exports = usersController;