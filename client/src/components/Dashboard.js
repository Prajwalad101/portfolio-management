import useStocks from '../hooks/useStocks';

export default function Dashboard({ stocks, companies, setStocks }) {
  useStocks(setStocks);
  const boughtStocks = stocks.filter((stock) => stock.type === 'buy');
  // const soldStocks = stocks.filter((stock) => stock.type === 'sell');

  let totalUnits = 0;
  let totalSoldAmount = 0;
  let pl = 0;
  let totalInvestment = 0;

  boughtStocks.forEach((stock) => {
    const company = companies.filter(
      (company) => company.name === stock.name
    )[0];
    const sellRate = company.price;

    totalUnits += stock.quantity;
    totalSoldAmount += stock.quantity * sellRate;

    pl += stock.quantity * sellRate - stock.quantity * stock.unitPrice;
    // console.log(pl);
    totalInvestment += stock.quantity * stock.unitPrice;
  });

  if (boughtStocks.length === 0) {
    return (
      <div className="mx-auto text-center mt-10 text-2xl">
        No stocks currently in portfolio
      </div>
    );
  }

  return (
    <div className="flex mx-20 mt-10 flex-col">
      <div className="flex flex-col mb-5">
        <p className="text-xl ">Total Units: {totalUnits}</p>
        <p className="text-xl">Expected Selling Price: {totalSoldAmount}</p>
        <p className="text-xl">
          Overall <span>{pl < 0 ? 'Loss' : 'Profit'} (when sold): </span>{' '}
          {Math.abs(pl)}
        </p>
        <p className="text-xl">Total investment: {totalInvestment}</p>
      </div>
      {boughtStocks.map((stock) => {
        const company = companies.filter(
          (company) => company.name === stock.name
        )[0];
        const sellRate = company.price;

        const soldAmount = stock.quantity * sellRate;

        pl = stock.quantity * sellRate - stock.quantity * stock.unitPrice;

        totalInvestment += stock.quantity * stock.unitPrice;
        return (
          <div className="mb-5" key={stock._id}>
            <div className="border-2 w-full  border-gray-500"></div>
            <p className="text-lg font-semibold mt-3"> {stock.name}</p>
            <p className="text-lg">Units: {stock.quantity}</p>
            <p className="text-lg">Expected selling price: {soldAmount}</p>
            <p className="text-lg">
              Overall <span>{pl < 0 ? 'Loss' : 'Profit'} (when sold):</span>{' '}
              {Math.abs(pl)}
            </p>
          </div>
        );
      })}
    </div>
  );
}
