import axios from 'axios';

const questionDb = axios.create({
  baseURL: 'http://localhost:3002/api',
});

export default questionDb;
