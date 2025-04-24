const express = require('express');
const router = express.Router();
const { getPlugsAndSocketsItemsByBrandId } = require('../controllers/plugs-and-sockets-items');

router.get('/plugs-and-sockets-items/:brandId', getPlugsAndSocketsItemsByBrandId);

module.exports = router;
