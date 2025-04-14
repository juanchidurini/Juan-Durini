var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');


router.get('/login', usersController.login);

router.get('/register', usersController.register);

router.get('/profile', usersController.profile);

module.exports = router;
