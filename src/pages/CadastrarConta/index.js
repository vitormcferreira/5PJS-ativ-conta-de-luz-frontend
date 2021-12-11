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
  CustomDatePicker,
} from '../../styles/GlobalStyles';
import { CadastrarContaContainer, Form } from './styled';

import history from '../../services/history';
import axios from '../../services/axios';
import ErrorMessages from '../../components/ErrorMessages';

export default function CadastrarConta(props) {
  const [dataLeituraRelogio, setDataLeituraRelogio] = React.useState(
    new Date()
  );
  const [numeroLeitura, setNumeroLeitura] = React.useState('');
  const [kw, setKw] = React.useState('');
  const [valor, setValor] = React.useState('');
  const [dataPagamento, setDataPagamento] = React.useState(new Date());
  const [mediaConsumo, setMediaConsumo] = React.useState('');

  const [errors, setErrors] = React.useState({
    data_leitura_relogio: [],
    numero_leitura: [],
    kw: [],
    valor: [],
    data_pagamento: [],
    media_consumo: [],
  });

  const handleCancelar = () => {
    const prevPath = get(props, 'location.state.prevPath', '/');
    history.push(prevPath);
  };

  const handleCadastrar = async (e) => {
    e.preventDefault();

    try {
      await axios.post('contas/', {
        data_leitura_relogio:
          dataLeituraRelogio && dataLeituraRelogio.toLocaleDateString('pt-BR'),
        numero_leitura: numeroLeitura,
        kw,
        valor,
        data_pagamento:
          dataPagamento && dataPagamento.toLocaleDateString('pt-BR'),
        media_consumo: mediaConsumo,
      });
      toast.success('Conta cadastrada com sucesso');
      setErrors({});
    } catch (err) {
      setErrors(err.response.data);
    }
  };

  return (
    <Container>
      <CadastrarContaContainer>
        <Title>Cadastrar conta de Luz</Title>
        <Form>
          <div className="fields">
            <label htmlFor="data_leitura_relogio">
              Data de leitura do relógio:
            </label>
            <ErrorMessages errors={errors.data_leitura_relogio} />
            <CustomDatePicker
              name="data_leitura_relogio"
              id="data_leitura_relogio"
              value={dataLeituraRelogio}
              onChange={(date) => setDataLeituraRelogio(date)}
              format="dd/MM/y"
            />

            <label htmlFor="numero_leitura">Número da leitura:</label>
            <ErrorMessages errors={errors.numero_leitura} />
            <Input
              type="number"
              name="numero_leitura"
              id="numero_leitura"
              onChange={(e) => setNumeroLeitura(e.target.value)}
            />

            <label htmlFor="kw">KW:</label>
            <ErrorMessages errors={errors.kw} />
            <Input
              type="number"
              name="kw"
              id="kw"
              onChange={(e) => setKw(e.target.value)}
            />

            <label htmlFor="valor">Valor:</label>
            <ErrorMessages errors={errors.valor} />
            <Input
              type="number"
              name="valor"
              id="valor"
              onChange={(e) => setValor(e.target.value)}
            />

            <label htmlFor="data_pagamento">Data do pagamento:</label>
            <ErrorMessages errors={errors.data_pagamento} />
            <CustomDatePicker
              name="data_pagamento"
              id="data_pagamento"
              value={dataPagamento}
              onChange={(date) => setDataPagamento(date)}
              format="dd/MM/y"
            />

            <label htmlFor="media_consumo">Média de consumo:</label>
            <ErrorMessages errors={errors.media_consumo} />
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
