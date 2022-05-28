import AddStock from './components/AddStock';
import useCompanies from './hooks/useCompanies';

import { useState } from 'react';

function App() {
  const [companies, setCompanies] = useState(null);
  useCompanies(setCompanies);
  return (
    <div className="flex justify-center h-screen ">
      <AddStock />
    </div>
  );
}

export default App;
