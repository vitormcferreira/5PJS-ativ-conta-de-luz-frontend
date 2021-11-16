import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import {
  TableContas,
  TableContasMinMax,
  IndexContainer,
  Title,
  Button,
} from './styled';

import axios from '../../services/axios';
// import * as exampleActions from '../../store/modules/example/actions';

export default function Index() {
  // const dispatch = useDispatch();
  const [contas, setContas] = React.useState([]);
  const [minMaxValor, setMinMaxValor] = React.useState({});

  // executado quando o componente é renderizado
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('contas/');
      setContas(response.data.contas);
      setMinMaxValor(response.data.minMaxValor);
    }
    getData();
  }, []);

  // function handleClick(e) {
  //   e.preventDefault();
  //   dispatch(exampleActions.clicaBotaoRequest());
  // }

  return (
    <Container>
      <IndexContainer>
        <Title>Contas de Luz</Title>
        <TableContasMinMax>
          <tr>
            <th>Menor valor</th>
            <th>Maior valor</th>
          </tr>
          <tr>
            <td>{minMaxValor.minValor}</td>
            <td>{minMaxValor.maxValor}</td>
          </tr>
        </TableContasMinMax>
        {/* TODO: adicionar icone */}

        <Button type="submit">+</Button>
        <TableContas>
          <tr>
            <th>data leitura</th>
            <th>nº leitura</th>
            <th>kw gasto</th>
            <th>valor a pagar</th>
            <th>data pagto</th>
            <th>media consumo</th>
          </tr>
          {contas.map((conta) => (
            <tr>
              <td>{conta.data_leitura_relogio}</td>
              <td>{conta.numero_leitura}</td>
              <td>{conta.kw}</td>
              <td>{conta.valor}</td>
              <td>{conta.data_pagamento}</td>
              <td>{conta.media_consumo}</td>
              <td>
                <Link to={`conta/${conta.id}/edit`} title="Editar">
                  <FaEdit />
                </Link>
              </td>
              <td>
                <Link to={`conta/${conta.id}/delete`} title="Apagar">
                  <FaTrashAlt />
                </Link>
              </td>
            </tr>
          ))}
        </TableContas>
      </IndexContainer>
    </Container>
  );
}
