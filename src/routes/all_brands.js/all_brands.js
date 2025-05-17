const express = require('express');
const router = express.Router();
const { all_brands } = require('../../controllers/all_brands/all_brands');

router.get('/all_brands', all_brands);

module.exports = router;
