import { toast } from 'react-toastify';
import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.EDITAR_CONTA_REQUEST: {
      return state;
    }

    case types.EDITAR_CONTA_SUCCESS: {
      toast.success('Botão clicado com sucesso');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.EDITAR_CONTA_FAILURE: {
      toast.error('Botão falhou em ser clicado');
      return state;
    }

    default: {
      return state;
    }
  }
}
