import AddStock from './components/AddStock';
import useCompanies from './hooks/useCompanies';

import { useState } from 'react';
import StockList from './components/StockList';
import useStocks from './hooks/useStocks';
import Tab from './components/Tab';

function App() {
  const [companies, setCompanies] = useState([]);
  const [stocks, setStocks] = useState([]);

  const [selected, setSelected] = useState('portfolio');

  useCompanies(setCompanies);
  useStocks(setStocks, stocks);

  if (!companies[0] || !stocks[0]) {
    return null;
  }

  return (
    <div>
      <Tab selected={selected} setSelected={setSelected} />
      <div className="flex gap-10 h-screen pt-10 mx-10  ">
        <AddStock companies={companies} setStocks={setStocks} stocks={stocks} />
        <div className="border-l-2"></div>
        <StockList stocks={stocks} />
      </div>
    </div>
  );
}

export default App;
