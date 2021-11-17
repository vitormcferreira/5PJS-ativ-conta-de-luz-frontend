import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      // nome da aplicação
      key: 'REACT-BASE',
      storage,
      whitelist: ['example'],
    },
    reducers
  );
  return persistedReducers;
};
