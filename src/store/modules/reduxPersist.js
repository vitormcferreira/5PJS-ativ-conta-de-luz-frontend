import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// eslint-disable-next-line no-unused-vars
export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      // nome da aplicação
      key: 'REACT-BASE',
      storage,
      whitelist: ['exampleReducer'],
    },
    reducers
  );
  return persistedReducers;
};
