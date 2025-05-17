const express = require('express');
const router = express.Router();

const catalog = require('./catalog');
const circuit_breakers_brands = require('./circuit_breakers/circuit_breakers_brands');
const circuit_breakers_types = require('./circuit_breakers/circuit_breakers_types');
const circuit_breakers_list = require('./circuit_breakers/circuit_breakers_list')
const all_brands = require('./all_brands.js/all_brands');

router.use(catalog)
router.use(circuit_breakers_brands)
router.use(circuit_breakers_types)
router.use(circuit_breakers_list)
router.use(all_brands)

module.exports = router;
