import React, { useState } from 'react';

const CustomizableTable = ({ headers, data }) => {
  const [sortedData, setSortedData] = useState(data);

  // Function to sort data based on a specific column
  const sortData = (columnName) => {
    const sorted = [...sortedData].sort((a, b) => {
      if (a[columnName] < b[columnName]) return -1;
      if (a[columnName] > b[columnName]) return 1;
      return 0;
    });
    setSortedData(sorted);
  };

  return (
    <table>
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header.key} onClick={() => sortData(header.key)}>
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map(row => (
          <tr key={row.id}>
            {headers.map(header => (
              <td key={`${row.id}-${header.key}`}>{row[header.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomizableTable;
