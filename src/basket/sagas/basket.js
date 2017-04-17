import { takeLatest } from 'redux-saga';
import { put, call, fork, select } from 'redux-saga/effects';
import { fromJS } from 'immutable';

import { ADD_ITEM, ADD_ITEM_SUCCESS, ADD_ITEM_ERROR, SET_BASKET_VALID } from '../modules/basket';
import { checkBasket } from '../../utils/fishshop-service';
import { getItemsList } from '../modules/basket-selectors';

export function* addBasketItem(action) {

  try {

    const { data } = action;
    const basketItemsList = yield select(getItemsList);
    const productName = data.item.get('name');

    const itemsList = [];
    itemsList.push(productName);
    basketItemsList.forEach(item => itemsList.push(item.get('name')));

    const isBasketValid = yield call(checkBasket, itemsList);

    if (isBasketValid) {
      yield put({ type: ADD_ITEM_SUCCESS, data });
    } else {
      yield put({ type: ADD_ITEM_ERROR, error: `${productName} cannot be added to the tank, it would eat one of the other fish!` })
    }

  } catch(error) {
    yield put({ type: ADD_ITEM_ERROR, error: error.message });
  }
}

export function* watchLoadProducts() {
  yield takeLatest(ADD_ITEM, addBasketItem);
}

export default function* storeSagas() {
  yield [
    fork(watchLoadProducts),
  ];
}
