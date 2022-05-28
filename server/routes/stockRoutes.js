const express = require('express');
const stockController = require('../controller/stockController');

const router = express.Router();

router.route('/stock').post(stockController.createStock);
router.route('/companies').get(stockController.getAllCompanies);

module.exports = router;
