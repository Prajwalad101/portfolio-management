export default async function addStock(
  stock,
  type,
  stocks,
  setIsValid,
  setStocks
) {
  const stocksArr = stocks.map((stock) => stock.name);

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
    setStocks([...stocks, data.data]);
  } catch (error) {
    console.log('error');
  }
}
