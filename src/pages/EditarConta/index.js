/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import {
  Container,
  Input,
  Title,
  LightButton,
  DarkButton,
  Message,
} from '../../styles/GlobalStyles';
import { CadastrarContaContainer, Form } from './styled';

import history from '../../services/history';
import axios from '../../services/axios';

export default function EditarConta(props) {
  const [dataLeituraRelogio, setDataLeituraRelogio] = React.useState('');
  const [numeroLeitura, setNumeroLeitura] = React.useState('');
  const [kw, setKw] = React.useState('');
  const [valor, setValor] = React.useState('');
  const [dataPagamento, setDataPagamento] = React.useState('');
  const [mediaConsumo, setMediaConsumo] = React.useState('');

  const [dataLeituraRelogioErrors, setDataLeituraRelogioErrors] =
    React.useState([]);
  const [numeroLeituraErrors, setNumeroLeituraErrors] = React.useState([]);
  const [kwErrors, setKwErrors] = React.useState([]);
  const [valorErrors, setValorErrors] = React.useState([]);
  const [dataPagamentoErrors, setDataPagamentoErrors] = React.useState([]);
  const [mediaConsumoErrors, setMediaConsumoErrors] = React.useState([]);

  const handleCancelar = () => {
    const prevPath = get(props, 'location.state.prevPath', '/');
    history.push(prevPath);
  };

  const handleCadastrar = async (e) => {
    e.preventDefault();

    const salvaErrors = (errors) => {
      setDataLeituraRelogioErrors(get(errors, 'data_leitura_relogio', []));
      setNumeroLeituraErrors(get(errors, 'numero_leitura', []));
      setKwErrors(get(errors, 'kw', []));
      setValorErrors(get(errors, 'valor', []));
      setDataPagamentoErrors(get(errors, 'data_pagamento', []));
      setMediaConsumoErrors(get(errors, 'media_consumo', []));
    };

    try {
      await axios.post('contas/', {
        data_leitura_relogio: dataLeituraRelogio,
        numero_leitura: numeroLeitura,
        kw,
        valor,
        data_pagamento: dataPagamento,
        media_consumo: mediaConsumo,
      });
      toast.success('Conta cadastrada com sucesso');
      salvaErrors([]);
    } catch (err) {
      salvaErrors(err.response.data);
    }
  };

  const exibeErrors = (fieldErrors) =>
    fieldErrors.map((el) => (
      <Message key={el} className="error">
        {el}
      </Message>
    ));

  return (
    <Container>
      <CadastrarContaContainer>
        <Title>Cadastrar conta de Luz</Title>
        <Form>
          <div className="fields">
            <div>
              <label htmlFor="data_leitura_relogio">
                Data de leitura do relógio:
              </label>
              {exibeErrors(dataLeituraRelogioErrors)}
              <Input
                type="date"
                name="data_leitura_relogio"
                id="data_leitura_relogio"
                onChange={(e) => setDataLeituraRelogio(e.target.value)}
              />
            </div>

            <label htmlFor="numero_leitura">Número da leitura:</label>
            {exibeErrors(numeroLeituraErrors)}
            <Input
              type="number"
              name="numero_leitura"
              id="numero_leitura"
              onChange={(e) => setNumeroLeitura(e.target.value)}
            />

            <label htmlFor="kw">KW:</label>
            {exibeErrors(kwErrors)}
            <Input
              type="number"
              name="kw"
              id="kw"
              onChange={(e) => setKw(e.target.value)}
            />

            <label htmlFor="valor">Valor:</label>
            {exibeErrors(valorErrors)}
            <Input
              type="number"
              name="valor"
              id="valor"
              onChange={(e) => setValor(e.target.value)}
            />

            <label htmlFor="data_pagamento">Data do pagamento:</label>
            {exibeErrors(dataPagamentoErrors)}
            <Input
              type="date"
              name="data_pagamento"
              id="data_pagamento"
              onChange={(e) => setDataPagamento(e.target.value)}
            />

            <label htmlFor="media_consumo">Média de consumo:</label>
            {exibeErrors(mediaConsumoErrors)}
            <Input
              type="number"
              name="media_consumo"
              id="media_consumo"
              onChange={(e) => setMediaConsumo(e.target.value)}
            />
          </div>
          <div className="buttons">
            <LightButton type="reset" onClick={handleCancelar}>
              Cancelar
            </LightButton>
            <DarkButton type="submit" onClick={handleCadastrar}>
              Cadastrar
            </DarkButton>
          </div>
        </Form>
      </CadastrarContaContainer>
    </Container>
  );
}
