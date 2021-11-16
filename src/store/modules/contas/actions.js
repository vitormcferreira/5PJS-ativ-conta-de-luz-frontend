import * as types from '../types';

export function editarContaRequest() {
  return {
    type: types.EDITAR_CONTA_REQUEST,
  };
}

export function editarContaSuccess() {
  return {
    type: types.EDITAR_CONTA_SUCCESS,
  };
}

export function editarContaFailure() {
  return {
    type: types.EDITAR_CONTA_FAILURE,
  };
}
