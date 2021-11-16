import styled from 'styled-components';

export const IndexContainer = styled.section`
  display: grid;
  grid-template-areas:
    'title               title        title       '
    'table-contas-minmax ............ btn         '
    'table-contas        table-contas table-contas';
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-rows: auto; */
  gap: 20px;
`;

export const TableContasMinMax = styled.table`
  grid-area: table-contas-minmax;
  td,
  th {
    border: 1px solid black;
    padding: 5px;
  }
  border-collapse: collapse;
  overflow-x: auto;
`;

export const Button = styled.button`
  grid-area: btn;
  width: fit-content;
  height: fit-content;
  justify-self: right;
`;

export const TableContas = styled.table`
  grid-area: table-contas;
  td,
  th {
    border: 1px solid black;
    padding: 5px;
  }
  border-collapse: collapse;
  overflow-x: auto;
`;
