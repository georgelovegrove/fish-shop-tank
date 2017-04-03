import { fromJS } from 'immutable';

import { APP_NAME } from '../../utils/static-configuration';

// Actions
export const ADD_ITEM = `${APP_NAME}/BASKET/ADD_ITEM`;
export const REMOVE_ITEM = `${APP_NAME}/BASKET/REMOVE_ITEM`;

// Reducer
const initialState = fromJS({
  itemsList: {},
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case ADD_ITEM:
    return state
      .setIn(['itemsList', action.data.item.get('id')], action.data.item);
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
