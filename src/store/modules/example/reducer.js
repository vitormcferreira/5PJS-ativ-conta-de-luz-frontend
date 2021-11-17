import { toast } from 'react-toastify';
import * as types from '../types';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_REQUEST: {
      return state;
    }

    case types.BOTAO_CLICADO_SUCCESS: {
      toast.success('Botão clicado com sucesso');
      const newState = { ...state };
      // edita estado
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      toast.error('Botão falhou em ser clicado');
      return state;
    }

    default: {
      return state;
    }
  }
}
