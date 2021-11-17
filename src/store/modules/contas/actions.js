import * as types from '../types';

export function editarContaRequest(payload) {
  return {
    type: types.EDITAR_CONTA_REQUEST,
    payload,
  };
}

export function editarContaSuccess(payload) {
  return {
    type: types.EDITAR_CONTA_SUCCESS,
    payload,
  };
}

export function editarContaFailure(payload) {
  return {
    type: types.EDITAR_CONTA_FAILURE,
    payload,
  };
}
