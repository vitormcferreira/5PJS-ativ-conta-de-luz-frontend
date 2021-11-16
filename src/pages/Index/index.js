import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Title } from '../../styles/GlobalStyles';
import {
  TableContas,
  TableContasMinMax,
  IndexContainer,
  Button,
} from './styled';

import axios from '../../services/axios';
// import * as exampleActions from '../../store/modules/example/actions';

export default function Index() {
  // const dispatch = useDispatch();
  const [contas, setContas] = React.useState([]);
  const [minMaxValor, setMinMaxValor] = React.useState({});

  // Atualiza a tabela de valores min e max.
  // Esta função deve ser executada sempre que uma conta for
  // apagada, editada ou inserida
  const atualizarMinMaxValor = async () => {
    const responseMinMaxValor = await axios.get('min_max_valor/');
    setMinMaxValor(responseMinMaxValor.data);
  };

  // executado quando o componente é renderizado
  React.useEffect(() => {
    async function getData() {
      const responseContas = await axios.get('contas/');
      setContas(responseContas.data);
      await atualizarMinMaxValor();
    }
    getData();
  }, []);

  const handleDelete = async (id, index) => {
    try {
      await axios.delete(`contas/${id}/`);

      // remove a conta da lista de contas
      const temp = [...contas];
      temp.splice(index, 1);
      setContas(temp);

      await atualizarMinMaxValor();

      toast.success('Conta apagada com sucesso');
    } catch (e) {
      toast.error('Erro ao apagar conta');
    }
  };

  // function handleClick(e) {
  //   e.preventDefault();
  //   dispatch(exampleActions.clicaBotaoRequest());
  // }

  return (
    <Container>
      <IndexContainer>
        <Title>Contas de Luz</Title>
        <TableContasMinMax>
          <thead>
            <tr>
              <th>Menor valor</th>
              <th>Maior valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{minMaxValor.minValor}</td>
              <td>{minMaxValor.maxValor}</td>
            </tr>
          </tbody>
        </TableContasMinMax>
        {/* TODO: adicionar icone */}

        <Button type="submit">+</Button>
        <TableContas>
          <thead>
            <tr>
              <th>data leitura</th>
              <th>nº leitura</th>
              <th>kw gasto</th>
              <th>valor a pagar</th>
              <th>data pagto</th>
              <th>media consumo</th>
            </tr>
          </thead>
          <tbody>
            {contas.map((conta, index) => (
              <tr key={String(conta.id)}>
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
                  <FaTrashAlt
                    title="Apagar"
                    onClick={() => handleDelete(conta.id, index)}
                    cursor="pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </TableContas>
      </IndexContainer>
    </Container>
  );
}
