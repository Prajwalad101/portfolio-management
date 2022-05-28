export default async function deleteStock(stocks, stock, setStocks) {
  const res = await fetch('http://localhost:3001/api/stock', {
    method: 'DELETE',
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

  const newStocks = stocks.filter((stk) => stk.name !== stock.name);

  setStocks(newStocks);
}
