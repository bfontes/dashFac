import React from 'react';

import { metricData } from '../../datas/charts_and_tables_data';
import { useStateContext } from '../../contexts/ContextProvider';

const Table = () => {
  const { currentMode } = useStateContext();
  
  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff',
        color: currentMode === 'Dark' ? '#fff' : '#333'
      }}
    >
       <thead>
    <tr>
      <th className="border bg-gray-200 px-4 py-2">ID</th>
      <th className="border bg-gray-200 px-4 py-2">Label</th>
      <th className="border bg-gray-200 px-4 py-2">Value</th>
      <th className="border bg-gray-200 px-4 py-2">Type</th>
      <th className="border bg-gray-200 px-4 py-2">Description</th>
      <th className="border bg-gray-200 px-4 py-2">Category</th>
    </tr>
  </thead>
  <tbody>
    {metricData.data.map(item => (
      <tr key={item.id}>
        <td className="border px-4 py-2">{item.id}</td>
        <td className="border px-4 py-2">{item.label}</td>
        <td className="border px-4 py-2">{item.value}</td>
        <td className="border px-4 py-2">{item.type}</td>
        <td className="border px-4 py-2">{item.description}</td>
        <td className="border px-4 py-2">{item.category}</td>
      </tr>
    ))}
  </tbody>
    </table>
  );
};

export default Table;
