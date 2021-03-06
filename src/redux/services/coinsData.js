import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = 'https://coinranking1.p.rapidapi.com/';

const cryptoAPIHeaders = {
  'X-RapidAPI-Key': 'c29abdcf61msh8a83016bc2e84a1p136b72jsneefd4fa22fa6',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};

const createRequest = (url) => ({ url, headers: cryptoAPIHeaders });

export const coinsApi = createApi({
  reducerPath: 'coinsApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () => createRequest('/coins'),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`),
    }),
  }),
});

export const {
  useGetCoinsQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = coinsApi;
