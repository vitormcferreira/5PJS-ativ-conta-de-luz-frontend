/* eslint-disable no-unused-vars */
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
        <Title>Editar conta de luz</Title>
        <Form>
          <div className="fields">
            <div className="field-group">
              <label htmlFor="old_data_leitura_relogio">
                Data de leitura do relógio:
              </label>
              <Input
                type="date"
                name="old_data_leitura_relogio"
                id="old_data_leitura_relogio"
                disabled
              />

              <label htmlFor="data_leitura_relogio">
                Nova data de leitura do relógio:
              </label>
              <div>{exibeErrors(dataLeituraRelogioErrors)}</div>
              <Input
                type="date"
                name="data_leitura_relogio"
                id="data_leitura_relogio"
                onChange={(e) => setDataLeituraRelogio(e.target.value)}
              />
            </div>

            <div className="field-group">
              <label htmlFor="old_numero_leitura">Número da leitura:</label>
              <Input
                type="number"
                name="old_numero_leitura"
                id="old_numero_leitura"
                disabled
              />

              <label htmlFor="numero_leitura">Novo número da leitura:</label>
              <div>{exibeErrors(numeroLeituraErrors)}</div>
              <Input
                type="number"
                name="numero_leitura"
                id="numero_leitura"
                onChange={(e) => setNumeroLeitura(e.target.value)}
              />
            </div>

            <div className="field-group">
              <label htmlFor="old_kw">KW:</label>
              <Input type="number" name="old_kw" id="old_kw" disabled />

              <label htmlFor="kw">KW:</label>
              <div>{exibeErrors(kwErrors)}</div>
              <Input
                type="number"
                name="kw"
                id="kw"
                onChange={(e) => setKw(e.target.value)}
              />
            </div>

            <div className="field-group">
              <label htmlFor="old_valor">Valor:</label>
              <Input type="number" name="old_valor" id="old_valor" disabled />

              <label htmlFor="valor">Valor:</label>
              <div>{exibeErrors(valorErrors)}</div>
              <Input
                type="number"
                name="valor"
                id="valor"
                onChange={(e) => setValor(e.target.value)}
              />
            </div>

            <div className="field-group">
              <label htmlFor="old_data_pagamento">Data do pagamento:</label>
              <Input
                type="date"
                name="old_data_pagamento"
                id="old_data_pagamento"
                disabled
              />

              <label htmlFor="data_pagamento">Nova data do pagamento:</label>
              <div>{exibeErrors(dataPagamentoErrors)}</div>
              <Input
                type="date"
                name="data_pagamento"
                id="data_pagamento"
                onChange={(e) => setDataPagamento(e.target.value)}
              />
            </div>

            <div className="field-group">
              <label htmlFor="old_media_consumo">Média de consumo:</label>
              <Input
                type="number"
                name="old_media_consumo"
                id="old_media_consumo"
                disabled
              />
              <label htmlFor="media_consumo">Nova média de consumo:</label>
              <div>{exibeErrors(mediaConsumoErrors)}</div>
              <Input
                type="number"
                name="media_consumo"
                id="media_consumo"
                onChange={(e) => setMediaConsumo(e.target.value)}
              />
            </div>
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
