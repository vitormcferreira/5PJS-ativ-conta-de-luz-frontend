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
  CustomDatePicker,
} from '../../styles/GlobalStyles';
import { CadastrarContaContainer, Form } from './styled';

import history from '../../services/history';
import axios from '../../services/axios';
import ErrorMessages from '../../components/ErrorMessages';
import { formataDinheiro } from '../../utils/functions';

export default function EditarConta(props) {
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

  const [conta, setConta] = React.useState({
    id: null,
    data_leitura_relogio: new Date(),
    numero_leitura: '',
    kw: '',
    valor: '',
    data_pagamento: new Date(),
    media_consumo: '',
  });

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
        data_leitura_relogio:
          dataLeituraRelogio && dataLeituraRelogio.toLocaleDateString('pt-BR'),
        numero_leitura: numeroLeitura || undefined,
        kw: kw || undefined,
        valor: valor || undefined,
        data_pagamento:
          dataPagamento && dataPagamento.toLocaleDateString('pt-BR'),
        media_consumo: mediaConsumo || undefined,
      });

      setConta(response.data);
      setErrors({});
      toast.success('Conta editada com sucesso');
    } catch (err) {
      setErrors(err.response.data);
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
              <CustomDatePicker
                name="old_data_leitura_relogio"
                id="old_data_leitura_relogio"
                value={conta.data_leitura_relogio}
                format="dd/MM/y"
                clearIcon={false}
                calendarIcon={false}
                disabled
              />

              <label htmlFor="data_leitura_relogio">
                Nova data de leitura do relógio:
              </label>
              <ErrorMessages errors={errors.data_leitura_relogio} />

              <CustomDatePicker
                name="data_leitura_relogio"
                id="data_leitura_relogio"
                value={dataLeituraRelogio}
                format="dd/MM/y"
                onChange={(date) => setDataLeituraRelogio(date)}
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
              <ErrorMessages errors={errors.numero_leitura} />
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
              <ErrorMessages errors={errors.kw} />
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
                type="text"
                name="old_valor"
                id="old_valor"
                disabled
                value={formataDinheiro(conta.valor)}
              />

              <label htmlFor="valor">Novo valor:</label>
              <ErrorMessages errors={errors.valor} />
              <Input
                type="number"
                name="valor"
                id="valor"
                onChange={(e) => setValor(e.target.value)}
              />
            </div>

            <div className="field-group">
              <label htmlFor="old_data_pagamento">Data do pagamento:</label>
              <CustomDatePicker
                name="old_data_pagamento"
                id="old_data_pagamento"
                value={conta.data_pagamento}
                format="dd/MM/y"
                clearIcon={false}
                calendarIcon={false}
                disabled
              />

              <label htmlFor="data_pagamento">Nova data do pagamento:</label>
              <ErrorMessages errors={errors.data_pagamento} />
              <CustomDatePicker
                name="data_pagamento"
                id="data_pagamento"
                value={dataPagamento}
                format="dd/MM/y"
                onChange={(date) => setDataPagamento(date)}
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
              <ErrorMessages errors={errors.media_consumo} />
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
              Salvar
            </DarkButton>
          </div>
        </Form>
      </CadastrarContaContainer>
    </Container>
  );
}
