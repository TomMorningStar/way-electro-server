const express = require('express');
const router = express.Router();
const { get_circuit_breakers_brands } = require('../../controllers/circuit_breakers/circuit_breakers_brands');

router.get('/circuit_breakers_brands/:catalog_id', get_circuit_breakers_brands);

module.exports = router;
