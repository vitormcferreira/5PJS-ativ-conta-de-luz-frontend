import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as colors from '../../config/colors';

export const IndexContainer = styled.section`
  display: grid;
  grid-template-areas:
    'title               title        title       '
    'table-contas-minmax ............ link         '
    'table-contas        table-contas table-contas';
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-rows: auto; */
  gap: 20px;
`;

export const CadastrarContaLink = styled(Link)`
  grid-area: link;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  justify-self: flex-end;
  color: ${colors.primarylightColor};
  background-color: ${colors.primaryColor};
  padding: 5px;
  border-radius: 50%;
  transition: all 200ms ease-in-out;

  &:hover {
    color: ${colors.primaryColor};
    background-color: ${colors.primarylightColor};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
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
