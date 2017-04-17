import { fork } from 'redux-saga/effects';

import StoreSagas from './store/sagas/store';
import BasketSagas from './basket/sagas/basket';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    fork(StoreSagas),
    fork(BasketSagas),
  ];
}
