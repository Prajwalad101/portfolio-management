export default function Tab({ selected, setSelected }) {
  return (
    <div className="text-base font-medium text-center text-gray-500 border-b-2 border-gray-200">
      <p
        className={`inline-block p-4  rounded-t-lg hover:cursor-pointer 
        ${selected === 'portfolio' ? 'border-blue-600 text-blue-600' : ''}`}
        onClick={() => setSelected('portfolio')}
      >
        Portfolio
      </p>
      <p
        className={`inline-block p-4 rounded-t-lg  hover:cursor-pointer ${
          selected === 'dashboard' ? 'border-blue-600 text-blue-600' : ''
        }`}
        onClick={() => setSelected('dashboard')}
      >
        Dashboard
      </p>
    </div>
  );
}
