const express = require('express');
const router = express.Router();
const { getCatalog } = require('../controllers/catalog');

router.get('/catalog', getCatalog);

module.exports = router;
