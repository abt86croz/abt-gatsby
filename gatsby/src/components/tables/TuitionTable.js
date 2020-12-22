import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { renderTable } from '../../utils/tables';

const StyledTable = styled.table`
  td {
    padding: 5px;
    border: 1px solid var(--pink);
    width: ${({ width }) => width || `100%`};
  }
`;

export default function TuitionTable({ width }) {
  const { table } = useStaticQuery(graphql`
    query {
      table: allSanityTables(
        filter: { title: { eq: "Monthly Tuition Rates" } }
      ) {
        nodes {
          title
          tables {
            rows {
              cells
              _key
            }
          }
        }
      }
    }
  `);

  if (!table?.nodes?.length) return null;

  return (
    <>
      <StyledTable width={width}>
        <tbody>{renderTable(table.nodes)}</tbody>
      </StyledTable>
    </>
  );
}
