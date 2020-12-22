import React from 'react';

export const renderTable = (nodes) => {
  const row = nodes.map(({ tables }) => tables).map(({ rows }) => rows);

  const tableContent = row.map((item) =>
    item.map((rows) => (
      <tr key={rows.cells}>
        {rows.cells.map((cell) => (
          <td key={cell}>{cell}</td>
        ))}
      </tr>
    ))
  );

  return tableContent;
};
