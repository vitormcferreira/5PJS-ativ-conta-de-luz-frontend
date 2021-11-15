/* eslint-disable no-unused-vars */
import React from 'react';

// import { useDispatch } from 'react-redux';
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

  // executado quando o componente é renderizado
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('contas/');
      setContas(response.data);
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
            <td>R$ 156,69</td>
            <td>R$ 156,69</td>
          </tr>
        </TableContasMinMax>
        {/* TODO: adicionar icone */}
        <Button type="submit">+</Button>
        {contas.map((conta) => conta.id)}
        <TableContas>
          <tr>
            <th>data leitura</th>
            <th>nº leitura</th>
            <th>kw gasto</th>
            <th>valor a pagar</th>
            <th>data pagto</th>
            <th>media consumo</th>
          </tr>
          <tr>
            <td>10/11/2021</td>
            <td>45621</td>
            <td>300</td>
            <td>R$ 156,69</td>
            <td>01/11/2021</td>
            <td>100</td>
            <td>O</td>
            <td>X</td>
          </tr>
        </TableContas>
      </IndexContainer>
    </Container>
  );
}
