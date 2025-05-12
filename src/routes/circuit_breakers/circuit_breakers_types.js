const express = require('express');
const router = express.Router();
const { get_circuit_breakers_types } = require('../../controllers/circuit_breakers/circuit_breakers_types');

router.get('/get_circuit_breakers_types/:catalog_id', get_circuit_breakers_types);

module.exports = router;
