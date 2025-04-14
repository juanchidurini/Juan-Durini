var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

/* GET product page. */
router.get('/', productController.product);

module.exports = router;