const Stock = require('../model/stockModel');
const { MongoClient } = require('mongodb');

const getAllCompanies = async (req, res) => {
  // Connect to the db
  const uri =
    'mongodb+srv://prajwal:prajwalad101@cluster0.o1p1x.mongodb.net/portfolio?retryWrites=true&w=majority';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const companiesCollection = client.db().collection('companies');

    const cursor = companiesCollection.find();
    const docs = await cursor.toArray();

    res.status(200).json({
      status: 'success',
      data: docs,
    });

    client.close();
  } catch (error) {
    res.status(400).json({
      status: 'success',
      message: error,
    });
  }
};

const getAllStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();

    res.status(200).json({
      status: 'success',
      data: stocks,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error,
    });
  }
};

const createStock = async (req, res) => {
  try {
    const newStock = await Stock.create(req.body);

    res.status(200).json({
      status: 'success',
      data: newStock,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'error',
      message: error,
    });
  }
};

const deleteStock = async (req, res) => {
  const name = req.body.name;
  const type = req.body.type;
  try {
    await Stock.deleteOne({ name, type: 'buy' });
    res.status(500).json({});
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'error',
      message: error,
    });
  }
};

module.exports = {
  createStock,
  getAllCompanies,
  getAllStocks,
  deleteStock,
};
