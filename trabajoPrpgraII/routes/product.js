var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/detalle/:id', productController.index);

router.get('/productAdd', productController.productAdd);

router.get('/searchResults', productController.searchResults);

module.exports = router;