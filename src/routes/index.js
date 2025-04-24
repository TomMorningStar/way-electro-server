const express = require('express');
const router = express.Router();

const homePage = require('./home-page');
const brandsPlugsAndSockets = require('./brands-plugs-and-sockets');
const brandItemsPlugsAndSockets = require('./plugs-and-sockets-items')

router.use(homePage)
router.use(brandsPlugsAndSockets)
router.use(brandItemsPlugsAndSockets)

module.exports = router;
