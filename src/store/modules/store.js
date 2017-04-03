import { fromJS } from 'immutable';

import { APP_NAME } from '../../utils/static-configuration';

// Actions
export const LOAD_PRODUCTS = `${APP_NAME}/STORE/LOAD_PRODUCTS`;
export const LOAD_PRODUCTS_SUCCESS = `${APP_NAME}/STORE/LOAD_PRODUCTS_SUCCESS`;
export const LOAD_PRODUCTS_ERROR = `${APP_NAME}/STORE/LOAD_PRODUCTS_ERROR`;

// Reducer
const initialState = fromJS({
  productsList: {},
  loading: false,
  error: null,
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case LOAD_PRODUCTS:
    return state
      .set('productsList', fromJS({}))
      .set('loading', true)
      .set('error', null);
  case LOAD_PRODUCTS_SUCCESS:
    return state
      .set('productsList', action.productsList)
      .set('loading', false);
  case LOAD_PRODUCTS_ERROR:
    return state
      .set('error', action.error)
      .set('loading', false);
  default:
    return state;
  }
}

// Action Creators
export function loadProducts() {
  return {
    type: LOAD_PRODUCTS,
  };
}
