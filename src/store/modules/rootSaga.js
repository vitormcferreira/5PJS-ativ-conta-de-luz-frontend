import { all } from 'redux-saga/effects';

import contas from './contas/sagas';

export default function* rootSaga() {
  return yield all([contas /* , outros sagas */]);
}
