import React from 'react';
import { FaTrashAlt, FaEdit, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Title } from '../../styles/GlobalStyles';
import {
  ReactPaginateCustom,
  TableContas,
  TableContasMinMax,
  IndexContainer,
  CadastrarContaLink,
} from './styled';
import { formataDinheiro } from '../../utils/functions';

import axios from '../../services/axios';

export default function Index() {
  const [contas, setContas] = React.useState({
    count: 0,
    num_pages: 1,
    current_page: 1,
    results: [],
  });
  const [minMaxValor, setMinMaxValor] = React.useState({
    minValor: '',
    maxValor: '',
  });

  // Atualiza a tabela de valores min e max.
  // Esta função deve ser executada sempre que uma conta for
  // apagada, editada ou inserida
  const atualizarMinMaxValor = async () => {
    const responseMinMaxValor = await axios.get('min_max_valor/');
    setMinMaxValor({
      minValor: formataDinheiro(responseMinMaxValor.data.minValor),
      maxValor: formataDinheiro(responseMinMaxValor.data.maxValor),
    });
  };

  // executado quando o componente é renderizado
  async function getContas(page = contas.current_page) {
    const query = page ? `contas/?page=${page}` : 'contas/';
    const responseContas = await axios.get(query);
    const obj = {
      ...responseContas.data,
      results: responseContas.data.results.map((atual) => ({
        ...atual,
        valor: formataDinheiro(atual.valor),
      })),
    };
    setContas(obj);
  }

  React.useEffect(() => {
    getContas();
    atualizarMinMaxValor();
    // TODO: corrigir problema eslint(react-hooks/exhaustive-deps) da linha abaixo
  }, []);

  const handleDelete = async (id, index) => {
    try {
      await axios.delete(`contas/${id}/`);

      // remove a conta da lista de contas
      const temp = [...contas.results];
      temp.splice(index, 1);
      setContas({ ...temp, results: temp });

      await atualizarMinMaxValor();
      getContas();

      toast.success('Conta apagada com sucesso');
    } catch (e) {
      toast.error('Erro ao apagar conta');
    }
  };

  const handleSwitchPage = ({ selected }) => {
    // react-paginate utiliza contagem 0 based
    getContas(selected + 1);
  };

  return (
    <Container>
      <IndexContainer>
        <Title>Gerenciador de Contas de Luz</Title>
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

        <CadastrarContaLink id="cadastrar-conta-link" to="cadastrar/">
          <FaPlus size={30} />
        </CadastrarContaLink>

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
            {contas.results.map((conta, index) => (
              <tr key={String(conta.id)}>
                <td>{conta.data_leitura_relogio}</td>
                <td>{conta.numero_leitura}</td>
                <td>{conta.kw}</td>
                <td>{conta.valor}</td>
                <td>{conta.data_pagamento}</td>
                <td>{conta.media_consumo}</td>
                <td>
                  <Link to={`editar/${conta.id}/`} title="Editar">
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
        <ReactPaginateCustom
          onPageChange={(e) => handleSwitchPage(e)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          initialPage={0}
          pageCount={contas.num_pages}
          previousLabel="<"
          nextLabel=">"
          activeClassName="active-page"
        />
      </IndexContainer>
    </Container>
  );
}
