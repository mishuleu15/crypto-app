import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from './services/cryptoData';
import { coinsApi } from './services/coinsData';
import { cryptoNewsApi } from './services/cryptoNews';

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [coinsApi.reducerPath]: coinsApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
