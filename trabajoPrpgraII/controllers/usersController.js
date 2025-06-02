const { where } = require("sequelize");
const db = require("../database/models")
const bcrypt = require('bcryptjs')
const op = db.Sequelize.Op
const usersController = {

    register: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect('/')
        } else {
            return res.render('register')
        }
    },
    processRegister: function (req, res) {

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



        db.User.findOne({
            where: [{ email: usuario.email }]
        })
            .then(function (results) {

                if (results != undefined) {
                    return res.send("el mail ya esta resgitrado")
                }
                db.User.create(usuario)
                    .then(function (results) {
                        return res.redirect("/")
                    })
                    .catch(function (err) {
                        return res.send(err)
                    })
            })
            .catch(function (err) {
                return res.send(err)
            })






    },

    login: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect('/')
        } else {
            return res.render('login')
        }

    },
    processLogin: function (req, res) {
        let userInfo = {
            email: req.body.email,
            contrasennia: req.body.password,
            recordarme: req.body.recordarme
        }


//return res.send(userInfo)
        db.User.findOne({ where: [{ email: userInfo.email }]})
            .then(function (results) {

                if (results == undefined) {
                    return res.send("el mail no esta resgitrado")
                }

                if (bcrypt.compareSync(userInfo.contrasennia, results.contrasennia)) {


                    req.session.user = results;

                    if (userInfo.recordarme != undefined) {
                        res.cookie('usuario', userInfo.contrasennia,{maxAge: 1000 * 60 * 5} )
                    }


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

    profile: function (req, res) {
        return res.send('profile')

    },
    logout:function (req,res) {
        req.session.destroy()
        res.clearCookie('usuario')
        return res.redirect("/")
    }

}

module.exports = usersController;