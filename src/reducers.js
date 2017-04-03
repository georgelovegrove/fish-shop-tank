import { combineReducers } from 'redux';

import BasketReducer from './basket/modules/basket';
import StoreReducer from './store/modules/store';

const reducers = {
  basket: BasketReducer,
  store: StoreReducer,
};

const reducer = combineReducers(reducers);

export default reducer;
