const express = require('express');
const stockController = require('../controller/stockController');

const router = express.Router();

router
  .route('/stock')
  .get(stockController.getAllStocks)
  .post(stockController.createStock)
  .delete(stockController.deleteStock);

router.route('/companies').get(stockController.getAllCompanies);

module.exports = router;
