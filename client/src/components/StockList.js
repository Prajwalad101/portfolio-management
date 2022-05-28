export default function StockList({ stocks }) {
  return (
    <div className="flex-grow">
      <table>
        <thead>
          <tr>
            <td>S.N</td>
            <td>Stock Name</td>
            <td>Transaction Type</td>
            <td>Quantity</td>
            <td>Amount</td>
            <td>Transaction Date</td>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock._id}>
              <td>1</td>
              <td>{stock.name}</td>
              <td>{stock.type}</td>
              <td>{stock.quantity}</td>
              <td>{stock.quantity * stock.unitPrice}</td>
              <td>Date</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
