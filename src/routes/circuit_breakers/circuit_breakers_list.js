const express = require('express');
const router = express.Router();
const { get_circuit_breakers_list } = require('../../controllers/circuit_breakers/circuit_breakers_list');

// router.get('/get_circuit_breakers_list/type/:type_id/brand/:brand_id', get_circuit_breakers_list);
router.get('/get_circuit_breakers_list/:id', get_circuit_breakers_list);

module.exports = router;
