import axios from 'axios';
const token = sessionStorage.getItem('token')

export const instance = axios.create({
  baseURL: 'http://192.168.1.11:4000/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export const instanceAuth = axios.create({
  baseURL: 'http://192.168.1.11:4000/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar', Authorization: `Bearer ${token}` },
});

export const coingeckoapi = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export const newsInstance = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data/v2/',
  timeout: 1000,
})
