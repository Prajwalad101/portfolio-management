import AddStock from './components/AddStock';
import useCompanies from './hooks/useCompanies';

import { useState } from 'react';
import StockList from './components/StockList';
import useStocks from './hooks/useStocks';
import Tab from './components/Tab';
import Dashboard from './components/Dasboard';

function App() {
  const [companies, setCompanies] = useState(null);
  const [stocks, setStocks] = useState(null);

  const [selected, setSelected] = useState('portfolio');

  useCompanies(setCompanies);
  useStocks(setStocks, stocks);

  if (!companies || !stocks) {
    return null;
  }

  return (
    <div>
      <Tab selected={selected} setSelected={setSelected} />
      {selected === 'portfolio' && (
        <div className="flex gap-10 h-screen pt-10 mx-10  ">
          <AddStock
            companies={companies}
            setStocks={setStocks}
            stocks={stocks}
          />
          <div className="border-l-2"></div>
          {stocks.length !== 0 ? (
            <StockList stocks={stocks} />
          ) : (
            <div>No stocks added</div>
          )}
        </div>
      )}
      {selected === 'dashboard' && (
        <Dashboard stocks={stocks} companies={companies} />
      )}
    </div>
  );
}

export default App;
