const express = require('express');
const router = express.Router();
const { getBrandsPlugsAndSocketsByProductId } = require('../controllers/brands-plugs-and-sockets');

router.get('/brands-plugs-and-sockets/:productId', getBrandsPlugsAndSocketsByProductId);

module.exports = router;
