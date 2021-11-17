/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { toast } from 'react-toastify';
import _ from 'lodash';
import {
  Container,
  Input,
  Title,
  LightButton,
  DarkButton,
} from '../../styles/GlobalStyles';
import { CadastrarContaContainer, Form } from './styled';

import history from '../../services/history';
import axios from '../../services/axios';
import ErrorMessages from '../../components/ErrorMessages';

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

  const [conta, setConta] = React.useState({
    id: null,
    data_leitura_relogio: '',
    numero_leitura: '',
    kw: '',
    valor: '',
    data_pagamento: '',
    media_consumo: '',
  });

  const salvaErrors = (errors) => {
    setDataLeituraRelogioErrors(_.get(errors, 'data_leitura_relogio', []));
    setNumeroLeituraErrors(_.get(errors, 'numero_leitura', []));
    setKwErrors(_.get(errors, 'kw', []));
    setValorErrors(_.get(errors, 'valor', []));
    setDataPagamentoErrors(_.get(errors, 'data_pagamento', []));
    setMediaConsumoErrors(_.get(errors, 'media_consumo', []));
  };

  React.useEffect(() => {
    async function getData() {
      const id = _.get(props, 'match.params.id', null);

      if (!id) {
        toast.error('Selecione uma conta');
        history.push('/');
        return;
      }

      const c = await axios.get(`contas/${id}`);
      setConta(c.data);
    }
    getData();
  }, [props]);

  const handleCancelar = () => {
    const prevPath = _.get(props, 'location.state.prevPath', '/');
    history.push(prevPath);
  };

  const handleEditar = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(`contas/${conta.id}/`, {
        data_leitura_relogio: dataLeituraRelogio || undefined,
        numero_leitura: numeroLeitura || undefined,
        kw: kw || undefined,
        valor: valor || undefined,
        data_pagamento: dataPagamento || undefined,
        media_consumo: mediaConsumo || undefined,
      });

      setConta(response.data);
      toast.success('Conta editada com sucesso');
    } catch (err) {
      toast.error('Erro ao salvar');
      salvaErrors(err.response.data);
    }
  };

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
                value={conta.data_leitura_relogio}
              />

              <label htmlFor="data_leitura_relogio">
                Nova data de leitura do relógio:
              </label>
              <ErrorMessages errors={dataLeituraRelogioErrors} />
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
                value={conta.numero_leitura}
              />

              <label htmlFor="numero_leitura">Novo número da leitura:</label>
              <ErrorMessages errors={numeroLeituraErrors} />
              <Input
                type="number"
                name="numero_leitura"
                id="numero_leitura"
                onChange={(e) => setNumeroLeitura(e.target.value)}
              />
            </div>

            <div className="field-group">
              <label htmlFor="old_kw">KW:</label>
              <Input
                type="number"
                name="old_kw"
                id="old_kw"
                disabled
                value={conta.kw}
              />

              <label htmlFor="kw">Novo KW:</label>
              <ErrorMessages errors={kwErrors} />
              <Input
                type="number"
                name="kw"
                id="kw"
                onChange={(e) => setKw(e.target.value)}
              />
            </div>

            <div className="field-group">
              <label htmlFor="old_valor">Valor:</label>
              <Input
                type="number"
                name="old_valor"
                id="old_valor"
                disabled
                value={conta.valor}
              />

              <label htmlFor="valor">Novo valor:</label>
              <ErrorMessages errors={valorErrors} />
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
                value={conta.data_pagamento}
              />

              <label htmlFor="data_pagamento">Nova data do pagamento:</label>
              <ErrorMessages errors={dataPagamentoErrors} />
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
                value={conta.media_consumo}
              />
              <label htmlFor="media_consumo">Nova média de consumo:</label>
              <ErrorMessages errors={mediaConsumoErrors} />
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
            <DarkButton type="submit" onClick={handleEditar}>
              Cadastrar
            </DarkButton>
          </div>
        </Form>
      </CadastrarContaContainer>
    </Container>
  );
}
