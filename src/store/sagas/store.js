import { takeLatest } from 'redux-saga';
import { put, call, fork, select } from 'redux-saga/effects';
import { fromJS } from 'immutable';

import fishData from '../../../lib/fish';
import { LOAD_PRODUCTS, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_ERROR } from '../modules/store';

export function* loadProducts(action) {

  try {

    // This should come pre-formatted from a AJAX request instead of from the client side.
    const { fishList } = fishData;
    let productsList = {};
    for (let i = 1; i <= fishList.length; i++) {
      productsList[i] = { id: i, name: fishList[i-1] };
    }

    yield put({ type: LOAD_PRODUCTS_SUCCESS, productsList: fromJS(productsList) });

  } catch(error) {

    yield put({ type: LOAD_PRODUCTS_ERROR, error });
  }
}

export function* watchLoadProducts() {
  yield takeLatest(LOAD_PRODUCTS, loadProducts);
}

export default function* storeSagas() {
  yield [
    fork(watchLoadProducts),
  ];
}
