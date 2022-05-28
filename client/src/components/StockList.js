export default function StockList({ stocks }) {
  return (
    <div className="">
      <table className="border border-collapse">
        <thead>
          <tr>
            <th className="border px-5 py-2">S.N</th>
            <th className="border px-5 py-2">Stock Name</th>
            <th className="border px-5 py-2">Transaction Type</th>
            <th className="border px-5 py-2">Quantity</th>
            <th className="border px-5 py-2">Amount</th>
            <th className="border px-5 py-2">Transaction Date</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, i) => {
            const date = new Date(stock.createdAt);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();

            return (
              <tr key={stock._id}>
                <td className="border px-5 py-2">{i + 1}</td>
                <td className="border px-5 py-2">{stock.name}</td>
                <td className="border px-5 py-2">{stock.type}</td>
                <td className="border px-5 py-2">{stock.quantity}</td>
                <td className="border px-5 py-2">
                  {stock.quantity * stock.unitPrice}
                </td>
                <td className="border px-5 py-2">
                  {year}/{month}/{day}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
