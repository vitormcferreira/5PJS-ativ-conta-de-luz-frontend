import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';

const requisicao = (/* parâmetros da função */) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

function* editarContaRequest() {
  try {
    yield call(requisicao /* , argumentos da função */);
    yield put(actions.editarContaSuccess());
  } catch (error) {
    yield put(actions.editarContaFailure());
  }
}

export default all([
  takeLatest(types.EDITAR_CONTA_REQUEST, editarContaRequest),
]);
