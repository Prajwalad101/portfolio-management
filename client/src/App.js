import AddStock from './components/AddStock';
import useCompanies from './hooks/useCompanies';

import { useState } from 'react';
import StockList from './components/StockList';
import useStocks from './hooks/useStocks';

function App() {
  const [companies, setCompanies] = useState([]);
  const [stocks, setStocks] = useState([]);

  useCompanies(setCompanies);
  useStocks(setStocks);

  if (!companies[0] || !stocks[0]) {
    return null;
  }

  return (
    <div className="flex justify-center gap-20 h-screen pt-10 mx-10  ">
      <AddStock companies={companies} />
      <div className="border-l-2"></div>
      <StockList stocks={stocks} />
    </div>
  );
}

export default App;
