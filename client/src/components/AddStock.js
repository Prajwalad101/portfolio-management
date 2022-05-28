import { useEffect, useState } from 'react';

export default function AddStock({ companies, setStocks, stocks }) {
  const [boughtStocks, setBoughtStocks] = useState([]);
  const [numStocks, setNumStocks] = useState(10);
  const [unitPrice, setUnitPrice] = useState(100);
  const [type, setType] = useState('buy');
  const [companyName, setCompanyName] = useState(companies[0].name);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const boughtStocks = stocks.filter((stock) => stock.type === 'buy');
    setBoughtStocks(boughtStocks);
  }, [stocks]);

  const addStock = async () => {
    if (unitPrice <= 0 || numStocks <= 0) {
      return;
    }
    const stock = {
      name: companyName,
      unitPrice,
      type,
      quantity: numStocks,
    };

    const stocksArr = stocks.map((stock) => stock.name);

    if (stocksArr.indexOf(stock.name) !== -1 && type === 'sell') {
      setIsValid(false);
    } else {
      setIsValid(true);
      return;
    }

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
      setStocks([...stocks, data.data]);
    } catch (error) {
      console.log('error');
    }
  };

  const stocksForTransaction = type === 'buy' ? companies : boughtStocks;

  return (
    <div className="w-[500px]">
      {/* STOCK NAME */}
      <div className="flex gap-7 items-center mb-5">
        <p>Stock Name:</p>
        <select
          className="p-2 rounded-md border-2 border-gray-400"
          onChange={(e) => {
            setCompanyName(e.target.value);
          }}
          value={companyName}
        >
          {stocksForTransaction.map((stock) => (
            <option value={stock.name} key={stock._id}>
              {stock.name}
            </option>
          ))}
        </select>
      </div>
      {/* TYPE */}
      <div className="flex gap-20 items-center mb-5">
        <p>Type:</p>
        <select
          className="p-2 rounded-md border-2 border-gray-400"
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
          required
          className="border-2 border-gray-400 rounded-md h-9 px-2"
          onChange={(e) => setNumStocks(e.target.value)}
          value={numStocks}
        />
      </div>
      <div className="flex gap-5 items-center mb-14">
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
          type="submit"
          className="bg-blue-500 text-white px-16 py-2 rounded-md hover:bg-blue-700"
          onClick={addStock}
        >
          Add
        </button>
      </div>
      {!isValid && (
        <p className="mt-5 text-red-500">
          The stock already exists. Please try adding other stocks.
        </p>
      )}
    </div>
  );
}
