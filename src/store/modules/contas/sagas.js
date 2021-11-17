import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* editarContaRequest({ payload }) {
  try {
    const obj = {
      data_leitura_relogio: payload.dataLeituraRelogio || undefined,
      numero_leitura: payload.numeroLeitura || undefined,
      kr: payload.kw || undefined,
      valor: payload.valor || undefined,
      data_pagamento: payload.dataPagamento || undefined,
      media_consumo: payload.mediaConsumo || undefined,
    };
    const response = yield call(axios.put, `contas/${payload.id}/`, obj);
    yield put(actions.editarContaSuccess({ novaConta: response.data }));
  } catch (err) {
    yield put(actions.editarContaFailure({ errors: err.response.data }));
  }
}

export default all([
  takeLatest(types.EDITAR_CONTA_REQUEST, editarContaRequest),
]);
