import { fromJS } from 'immutable';

import { APP_NAME } from '../../utils/static-configuration';

// Actions
export const ADD_ITEM = `${APP_NAME}/BASKET/ADD_ITEM`;
export const ADD_ITEM_SUCCESS = `${APP_NAME}/BASKET/ADD_ITEM_SUCCESS`;
export const ADD_ITEM_ERROR = `${APP_NAME}/BASKET/ADD_ITEM_ERROR`;
export const REMOVE_ITEM = `${APP_NAME}/BASKET/REMOVE_ITEM`;

// Reducer
const initialState = fromJS({
  itemsList: {},
  basketLoading: false,
  basketError: null,
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case ADD_ITEM:
    return state
      .set('basketLoading', true)
      .set('basketError', null);
  case ADD_ITEM_SUCCESS:
    return state
      .setIn(['itemsList', action.data.item.get('id')], action.data.item)
      .set('basketLoading', false);
  case ADD_ITEM_ERROR:
    return state
      .set('basketError', action.error)
      .set('basketLoading', false);
  case REMOVE_ITEM:
    return state
      .deleteIn(['itemsList', action.data.id]);
  default:
    return state;
  }
}

// Action Creators
export function addBasketItem(data) {
  return {
    type: ADD_ITEM,
    data
  };
}

export function deleteBasketItem(data) {
  return {
    type: REMOVE_ITEM,
    data
  };
}
