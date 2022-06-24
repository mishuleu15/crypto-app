import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from './services/cryptoData';

import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});
