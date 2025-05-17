const express = require('express');
const router = express.Router();
const { get_all_brands } = require('../../controllers/all_brands/all_brands');

router.get('/all-brands', get_all_brands);

module.exports = router;
