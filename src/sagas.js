import { fork } from 'redux-saga/effects';

import StoreSagas from './store/sagas/store';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    fork(StoreSagas),
  ];
}
