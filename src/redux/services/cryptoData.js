import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = 'https://coingecko.p.rapidapi.com';

const cryptoAPIHeaders = {
  'X-RapidAPI-Key': 'c29abdcf61msh8a83016bc2e84a1p136b72jsneefd4fa22fa6',
  'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
};

const createRequest = (url) => ({ url, headers: cryptoAPIHeaders });

export const cryptoApi = createApi({
  reducerPath: 'coinRankingApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getCryptoExchange: builder.query({
      query: () => createRequest('/global'),
    }),
  }),
});

//   const options = {
//     method: 'GET',
//     url: 'https://coingecko.p.rapidapi.com/global',
//     headers: {
//       'X-RapidAPI-Key': 'c29abdcf61msh8a83016bc2e84a1p136b72jsneefd4fa22fa6',
//       'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
//     }
//   };

export const { useGetCryptoExchangeQuery } = cryptoApi;
