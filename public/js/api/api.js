const { default: axios } = require("axios");

const produto = axios.get('https://test-api-production-1830.up.railway.app/products/:id');
const produtos = axios.get('https://test-api-production-1830.up.railway.app/products');
const tops = axios.get('https://test-api-production-1830.up.railway.app/products/tops');
const calcas = axios.get('https://test-api-production-1830.up.railway.app/products/calcas');
const shorts = axios.get('https://test-api-production-1830.up.railway.app/products/shorts');



