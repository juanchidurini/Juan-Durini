var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');


router.get('/login', usersController.login);

router.get('/register', usersController.register);

router.get('/profile', usersController.profile);

router.post('/newuser', usersController.create);

router.post('/processLogin', usersController.processLogin);

module.exports = router;
