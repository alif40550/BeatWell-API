import axios from 'axios';
import { PORT } from '../src/utils/env';

const instance = axios.create({
  baseURL: `http://localhost:${PORT}/`,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      return Promise.resolve(error.response);
    }
    return Promise.reject(error);
  }
);

export default instance;
