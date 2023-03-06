import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://192.168.1.4:4000/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export const coingeckoapi = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});
