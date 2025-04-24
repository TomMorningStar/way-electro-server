const express = require('express');
const router = express.Router();
const { getAll } = require('../controllers/home-page');

router.get('/all-products', getAll);

module.exports = router;
