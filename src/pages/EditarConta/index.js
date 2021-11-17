/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Input,
  Title,
  LightButton,
  DarkButton,
} from '../../styles/GlobalStyles';
import { CadastrarContaContainer, Form } from './styled';

import * as contaActions from '../../store/modules/contas/actions';
import history from '../../services/history';
import axios from '../../services/axios';
import ErrorMessages from '../../components/ErrorMessages';

export default function EditarConta(props) {
  const errors = useSelector((state) => state.contasReducer.errors);

  const dispatch = useDispatch();
  const [dataLeituraRelogio, setDataLeituraRelogio] = React.useState('');
  const [numeroLeitura, setNumeroLeitura] = React.useState('');
  const [kw, setKw] = React.useState('');
  const [valor, setValor] = React.useState('');
  const [dataPagamento, setDataPagamento] = React.useState('');
  const [mediaConsumo, setMediaConsumo] = React.useState('');

  const [conta, setConta] = React.useState({
    id: null,
    data_leitura_relogio: '',
    numero_leitura: '',
    kw: '',
    valor: '',
    data_pagamento: '',
    media_consumo: '',
  });

  React.useEffect(() => {
    async function getData() {
      const id = get(props, 'match.params.id', null);

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
    const prevPath = get(props, 'location.state.prevPath', '/');
    history.push(prevPath);
  };

  const handleEditar = async (e) => {
    e.preventDefault();

    dispatch(
      contaActions.editarContaRequest({
        id: conta.id,
        dataLeituraRelogio,
        numeroLeitura,
        kw,
        valor,
        dataPagamento,
        mediaConsumo,
      })
    );
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
              <ErrorMessages errors={['teste']} />
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
              <ErrorMessages />
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
              <ErrorMessages />
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
              <ErrorMessages />
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
              <ErrorMessages />
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
              <ErrorMessages />
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
