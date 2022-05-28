import { useEffect } from 'react';

function useCompanies(setCompanies) {
  useEffect(() => {
    fetch('http://localhost:3001/api/companies')
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  }, [setCompanies]);
}

export default useCompanies;
