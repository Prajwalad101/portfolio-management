import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="text-3xl">
      <p>{!data ? 'Loading...' : data}</p>
    </div>
  );
}

export default App;
