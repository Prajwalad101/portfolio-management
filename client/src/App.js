import AddStock from './components/AddStock';
import useCompanies from './hooks/useCompanies';

import { useState } from 'react';

function App() {
  const [companies, setCompanies] = useState(null);

  useCompanies(setCompanies);

  if (!companies) {
    return null;
  }

  console.log(companies);
  return (
    <div className="flex justify-center h-screen ">
      <AddStock companies={companies} />
    </div>
  );
}

export default App;
