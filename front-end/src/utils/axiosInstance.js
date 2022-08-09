const axios = require('axios');

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

module.exports = axiosInstance;
