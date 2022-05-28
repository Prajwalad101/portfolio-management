import { useEffect } from 'react';

function useStocks(setStocks, stocks) {
  console.log('fetch stocks');
  useEffect(() => {
    fetch('http://localhost:3001/api/stock')
      .then((res) => res.json())
      .then((data) => setStocks(data?.data));
  }, [setStocks]);
}

export default useStocks;
