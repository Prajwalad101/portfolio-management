import { useState } from 'react';

export default function AddStock() {
  const stocks = [
    {
      name: 'Standard Charted Bank',
      id: 1,
    },
    {
      name: 'Nabil Bank',
      id: 2,
    },
    {
      name: 'Unilever Nepal Limited',
      id: 3,
    },
    {
      name: 'Rastriya Beema Company Limited',
      id: 4,
    },
    {
      name: 'Bottlers Nepal Terai Limited',
      id: 5,
    },
  ];
  const [numStocks, setNumStocks] = useState(10);
  const [unitPrice, setUnitPrice] = useState(100);
  const [type, setType] = useState('buy');
  const [stockName, setStockName] = useState(stocks[0].name);

  const addStock = async () => {
    const stock = {
      name: stockName,
      unitPrice,
      type,
      quantity: numStocks,
    };

    console.log(stock);

    try {
      const res = await fetch('http://localhost:3001/api/stock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stock),
      });

      if (res.ok) {
        console.log('success');
      } else {
        console.log('error');
      }

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <div className="mt-10">
      {/* STOCK NAME */}
      <div className="flex gap-7 items-center mb-5">
        <p>Stock Name:</p>
        <select
          className="p-2 rounded-md"
          onChange={(e) => setStockName(e.target.value)}
          value={stockName}
        >
          {stocks.map((stock) => (
            <option value={stock.name} key={stock.id}>
              {stock.name}
            </option>
          ))}
        </select>
      </div>
      {/* TYPE */}
      <div className="flex gap-20 items-center mb-5">
        <p>Type:</p>
        <select
          className="p-2 rounded-md"
          onChange={(e) => setType(e.target.value)}
          value={type}
        >
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
      </div>
      {/* QUANTITY */}
      <div className="flex gap-3 items-center mb-5">
        <p>Stock quantity:</p>
        <input
          type="number"
          className="border-2 border-gray-400 rounded-md h-9 px-2"
          onChange={(e) => setNumStocks(e.target.value)}
          value={numStocks}
        />
      </div>
      <div className="flex gap-5 items-center mb-16">
        <p>Price per unit:</p>
        <input
          type="number"
          className="border-2 border-gray-400 rounded-md h-9 px-2"
          onChange={(e) => setUnitPrice(e.target.value)}
          value={unitPrice}
        />
      </div>
      <div>
        <button
          className="bg-blue-500 text-white px-10 py-2 rounded-md hover:bg-blue-700"
          onClick={addStock}
        >
          Add
        </button>
      </div>
    </div>
  );
}
