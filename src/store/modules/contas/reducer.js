import { toast } from 'react-toastify';
import * as types from '../types';

const initialState = {
  conta: null,
  errors: null, // {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.EDITAR_CONTA_REQUEST: {
      return state;
    }

    case types.EDITAR_CONTA_SUCCESS: {
      const newState = { ...state };
      newState.conta = action.payload.novaConta;
      toast.success('Conta editada com sucesso');
      return newState;
    }

    case types.EDITAR_CONTA_FAILURE: {
      const newState = { ...state };
      newState.errors = action.payload.errors;
      toast.error('Erro ao editar conta');
      return state;
    }

    default: {
      return state;
    }
  }
}
