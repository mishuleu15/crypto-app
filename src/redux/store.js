import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from './services/cryptoData';
import { coinsApi } from './services/coinsData';

import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [coinsApi.reducerPath]: coinsApi.reducer,
  },
});
