var express = require('express');
var router = express.Router();
const searchResultsController = require('../controllers/searchResultsController');

/* GET search-results page. */
router.get('/', searchResultsController.searchResults);

module.exports = router;