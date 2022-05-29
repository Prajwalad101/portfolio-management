export default async function addStock(
  stock,
  type,
  stocks,
  setIsValid,
  setStocks
) {
  const stocksArr = stocks.map((stock) => stock.name);

  // when buying the stock check if the stock already exists
  if (stocksArr.indexOf(stock.name) !== -1 && type === 'buy') {
    setIsValid(false);
    return;
  } else {
    setIsValid(true);
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
      return;
    }

    const data = await res.json();

    if (type === 'sell') {
      const newStocks = stocks.filter((stk) => stk.name !== stock.name);
      setStocks([...newStocks, data.data]);
    } else {
      setStocks([...stocks, data.data]);
    }

    // setStocks(newStocks);
  } catch (error) {
    console.log('error');
  }
}
